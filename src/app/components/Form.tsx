import React from "react";

const Form = () => {
  return (
    <form className="pt-12 w-full flex">
      <input type="text" name="url" className="w-3/4 h-12 pl-4 text-black mr-8 rounded-md"/>
      <button type="submit" className="bg-bgButton text-black font-bold w-1/4 rounded-md">Raccourcir</button>
    </form>
  );
};

export default Form;
