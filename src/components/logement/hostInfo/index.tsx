import React from "react";

interface LogementHostInfoProps {
    host: {
        name: string
        picture: string
    }
}

const LogementHostInfos: React.FC<LogementHostInfoProps> = ({ host }) => {
    const [firstName, lastName] = host.name.split(" ")

    return (
        <div className={"logTemplate__right__user"}>
            <div className={"logTemplate__right__user__userName"}>
                {lastName}<br/>{firstName}
            </div>
            <img className={"logTemplate__right__user__userPicture"} src={host.picture} alt={host.name}/>
        </div>
    )
}

export default LogementHostInfos