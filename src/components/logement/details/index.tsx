import React from "react";
import Accordion from "../../accordion";

interface LogementDetailsProps {
    description: string
    equipments: string
}

const LogementDetails: React.FC<LogementDetailsProps> = ({ description, equipements }) => (
    <div className={"row py-4"}>
        <div className={"col-md-6"}>
            <Accordion title={"Description"} content={description} />
        </div>
        <div className={"col-md-6"}>
            <Accordion title={"Équipements"} content={equipements} />
        </div>
    </div>
)

export default LogementDetails