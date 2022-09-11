export async function load() {
  const response = await fetch('http://127.0.0.1:8080/api/instrument');

  const data = await response.json();

  return {
    instruments: data
  };
}
