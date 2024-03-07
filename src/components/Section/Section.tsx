import React from "react";
import Container from "../Container/Container";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="pt-2 pb-2">
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
