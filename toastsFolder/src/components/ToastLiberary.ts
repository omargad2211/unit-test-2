import ToastManager from "../ToastManager";

let toastId = 0;

const toast = {
  toast: (message: string) => {
    ToastManager.getInstance().addToast({
      id: ++toastId,
      message,
      type: "default",
    });
  },
  success: (message: string) => {
    ToastManager.getInstance().addToast({
      id: ++toastId,
      message,
      type: "success",
    });
  },
  error: (message: string) => {
    ToastManager.getInstance().addToast({
      id: ++toastId,
      message,
      type: "error",
    });
  },
  dismissAll: () => {
    ToastManager.getInstance().dismissAll();
  },
};

export default toast;
