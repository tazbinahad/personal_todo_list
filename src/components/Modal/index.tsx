import { Button } from "components/Button";
import { Cross } from "icons/Cross";
import React from "react";
import { TModal, TModalFooter } from "types";

export const Modal: React.FC<TModal> = ({
  open,
  title,
  content,
  width,
  onClose,
}) => {
  // Apply 'overflow: hidden' to the body when the modal opens
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Clean up function to remove the style when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  return open ? (
    <>
      <div className="flex justify-center p-10 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className={`relative w-[520px] mx-auto max-md:w-[calc(100vw-45px)] mt-20`}
          style={{
            width: width,
          }}
        >
          {/*content*/}
          <div className="border-0 rounded-t-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between px-5 py-3 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-medium font-semibold">
                {title || "Modal Title"}
              </h3>
              <span onClick={onClose} className="cursor-pointer">
                <Cross />
              </span>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">{content}</div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>{" "}
    </>
  ) : (
    <></>
  );
};

export const ModalFooter: React.FC<TModalFooter> = ({
  onClose,
  onSubmit,
  disableSubmit,
}) => {
  return (
    <div className="flex items-center justify-end p-6 py-2 border-t border-solid rounded-b-lg gap-2 absolute left-0 right-0 top-[100%] bg-white">
      <Button type="secondary" content="Close" onClick={onClose} />
      <Button
        type="primary"
        content="Save"
        onClick={onSubmit}
        disabled={disableSubmit}
      />
    </div>
  );
};
