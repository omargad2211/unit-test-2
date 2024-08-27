import React from "react";
import toast from "./components/ToastLiberary";
import { ToastComponent } from "./components/ToastComponent";

const App: React.FC = () => {
  return (
    <div className="p-10">
      <button
        className="btn btn-primary"
        onClick={() => toast.toast("This is a default toast")}
      >
        Show Default Toast
      </button>
      <button
        className="btn btn-success ml-2"
        onClick={() => toast.success("This is a success toast")}
      >
        Show Success Toast
      </button>
      <button
        className="btn btn-error ml-2"
        onClick={() => toast.error("This is an error toast")}
      >
        Show Error Toast
      </button>
      <button
        className="btn btn-warning ml-2"
        onClick={() => toast.dismissAll()}
      >
        Dismiss All Toasts
      </button>

      <ToastComponent />
    </div>
  );
};

export default App;
