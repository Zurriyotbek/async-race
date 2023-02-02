function Modal({ children, isOpen, setIsOpen }) {
  function closeModal(e) {
    if (e.target.id === "modal") {
      setIsOpen(false);
    }
  }
  return (
    <div
      id="modal"
      className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 z-30"
      onClick={closeModal}>
      <div className="w-full max-w-[570px] rounded-[20px] bg-white px-8 text-center md:py-[60px] md:px-[70px] z-40">
        {children}
      </div>
    </div>
  );
}

export default Modal;
