import React, { useEffect } from "react";
import "./Quote.css"
const Quote = () => {
  useEffect(() => {
    setTimeout(() => {
      const quote = document.querySelector('.quote');
      if (quote) {
        quote.classList.add('active');
      }
    }, 100);
  }, []);

  return (
    <div>
      <div className="background"></div>
      <div className="quote">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/277/first-quote_1.png" alt="quote" />
      </div>
    </div>
  );
};

export default Quote;
