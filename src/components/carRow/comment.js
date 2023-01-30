<div className="flex-grow flex flex-col p-5">
  {/* <!-- Card body --> */}
  <div className="flex-grow">
    {/* <!-- Header --> */}
    <div className="mb-3 flex justify-between items-center">
      <h3 className="text-[18px] text-gray-900 font-semibold leading-snug">
        {name}
      </h3>

      <div className="dots-wrapper">
        <button
          className={`dots-btn ${isMenuOpen && "dots-btn--active"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}></button>

        <div className={isMenuOpen ? "menu-drop" : "menu-drop--hidden"}>
          <button onClick={() => setIsModalOpen(true)}>Edit</button>
          <button className="text-red-700" onClick={() => setIsModalOpen(true)}>
            Delete
          </button>
        </div>
      </div>
    </div>
    {/* <!-- Content --> */}
    <div className="mb-8 flex gap-2">
      <span
        className={`block w-6 h-6 cursor-pointer`}
        style={{ backgroundColor: color }}>
        <input type="color" />
      </span>
    </div>
  </div>
  {/* <!-- Card footer --> */}
  <div className="flex justify-end space-x-2">
    <a
      className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2"
      href="#0">
      Cancel
    </a>
    <a
      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-green-50 focus:outline-none focus-visible:ring-2 hover:bg-green-100 text-green-500"
      href="#0">
      Start
    </a>
    <a
      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-red-500 focus:outline-none focus-visible:ring-2 hover:bg-red-600 text-white"
      href="#0">
      Stop
    </a>
  </div>
</div>;
