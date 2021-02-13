import color from "./color";

const theme = {
  colors: color,
  surfaceA: "#ffffff",
  surfaceB: "#f8f9fa",
  surfaceC: "#e9ecef",
  surfaceD: "#dee2e6",
  surfaceE: "#ffffff",
  surfaceF: "#ffffff",
  textColor: "#495057",
  textColorSecondary: "#6c757d",
  primaryColor: "#2196F3",
  primaryColorText: "#ffffff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  primaryActiveState: function () {
    return `
    background-color: ${theme.primaryColor};
    color: ${theme.primaryColorText};
    `;
  },
  breakpoint: {
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    xl: "(max-width: 1280px)",
    "2xl": "(max-width: 1536px)",
  },
  ringOutline: `
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem #a6d5fa;
`,
};

export default theme;
