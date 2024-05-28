import { useState } from "react";
import SearchSale from "./SearchSale";
import SearchRent from "./SearchRent";
import SearchMortgage from "./SearchMortgage";

const CheckboxForm = () => {
  const [checkedOption, setCheckedOption] = useState(null);

  const handleCheckboxChange = (event) => {
    setCheckedOption(event.target.id);
  };

  const getFormLabel = (option) => {
    switch (option) {
      case "sell":
        return "فروش";
      case "rent":
        return "اجاره";
      case "mortgage":
        return "رهن";
      default:
        return "";
    }
  };

  return (
    <div className="p-4 pr-10 pl-5 sticky top-5">
      <h3 className="font-bold mb-5">فیلتر آگهی ها</h3>
      <div className="flex flex-col space-y-2 font-numerals">
        <label className="flex items-center justify-between pb-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 hidden"
            id="sell"
            checked={checkedOption === "sell"}
            onChange={handleCheckboxChange}
          />
          <span className="text-gray-700">فروش</span>
          <span className="text-white bg-gray-500 rounded-lg p-1 w-8 flex justify-center text-xs">
            56
          </span>
        </label>
        <label className="flex items-center justify-between pb-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 hidden"
            id="rent"
            checked={checkedOption === "rent"}
            onChange={handleCheckboxChange}
          />
          <span className="text-gray-700">اجاره</span>
          <span className="text-white bg-gray-500 rounded-lg p-1 w-8 flex justify-center text-xs">
            21
          </span>
        </label>
        <label className="flex items-center justify-between pb-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 hidden"
            id="mortgage"
            checked={checkedOption === "mortgage"}
            onChange={handleCheckboxChange}
          />
          <span className="text-gray-700">رهن</span>
          <span className="text-white bg-gray-500 rounded-lg p-1 w-8 flex justify-center text-xs">
            35
          </span>
        </label>
      </div>

      {checkedOption && (
        <div className="mt-4">
          {checkedOption === "sell" && <SearchSale />}
          {checkedOption === "rent" && <SearchRent />}
          {checkedOption === "mortgage" && <SearchMortgage />}
        </div>
      )}
    </div>
  );
};

export default CheckboxForm;
