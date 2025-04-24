import React from "react";
import Image from "next/image";
import {experienceDesc} from '../../../../data/experience'
import './Experience.scss'

const Experience = () => {
    return (
        <div className="experince-container">
            <div className="wrapper">
                    <h1 className="bold">
                        We’ve Been Building For
                        <br /> <span className="color">Over 24 Years</span>
                    </h1>
                    <div className="desc">
                        <div className="desc__right">
                            <Image
                                src="/assets/ellipse.png"
                                alt=""
                                width={900}
                                height={800}
                                className="neonEllipse"
                            />
                            <Image
                                src="/assets/mechanical-engineer.png"
                                alt=""
                                width={550}
                                height={550}
                                className="aboutus"
                            />
                        </div>
                        <div className="desc__left">
                            {experienceDesc.map((data, i) => (
                                <div key={data.id} className="contents">
                                    <img
                                        src=".\assets\icons\bullets.png"
                                        />
                                    <p>{data.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Experience;
