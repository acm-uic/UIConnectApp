// Minimal API service placeholder

export async function fetchMatches() {
  // Replace with real API call
  return Promise.resolve([{ id: 's1', name: 'Sophia', age: 21 }]);
}

export async function fetchProfile(id: string) {
  return Promise.resolve({ id, name: 'Sophia', age: 21 });
}
