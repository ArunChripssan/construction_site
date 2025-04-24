import React from "react";
import {aboutUsDesc} from '../../../../data/aboutus'
import './Aboutus.scss'
import Image from "next/image";

const Aboutus = () => {
    return (
        <div className="about-us">
            <Image
                src="/assets/ellipse.png"
                alt=""
                width={1000}
                height={800}
                className="neonEllipse"
            />
            <div className="wrapper">
            <h1 className="bold title"><span className="color">Who</span> We Are</h1>
                <div className="container">
                    <div className="left">
                        <img className="aboutImg" src="./assets/about-us.png" alt="" />
                        <div className="left__textContent">
                        </div>
                    </div>
                    <div className="right">
                        {aboutUsDesc.map((data, i) => (
                            <div key={data.id} className="aboutus-desc">
                                <img src=".\assets\icons\circle-bullet.png" alt="" />
                                <p className="aboutus-desc__content">{data.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
