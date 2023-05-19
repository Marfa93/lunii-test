import { ChangeEvent } from "react";

type Props = {
  url: string;
  setUrl: (url: string) => void;
};

const Form = ({ url, setUrl }: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUrl(event.target.value);

  return (
    <form className="pt-12 w-full flex">
      <input
        type="text"
        name="url"
        value={url}
        onChange={onChange}
        placeholder="Entre votre url (https://...)"
        className="w-3/4 h-12 pl-4 text-black mr-8 rounded-md"
      />
      <button
        type="submit"
        className="bg-bgButton text-black font-bold w-1/4 rounded-md"
        disabled={true}
      >
        Raccourcir
      </button>
    </form>
  );
};

export default Form;
