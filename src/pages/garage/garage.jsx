import { useEffect, useState, useContext } from "react";
import Axios from "../../axios";
import CarRow from "../../components/carRow/carRow";
import CarsTable from "../../components/carsTable/carsTable";
import {
  getCarsData,
  getRandomHexColor,
} from "../../components/functions/functions";
import Loader from "../../components/loader/loader";
import EditCarModal from "../../components/modal/editCarModal";
import Modal from "../../components/modal/modal";
import Pagination from "../../components/pagination/pagination";
import AppContext from "../../context/app-context";

function Garage() {
  const { setLoaderState } = useContext(AppContext);
  const [carsData, setCarsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let endpoint = "garage";
    let query = `?_page=${currentPage}`;
    setLoaderState(true);

    Axios.get(endpoint + query)
      .then((res) => {
        setTotalCount(res.headers["x-total-count"]);
        setCarsData(res.data);
        setPagesCount(Math.ceil(totalCount / 7));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(function () {
        setLoaderState(false);
      });
  }, [isModalOpen]);

  function createNewCar() {
    let newCar = {
      name: "Ferrari",
      color: getRandomHexColor(),
    };

    Axios.post("garage", newCar)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <section className="pb-10">
      {/* <!-- Edge X Ring Spinner s2 --> */}

      {isModalOpen ? (
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <EditCarModal setIsModalOpen={setIsModalOpen} />
        </Modal>
      ) : // <Test />
      null}
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
              onClick={() => setIsModalOpen(true)}
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
