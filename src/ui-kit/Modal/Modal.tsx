import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

const modal = document.querySelector<Element>("#modal");

interface IModalProps {
  onClick: () => void;
  children?: ReactNode;
  classNameModal?: string;
}

export const Modal: FC<IModalProps> = ({ onClick, children }) => {
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
        <div
          className="fixed bg-slate-300/50 top-0 left-0 w-screen h-screen flex items-center justify-center"
          onClick={onClickBackdropClose}
        >
          <div className="bg-white p-5 flex flex-col">
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
