import React from "react";
import faqsData from "../fixtures/faqs.json";
import { Accordion } from "../components";

export function FaqsContainer() {
  console.log(faqsData, "yppp");
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => {
        console.log(item.header, item.body);
        return (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
