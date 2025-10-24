import React from "react";
import { Users, Target, Award } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const HeroStats = ({ stats }) => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="herostats"
      className="py-20 px-4"
      style={{
        background: isDarkMode
          ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
          : "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div
          className="inline-block mb-6 px-4 py-2 rounded-full"
          style={{
            backgroundColor: isDarkMode
              ? "rgba(139, 92, 246, 0.2)"
              : "rgba(255, 255, 255, 0.3)",
            border: `1px solid ${
              isDarkMode
                ? "rgba(139, 92, 246, 0.3)"
                : "rgba(255, 255, 255, 0.5)"
            }`,
          }}
        >
          <span
            style={{ color: isDarkMode ? "#a78bfa" : "#fff" }}
            className="text-sm font-semibold"
          >
            Estudio de Caso • Octubre 2025
          </span>
        </div>

        <h2 className="text-5xl font-bold mb-6" style={{ color: "#fff" }}>
          Análisis Estadístico de Rendimiento
        </h2>

        <p
          className="text-xl mb-8 max-w-3xl mx-auto"
          style={{ color: "#d1d5db" }}
        >
          Proba Software evalúa el rendimiento de carga de la Landing Page para{" "}
          <strong>Pirulito and Cuchiflito CO</strong>. 30 desarrolladores, un
          objetivo: excelencia en performance.
        </p>

        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <a
            href="#problema"
            className="px-8 py-4 rounded-lg font-semibold no-underline"
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)",
              color: "#fff",
            }}
          >
            Explorar Análisis
          </a>
          <a
            href="#datos"
            className="px-8 py-4 rounded-lg font-semibold no-underline"
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.5)",
              color: "#fff",
              border: "1px solid rgba(139, 92, 246, 0.3)",
            }}
          >
            Ver Datos
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Users, label: "Desarrolladores", value: "30" },
            {
              icon: Target,
              label: "Rendimiento Medio",
              value: `${stats.mean.toFixed(1)}%`,
            },
            { icon: Award, label: "Confianza", value: "95%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "rgba(51, 51, 51, 0.4)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
              }}
            >
              <stat.icon
                style={{ color: "#a78bfa" }}
                size={32}
                className="mb-3 mx-auto"
              />
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#fff" }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "#9ca3af" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
