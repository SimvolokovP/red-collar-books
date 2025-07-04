import { useContext } from "react";
import { ToastContext } from "../UI/Toast/ToastContext";

export const useToast = () => useContext(ToastContext);