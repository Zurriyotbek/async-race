import Axios from "../../axios";
import { useContext } from "react";
import AppContext from "../../context/app-context";

function DeleteCarModal({ id, setIsOpen }) {
  const { setLoaderState } = useContext(AppContext);

  const deleteCar = async () => {
    if (id) {
      setLoaderState(true);
      await Axios.delete(`garage/${id}`)
        .then((res) => console.log(r))
        .catch((err) => console.log(err))
        .finally(() => {
          setLoaderState(false);
          setIsOpen(false);
        });
    }
  };

  return (
    <div>
      <h4 className="mb-20 text-2xl font-semibold">
        Are you sure to delete the car?
      </h4>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-1/2">
          <button
            className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
            onClick={() => setIsOpen(false)}>
            Cancel
          </button>
        </div>
        <div className="w-1/2 px-3">
          <button
            className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-green-600 hover:bg-green-600 hover:text-white"
            onClick={deleteCar}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCarModal;
