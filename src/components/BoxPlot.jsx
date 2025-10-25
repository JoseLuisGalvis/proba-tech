import React, { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

const BoxPlot = ({ performanceData }) => {
  const { isDarkMode } = useTheme();

  const valores = useMemo(
    () => performanceData.map((d) => d.rendimiento).sort((a, b) => a - b),
    [performanceData]
  );

  const getPercentile = (p) => {
    const idx = (p / 100) * (valores.length + 1);
    const i = Math.floor(idx);
    const frac = idx - i;
    if (i <= 0) return valores[0];
    if (i >= valores.length) return valores[valores.length - 1];
    return valores[i - 1] + frac * (valores[i] - valores[i - 1]);
  };

  const min = Math.min(...valores);
  const Q1 = getPercentile(25);
  const Q2 = getPercentile(50);
  const Q3 = getPercentile(75);
  const max = Math.max(...valores);
  const IQR = Q3 - Q1;

  // Detección de outliers
  const lowerFence = Q1 - 1.5 * IQR;
  const upperFence = Q3 + 1.5 * IQR;
  const outliers = valores.filter((v) => v < lowerFence || v > upperFence);

  // Para el SVG
  const scale = 500 / (max - min + 10);
  const offset = 50;
  const toX = (val) => offset + (val - min + 5) * scale;

  return (
    <section
      id="boxplot"
      className="py-20 px-4"
      style={{ backgroundColor: isDarkMode ? "#0f172a" : "#f8f9fa" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
          >
            Gráfico de Caja y Bigotes (Boxplot)
          </h2>
          <p
            className="text-lg"
            style={{ color: isDarkMode ? "#d1d5db" : "#6b7280" }}
          >
            Visualización de la distribución, dispersión y valores atípicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SVG del Boxplot */}
          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: isDarkMode ? "rgba(51, 51, 51, 0.4)" : "#fff",
              border: `1px solid ${
                isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
              }`,
            }}
          >
            <h3
              className="text-xl font-bold mb-6 text-center"
              style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
            >
              Diagrama de Caja
            </h3>
            <svg width="100%" height="300" viewBox="0 0 600 300">
              {/* Eje horizontal */}
              <line
                x1={toX(min)}
                y1="150"
                x2={toX(max)}
                y2="150"
                stroke={isDarkMode ? "#6b7280" : "#9ca3af"}
                strokeWidth="2"
              />

              {/* Bigote izquierdo (min a Q1) */}
              <line
                x1={toX(min)}
                y1="150"
                x2={toX(Q1)}
                y2="150"
                stroke={isDarkMode ? "#a78bfa" : "#3b82f6"}
                strokeWidth="2"
              />
              <line
                x1={toX(min)}
                y1="130"
                x2={toX(min)}
                y2="170"
                stroke={isDarkMode ? "#a78bfa" : "#3b82f6"}
                strokeWidth="2"
              />

              {/* Caja (Q1 a Q3) */}
              <rect
                x={toX(Q1)}
                y="100"
                width={toX(Q3) - toX(Q1)}
                height="100"
                fill={
                  isDarkMode
                    ? "rgba(167, 139, 250, 0.3)"
                    : "rgba(59, 130, 246, 0.3)"
                }
                stroke={isDarkMode ? "#a78bfa" : "#3b82f6"}
                strokeWidth="3"
              />

              {/* Mediana (Q2) */}
              <line
                x1={toX(Q2)}
                y1="100"
                x2={toX(Q2)}
                y2="200"
                stroke="#eab308"
                strokeWidth="4"
              />

              {/* Bigote derecho (Q3 a max) */}
              <line
                x1={toX(Q3)}
                y1="150"
                x2={toX(max)}
                y2="150"
                stroke={isDarkMode ? "#a78bfa" : "#3b82f6"}
                strokeWidth="2"
              />
              <line
                x1={toX(max)}
                y1="130"
                x2={toX(max)}
                y2="170"
                stroke={isDarkMode ? "#a78bfa" : "#3b82f6"}
                strokeWidth="2"
              />

              {/* Outliers */}
              {outliers.map((val, i) => (
                <circle
                  key={i}
                  cx={toX(val)}
                  cy="150"
                  r="5"
                  fill="#ef4444"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
              ))}

              {/* Etiquetas */}
              <text
                x={toX(min)}
                y="230"
                textAnchor="middle"
                fill={isDarkMode ? "#d1d5db" : "#4b5563"}
                fontSize="12"
              >
                Min: {min.toFixed(1)}
              </text>
              <text
                x={toX(Q1)}
                y="250"
                textAnchor="middle"
                fill={isDarkMode ? "#a78bfa" : "#3b82f6"}
                fontSize="12"
                fontWeight="bold"
              >
                Q1: {Q1.toFixed(1)}
              </text>
              <text
                x={toX(Q2)}
                y="270"
                textAnchor="middle"
                fill="#eab308"
                fontSize="12"
                fontWeight="bold"
              >
                Q2: {Q2.toFixed(1)}
              </text>
              <text
                x={toX(Q3)}
                y="250"
                textAnchor="middle"
                fill={isDarkMode ? "#a78bfa" : "#3b82f6"}
                fontSize="12"
                fontWeight="bold"
              >
                Q3: {Q3.toFixed(1)}
              </text>
              <text
                x={toX(max)}
                y="230"
                textAnchor="middle"
                fill={isDarkMode ? "#d1d5db" : "#4b5563"}
                fontSize="12"
              >
                Max: {max.toFixed(1)}
              </text>
            </svg>
          </div>

          {/* Interpretación */}
          <div>
            <div
              className="p-6 rounded-xl mb-4"
              style={{
                backgroundColor: isDarkMode ? "rgba(51, 51, 51, 0.4)" : "#fff",
                border: `1px solid ${
                  isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
                }`,
              }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
              >
                Estadísticos de los 5 Números
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Mínimo", value: min, color: "#6b7280" },
                  { label: "Q₁ (Primer Cuartil)", value: Q1, color: "#3b82f6" },
                  { label: "Q₂ (Mediana)", value: Q2, color: "#eab308" },
                  { label: "Q₃ (Tercer Cuartil)", value: Q3, color: "#3b82f6" },
                  { label: "Máximo", value: max, color: "#6b7280" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex justify-between p-3 rounded-lg"
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(26, 26, 26, 0.5)"
                        : "#f9fafb",
                    }}
                  >
                    <span style={{ color: isDarkMode ? "#d1d5db" : "#6b7280" }}>
                      {stat.label}:
                    </span>
                    <span className="font-bold" style={{ color: stat.color }}>
                      {stat.value.toFixed(2)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: isDarkMode ? "rgba(51, 51, 51, 0.4)" : "#fff",
                border: `1px solid ${
                  isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
                }`,
              }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
              >
                Interpretación
              </h3>
              <div className="space-y-3 text-sm">
                <p style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}>
                  <strong style={{ color: "#3b82f6" }}>
                    Rango Intercuartílico (IQR):
                  </strong>{" "}
                  {IQR.toFixed(2)}% - Contiene el 50% central de los datos
                </p>
                <p style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}>
                  <strong style={{ color: "#eab308" }}>Mediana:</strong> El 50%
                  de los desarrolladores tiene rendimiento{" "}
                  {Q2 > 75 ? "superior" : "inferior"} a {Q2.toFixed(2)}%
                </p>
                <p style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}>
                  <strong style={{ color: "#ef4444" }}>Outliers:</strong>{" "}
                  {outliers.length > 0
                    ? `${outliers.length} valor(es) atípico(s) detectado(s)`
                    : "No se detectaron valores atípicos"}
                </p>
                <p style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}>
                  <strong style={{ color: "#10b981" }}>Simetría:</strong>{" "}
                  {Math.abs(Q2 - Q1 - (Q3 - Q2)) < 2
                    ? "Distribución simétrica"
                    : Q2 - Q1 > Q3 - Q2
                    ? "Sesgo hacia la izquierda"
                    : "Sesgo hacia la derecha"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxPlot;
