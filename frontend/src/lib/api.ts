const API_BASE = 'http://localhost:8000/api';

export async function fetchTours() {
  const response = await fetch(`${API_BASE}/tours`);
  return response.json();
}

export async function fetchTour(slug: string) {
  const response = await fetch(`${API_BASE}/tours/${slug}`);
  return response.json();
}

export async function askQuestion(tourId: string, stopId: string, question: string) {
  const response = await fetch(`${API_BASE}/qa`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tourId, stopId, question })
  });
  return response.json();
}