import classNames from "classnames";

export default function ButtonElm({
  handler = () => {
    console.log("click")
  },
  variant = "save",
  className,
  children,
}) {
  const buttonStyle = classNames(
    "rounded-lg py-2 px-4 flex justify-center items-center w-28",
    {
      "bg-green-800 text-white ": variant === "save",
      "bg-red-800 text-slate-50": variant === "delete",
      "bg-red-200 text-slate-800": variant === "update",
      "bg-indigo-600 text-slate-50": variant === "go",
    },
    className
  );
  return (
    <button onClick={handler} className={buttonStyle}>
      {children}
    </button>
  );
}
