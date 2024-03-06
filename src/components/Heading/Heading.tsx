const Heading = ({
  tag,
  text,
  className = "",
}: {
  tag: keyof JSX.IntrinsicElements;
  text: string;
  className?: string;
}) => {
  const Tag = tag || "h2";

  return <Tag className={className}>{text}</Tag>;
};

export default Heading;
