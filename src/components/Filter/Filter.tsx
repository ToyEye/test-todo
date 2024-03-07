import Button from "../Button/Button";
import Section from "../Section/Section";

export const Filter = () => {
  const typeButtons = [
    { name: "showAll", text: "All" },
    { name: "showChecked", text: "Completed " },
    { name: "showUnChecked", text: "Current" },
  ];

  return (
    <Section>
      <ul className="flex justify-center flex-col items-center gap-10 md:flex-row ">
        {typeButtons.map(({ name, text }) => (
          <li key={name}>
            <Button name={name} text={text} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
