import React, { useMemo } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import {
  generatePerformanceData,
  calculateStats,
  generateDistributionData,
} from "./utils/dataUtils";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroStats from "./components/HeroStats";
import Problema from "./components/Problema";
import Conceptos from "./components/Conceptos";
import Datos from "./components/Datos";
import Frecuencias from "./components/Frecuencias";
import BoxPlot from "./components/BoxPlot";
import PieChartComponent from "./components/PieChart";
import Descriptiva from "./components/Descriptiva";
import Inferencial from "./components/Inferencial";
import Conclusiones from "./components/Conclusiones";
import Footer from "./components/Footer";

const App = () => {
  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "herostats", label: "Estadísticas" },
    { id: "problema", label: "Problema" },
    { id: "conceptos", label: "Conceptos" },
    { id: "datos", label: "Datos" },
    { id: "frecuencias", label: "Frecuencias" },
    { id: "boxplot", label: "BoxPlot" },
    { id: "piechart", label: "Categorías" },
    { id: "descriptiva", label: "Descriptiva" },
    { id: "inferencial", label: "Inferencial" },
    { id: "conclusiones", label: "Conclusiones" },
  ];

  const performanceData = useMemo(() => generatePerformanceData(), []);
  const stats = useMemo(
    () => calculateStats(performanceData),
    [performanceData]
  );
  const distributionData = useMemo(
    () => generateDistributionData(performanceData),
    [performanceData]
  );

  return (
    <ThemeProvider>
      <div>
        <Navbar sections={sections} />
        <Hero />
        <HeroStats stats={stats} />
        <Problema />
        <Conceptos />
        <Datos
          performanceData={performanceData}
          distributionData={distributionData}
        />
        <Frecuencias performanceData={performanceData} />
        <BoxPlot performanceData={performanceData} />
        <PieChartComponent performanceData={performanceData} />
        <Descriptiva stats={stats} />
        <Inferencial stats={stats} />
        <Conclusiones stats={stats} />
        <Footer
          carrera="Tecnicatura Superior en Desarrollo de Software"
          cuatrimestre="2025 • 2°"
          materia="Modelado de Software"
          alumnos={[
            "Raquel Andrada",
            "Victoria Arguijo",
            "Esteban Bechelli",
            "José Luis Galvis",
          ]}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
