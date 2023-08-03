import { FC } from "react";

import { Input } from "src/ui-kit/Input/Input";
import { Button } from "src/ui-kit/Button";

import { useForm } from "src/hooks/useForm";

interface IInitalStateForm {
  name: string;
  content: string;
  category: string;
}

const initialState: IInitalStateForm = {
  name: "",
  content: "",
  category: "",
};

interface IFormNote {
  onSubmit: (data: IInitalStateForm) => void;
}

export const FormNote: FC<IFormNote> = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm<IInitalStateForm>({
    onSubmit,
    initialState,
  });
  const { name, content, category } = state;
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <Input value={name} name="name" handleChange={handleChange} required>
        Name Note
      </Input>
      <Input
        value={content}
        name="content"
        handleChange={handleChange}
        required
      >
        Content
      </Input>
      <label className="mx-auto">
        <select
          required
          name="category"
          value={category}
          className="border-slate-400 border rounded "
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            Category
          </option>
          <option value="Random Thought">Random Thought</option>
          <option value="Task">Task</option>
          <option value="Idea">Idea</option>
        </select>
      </label>
      <Button
        type="submit"
        className="flex justify-center px-4 py-2 w-full max-w-[140px] mx-auto bg-slate-300 rounded mb-10"
      >
        Confirm
      </Button>
    </form>
  );
};
