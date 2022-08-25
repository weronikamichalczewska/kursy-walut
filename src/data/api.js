export const HistoricalChart = (id, startDate, endDate) =>
  `https://api.nbp.pl/api/exchangerates/rates/a/${id}/${startDate}/${endDate}/?format=json`;
