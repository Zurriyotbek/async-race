function Modal({ children, isOpen, setIsOpen }) {
  return (
    <div
      className={
        "modal flex justify-center items-center fixed top-0 right-0 left-0 bottom-0 bg-gray overflow-hidden z-10"
      }
      onClick={() => setIsOpen(false)}>
      <div className="modal__wrap p-10 bg-white rounded">
        <h1>Modal</h1>
        {children}
      </div>
    </div>
  );
}

export default Modal;
