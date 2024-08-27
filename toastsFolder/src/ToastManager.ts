import { Toast } from "./components/ToastComponent";

class ToastManager {
  private static instance: ToastManager;
  private observers: React.Dispatch<React.SetStateAction<Toast[]>>[] = [];

  private constructor() {}

  public static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }
    return ToastManager.instance;
  }

  public addObserver(observer: React.Dispatch<React.SetStateAction<Toast[]>>) {
    this.observers.push(observer);
  }

  public removeObserver(
    observer: React.Dispatch<React.SetStateAction<Toast[]>>
  ) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public addToast(toast: Toast) {
    this.notifyObservers((prevToasts) => [...prevToasts, toast]);
  }

  public dismissAll() {
    this.notifyObservers(() => []);
  }

  private notifyObservers(updateFn: (toasts: Toast[]) => Toast[]) {
    this.observers.forEach((observer) => observer(updateFn));
  }
}

export default ToastManager;
