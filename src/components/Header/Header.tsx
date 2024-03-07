import Section from "../Section/Section";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <header>
      <Section>
        <Heading
          tag="h1"
          text="Welcome to To Do List"
          className="text-center font-bold text-2xl "
        />
      </Section>
    </header>
  );
};

export default Header;
