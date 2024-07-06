import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import DropdownMenu from "../components/DropDown"; // Added this line to import DropdownMenu

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  // const options = ["Orthopedo", "Digestive", "Vaskuler"];
  
  // const handleSelect = (option) => {
  //   console.log("Selected option:", option);
  // };


  const handleButtonClick = () => {
    navigate("/DropDown");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav className={`fixed top-0 left-0 w-full p-2 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800 bg-opacity-75 backdrop-blur-lg' : 'bg-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-yellow-400">My App</div>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/" className="hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-300 r">Buku Operasi</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </li>
          <li>
            <Link to="/dr-erica-coline" className="hover:text-yellow-400">dr.Erica Coline</Link>
          </li>
          <li>
            <button 
              onClick={handleButtonClick} 
              className="bg-yellow-400 text-gray-800 px-2 py-1 rounded- hover:bg-yellow-300">
              Spesialis
            </button>
          </li>
          {/* <li>
            <DropdownMenu
              options={options}
              onSelect={handleSelect}
              selectedOption={null}
              defaultOption="Select an option"
            />
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
