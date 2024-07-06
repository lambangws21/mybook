import { useState } from "react";
import PropTypes from "prop-types";

const DropdownMenu = ({
  options,
  onSelect,
  opRasi,
  defaultOption,
  selectedName,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setMenuOpen(false);
    selectedName(option);
  };

  return (
    <div className="flex flex-col h-16">
      <div
        className={`relative ${
          menuOpen ? "active" : ""
        } bg-blue-900  text-gray-200 overflow-hidden border-2 border-yellow-300 rounded-full py-2 px-4 cursor-pointer transition duration-500 ease-in-out transform ${
          menuOpen ? "" : ""
        }`}
        onClick={toggleMenu}
      >
        <span id="text" className="text-base font-medium">
          {opRasi || defaultOption}
        </span>
        <i
          className={`icon-arrow absolute right-4 top-1/2 transform -translate-y-1/2 duration-500 ${
            menuOpen ? "rotate-180" : ""
          } text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-slate-600"
            viewBox="0 0 16 16"
          >
            <path d="M8 10.793l-4.647-4.647a.5.5 0 0 1 .708-.708L8 9.293l4.647-4.647a.5.5 0 1 1 .708.708L8 10.793z" />
          </svg>
        </i>
      </div>
      <ul
        className={`absolute mt-16 w-[380px]  bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform ${
          menuOpen
            ? "scale-y-100 transform translate-y-0 ease-in-out"
            : "scale-0 transform-origin-top translate-y-[-65px] opacity-0 margin-bottom-[-55px] duration-300 ease-in-out delay-100"
        }`}
      >
        {options.map((option, index) => (
          <li
            className="flex cursor-pointer py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white "
            key={index}
            style={{ "--i": 5 - index }}
            onClick={() => handleOptionClick(option)}
          >
            <span className="option-text">{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // Memvalidasi bahwa options adalah array dari string
  onSelect: PropTypes.func.isRequired, // Memvalidasi bahwa onSelect adalah sebuah fungsi
  opRasi: PropTypes.string,
  defaultOption: PropTypes.string.isRequired,
  selectedName: PropTypes.func.isRequired,
};

export default DropdownMenu;