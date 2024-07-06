import DropdownMenu from "./DropDown"; // Perbaiki impor

export const NavbarBack = () => {
  const options = ["Orthopedo", "Digestive", "Vaskuler"];
  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl">My Website</h1>
      <DropdownMenu
        options={options}
        onSelect={handleSelect}
        selectedOption={null}
        defaultOption="Select an option"
        selectedName={(name) => console.log("Selected name:", name)}
      />
    </header>
  );
}
