// src/components/ToastComponent.test.tsx

import { render, screen, act } from "@testing-library/react";
import ToastManager from "../ToastManager";
import { ToastComponent } from "./ToastComponent";
import "@testing-library/jest-dom";

describe("ToastComponent", () => {
  beforeEach(() => {
    (
      ToastManager as unknown as { instance: ToastManager | undefined }
    ).instance = undefined;
  });

  test("should render without any toasts initially", () => {
    render(<ToastComponent />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("should display a toast when one is added", () => {
    render(<ToastComponent />);

    const toast = {
      id: 1,
      message: "Test Toast",
      type: "default" as const,
    };

    act(() => {
      ToastManager.getInstance().addToast(toast);
    });

    // Debug the output to verify role application if needed
    screen.debug();

    expect(screen.getByText("Test Toast")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass("alert-info");
  });

  test("should remove a toast when the close button is clicked", () => {
    render(<ToastComponent />);

    const toast = {
      id: 1,
      message: "Test Toast",
      type: "default" as const,
    };

    act(() => {
      ToastManager.getInstance().addToast(toast);
    });

    const closeButton = screen.getByText("✕");
    act(() => {
      closeButton.click();
    });

    expect(screen.queryByText("Test Toast")).not.toBeInTheDocument();
  });

  test("should render a success toast", () => {
    render(<ToastComponent />);

    const toast = {
      id: 2,
      message: "Success Toast",
      type: "success" as const,
    };

    act(() => {
      ToastManager.getInstance().addToast(toast);
    });

    expect(screen.getByText("Success Toast")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass("alert-success");
  });

  test("should render an error toast", () => {
    render(<ToastComponent />);

    const toast = {
      id: 3,
      message: "Error Toast",
      type: "error" as const,
    };

    act(() => {
      ToastManager.getInstance().addToast(toast);
    });

    expect(screen.getByText("Error Toast")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass("alert-error");
  });
});
