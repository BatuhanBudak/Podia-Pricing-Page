import Image from "next/image";
import React from "react";
import useToggle from "../hooks/useToggle";
import close from "../public/icons/close.svg";

export default function Nav({ closeNav }) {
  const [toggledFirst, toggleStateFirst] = useToggle();
  const [toggledSecond, toggleStateSecond] = useToggle();

  return (
    <nav className="navigation" id="navigation">
      <div className="navigation-container">
        <div className="nav-top-bar">
          <h4>MENU</h4>
          <button className="close-button" onClick={closeNav}>
            <Image src={close} alt="" />
          </button>
        </div>
        <div className="nav-list-container">
          <ul className="nav-list">
            <li className="nav-list-item " onClick={toggleStateFirst}>
              <span className="has-content">Features</span>
              {toggledFirst && (
                <>
                  <ul className="nav-sub-list">
                    <h4 className="nav-sub-list-header">SELL YOUR WORK</h4>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Online courses
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Digital downloads
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Memberships
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Webinars
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Coaching
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-sub-list">
                    <h3 className="nav-sub-list-header">MARKET YOUR WORK</h3>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Email marketing
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Messaging
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Custom website
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Affiliate marketing
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Embeds
                      </a>
                    </li>
                  </ul>
                  <a className="overview-link" href="">
                    Features Overview
                  </a>
                </>
              )}
            </li>
            <li className="nav-list-item">
              <a className="nav-list-link" href="">
                Examples
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-list-link" href="">
                Pricing
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-list-link" href="">
                Demo
              </a>
            </li>
            <li
              className="nav-list-item has-content"
              onClick={toggleStateSecond}
            >
              Resources
              {toggledSecond && (
                <>
                  <ul className="nav-sub-list">
                    <h4 className="nav-sub-list-header">RESOURCES</h4>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Videos
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Guides
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Wiki
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Tools
                      </a>
                    </li>
                  </ul>
                  <ul className="nav-sub-list">
                    <h4 className="nav-sub-list-header">TOPICS</h4>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Marketing and sales
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Creator stories
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Entrepreneurship
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        Email marketing
                      </a>
                    </li>
                    <li>
                      <a className="nav-sub-list-link" href="">
                        How to
                      </a>
                    </li>
                  </ul>
                  <a className="overview-link" href="">
                    Resource Center
                  </a>
                </>
              )}
            </li>
          </ul>
          <button className="trial-button">Start Free Trial</button>
        </div>
      </div>
    </nav>
  );
}
