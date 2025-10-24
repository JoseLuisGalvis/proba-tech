import React from "react";
import {
  CheckCircle,
  TrendingUp,
  Activity,
  BarChart3,
  Cpu,
  Target,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Conclusiones = ({ stats }) => {
  const { isDarkMode } = useTheme();
  const mediaClose = Math.abs(stats.mean - stats.median) < 2;

  return (
    <section
      id="conclusiones"
      className="py-20 px-4"
      style={{ backgroundColor: isDarkMode ? "#0f172a" : "#f8f9fa" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
          >
            Conclusiones del Análisis
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              icon: CheckCircle,
              title: "Representatividad de la Muestra",
              desc: `Los 30 desarrolladores proporcionan una muestra representativa con n=30, permitiendo aplicar el Teorema del Límite Central para inferencias válidas sobre el rendimiento poblacional.`,
              color: "#10b981",
            },
            {
              icon: TrendingUp,
              title: "Tendencia Central y Simetría",
              desc: `La media (${stats.mean.toFixed(
                2
              )}%) y mediana (${stats.median.toFixed(2)}%) son ${
                mediaClose ? "muy cercanas" : "relativamente cercanas"
              }, indicando ${
                mediaClose
                  ? "una distribución simétrica sin sesgos significativos"
                  : "una distribución con ligero sesgo"
              } en los datos de rendimiento.`,
              color: "#3b82f6",
            },
            {
              icon: Activity,
              title: "Homogeneidad en el Rendimiento",
              desc: `Con desviación estándar de ${stats.stdDev.toFixed(
                2
              )}%, el equipo muestra ${
                stats.stdDev < 10 ? "consistencia" : "variabilidad moderada"
              } en el desempeño, reflejando ${
                stats.stdDev < 10
                  ? "prácticas estandarizadas efectivas"
                  : "oportunidades de mejora en la estandarización"
              }.`,
              color: "#eab308",
            },
            {
              icon: BarChart3,
              title: "Inferencia Estadística",
              desc: `Con 95% de confianza, el rendimiento poblacional se ubica entre ${stats.ciLower.toFixed(
                2
              )}% y ${stats.ciUpper.toFixed(2)}%. ${
                stats.ciLower > 75
                  ? "Ambos límites superan el estándar del 75%, garantizando calidad sostenible"
                  : "Se requiere mejora para superar consistentemente el estándar del 75%"
              }.`,
              color: "#a78bfa",
            },
            {
              icon: Cpu,
              title: "Validación Estadística",
              desc: `La prueba t (t=${stats.tStatistic.toFixed(
                4
              )}, p=${stats.pValue.toFixed(4)}) ${
                stats.pValue < 0.05
                  ? "confirma que el rendimiento supera significativamente el estándar del 75% (α=0.05)"
                  : "no muestra evidencia suficiente para afirmar superioridad sobre el 75%"
              }.`,
              color: "#ec4899",
            },
            {
              icon: Target,
              title: "Recomendaciones",
              desc: `${
                stats.mean > 75
                  ? "Mantener las prácticas actuales. Documentar mejores prácticas de top performers. "
                  : "Implementar mejoras en el proceso de desarrollo. "
              }Establecer mentorías. Usar este análisis como benchmark para proyectos futuros.`,
              color: "#10b981",
            },
          ].map((item, i) => (
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
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon style={{ color: item.color }} size={28} />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: isDarkMode ? "#fff" : "#1f2937" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: isDarkMode ? "#d1d5db" : "#1f2937" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conclusiones;
