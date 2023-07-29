import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

const modal = document.querySelector<Element>("#modal");

interface IModalProps {
  onClick: () => void;
  children?: ReactNode;
  classNameModal?: string;
}

const Modal: FC<IModalProps> = ({ onClick, children }) => {
  useEffect(() => {
    document.body.classList.add("blockScroll");
    document.addEventListener("keydown", onClickEscClose);

    return () => {
      document.removeEventListener("keydown", onClickEscClose);
      document.body.classList.remove("blockScroll");
    };
  });

  const onClickEscClose = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      onClick();
    }
  };

  const onClickBackdropClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return modal
    ? createPortal(
        <div id="backdrop" className="" onClick={onClickBackdropClose}>
          <div className="">
            <button
              type="button"
              aria-label="Кнопка закриття модального вікна"
              onClick={onClick}
              className=""
            >
              [x]
            </button>
            {children}
          </div>
        </div>,
        modal
      )
    : null;
};

export default Modal;
