import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  onClose: () => void;
}

export const Toast = ({
  message,
  type,
  duration = 3000,
  onClose,
}: ToastProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "border-green-500";
      case "error":
        return "border-red-500";
      default:
        return "border-gray-800";
    }
  };

  return (
    <div
      className={`p-[12px] pt-[16px] relative bg-secondary text-black rounded-md shadow-lg transition-all duration-300 border-b-2 ${
        isClosing ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      } ${getTypeStyles()}`}
    >
      <span>{message}</span>
      <button
        onClick={handleClose}
        className="text-black cursor-pointer absolute top-[2px] right-[2px]"
      >
        <IoMdClose size={16} />
      </button>
    </div>
  );
};
