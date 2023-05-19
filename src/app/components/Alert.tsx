type Props = {
  message: string;
  type: "success" | "error";
};

const colorScheme = {
  success: {
    bg: "bg-bgSuccessMsg",
    color: "text-colorSuccessMsg",
  },
  error: {
    bg: "bg-bgErrorMsg",
    color: "text-colorErrorMsg",
  },
};

const Alert = ({ message, type }: Props) => {
  const style = `w-full h-12 ${colorScheme[type].bg} ${colorScheme[type].color} rounded-md flex items-center font-bold pl-4`;
  return <div className={style}>{message}</div>;
};

export default Alert;
