/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f0f2f5",
        "heading-color": "rgba(0, 0, 0, 0.85)",
        "text-color": "rgba(0, 0, 0, 0.65)",
        "grey-grey-1": "#fff",
        "highlight-color": "#f5222d",
        "grey-grey-7": "#8c8c8c",
        "grey-grey-8": "#595959",
        "grey-grey-5": "#d9d9d9",
        "grey-grey-9": "#262626",
        "gray-4": "#bdbdbd",
        "daybreak-blue-blue-6": "#1890ff",
        "grey-grey-3": "#f5f5f5",
        "grey-grey-6": "#bfbfbf",
        "dust-red-red-6": "#f5222d",
        chocolate: "#ca4a02",
        navajowhite: "#ffe0b2",
        "text-color-secondary": "rgba(0, 0, 0, 0.45)",
        "table-header": "rgba(0, 0, 0, 0.02)",
        gainsboro: "#ddd",
      },
      spacing: {},
      fontFamily: {
        "font-size-sm-12": "Inter",
        "regular-20-px-28": "Roboto",
        "regular-16-px-24": "Roboto",
        inter: "Inter",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


