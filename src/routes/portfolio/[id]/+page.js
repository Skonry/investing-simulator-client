export async function load({ id }) {
  const responsePortfolio = await fetch(`http://127.0.0.1:8080/api/portfolio/${id}`);
  const dataPortfolio = await responsePortfolio.json();

  const responseInstruments = await fetch(`http://127.0.0.1:8080/api/instruments`);
  const dataInstruments = await responseInstruments.json();

  return {
    portfolio: dataPortfolio,
    instruments: dataInstruments
  };
}
