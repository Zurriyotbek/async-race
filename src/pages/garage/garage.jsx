import { useEffect, useState } from "react";
// import CarCard from "../../components/carCard/carCard";
import Axios from "../../axios";
import CarRow from "../../components/carRow/carRow";
import CarsTable from "../../components/carsTable/carsTable";
import Loader from "../../components/loader/loader";
import Modal from "../../components/modal/modal";
import Pagination from "../../components/pagination/pagination";

function Garage() {
  const [carsData, setCarsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Axios.get("garage")
      .then((res) => {
        console.log(res.data);
        setCarsData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  function createNewCar() {
    let newCar = {
      name: "Ferrari",
      color: getRandomHexColor(),
    };

    Axios.post("garage", newCar)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function getRandomHexColor() {
    let hex = "#";
    const possible = "ABCDEF0123456789";

    for (let i = 0; i < 6; i++) {
      hex += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return hex;
  }

  return (
    <section className="pb-10">
      {/* <!-- Edge X Ring Spinner s2 --> */}

      {isModalOpen ? (
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            tenetur?
          </p>
        </Modal>
      ) : null}
      <div className="container">
        <div>
          <h1 className="mb-8 mt-3 text-center text-4xl text-slate-900">
            Garage
          </h1>
          <div>
            <button className="mx-3 py-2 px-4 bg-cyan-600 text-lg rounded text-white hover:bg-cyan-500">
              Start Race
            </button>
            <button className="mx-3 py-2 px-4 bg-cyan-600 text-lg rounded text-white hover:bg-cyan-500">
              Generate new cars
            </button>
            <button
              onClick={() => createNewCar()}
              className="mx-3 py-2 px-4 bg-cyan-600 text-lg rounded text-white hover:bg-cyan-500">
              Create new car
            </button>
          </div>
        </div>
        {carsData ? (
          <CarsTable carsData={carsData} setIsModalOpen={setIsModalOpen} />
        ) : (
          <Loader />
        )}
        {/* <Loader /> */}
        <Pagination />
      </div>
    </section>
  );
}

export default Garage;
