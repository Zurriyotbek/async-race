import { useContext, useState, useEffect } from "react";
import { editCarInfo } from "../functions/functions";
import AppContext from "../../context/app-context";
import Axios from "../../axios";

function EditCarModal({ setIsModalOpen }) {
  const { selectedCar, setLoaderState } = useContext(AppContext);
  const [carName, setCarName] = useState(selectedCar.name);
  const [carColor, setCarColor] = useState(selectedCar.color);

  const updateCarInfo = async () => {
    setLoaderState(true);
    if (carName !== selectedCar.name || carColor !== selectedCar.color) {
      let data = {
        name: carName,
        color: carColor,
      };
      try {
        await Axios.put(`garage/${selectedCar.id}`, data).then((res) => {
          console.log(res);
          setLoaderState(false);
          setIsModalOpen(false);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <div className="mb-16">
        <div className="border border-gray-400 rounded-lg flex mb-4 shadow-lg">
          <input
            type="text"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            placeholder="Enter car name..."
            className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent focus:border-green-500 focus:text-green-500"
          />
        </div>
        <div className="rounded-lg flex items-center mb-4 shadow-lg">
          <p>Choose color:</p>
          <label
            className={`block relative w-[332px] h-[40px] cursor-pointer`}
            style={{ backgroundColor: carColor }}>
            <input
              type="color"
              value={carColor}
              onChange={(e) => setCarColor(e.target.value)}
              className="absolute z-10 w-0 h-0"
            />
          </label>
        </div>
      </div>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-1/2 px-3">
          <button
            className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
            onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </div>
        <div className="w-1/2 px-3">
          <button
            className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-green-600 hover:bg-green-600 hover:text-white"
            onClick={updateCarInfo}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditCarModal;
