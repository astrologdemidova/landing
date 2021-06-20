import styled from 'styled-components';

export const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
    }
`;

export const CardWrapper = styled.div`
    border-top: 3px solid #5238fa;
    border-top: 3px solid #d44e81;
    max-width: 1160px;
    width: 100%;
`;

export const CardHeader = styled.div`
    color: #1d2147;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    padding: 27px 50px 27px 0;
    span {
        position: absolute;
        top: 15px;
        right: 0;
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        /* background: #5238fa; */
        background: #d44e81;
        color: #ffffff;
        transition: all 0.2s ease-in;
        transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
        div {
            position: absolute;
            top: 13px;
            left: 14px;
            width: 2px;
            height: 16px;
            background: #eeeeee;
            transform: rotate(-45deg);
            &:last-of-type {
                left: 25px;
                transform: rotate(45deg);
            }
        }
    }
    &:hover {
        span {
            background: #eee;
            color: #000000;
            div {
                background: #111111;
            }
        }
    }
`;

export const CardContent = styled.div`
    ${(props) => (props.isOpen ? 'font-size: 20px;' : 'height: 0; font-size: 0; overflow: hidden;')}
    ${(props) => (props.isOpen ? 'animation: 0.5s 1 alternate openAccord;' : '')}
    @keyframes openAccord {
        from {
            height: 0;
            font-size: 0;
        }

        to {
            height: auto;
            font-size: 20px;
        }
    }
    p {
        color: #1d2147;
        font-weight: 300;
        /* span {
            display: inline-block;
            width: 10px;
            height: 10px;
            background: #6a45ab;
            border: 2px solid black;
            transform: rotate(45deg);
            margin-right: 10px;
        } */
    }
`;
