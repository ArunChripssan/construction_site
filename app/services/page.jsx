import React from "react";
import ServiceBanner from "../Sections/services/serviceBanner/ServiceBanner";
import OurServices from "../Sections/services/ourServices/OurServices";
import SpecializedIn from "../Sections/services/specializedIn/SpecializedIn";
import ConstructionServiceSec from "../Sections/services/constructionServiceSec/ConstructionServiceSec";

const services = () => {
    return (
        <>
            <ServiceBanner/>
            <OurServices/>
            <SpecializedIn/>
            <ConstructionServiceSec/>
        </>
    );
};

export default services;
