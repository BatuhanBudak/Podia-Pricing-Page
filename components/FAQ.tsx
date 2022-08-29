import React from "react";
import useToggle from "../hooks/useToggle";
import plus from "../public/icons/plus.svg";
import minus from "../public/icons/minus.svg";
import Image from "next/image";

export default function FAQ() {
  const [firstToggled, setFirstToggled] = useToggle();
  const [secondToggled, setSecondToggled] = useToggle();
  const [thirdToggled, setThirdToggled] = useToggle();
  const [fourthToggled, setFourthToggled] = useToggle();
  const [fifthToggled, setFifthToggled] = useToggle();
  const [sixthToggled, setSixthToggled] = useToggle();
  const [seventhToggled, setSeventhToggled] = useToggle();
  const [eigthToggled, setEightToggled] = useToggle();
  const [ninthToggled, setNinthToggled] = useToggle();
  return (
    <section>
      <div className="container">
        <div className="faq-layout">
          <div className="header-container">
            <h2>Frequently Asked Questions</h2>
            <p className="faq-desc">
              Don&apos;t see your answer?{" "}
              <a href="">Reach out to us, we&apos;d love to help.</a>
            </p>
          </div>
          <div className="faq-questions-container">
            <ul className="faq-questions-list">
              <li className="faq-quesiton-list-item">
                <button
                  className="accordion-button"
                  onClick={setFirstToggled}
                  aria-expanded={firstToggled}
                >
                  <h3>Can I cancel at any time?</h3>
                  <span className="accordion-icon">
                    {firstToggled && <Image src={minus} alt="" />}
                    {!firstToggled && <Image src={plus} alt="" />}
                  </span>
                </button>
                {firstToggled && (
                  <p>
                    Absolutely. Just login to your Podia account, go to “account
                    settings” and visit the “billing” section to cancel. There
                    are no hidden fees, no questions asked, and no gotchas.
                  </p>
                )}
              </li>
              <li className="faq-quesiton-list-item">
                <button
                  className="accordion-button"
                  onClick={setSecondToggled}
                  aria-expanded={secondToggled}
                >
                  <h3>Is it easy to change plans?</h3>
                  <span className="accordion-icon">
                    {secondToggled && <Image src={minus} alt="" />}
                    {!secondToggled && <Image src={plus} alt="" />}
                  </span>
                </button>
                {secondToggled && (
                  <p>
                    It sure is. You can upgrade, downgrade or switch from
                    monthly to annual billing at anytime.
                  </p>
                )}
              </li>
              <li className="faq-quesiton-list-item">
                <button
                  className="accordion-button"
                  onClick={setThirdToggled}
                  aria-expanded={thirdToggled}
                >
                  <h3>Are there any credit card or Paypal fees?</h3>
                  <span className="accordion-icon">
                    {thirdToggled && <Image src={minus} alt="" />}
                    {!thirdToggled && <Image src={plus} alt="" />}
                  </span>
                </button>
                {thirdToggled && (
                  <p>
                    Podia doesn’t charge any fees, though the payment processor
                    (Stripe or PayPal) will charge a standard transaction fee of
                    2.9% + 30¢, which may vary based on your location. The fees
                    are charged by the processor and not associated with our
                    plans.
                  </p>
                )}
              </li>
              <li className="faq-quesiton-list-item">
                <button
                  className="accordion-button"
                  onClick={setFourthToggled}
                  aria-expanded={fourthToggled}
                >
                  <h3>Do I have to choose my plan first?</h3>
                  <span className="accordion-icon">
                    {fourthToggled && <Image src={minus} alt="" />}
                    {!fourthToggled && <Image src={plus} alt="" />}
                  </span>
                </button>
                {fourthToggled && (
                  <p>
                    Not at all. Your free 14-day trial comes with all of our
                    Shaker features. You won’t need to select a plan until your
                    trial expires.
                  </p>
                )}
              </li>
              <li className="faq-quesiton-list-item">
                <button
                  className="accordion-button"
                  onClick={setFifthToggled}
                  aria-expanded={fifthToggled}
                >
                  <h3> Can I have a refund?</h3>
                  <span className="accordion-icon">
                    {fifthToggled && <Image src={minus} alt="" />}
                    {!fifthToggled && <Image src={plus} alt="" />}
                  </span>
                </button>
                {fifthToggled && (
                  <p>
                    We offer a free 14-day trial so that you can take Podia for
                    a spin! After that it’s easy to cancel in your account
                    settings. If you forget to cancel before the next invoice
                    date, it’s ok! We know things happen. Contact us within 72
                    hours of your monthly (or annual) renewal or upgrade and
                    we’d be happy to refund the most recent payment. Note: we do
                    not offer pro-rated refunds for annual payments. Refunds
                    take 5-10 business days to process.
                  </p>
                )}
              </li>
              <li className="faq-quesiton-list-item">
                <button
                  className="accordion-button"
                  onClick={setSixthToggled}
                  aria-expanded={sixthToggled}
                >
                  <h3>How do I get my money?</h3>
                  <span className="accordion-icon">
                    {sixthToggled && <Image src={minus} alt="" />}
                    {!sixthToggled && <Image src={plus} alt="" />}
                  </span>
                </button>
                {sixthToggled && (
                  <p>
                    It’s simple: connect your Stripe and/or PayPal account and
                    anything you earn on Podia will be deposited directly into
                    your account.
                  </p>
                )}
              </li>
              <li className="faq-quesiton-list-item">
                <button
                  className="accordion-button"
                  onClick={setSeventhToggled}
                  aria-expanded={seventhToggled}
                >
                  <h3> Do I need a credit card to sign up?</h3>
                  <span className="accordion-icon">
                    {seventhToggled && <Image src={minus} alt="" />}
                    {!seventhToggled && <Image src={plus} alt="" />}
                  </span>
                </button>
                {seventhToggled && (
                  <p>
                    Nope! For our 14-day free trial, there’s no credit card
                    required.
                  </p>
                )}
              </li>
              <li className="faq-quesiton-list-item">
                <button
                  className="accordion-button"
                  onClick={setEightToggled}
                  aria-expanded={eigthToggled}
                >
                  <h3> Can I see a demo?</h3>
                  <span className="accordion-icon">
                    {eigthToggled && <Image src={minus} alt="" />}
                    {!eigthToggled && <Image src={plus} alt="" />}
                  </span>
                </button>
                {eigthToggled && (
                  <p>
                    We would LOVE to have you join us on our live weekly demo,
                    every Tuesday at 2PM ET. Register here. If that time isn’t
                    convenient for you, you can still register and receive a
                    replay in your email inbox a few hours after the demo.
                  </p>
                )}
              </li>
              <li className="faq-quesiton-list-item">
                <button
                  className="accordion-button"
                  onClick={setNinthToggled}
                  aria-expanded={ninthToggled}
                >
                  <h3> Is Podia safe and secure?</h3>
                  <span className="accordion-icon">
                    {ninthToggled && <Image src={minus} alt="" />}
                    {!ninthToggled && <Image src={plus} alt="" />}
                  </span>
                </button>
                {ninthToggled && (
                  <p>
                    Your data (and your customers’ data) is always safe with
                    Podia. All online transactions are encrypted, and we’re
                    regularly updating our product to ensure that it’s in
                    compliance with global security standards like GDPR.
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
