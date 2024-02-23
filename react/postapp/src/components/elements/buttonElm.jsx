import classNames from "classnames";

export default function ButtonElm({
  handler = () => {
    console.log("default");
  },
  variant = "save",
  className,
  children,
}) {
  const buttonStyle = classNames(
    "rounded-lg py-2 px-4 flex justify-center gap-4 items-center",
    {
      "bg-green-800 text-white ": variant === "save",
      "bg-red-800 text-slate-50": variant === "delete",
      "bg-indigo-800 text-slate-50": variant === "update",
    },
    className
  );
  return (
    <button onClick={handler} className={buttonStyle}>
      {children}
    </button>
  );
}
