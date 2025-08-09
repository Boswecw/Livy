const API_BASE = import.meta.env.VITE_API_BASE as string;

export async function apiFetch(
  path: string,
  options?: RequestInit
): Promise<any> {
  try {
    const response = await fetch(`${API_BASE}${path}`, options);
    if (!response.ok) {
      const message = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText}\n${message}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchTours() {
  return apiFetch('/tours');
}

export async function fetchTour(slug: string) {
  return apiFetch(`/tours/${slug}`);
}

export async function askQuestion(
  tourId: string,
  stopId: string,
  question: string
) {
  return apiFetch('/qa', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tourId, stopId, question })
  });
}

