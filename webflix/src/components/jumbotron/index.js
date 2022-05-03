import React from "react";
import {
  Inner,
  Container,
  Pane,
  Title,
  Subtitle,
  Image,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  console.log(direction, "direction");
  return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPain({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbtronTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Jumbotron.Subtitle = function ({ children, ...restProps }) {
  return <Subtitle>{children}</Subtitle>;
};

Jumbotron.Image = function ({ src, alt, ...restProps }) {
  return <Image src={src} alt={alt} />;
};
