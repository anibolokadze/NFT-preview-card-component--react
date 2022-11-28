import styled from "styled-components"
import {color, borderRadius, fontSize, fontWeight} from "../../assets/style/variables"
import cardImage from "../../assets/img/image-equilibrium.jpg"

export const Card = styled.section`
    width: 100%;
    max-width: 327px;
    height: 543px;
    background-color: ${color.darkBlueCardBG};
    border-radius: ${borderRadius.primary};
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
    color: ${color.softBlue};
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    .card__img-wrapper{
        height: 50%;
        width: 100%;
        overflow: hidden;
        background-image: url(${cardImage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: ${borderRadius.primary};
        
        &:hover{
            .card__hover{
                background-color: ${color.cyanHover};
                .icon{
                    display: block;
                }
            }
        }
    
        .card__hover{
            cursor: pointer;
            transition: 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            .icon{
                display: none;
            }
        }
    }
    h1{
        color: ${color.White};
        font-size: ${fontSize.large};
        font-weight: ${fontWeight.semiBold};
        margin-bottom: 12px;
        cursor: pointer;
        &:hover{
            color: ${color.cyan};
        }
    }
    p{
        color: ${color.softBlue};
        font-size: ${fontSize.medium};
        font-weight: ${fontWeight.light};
    }

    .card__info{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .card__info-ethereum{
            display: flex;
            align-items: center;
            color: ${color.cyan};
            font-weight: ${fontWeight.semiBold};
            span{
                margin-left: 5px;
            }
        }
        .card__info-days{
            display: flex;
            align-items: center;
            font-weight: ${fontWeight.regular};
            span{
                margin-left: 5px;
            }
        }
    }

    .card__footer{
        display: flex;
        padding-top: 24px;
        align-items: center;
        border-top: 1px solid ${color.darkBlueLine};
        img{
            border: 1px solid ${color.White};
            border-radius: 50%;
            width: 33px;
            height: 33px;
            margin-right: 16px;
        
        }
        span{
            color: ${color.White};
            cursor: pointer;
            
            &:hover{
                color: ${color.cyan};
            }
        }
    }

    
`