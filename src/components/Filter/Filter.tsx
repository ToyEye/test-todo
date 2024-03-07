import Button from "../Button/Button";

export const Filter = () => {
  const typeButtons = [
    { name: "showAll", text: "Show All" },
    { name: "showChecked", text: "Show Completed " },
    { name: "showUnChecked", text: "Not completed" },
  ];

  return (
    <>
      {typeButtons.map(({ name, text }) => (
        <Button name={name} text={text} />
      ))}
    </>
  );
};
