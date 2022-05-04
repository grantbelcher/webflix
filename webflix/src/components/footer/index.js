import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row>{children}</Row>;
};
Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column>{children}</Column>;
};
Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link>{children}</Link>;
};
Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};
Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break>{children}</Break>;
};
