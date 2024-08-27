import ToastManager from "./ToastManager";
import { Toast } from "./components/ToastComponent";

describe("ToastManager", () => {
  let toastManager: ToastManager;
  let mockObserver: jest.Mock;

  beforeEach(() => {
    toastManager = ToastManager.getInstance(); 
    mockObserver = jest.fn(); 
    toastManager.addObserver(mockObserver); 
  });

  afterEach(() => {
    toastManager.removeObserver(mockObserver); 
    (
      ToastManager as unknown as { instance: ToastManager | undefined }
    ).instance = undefined; 
  });

  test("should add an observer", () => {
    expect(mockObserver).not.toHaveBeenCalled();
    toastManager.addToast({ id: 1, message: "Test Toast", type: "default" });
    expect(mockObserver).toHaveBeenCalled();
  });

  test("should remove an observer", () => {
    toastManager.removeObserver(mockObserver);
    toastManager.addToast({ id: 1, message: "Test Toast", type: "default" });
    expect(mockObserver).not.toHaveBeenCalled();
  });

  test("should notify observers when a toast is added", () => {
    const newToast: Toast = { id: 1, message: "Test Toast", type: "default" };
    toastManager.addToast(newToast);

    
    const updateFn = mockObserver.mock.calls[0][0] as (
      toasts: Toast[]
    ) => Toast[];

    
    const result = updateFn([]);
    expect(result).toEqual([newToast]);
  });

  test("should notify observers when all toasts are dismissed", () => {
    toastManager.dismissAll();

    
    const updateFn = mockObserver.mock.calls[0][0] as (
      toasts: Toast[]
    ) => Toast[];

    
    const result = updateFn([
      { id: 1, message: "Test Toast", type: "default" },
    ]);
    expect(result).toEqual([]);
  });
});
