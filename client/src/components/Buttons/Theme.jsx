import { useContext } from "react";

import ThemeContext from "../../context/themeContext";

const Theme = () => {
  const { handleThemeSwitch } = useContext(ThemeContext);

  return (
    <div>
      <label className="toggleDarkBtn">
        <input type="checkbox" onClick={handleThemeSwitch} />
        <span className="slideBtnTg round"></span>
      </label>
    </div>
  );
};

export default Theme;
