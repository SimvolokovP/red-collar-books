import { createContext } from 'react';
import type { ToastType } from './Toast';

interface ToastContextType {
  showToast: (message: string, type: ToastType, duration?: number) => void;
}

export const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});