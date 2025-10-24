import React from "react";
import {
  BarChart3,
  Target,
  TrendingUp,
  AlertCircle,
  Award,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Descriptiva = ({ stats }) => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="descriptiva"
      className="py-20 px-4"
      style={{ backgroundColor: isDarkMode ? "#0f172a" : "#f8f9fa" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
          >
            Estadística Descriptiva
          </h2>
          <p style={{ color: isDarkMode ? "#9ca3af" : "#6b7280" }}>
            Medidas de tendencia central y dispersión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              label: "Media",
              value: stats.mean.toFixed(2),
              desc: "Promedio",
              icon: BarChart3,
            },
            {
              label: "Mediana",
              value: stats.median.toFixed(2),
              desc: "Valor central",
              icon: Target,
            },
            {
              label: "Desviación Estándar",
              value: stats.stdDev.toFixed(2),
              desc: "Dispersión",
              icon: TrendingUp,
            },
            {
              label: "Varianza",
              value: stats.variance.toFixed(2),
              desc: "Variabilidad",
              icon: BarChart3,
            },
            {
              label: "Mínimo",
              value: stats.min.toFixed(2),
              desc: "Menor valor",
              icon: AlertCircle,
            },
            {
              label: "Máximo",
              value: stats.max.toFixed(2),
              desc: "Mayor valor",
              icon: Award,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl"
              style={{
                backgroundColor: isDarkMode ? "rgba(51, 51, 51, 0.4)" : "#fff",
                border: `1px solid ${
                  isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
                }`,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span style={{ color: isDarkMode ? "#9ca3af" : "#6b7280" }}>
                  {stat.label}
                </span>
                <stat.icon style={{ color: "#a78bfa" }} size={24} />
              </div>
              <div
                className="text-4xl font-bold mb-1"
                style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
              >
                {stat.value}%
              </div>
              <div className="text-sm" style={{ color: "#6b7280" }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Descriptiva;
