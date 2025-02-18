import React from "react";
import Accordion from "../../accordion";

interface LogementDetailsProps {
    description: string
    equipments: string
}

const LogementDetails: React.FC<LogementDetailsProps> = ({ description, equipements }) => (
    <div className={"d-flex flex-md-row flex-column gap-3 py-4"}>
        <div className={"col"}>
            <Accordion title={"Description"} content={description} />
        </div>
        <div className={"col"}>
            <Accordion title={"Équipements"} content={equipements} />
        </div>
    </div>
)

export default LogementDetails