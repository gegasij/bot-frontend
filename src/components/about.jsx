import React from "react";

export const About = (props) => {
  return (
      <div id="features" className="text-center">
          <div className="text-center">
              <div className="container">
                  <div className="section-title">
                      <h2>{props.data
                          ? props.data.title: 'loading' }</h2>
                      <h4>
                          {props.data
                              ? props.data.paragraph: 'loading' }
                      </h4>
                  </div>
              </div>
          </div>
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>{props.data
                ? props.data.title2: 'loading' }</h2>
          </div>
          <div className="row">
            {props.data
                ? props.data.steps.map((d, i) => (
                    <div key={`${d.title}-${i}`}  className="col-xs-6 col-md-3">
                      {" "}
                      <i className={d.icon}></i>
                      <h3>{d.title}</h3>
                      <p>{d.text}</p>
                    </div>
                ))
                : "Loading..."}
          </div>
        </div>
      </div>
  );
};
