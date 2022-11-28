import React from "react";
import {Card as StyledCard} from "./StyledCard"
import {EthereumIcon,ClockIcon, ViewIcon} from "../../assets/svg"
import Avatar from "../../assets/img/image-avatar.png"
function Card(){
    return(
        <StyledCard>
            <div className="card__img-wrapper">
                <div className="card__hover">
                    <div className="icon">
                        <ViewIcon/>
                    </div>
                   
                </div>
            </div>
            <div className="card__text">
                <h1>Equilibrium #3429</h1>
                <p>Our Equilibrium collection promotes balance and calm.</p>
            </div>
            <div className="card__info">
                <div className="card__info-ethereum">
                    <EthereumIcon/>
                    <span>0.041 ETH</span>
                </div>
                <div className="card__info-days">
                    <ClockIcon/>
                    <span>3 days left</span>
                </div>
            </div>
            <div className="card__footer">
                <div className="avatar">
                    <img src={Avatar} alt="avatar" />
                </div>
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </StyledCard>
    )
    
}
export default Card