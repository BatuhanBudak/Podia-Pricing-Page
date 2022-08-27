import React from "react";

export default function PricingTable() {
  return (
    <section>
      <div className="pricing-table-container">
        <div className="pricing-table">
          <h2 className="table-header">Plan features</h2>
          <div className="types-container">
            <div className="mover-type-container">
              <h3 className="mover-type-header mover">Mover</h3>
              <p className="type-price">$39/mo</p>
              <p className="type-save">$39/year</p>
              <p className="type-save-desc">(Save $78/yr)</p>
            </div>
            <div className="shaker-type-container shaker">
              <h3 className="shaker-type-header">Shaker</h3>
              <p className="type-price">$79/mo</p>
              <p className="type-save">$39/year </p>
              <p className="type-save-desc">(Save $158/yr)</p>
            </div>
            <div className="earth-type-container earthquake">
              <h3 className="earth-type-header">Quaker</h3>
              <p className="type-price">$179/mo</p>
              <p className="type-save">$1790/year</p>
              <p className="type-save-desc">(Save $358/yr)</p>
            </div>
          </div>
          <h3 className="table-attribute">Core</h3>

          <ul className="core-list">
            <li>Unlimited everything</li>
            <li>Zero transaction fees</li>
            <li>Free migrations</li>
            <li>7-days-a-week support</li>
            <li>Daily live Q{"&"}As</li>
            <li>Additional teammates</li>
          </ul>
          <ul className="core-mover-list">
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check no-check mover-badge">
                $20/mo each
              </span>
            </li>
          </ul>
          <ul className="core-shaker-list">
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check no-check shaker-badge">
                $20/mo each
              </span>
            </li>
          </ul>
          <ul className="core-earthquake-list">
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check no-check earth-badge">
                5 included
              </span>
            </li>
          </ul>

          <h3 className="table-attribute">Sell</h3>

          <ul className="sell-list">
            <li>Sell online courses</li>
            <li>Sell digital downloads</li>
            <li>Sell webinars</li>
            <li>Sell memberships</li>
            <li>Sell coaching</li>
          </ul>
          <ul className="sell-mover-list">
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
          </ul>
          <ul className="sell-shaker-list">
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
          </ul>
          <ul className="sell-earthquake-list">
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
          </ul>

          <h3 className="table-attribute">Market</h3>

          <ul className="market-list">
            <li>Custom website</li>
            <li>Customer messaging</li>
            <li>Product bundles</li>
            <li>Course certificates</li>
            <li>Embedded checkout</li>
            <li>Third-party code</li>
          </ul>
          <ul className="market-mover-list">
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
          </ul>
          <ul className="market-shaker-list">
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check"></span>
            </li>
          </ul>
          <ul className="market-earthquake-list">
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
          </ul>

          <h3 className="table-attribute">Email marketing</h3>

          <ul className="email-list">
            <li>Unlimited email subscribers</li>
            <li>Monthly email recipients</li>
          </ul>
          <ul className="email-mover-list">
            <li>
              <span className="mover-check"></span>
            </li>
            <li>
              <span className="mover-check no-check mover-badge">5k</span>
            </li>
          </ul>
          <ul className="email-shaker-list">
            <li>
              <span className="shaker-check"></span>
            </li>
            <li>
              <span className="shaker-check no-check shaker-badge">15k</span>
            </li>
          </ul>
          <ul className="email-earthquake-list">
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check no-check earth-badge">50k</span>
            </li>
          </ul>

          <h3 className="table-attribute">Extras</h3>

          <ul className="extras-list">
            <li>White labeled website</li>
            <li>Dedicated account manager</li>
            <li>Personalized onboarding call</li>
            <li>Monthly group creator call</li>
            <li>Team seats</li>
          </ul>
          <ul className="extras-mover-list">
            <li>
              <span className="mover-check none"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
            <li>
              <span className="mover-check none"></span>
            </li>
          </ul>
          <ul className="extras-shaker-list">
            <li>
              <span className="shaker-check none"></span>
            </li>
            <li>
              <span className="shaker-check none"></span>
            </li>
            <li>
              <span className="shaker-check none"></span>
            </li>
            <li>
              <span className="shaker-check none"></span>
            </li>
            <li>
              <span className="shaker-check none"></span>
            </li>
          </ul>
          <ul className="extras-earthquake-list">
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check"></span>
            </li>
            <li>
              <span className="earthquake-check no-check earth-badge">5</span>
            </li>
          </ul>
          <p className="migrate">
            We&apos;ll migrate your content and customers for free when you
            choose an annual subscription.{" "}
            <a href="" className="migrate-link">
              Learn More
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
