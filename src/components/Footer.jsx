import React from "react";
import { Zap, Users } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = ({ carrera, cuatrimestre, materia, alumnos }) => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className="py-8 border-t"
      style={{
        backgroundColor: isDarkMode ? "#1a1a1a" : "#f8f9fa",
        borderColor: isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Logo y nombre de la empresa */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap style={{ color: "#a78bfa" }} size={24} />
          <span
            className="text-xl font-bold"
            style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
          >
            Proba Software and Development CO
          </span>
        </div>

        <div
          className="mb-2"
          style={{ color: isDarkMode ? "#9ca3af" : "#1f2937" }}
        >
          <strong>Gerencia de Frontend</strong> • Octubre 2025
        </div>

        <div
          className="text-sm"
          style={{ color: isDarkMode ? "#6b7280" : "#9ca3af" }}
        >
          Análisis Estadístico para Pirulito CO
        </div>

        {/* Divisor */}
        <div
          style={{
            height: "1px",
            backgroundColor: isDarkMode ? "rgba(139, 92, 246, 0.2)" : "#e5e7eb",
            margin: "2rem auto",
            maxWidth: "300px",
          }}
        />

        {/* Información académica */}
        <div
          className="text-sm mt-4"
          style={{ color: isDarkMode ? "#9ca3af" : "#6b7280" }}
        >
          <div
            className="font-semibold mb-2"
            style={{ color: isDarkMode ? "#a78bfa" : "#764ba2" }}
          >
            {carrera}
          </div>
          <div className="mb-1">{cuatrimestre}</div>
          <div
            className="font-semibold mb-3"
            style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
          >
            {materia}
          </div>
        </div>

        {/* Lista de alumnos */}
        {alumnos && alumnos.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users style={{ color: "#a78bfa" }} size={20} />
              <span
                className="font-semibold"
                style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
              >
                Equipo de Desarrollo
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {alumnos.map((alumno, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg"
                  style={{
                    backgroundColor: isDarkMode
                      ? "rgba(139, 92, 246, 0.1)"
                      : "rgba(118, 75, 162, 0.1)",
                    border: `1px solid ${
                      isDarkMode
                        ? "rgba(139, 92, 246, 0.2)"
                        : "rgba(118, 75, 162, 0.2)"
                    }`,
                  }}
                >
                  <div
                    className="text-sm font-semibold"
                    style={{ color: isDarkMode ? "#e0e0e0" : "#1f2937" }}
                  >
                    {alumno}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Copyright */}
        <div
          className="text-xs mt-6"
          style={{ color: isDarkMode ? "#6b7280" : "#9ca3af" }}
        >
          © 2025 Proba Software and Development CO. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
