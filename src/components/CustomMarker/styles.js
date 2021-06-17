import styled from "styled-components";

export const CustomMarkerPinkStyled = styled.div`
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-right: 20px;
    background: rgba(255, 255, 255, 0.8);
    border: 4px solid rgb(253, 117, 180);
    /* border-radius: 30px; */
    box-shadow: 0px 0px 6px 3px rgba(253, 117, 180, 0.8);
    animation: 0.5s infinite alternate lightning;
    @keyframes lightning {
        from {
            box-shadow: 0px 0px 6px 1px rgba(253, 117, 180, 0.8);
        }

        to {
            box-shadow: 0px 0px 6px 3px rgba(253, 117, 180, 0.8);
        }
    }
`

export const CustomMarkerBlueStyled = styled.div`
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-right: 20px;
    background: rgba(77, 67, 244, 0.8);
    border: 4px solid rgb(77, 67, 244);
    /* border-radius: 30px; */
    box-shadow: 0px 0px 6px 3px rgba(77, 67, 244, 0.8);
    animation: 0.9s infinite alternate lightningBlue;
    @keyframes lightningBlue {
        from {
            box-shadow: 0px 0px 6px 1px rgba(77, 67, 244, 0.8);
        }

        to {
            box-shadow: 0px 0px 6px 3px rgba(77, 67, 244, 0.8);
        }
    }
`