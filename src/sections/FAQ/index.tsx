import { Children } from 'react'
import { AccordionBody, AccordionHeader } from 'reactstrap'
import { useNav } from '../../hooks/useNav'
import {
  AccordionItemCustom,
  FAQSection,
  UncontrolledAccordionCustom,
} from './Faq.styles'

export function FAQ() {
  const faqRef = useNav('faq')

  const arrayInfo = [
    'What is StorgTech?',
    'What sector does the company operate in?',
    'What is its target audience?',
    'Does the company have a slogan? What is it?',
  ]

  return (
    <FAQSection ref={faqRef} id="faq__section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="faq__section_left">
              <h3 className="faq__title">06 • FAQ</h3>

              <h2 className="faq__subtitle">Frequently asked questions</h2>
              <p>
                Use our built-in analytics dashboard to pull valuable insights
                and monitor the value of your crypto portfolio over time.{' '}
              </p>
            </div>
          </div>
          <div className="col-lg-6 pt__70">
            <UncontrolledAccordionCustom defaultOpen="1">
              {Children.toArray(
                arrayInfo.map((content, count) => (
                  <AccordionItemCustom>
                    <AccordionHeader targetId={String(count + 1)}>
                      {content}
                    </AccordionHeader>
                    <AccordionBody accordionId={String(count + 1)}>
                      <strong>
                        This is the first item&#39;s accordion body.
                      </strong>
                      You can modify any of this with custom CSS or overriding
                      our default variables. It&#39;s also worth noting that
                      just about any HTML can go within the{' '}
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </AccordionBody>
                  </AccordionItemCustom>
                )),
              )}
            </UncontrolledAccordionCustom>
          </div>
        </div>
      </div>
    </FAQSection>
  )
}
