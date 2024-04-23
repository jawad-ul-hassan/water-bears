import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import FAQRightDecorator from '../assets/images/faq-right-decorator.png';
import FAQLeftDecorator from '../assets/images/faq-left-decorator.png';
import FAQSeperator from '../assets/images/faq-seperator.png';
import ArrowRight from '../assets/svg/arrow-right.svg?react';

export default function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq-title">
          Frequently Asked <br /> Questions
        </h2>
        <div className="faq-wrapper">
          <img src={FAQLeftDecorator} alt="" className="faq-left-decorator" />
          <div className="faq-accordion">
            <Accordion className="accordion" allowMultipleExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordion-btn">
                    What is the supply?
                    <ArrowRight />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion-panel">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordion-btn">
                    What is the supply?
                    <ArrowRight />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion-panel">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordion-btn">
                    What is the supply?
                    <ArrowRight />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion-panel">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordion-btn">
                    What is the supply?
                    <ArrowRight />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion-panel">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordion-btn">
                    What is the supply?
                    <ArrowRight />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion-panel">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <img src={FAQRightDecorator} alt="" className="faq-right-decorator" />
        </div>
      </div>
      <div className="faq-sperator">
        <img src={FAQSeperator} alt="" className="faq-seprator-image" />
      </div>
    </section>
  );
}
