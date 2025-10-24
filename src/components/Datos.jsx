import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../context/ThemeContext";

const Datos = ({ performanceData, distributionData }) => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="datos"
      className="py-20 px-4"
      style={{ backgroundColor: isDarkMode ? "#1e293b" : "#fff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
          >
            Datos Recolectados
          </h2>
          <p style={{ color: isDarkMode ? "#9ca3af" : "#6b7280" }}>
            Mediciones de rendimiento (%) para cada desarrollador
          </p>
        </div>

        <div
          className="p-8 rounded-2xl mb-8"
          style={{
            backgroundColor: isDarkMode ? "rgba(51, 51, 51, 0.4)" : "#f9fafb",
            border: `1px solid ${
              isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
            }`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {performanceData.map((dev, i) => (
              <div
                key={i}
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(26, 26, 26, 0.5)"
                    : "#fff",
                  border: `1px solid ${
                    isDarkMode ? "rgba(139, 92, 246, 0.1)" : "#e5e7eb"
                  }`,
                }}
              >
                <div
                  className="text-sm mb-1"
                  style={{ color: isDarkMode ? "#9ca3af" : "#6b7280" }}
                >
                  {dev.developer}
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
                >
                  {dev.rendimiento}%
                </div>
                <div
                  className="text-xs mt-1"
                  style={{
                    color:
                      dev.categoria === "Excelente"
                        ? "#10b981"
                        : dev.categoria === "Bueno"
                        ? "#3b82f6"
                        : dev.categoria === "Regular"
                        ? "#eab308"
                        : "#ef4444",
                  }}
                >
                  {dev.categoria}
                </div>
              </div>
            ))}
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
            Distribución de Frecuencias
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={distributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="rango" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #8b5cf6",
                }}
              />
              <Bar dataKey="frecuencia" fill="#a855f7" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Datos;
