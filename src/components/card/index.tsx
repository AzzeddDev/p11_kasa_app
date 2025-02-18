import {Link} from "react-router-dom"
import styled from "styled-components"

const LogCard = styled.div<{ backgroundUrl: string }>`
  display: flex;
  background-image: url(${props => props.$backgroundUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 32px;
  height: 312px;
  border-radius: 10px;
  align-items: end;
  position: relative;
  overflow: hidden;
  transition: .3s all ease-in-out;
  
  &:hover {
    transform: scale(1.025);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    border-radius: 8px;
  }
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  z-index: 1;
`

const Card = ({ to, title, backgroundUrl }: {to: string, title: string, backgroundUrl: string, key: string }) => {
    return (
        <Link className={"buttonProduct"} to={to}>
            <LogCard className={"logCard"} $backgroundUrl={backgroundUrl}>
                <Title>{title}</Title>
            </LogCard>
        </Link>
    )
}

export default Card