// import { useState } from "react";

const AlertMessageModal = (props) => {

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" onClick={props.onClose}>
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white pb-5">
              <div className="sm:flex-row sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left bg-purple-700">
                  <h3
                    className="text-xl font-bold px-3 py-3 leading-6 text-white"
                    id="modal-title"
                  >
                    {props.title}
                  </h3>
                  <div className="mt-2 pt-5 px-4 bg-white">
                    <p className="text-sm text-black">
                      {props.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={props.onClose}
                className="inline-flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertMessageModal;
