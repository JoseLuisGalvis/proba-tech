import React, { useState } from "react";
import { Zap, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ sections }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b transition-all duration-300"
      style={{
        backgroundColor: isDarkMode
          ? "rgba(26, 26, 26, 0.95)"
          : "rgba(75, 0, 130, 0.95)",
        backdropFilter: "blur(12px)",
        borderColor: isDarkMode
          ? "rgba(139, 92, 246, 0.2)"
          : "rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-yellow-400 no-underline"
          >
            <Zap size={24} />
            <span className="font-bold text-lg">Proba Software</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="transition-colors duration-300 no-underline"
                style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                onMouseLeave={(e) => (e.target.style.color = "#fff")}
              >
                {section.label}
              </a>
            ))}

            {/* Dark Mode Button - Desktop */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-all duration-300 border-0 cursor-pointer"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(139, 92, 246, 0.3)"
                  : "rgba(255, 255, 255, 0.3)",
                color: isDarkMode ? "#FFD700" : "#fff",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              title={
                isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button + Dark Mode */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Dark Mode Button - Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border-0 cursor-pointer"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(139, 92, 246, 0.3)"
                  : "rgba(255, 255, 255, 0.3)",
                color: isDarkMode ? "#FFD700" : "#fff",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg border-0 cursor-pointer"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(139, 92, 246, 0.3)"
                  : "rgba(255, 255, 255, 0.3)",
                color: "#fff",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4"
            style={{
              borderTop: `1px solid ${
                isDarkMode
                  ? "rgba(139, 92, 246, 0.2)"
                  : "rgba(255, 255, 255, 0.2)"
              }`,
              animation: "slideDown 0.3s ease-out",
            }}
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="no-underline"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 0",
                  color: isDarkMode ? "#ddd" : "#fff",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#a78bfa")}
                onMouseLeave={(e) =>
                  (e.target.style.color = isDarkMode ? "#ddd" : "#fff")
                }
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
