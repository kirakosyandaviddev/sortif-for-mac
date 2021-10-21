import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import TimesIcon14 from 'renderer/environment/icons/TimesIcon14';

interface ModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  open,
  onClose,
  children,
}: ModalProps) => {
  const portal = document.getElementById('modal-portal') || document.body;
  const modalRef = useRef<any>();

  const outsideClick = (e: MouseEvent) => {
    if (open && modalRef?.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', outsideClick);
    return () => {
      document.removeEventListener('click', outsideClick);
    };
  });

  return (
    <>
      {open
        ? createPortal(
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/* content */}
                  <div
                    ref={modalRef}
                    style={{ width: '432px' }}
                    className="border-0 rounded-md shadow-card relative flex flex-col w-full bg-light1 outline-none focus:outline-none"
                  >
                    {/* header */}
                    <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray1 rounded-t">
                      <h3 className="text-3xl font-medium font-inter-med text-dark4 text-size_16">
                        {title}
                      </h3>
                      <button
                        className="text-dark4"
                        onClick={onClose}
                        type="button"
                      >
                        <TimesIcon14 />
                      </button>
                    </div>
                    {/* body */}
                    <div className="px-6 pt-8 pb-10 flex-auto">{children}</div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black" />
            </>,
            portal
          )
        : null}
    </>
  );
};

export default Modal;
