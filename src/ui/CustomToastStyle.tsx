import type { ToastContentProps } from "react-toastify";

export function CustomToastStyle({ closeToast }: ToastContentProps) {
  return (
    <div className="flex items-center gap-3 justify-between">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">
        i
      </div>
      <div className="flex flex-col">
        <h3 className="text-blue-800 text-sm font-semibold">Information</h3>
        <p className="text-sm text-blue-700">Service is under maintenance</p>
      </div>

      <button
        onClick={() => closeToast()}
        className="ml-8 text-blue-600 hover:text-blue-800 transition"
      >
        ✕
      </button>
    </div>
  );
}
