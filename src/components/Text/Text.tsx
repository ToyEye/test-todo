import clsx from "clsx";

const Text = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  const textStyle = clsx(
    "text-lg",
    type === "limit" &&
      "position absolute right-2/4 top-28 translate-x-[200%] text-base",
    type === "primary" && "",
    type === "secondary" && "line-through"
  );

  return <p className={textStyle}>{children}</p>;
};

export default Text;
