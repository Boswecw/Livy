// static/sw.js - Service Worker for Livy PWA
const VERSION = '1.0.0';
const STATIC_CACHE = `livy-static-v${VERSION}`;
const DYNAMIC_CACHE = `livy-dynamic-v${VERSION}`;

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/about',
  '/map',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/favicon.ico',
  '/icons/apple-touch-icon.png'
];

// Files that should be cached dynamically
const DYNAMIC_FILES = [
  '/tours/',
  '/api/',
  '/images/',
  '/audio/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[ServiceWorker] Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .catch((error) => {
        console.error('[ServiceWorker] Cache installation failed:', error);
      })
  );
  
  // Take control immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[ServiceWorker] Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Take control of all clients
  return self.clients.claim();
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip cross-origin requests
  if (requestUrl.origin !== location.origin) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('[ServiceWorker] Serving from cache:', event.request.url);
          return cachedResponse;
        }
        
        // Not in cache, fetch from network
        return fetch(event.request)
          .then((networkResponse) => {
            // Don't cache non-successful responses
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Determine which cache to use
            const shouldCacheDynamically = DYNAMIC_FILES.some(pattern => 
              event.request.url.includes(pattern)
            );
            
            if (shouldCacheDynamically) {
              const responseToCache = networkResponse.clone();
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  console.log('[ServiceWorker] Caching dynamic resource:', event.request.url);
                  cache.put(event.request, responseToCache);
                });
            }
            
            return networkResponse;
          })
          .catch((error) => {
            console.error('[ServiceWorker] Fetch failed:', error);
            
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }
            
            throw error;
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[ServiceWorker] Background sync:', event.tag);
  
  if (event.tag === 'tour-progress') {
    event.waitUntil(syncTourProgress());
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  console.log('[ServiceWorker] Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'New historical content available!',
    icon: '/icons/icon-192.png',
    badge: '/icons/badge-72x72.png',
    tag: 'livy-notification',
    data: {
      url: '/'
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore Now',
        icon: '/icons/action-explore.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Livy: Trail of History', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('[ServiceWorker] Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Helper function for syncing tour progress
async function syncTourProgress() {
  try {
    // Get stored progress from IndexedDB or localStorage
    const storedProgress = await getStoredTourProgress();
    
    if (storedProgress && storedProgress.length > 0) {
      // Send progress to server
      const response = await fetch('/api/sync-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(storedProgress)
      });
      
      if (response.ok) {
        // Clear stored progress after successful sync
        await clearStoredTourProgress();
        console.log('[ServiceWorker] Tour progress synced successfully');
      }
    }
  } catch (error) {
    console.error('[ServiceWorker] Failed to sync tour progress:', error);
    throw error;
  }
}

// Mock functions - replace with actual implementations
async function getStoredTourProgress() {
  // Implement IndexedDB or localStorage retrieval
  return [];
}

async function clearStoredTourProgress() {
  // Implement cleanup after successful sync
}

// Version management
console.log(`[ServiceWorker] Version ${VERSION} loaded`);