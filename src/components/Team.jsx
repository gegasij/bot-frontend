import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Купить доступ к боту</h2>
          <p>
За 15$ вы получите неорганиченный доступ к боту, которого сможете настроить под себя и подарить своей второй половинке
          </p>
            <a
                href="https://buy.stripe.com/test_7sIbJb4GV0uqbiUdQQ"
                className="btn btn-custom btn-lg page-scroll"
            >
              Оплатить
            </a>{" "}
        </div>
      </div>
    </div>
  );
};
