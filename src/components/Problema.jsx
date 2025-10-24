import React from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Problema = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="problema"
      className="py-20 px-4"
      style={{ backgroundColor: isDarkMode ? "#0f172a" : "#f8f9fa" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="p-8 rounded-2xl"
          style={{
            backgroundColor: isDarkMode ? "rgba(51, 51, 51, 0.4)" : "#fff",
            border: `1px solid ${
              isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
            }`,
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle style={{ color: "#a78bfa" }} size={32} />
            <h2
              className="text-4xl font-bold m-0"
              style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
            >
              Planteamiento del Problema
            </h2>
          </div>

          <p
            className="text-lg mb-4"
            style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}
          >
            La <strong>Gerencia de Frontend</strong> de Proba Software and
            Development CO ha asignado a 30 desarrolladores web la tarea de
            construir una Landing Page para el cliente Pirulito and Cuchiflito
            CO.
          </p>

          <div
            className="p-6 rounded-lg mt-6"
            style={{
              backgroundColor: isDarkMode ? "rgba(26, 26, 26, 0.5)" : "#f3f4f6",
              border: `1px solid ${
                isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
              }`,
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#a78bfa" }}
            >
              Objetivos del Análisis
            </h3>
            <div style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}>
              {[
                "Determinar el rendimiento promedio de carga",
                "Establecer un intervalo de confianza del 95%",
                "Realizar pruebas de hipótesis",
                "Identificar patrones y variabilidad",
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <CheckCircle
                    style={{ color: "#10b981" }}
                    size={20}
                    className="flex-shrink-0 mt-1"
                  />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problema;
