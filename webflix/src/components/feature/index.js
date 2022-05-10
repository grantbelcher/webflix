import React from "react";
import { Title, SubTitle, Container } from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle>{children}</SubTitle>;
};
