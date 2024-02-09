import { useState } from 'react';
function CustomDropdown({ options, value, onChange, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredOptions = options && options.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        option.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        option.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectOption = (selectedOption) => {
        onChange(selectedOption);
        setIsOpen(false);
    };
    const handleButtonClick = (e) => {
        e.preventDefault(); // Prevent form submission
        setIsOpen(!isOpen);
    };


    return (
        <div className="">
            <button onClick={handleButtonClick} className="py-2 px-4 bg-white border border-gray-300 rounded-md w-full text-left">
                {value ? `${value.name}` : placeholder}
            </button>
            {isOpen && (
                <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-2 w-[95%] h-[400px] overflow-y-auto">
                    <input
                        type="text"
                        placeholder="Search Drug ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border-b border-gray-300 w-full mb-2 sticky top-0 bg-white z-10"
                    />
                    <div >
                        <div className="py-2 px-2 hover:bg-gray-100 cursor-pointer grid grid-cols-3 bg-ha-primary2">
                            <span className="">Name</span>
                            <span className="">Quantity</span>
                            <span>Manufacturer</span>
                        </div>
                        {filteredOptions.map((option, index) => (
                            <div key={index} className="py-2 px-2 hover:bg-gray-100 cursor-pointer grid grid-cols-3" onClick={() => handleSelectOption(option)}>
                                <span className="">{option.name}</span>
                                <span className="">{option.quantity}</span>
                                <span> {option.manufacturer}</span>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
    );
}
export default CustomDropdown;