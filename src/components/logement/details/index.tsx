import React from "react";
import Accordion from "../../accordion";

interface LogementDetailsProps {
    description: string
    equipments: string
}

const LogementDetails: React.FC<LogementDetailsProps> = ({ description, equipments }) => (
    <div className={"row py-4"}>
        <div className={"col-md-6"}>
            <Accordion title={"Description"} content={description} />
        </div>
        <div className={"col-md-6"}>
            <Accordion title={"Équipements"} content={equipments} />
        </div>
    </div>
)

export default LogementDetails