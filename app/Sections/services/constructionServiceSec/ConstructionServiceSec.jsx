import React from "react";
import { constructionService } from "../../../../data/constructionService";
import Image from "next/image";
import './ConstructionServiceSec.scss'

const ConstructionServiceSec = () => {
    return (
        <div className="constructionServiceSec">
            <div className="wrapper">
                <div className="content">
                    <div className="leftSec">
                        <h1>
                            Construction Service Overview
                        </h1>
                        {constructionService.map((data, i) => {
                            return(
                                <div className="content" key={data.id}>
                                    <Image
                                        src="/assets/icons/double-tick.png"
                                        alt=""
                                        width={32}
                                        height={32}
                                        />
                                    <p key={data.id}>{data.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="rightSec">
                        <Image
                            src="/assets/constructionService.png"
                            alt=""
                            width={750}
                            height={590}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionServiceSec;
