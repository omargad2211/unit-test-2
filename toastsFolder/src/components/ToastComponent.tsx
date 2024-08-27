import React, { useEffect, useState } from "react";
import ToastManager from "../ToastManager";

export type Toast = {
  id: number;
  message: string;
  type: "default" | "success" | "error";
};

export const ToastComponent: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const toastManager = ToastManager.getInstance();
    toastManager.addObserver(setToasts);
    return () => {
      toastManager.removeObserver(setToasts);
    };
  }, []);

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed bottom-5 right-5 space-y-2 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="alert" // Add this role
          className={`alert ${
            toast.type === "success"
              ? "alert-success bg-green-500 text-white"
              : toast.type === "error"
              ? "alert-error bg-red-500 text-white"
              : "alert-info bg-blue-500 text-white"
          } flex items-center justify-between p-4 rounded-lg shadow-lg`}
        >
          <span>{toast.message}</span>
          <button
            className="ml-4 bg-transparent text-white hover:text-gray-300"
            onClick={() => removeToast(toast.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};
