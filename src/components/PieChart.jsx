import React, { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { useTheme } from "../context/ThemeContext";

const PieChartComponent = ({ performanceData }) => {
  const { isDarkMode } = useTheme();

  const categoriaData = useMemo(() => {
    const conteo = {
      Excelente: 0,
      Bueno: 0,
      Regular: 0,
      Bajo: 0,
    };

    performanceData.forEach((d) => {
      conteo[d.categoria]++;
    });

    return [
      { name: "Excelente (≥85%)", value: conteo.Excelente, color: "#10b981" },
      { name: "Bueno (75-84%)", value: conteo.Bueno, color: "#3b82f6" },
      { name: "Regular (65-74%)", value: conteo.Regular, color: "#eab308" },
      { name: "Bajo (<65%)", value: conteo.Bajo, color: "#ef4444" },
    ].filter((item) => item.value > 0);
  }, [performanceData]);

  const total = performanceData.length;

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="14"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section
      id="piechart"
      className="py-20 px-4"
      style={{ backgroundColor: isDarkMode ? "#1e293b" : "#fff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
          >
            Distribución por Categorías de Rendimiento
          </h2>
          <p
            className="text-lg"
            style={{ color: isDarkMode ? "#d1d5db" : "#6b7280" }}
          >
            Análisis de la composición del equipo según desempeño
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Gráfico Circular */}
          <div
            className="p-6 rounded-xl flex items-center justify-center"
            style={{
              backgroundColor: isDarkMode ? "rgba(51, 51, 51, 0.4)" : "#f9fafb",
              border: `1px solid ${
                isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
              }`,
            }}
          >
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={categoriaData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomLabel}
                  outerRadius={130}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoriaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? "#1f2937" : "#fff",
                    border: "none",
                    borderRadius: "8px",
                    color: isDarkMode ? "#f3f4f6" : "#111827",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  wrapperStyle={{
                    color: isDarkMode ? "#d1d5db" : "#4b5563",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Tabla de Resumen */}
          <div>
            <div
              className="p-6 rounded-xl mb-4"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(51, 51, 51, 0.4)"
                  : "#f9fafb",
                border: `1px solid ${
                  isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
                }`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
              >
                Resumen Estadístico
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr
                    style={{
                      backgroundColor: isDarkMode ? "#374151" : "#e5e7eb",
                    }}
                  >
                    <th
                      className="p-3 text-left"
                      style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}
                    >
                      Categoría
                    </th>
                    <th
                      className="p-3 text-center"
                      style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}
                    >
                      Cantidad
                    </th>
                    <th
                      className="p-3 text-center"
                      style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}
                    >
                      Porcentaje
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categoriaData.map((cat, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: isDarkMode
                          ? i % 2 === 0
                            ? "rgba(26, 26, 26, 0.5)"
                            : "rgba(51, 51, 51, 0.3)"
                          : i % 2 === 0
                          ? "#fff"
                          : "#f9fafb",
                      }}
                    >
                      <td className="p-3 flex items-center gap-2">
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: cat.color,
                          }}
                        />
                        <span
                          style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}
                        >
                          {cat.name}
                        </span>
                      </td>
                      <td
                        className="p-3 text-center font-bold"
                        style={{ color: cat.color }}
                      >
                        {cat.value}
                      </td>
                      <td
                        className="p-3 text-center font-bold"
                        style={{ color: cat.color }}
                      >
                        {((cat.value / total) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                  <tr
                    style={{
                      backgroundColor: isDarkMode ? "#374151" : "#e5e7eb",
                      borderTop: "2px solid",
                      borderColor: isDarkMode ? "#a78bfa" : "#3b82f6",
                    }}
                  >
                    <td
                      className="p-3 font-bold"
                      style={{ color: isDarkMode ? "#fff" : "#111827" }}
                    >
                      TOTAL
                    </td>
                    <td
                      className="p-3 text-center font-bold"
                      style={{ color: isDarkMode ? "#fff" : "#111827" }}
                    >
                      {total}
                    </td>
                    <td
                      className="p-3 text-center font-bold"
                      style={{ color: isDarkMode ? "#fff" : "#111827" }}
                    >
                      100%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Análisis */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(51, 51, 51, 0.4)"
                  : "#f9fafb",
                border: `1px solid ${
                  isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
                }`,
              }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
              >
                💡 Interpretación
              </h3>
              <div className="space-y-3">
                {categoriaData.map((cat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(26, 26, 26, 0.5)"
                        : "#fff",
                      borderLeft: `4px solid ${cat.color}`,
                    }}
                  >
                    <p
                      className="text-sm"
                      style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}
                    >
                      <strong style={{ color: cat.color }}>
                        {cat.name.split(" ")[0]}:
                      </strong>{" "}
                      {cat.value} desarrollador{cat.value !== 1 ? "es" : ""} (
                      {((cat.value / total) * 100).toFixed(1)}%) se encuentran
                      en esta categoría
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 p-4 rounded-lg"
                style={{
                  backgroundColor:
                    categoriaData[0]?.name.includes("Excelente") ||
                    categoriaData[0]?.name.includes("Bueno")
                      ? "rgba(16, 185, 129, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                  border: `1px solid ${
                    categoriaData[0]?.name.includes("Excelente") ||
                    categoriaData[0]?.name.includes("Bueno")
                      ? "rgba(16, 185, 129, 0.3)"
                      : "rgba(239, 68, 68, 0.3)"
                  }`,
                }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{
                    color:
                      categoriaData[0]?.name.includes("Excelente") ||
                      categoriaData[0]?.name.includes("Bueno")
                        ? "#10b981"
                        : "#ef4444",
                  }}
                >
                  {(() => {
                    const excelenteBueno = categoriaData
                      .filter(
                        (c) =>
                          c.name.includes("Excelente") ||
                          c.name.includes("Bueno")
                      )
                      .reduce((sum, c) => sum + c.value, 0);
                    const porcentaje = ((excelenteBueno / total) * 100).toFixed(
                      0
                    );

                    if (porcentaje >= 70) {
                      return `✓ Excelente: ${porcentaje}% del equipo tiene rendimiento superior al 75%`;
                    } else if (porcentaje >= 50) {
                      return `⚠ Aceptable: ${porcentaje}% del equipo cumple con el estándar mínimo`;
                    } else {
                      return `✗ Crítico: Solo ${porcentaje}% del equipo supera el 75% de rendimiento`;
                    }
                  })()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PieChartComponent;
