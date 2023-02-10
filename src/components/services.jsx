import React from "react";

export const Services = (props) => {
    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>{props.data
                        ? props.data.title : ""}</h2>
                </div>
                <div className="row">
                    {props.data
                        ? props.data.steps.map((d, i) => (
                            <div key={`${d.title}-${i}`} className="col-md-4">
                                {" "}
                                <i className={d.icon}></i>
                                <div className="service-desc">
                                    <h3>{d.title}</h3>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};
