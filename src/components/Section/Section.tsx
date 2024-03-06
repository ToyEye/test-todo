import React from "react";
import Container from "../Container/Container";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Section;
