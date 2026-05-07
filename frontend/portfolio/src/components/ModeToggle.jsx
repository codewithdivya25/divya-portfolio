import { useTheme } from "./ThemeProvider";

const ModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300
        ${theme === "dark" ? "bg-indigo-600" : "bg-gray-300"}`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
      />
    </div>
  );
};

export default ModeToggle;