import React from "react";
import { useTheme } from "../context/ThemeContext";

const Inferencial = ({ stats }) => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="inferencial"
      className="py-20 px-4"
      style={{ backgroundColor: isDarkMode ? "#1e293b" : "#fff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
          >
            Estadística Inferencial
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: isDarkMode ? "rgba(51, 51, 51, 0.4)" : "#f9fafb",
              border: `1px solid ${
                isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
              }`,
            }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
            >
              Intervalo de Confianza 95%
            </h3>
            <div className="space-y-4">
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(26, 26, 26, 0.5)"
                    : "#fff",
                }}
              >
                <div className="text-sm mb-1" style={{ color: "#9ca3af" }}>
                  Límite Inferior
                </div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#a78bfa" }}
                >
                  {stats.ciLower.toFixed(2)}%
                </div>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(26, 26, 26, 0.5)"
                    : "#fff",
                }}
              >
                <div className="text-sm mb-1" style={{ color: "#9ca3af" }}>
                  Media Muestral
                </div>
                <div className="text-3xl font-bold" style={{ color: "#fff" }}>
                  {stats.mean.toFixed(2)}%
                </div>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(26, 26, 26, 0.5)"
                    : "#fff",
                }}
              >
                <div className="text-sm mb-1" style={{ color: "#9ca3af" }}>
                  Límite Superior
                </div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#a78bfa" }}
                >
                  {stats.ciUpper.toFixed(2)}%
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: isDarkMode ? "rgba(51, 51, 51, 0.4)" : "#f9fafb",
              border: `1px solid ${
                isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
              }`,
            }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
            >
              Prueba de Hipótesis
            </h3>
            <div className="space-y-4">
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(26, 26, 26, 0.5)"
                    : "#fff",
                }}
              >
                <div className="text-sm" style={{ color: "#9ca3af" }}>
                  H₀: μ = 75%
                </div>
                <div className="text-sm" style={{ color: "#9ca3af" }}>
                  H₁: μ &gt; 75%
                </div>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(26, 26, 26, 0.5)"
                    : "#fff",
                }}
              >
                <div className="text-sm mb-1" style={{ color: "#9ca3af" }}>
                  Estadístico t
                </div>
                <div className="text-3xl font-bold" style={{ color: "#fff" }}>
                  {stats.tStatistic.toFixed(4)}
                </div>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(26, 26, 26, 0.5)"
                    : "#fff",
                }}
              >
                <div className="text-sm mb-1" style={{ color: "#9ca3af" }}>
                  Valor p
                </div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#10b981" }}
                >
                  {stats.pValue.toFixed(4)}
                </div>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <div
                  style={{ color: "#10b981" }}
                  className="font-semibold mb-2"
                >
                  ✓ Resultado
                </div>
                <div className="text-sm" style={{ color: "#d1d5db" }}>
                  Rechazamos H₀. El rendimiento supera significativamente el
                  75%.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inferencial;
