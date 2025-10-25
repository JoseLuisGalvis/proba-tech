import React from "react";
import { Users, ListChecks, Database, BarChart2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Conceptos = () => {
  const { isDarkMode } = useTheme();

  const conceptos = [
    {
      icon: Database,
      title: "Población",
      definition:
        "Conjunto completo de elementos que comparten características comunes y son objeto de estudio estadístico.",
      ejemplo:
        "En nuestro caso: Todos los desarrolladores de la Gerencia de Frontend de Proba Software and Development CO.",
      color: "#3b82f6",
    },
    {
      icon: Users,
      title: "Muestra",
      definition:
        "Subconjunto representativo de la población seleccionado para realizar el estudio estadístico.",
      ejemplo:
        "30 desarrolladores web asignados al proyecto de Landing Page para Pirulito and Cuchiflito CO.",
      color: "#10b981",
    },
    {
      icon: ListChecks,
      title: "Tipo de Muestreo",
      definition:
        "Muestreo Aleatorio Simple (MAS): cada elemento de la población tiene la misma probabilidad de ser seleccionado.",
      ejemplo:
        "Los 30 desarrolladores fueron seleccionados aleatoriamente del pool total de la gerencia, garantizando representatividad.",
      color: "#a78bfa",
    },
    {
      icon: BarChart2,
      title: "Variable de Estudio",
      definition:
        "Variable cuantitativa continua que representa el rendimiento de carga de la Landing Page.",
      ejemplo:
        "Rendimiento medido en porcentaje (%), valores entre 55% y 95%, escala de razón con cero absoluto significativo.",
      color: "#eab308",
    },
  ];

  return (
    <section
      id="conceptos"
      className="py-20 px-4"
      style={{ backgroundColor: isDarkMode ? "#1e293b" : "#fff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
          >
            Conceptos Estadísticos Fundamentales
          </h2>
          <p
            className="text-lg"
            style={{ color: isDarkMode ? "#d1d5db" : "#6b7280" }}
          >
            Definiciones clave para comprender el análisis exploratorio de datos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conceptos.map((concepto, i) => (
            <div
              key={i}
              className="p-6 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(51, 51, 51, 0.4)"
                  : "#f9fafb",
                border: `2px solid ${
                  isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb"
                }`,
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: `${concepto.color}20` }}
                >
                  <concepto.icon style={{ color: concepto.color }} size={32} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
                  >
                    {concepto.title}
                  </h3>
                </div>
              </div>

              <div
                className="mb-4 p-4 rounded-lg"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(26, 26, 26, 0.5)"
                    : "#fff",
                }}
              >
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: concepto.color }}
                >
                  Definición:
                </p>
                <p style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}>
                  {concepto.definition}
                </p>
              </div>

              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(26, 26, 26, 0.5)"
                    : "#fff",
                  borderLeft: `4px solid ${concepto.color}`,
                }}
              >
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: concepto.color }}
                >
                  En nuestro análisis:
                </p>
                <p
                  className="text-sm"
                  style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}
                >
                  {concepto.ejemplo}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-6 rounded-xl"
          style={{
            backgroundColor: isDarkMode
              ? "rgba(16, 185, 129, 0.1)"
              : "rgba(16, 185, 129, 0.05)",
            border: "2px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: "#10b981" }}>
            📊 Resumen del Diseño Muestral
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p
                className="text-sm font-semibold"
                style={{ color: isDarkMode ? "#d1d5db" : "#6b7280" }}
              >
                Tamaño muestral (n)
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
              >
                30 desarrolladores
              </p>
            </div>
            <div>
              <p
                className="text-sm font-semibold"
                style={{ color: isDarkMode ? "#d1d5db" : "#6b7280" }}
              >
                Método de selección
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
              >
                Aleatorio Simple
              </p>
            </div>
            <div>
              <p
                className="text-sm font-semibold"
                style={{ color: isDarkMode ? "#d1d5db" : "#6b7280" }}
              >
                Nivel de confianza
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
              >
                95%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conceptos;
