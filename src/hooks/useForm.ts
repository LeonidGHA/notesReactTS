import { ChangeEvent, FormEvent, useState } from "react";

interface IFormProps<T> {
  initialState: T;
  onSubmit: (data: T) => void;
}

interface IFormReturn<T> {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function useForm<T>({
  initialState,
  onSubmit,
}: IFormProps<T>): IFormReturn<T> {
  const [state, setState] = useState<T>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState(initialState);
  };

  return { state, setState, handleChange, handleSubmit };
}
