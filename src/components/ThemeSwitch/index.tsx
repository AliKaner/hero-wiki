import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/20/solid";
import { useTheme } from "../../context/useTheme";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`p-2 border rounded-full border-action bg-action mr-2 xs:mr-8`}
    >
      {theme === "light" ? (
        <MoonIcon
          className="h-6 w-6 text-white cursor-pointer"
          onClick={toggleTheme}
        />
      ) : (
        <SunIcon
          className="h-6 w-6 text-dark cursor-pointer"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
}
