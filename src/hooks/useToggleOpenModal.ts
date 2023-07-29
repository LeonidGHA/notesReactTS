import { useState, Dispatch, SetStateAction } from "react";

interface ToggleOpenModalReturnType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleOpen: () => void;
}

export const useToggleOpenModal = (): ToggleOpenModalReturnType => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, setIsOpen, toggleOpen };
};
