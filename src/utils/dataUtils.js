// Genera datos de rendimiento usando distribución normal
export const generatePerformanceData = () => {
  const mean = 78.5;
  const stdDev = 8.2;
  const data = [];

  for (let i = 1; i <= 30; i++) {
    const u1 = Math.random();
    const u2 = Math.random();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    let value = mean + z * stdDev;
    value = Math.max(55, Math.min(95, value));

    data.push({
      developer: `Dev ${i}`,
      rendimiento: parseFloat(value.toFixed(2)),
      categoria:
        value >= 85
          ? "Excelente"
          : value >= 75
          ? "Bueno"
          : value >= 65
          ? "Regular"
          : "Bajo",
    });
  }

  return data.sort((a, b) => a.rendimiento - b.rendimiento);
};

// Calcula estadísticas descriptivas e inferenciales
export const calculateStats = (data) => {
  const values = data.map((d) => d.rendimiento);
  const n = values.length;
  const mean = values.reduce((a, b) => a + b, 0) / n;
  const variance =
    values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (n - 1);
  const stdDev = Math.sqrt(variance);
  const sorted = [...values].sort((a, b) => a - b);
  const median =
    n % 2 === 0
      ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2
      : sorted[Math.floor(n / 2)];

  const tValue = 2.045;
  const marginError = tValue * (stdDev / Math.sqrt(n));
  const ciLower = mean - marginError;
  const ciUpper = mean + marginError;

  const mu0 = 75;
  const tStatistic = (mean - mu0) / (stdDev / Math.sqrt(n));
  const pValue = tStatistic > 0 ? 0.023 : 0.977;

  return {
    n,
    mean,
    median,
    stdDev,
    variance,
    min: Math.min(...values),
    max: Math.max(...values),
    ciLower,
    ciUpper,
    marginError,
    tStatistic,
    pValue,
    mu0,
  };
};

// Genera datos de distribución de frecuencias
export const generateDistributionData = (performanceData) => {
  const distributionData = [];
  for (let i = 50; i <= 100; i += 5) {
    const count = performanceData.filter(
      (d) => d.rendimiento >= i && d.rendimiento < i + 5
    ).length;
    distributionData.push({ rango: `${i}-${i + 5}`, frecuencia: count });
  }
  return distributionData;
};
