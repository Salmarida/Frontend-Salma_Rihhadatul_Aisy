import React, { useEffect, useState } from "react";

const Toast = ({ message, type, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${type} ${show ? "show" : ""} z-50`}>
      <div className="toast-body">
        <button
          type="button"
          className="close-button"
          onClick={() => setShow(false)}
        >
          &times;
        </button>
        {message}
      </div>
    </div>
  );
};

export default Toast;
