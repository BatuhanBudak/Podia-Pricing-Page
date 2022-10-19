import Image from "next/image";
import React from "react";
import useScreenSize from "../hooks/useScreenSize";
import useToggle from "../hooks/useToggle";
import downArrow from "../public/icons/arrow-down.svg";
export default function Footer() {
  const [firstToggled, setFirstToggled] = useToggle();
  const [secondToggled, setSecondToggled] = useToggle();
  const [thirdToggled, setThirdToggled] = useToggle();
  const [fourthToggled, setFourthToggled] = useToggle();
  const [fifthToggled, setFifthToggled] = useToggle();
  const [sixthToggled, setSixthToggled] = useToggle();
  const [seventhToggled, setSeventhToggled] = useToggle();
  const windowWidth = useScreenSize();
  const footerBreakPoint = 1000;

  return (
    <footer>
      <div className="container">
        <ul className="footer-main-list">
          <li className="footer-main-list-item" onClick={setFirstToggled}>
            <div className="footer-main-list-block">
              Sell
              {windowWidth! <= footerBreakPoint && firstToggled && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Online courses</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Memberships</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Digital Downloads</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Webinars</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Coaching</a>
                  </li>
                </ul>
              )}
              {windowWidth! > footerBreakPoint && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Online courses</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Memberships</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Digital Downloads</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Webinars</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Coaching</a>
                  </li>
                </ul>
              )}
            </div>
            {windowWidth! <= footerBreakPoint && (
              <span
                className={`footer-main-list-item-icon ${
                  firstToggled ? "up" : ""
                }`}
              >
                <Image src={downArrow} alt="" />
              </span>
            )}
          </li>
          <li className="footer-main-list-item" onClick={setSecondToggled}>
            <div className="footer-main-list-block">
              Market
              {windowWidth! <= footerBreakPoint && secondToggled && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Email marketing</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Custom website</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Affiliate marketing</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Embeds</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Integrations</a>
                  </li>
                </ul>
              )}
              {windowWidth! > footerBreakPoint && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Email marketing</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Custom website</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Affiliate marketing</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Embeds</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Integrations</a>
                  </li>
                </ul>
              )}
            </div>
            {windowWidth! <= footerBreakPoint && (
              <span
                className={`footer-main-list-item-icon ${
                  secondToggled ? "up" : ""
                }`}
              >
                <Image src={downArrow} alt="" />
              </span>
            )}
          </li>
          <li className="footer-main-list-item" onClick={setThirdToggled}>
            <div className="footer-main-list-block">
              Compare
              {windowWidth! <= footerBreakPoint && thirdToggled && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Kajabi</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Teachable</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Thinkific</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Gumroad</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Podia alternatives</a>
                  </li>
                </ul>
              )}
              {windowWidth! > footerBreakPoint && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Kajabi</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Teachable</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Thinkific</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Gumroad</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Podia alternatives</a>
                  </li>
                </ul>
              )}
            </div>
            {windowWidth! <= footerBreakPoint && (
              <span
                className={`footer-main-list-item-icon ${
                  thirdToggled ? "up" : ""
                }`}
              >
                <Image src={downArrow} alt="" />
              </span>
            )}
          </li>
          <li className="footer-main-list-item" onClick={setFourthToggled}>
            <div className="footer-main-list-block">
              Resources
              {windowWidth! <= footerBreakPoint && fourthToggled && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Blog</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Videos</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Guides</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Wiki</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Free tools</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Live Q{"&"}A</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Live Demo</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">All resources</a>
                  </li>
                </ul>
              )}
              {windowWidth! > footerBreakPoint && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Blog</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Videos</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Guides</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Wiki</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Free tools</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Live Q{"&"}A</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Live Demo</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">All resources</a>
                  </li>
                </ul>
              )}
            </div>
            {windowWidth! <= footerBreakPoint && (
              <span
                className={`footer-main-list-item-icon ${
                  fourthToggled ? "up" : ""
                }`}
              >
                <Image src={downArrow} alt="" />
              </span>
            )}
          </li>
          <li className="footer-main-list-item" onClick={setFifthToggled}>
            <div className="footer-main-list-block">
              Podia
              {windowWidth! <= footerBreakPoint && fifthToggled && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Examples</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Reviews</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">About</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Branding</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Jobs</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Pricing</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Referral program</a>
                  </li>
                </ul>
              )}
              {windowWidth! > footerBreakPoint && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Examples</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Reviews</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">About</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Branding</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Jobs</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Pricing</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Referral program</a>
                  </li>
                </ul>
              )}
            </div>
            {windowWidth! <= footerBreakPoint && (
              <span
                className={`footer-main-list-item-icon ${
                  fifthToggled ? "up" : ""
                }`}
              >
                <Image src={downArrow} alt="" />
              </span>
            )}
          </li>
          <li className="footer-main-list-item" onClick={setSixthToggled}>
            <div className="footer-main-list-block">
              Support
              {windowWidth! <= footerBreakPoint && sixthToggled && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Weekly Demo</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Daily Q{"&"}A</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Contact us</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Help Center</a>
                  </li>
                </ul>
              )}
              {windowWidth! > footerBreakPoint && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Weekly Demo</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Daily Q{"&"}A</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Contact us</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Help Center</a>
                  </li>
                </ul>
              )}
            </div>
            {windowWidth! <= footerBreakPoint && (
              <span
                className={`footer-main-list-item-icon ${
                  sixthToggled ? "up" : ""
                }`}
              >
                <Image src={downArrow} alt="" />
              </span>
            )}
          </li>
          <li className="footer-main-list-item" onClick={setSeventhToggled}>
            <div className="footer-main-list-block">
              Social
              {windowWidth! <= footerBreakPoint && fourthToggled && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Twitter</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Facebook</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Youtbe</a>
                  </li>
                </ul>
              )}
              {windowWidth! > footerBreakPoint && (
                <ul className="footer-sub-list">
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Twitter</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Facebook</a>
                  </li>
                  <li className="footer-sublist-item">
                    <a className="footer-sublist-link">Youtbe</a>
                  </li>
                </ul>
              )}
            </div>
            {windowWidth! <= footerBreakPoint && (
              <span
                className={`footer-main-list-item-icon ${
                  seventhToggled ? "up" : ""
                }`}
              >
                <Image src={downArrow} alt="" />
              </span>
            )}
          </li>
        </ul>
        <div className="footer-last-links">
          <p className="footer-last-link">
            Podia Labs, Inc. © 2021 <a>Terms</a> <a>Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
