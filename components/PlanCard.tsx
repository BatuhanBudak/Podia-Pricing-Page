export default function PlanCard() {
  return (
    <section className="plan-card-section">
      <div className="container">
        <div className="plan-card-layout">
          <div className="iframe-container">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/nyvTNumFlCA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="plan-detials-container">
            <p className="plan-details-subtitle">VIDEO TOUR</p>
            <h2 className="plan-details-title">
              Wondering which plan is right for you?
            </h2>
            <ul className="plan-details-list">
              <li className="plan-details-list-item">
                Get a full walkthrough of each of our plans.
              </li>
              <li className="plan-details-list-item">
                See the features and services Podia offers.
              </li>
              <li className="plan-details-list-item">
                Understand which plan is the best fit for you.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
