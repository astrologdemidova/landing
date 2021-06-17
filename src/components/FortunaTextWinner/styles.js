import styled from "styled-components";

export const FormWrapper = styled.div`
    max-width: 370px;
    width: 100%;
    margin: 50px auto;
    padding: 10px 20px 50px;
    border: 1px solid #e0e6ed;
    border-radius: 12px;
    background: white;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 10px rgba(162, 8, 147, 0.1);
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    label {
        display: block;
        width: 275px;
    }
`;

export const SpaceBlock = styled.div`
    height: 45vh;
    @media all and (max-width: 1024px) {
        height: 60vh;
    }
    @media all and (max-width: 768px) {
        height: 50vh;
    }
    @media all and (max-width: 500px) {
        height: 30vh;
    }
    @media all and (max-width: 370px) {
        height: 15vh;
    }
`;

export const FormInput = styled.input`
    width: 275px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #6a45ab;
    background: white;
    box-sizing: border-box;
    padding: 14px 7px;
    /* box-shadow: 0px 10px 18px 5px rgba(162, 8, 147, 0.3); */
`;

export const TextWrapper = styled.div`
    max-width: 606px;
    width: 100%;
    @media all and (max-width: 500px) {
        max-width: 370px;
    }
`;
