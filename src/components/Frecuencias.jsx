import React, { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const Frecuencias = ({ performanceData }) => {
  const { isDarkMode } = useTheme();

  const valores = useMemo(
    () => performanceData.map((d) => d.rendimiento).sort((a, b) => a - b),
    [performanceData]
  );

  // Clases para tabla y histograma
  const min = Math.floor(Math.min(...valores));
  const max = Math.ceil(Math.max(...valores));
  const k = Math.round(1 + 3.322 * Math.log10(valores.length)); // Sturges
  const rango = max - min;
  const amplitud = Math.ceil(rango / k);

  const clases = [];
  for (let i = 0; i < k; i++) {
    const li = min + i * amplitud;
    const ls = li + amplitud;
    const f = valores.filter((v) => v >= li && v < ls).length;
    clases.push({
      intervalo: `${li} - ${ls}`,
      marca: (li + ls) / 2,
      f,
    });
  }

  // Frecuencias acumuladas y relativas
  let acumulada = 0;
  clases.forEach((c) => {
    acumulada += c.f;
    c.F = acumulada;
    c.fr = (c.f / valores.length) * 100;
  });

  // Cuartiles y percentiles
  const getPercentile = (p) => {
    const idx = (p / 100) * (valores.length + 1);
    const i = Math.floor(idx);
    const frac = idx - i;
    if (i <= 0) return valores[0];
    if (i >= valores.length) return valores[valores.length - 1];
    return valores[i - 1] + frac * (valores[i] - valores[i - 1]);
  };

  const Q1 = getPercentile(25);
  const Q2 = getPercentile(50);
  const Q3 = getPercentile(75);

  return (
    <section
      id="frecuencias"
      className="py-20 px-6"
      style={{
        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
        color: isDarkMode ? "#f3f4f6" : "#111827",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* TABLA DE FRECUENCIAS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Tabla de Frecuencias</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr
                style={{
                  backgroundColor: isDarkMode ? "#374151" : "#e5e7eb",
                }}
              >
                <th className="border p-2">Intervalo</th>
                <th className="border p-2">Marca</th>
                <th className="border p-2">f</th>
                <th className="border p-2">F</th>
                <th className="border p-2">fr (%)</th>
              </tr>
            </thead>
            <tbody>
              {clases.map((c, i) => (
                <tr key={i}>
                  <td className="border p-2 text-center">{c.intervalo}</td>
                  <td className="border p-2 text-center">
                    {c.marca.toFixed(1)}
                  </td>
                  <td className="border p-2 text-center">{c.f}</td>
                  <td className="border p-2 text-center">{c.F}</td>
                  <td className="border p-2 text-center">{c.fr.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HISTOGRAMA CON CUARTILES */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Histograma de Rendimiento</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={clases}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? "#374151" : "#e5e7eb"}
              />
              <XAxis
                dataKey="intervalo"
                tick={{ fill: isDarkMode ? "#f3f4f6" : "#111827" }}
              />
              <YAxis tick={{ fill: isDarkMode ? "#f3f4f6" : "#111827" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#1f2937" : "#fff",
                  border: "none",
                  color: isDarkMode ? "#f3f4f6" : "#111827",
                }}
              />
              <Bar dataKey="f" fill={isDarkMode ? "#a78bfa" : "#3b82f6"} />
              <ReferenceLine x={Q1.toFixed(1)} stroke="green" label="Q1" />
              <ReferenceLine x={Q2.toFixed(1)} stroke="yellow" label="Q2" />
              <ReferenceLine x={Q3.toFixed(1)} stroke="red" label="Q3" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-1 text-sm">
            <p>
              Q₁ (25%) = <strong>{Q1.toFixed(2)}</strong>
            </p>
            <p>
              Q₂ (Mediana, 50%) = <strong>{Q2.toFixed(2)}</strong>
            </p>
            <p>
              Q₃ (75%) = <strong>{Q3.toFixed(2)}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frecuencias;
