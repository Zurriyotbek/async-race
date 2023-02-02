import { useState, useContext } from "react";
import { car2 } from "../icons";
import Loader from "../loader/loader";
import AppContext from "../../context/app-context";
import Modal from "../modal/modal";
import DeleteCarModal from "../modal/deleteCarModal";

function CarRow(props) {
  const { setIsModalOpen } = props;
  const { name, color, id } = props.car;
  const { handleSelectedCar } = useContext(AppContext);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  let [start, setStart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleStart() {}

  return (
    <>
      {isOpen ? (
        <Modal setIsOpen={setIsOpen}>
          <DeleteCarModal id={id} setIsOpen={setIsOpen} />
        </Modal>
      ) : null}
      {/* <!-- Card --> */}
      <div className="my-4 h-32">
        <div className="p-3 h-full bg-white shadow-lg rounded-lg ">
          {/* <!-- Image --> */}
          {/* <figure className="relative h-0 pb-[56.25%] overflow-hidden">
            {car1(color)}
          </figure> */}

          {/* <!-- Card Content --> */}
          <h3>{name}</h3>

          <div className="flex items-center gap-4">
            <button onClick={() => setStart(true)}>start</button>
            <button onClick={() => setStart(false)}>stop</button>
            <button onClick={() => setStart(false)}>reset</button>
            <button
              onClick={() => {
                setIsModalOpen(true);
                handleSelectedCar(props.car);
              }}>
              update
            </button>
            <button
              onClick={() => {
                setIsOpen(true);
              }}>
              delete
            </button>
          </div>

          <div className="relative w-full">
            <div
              className={`absolute top-5 left-0 h-[55px] w-[55px] 
            ${
              start ? `left-[93%] transition-all duration-[4000ms] ease-in` : ""
            }
            `}>
              {car2(color)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarRow;
