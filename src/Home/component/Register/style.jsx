import styled from "@emotion/styled";
import theme from "../../../config";
import back from "../../../Shared/aseets/speakers/work-01.jpg";

export const RegisterWrapper = styled("section")`
    height: 500px;
    background: url(${back}) no-repeat center center fixed;
    background-size: cover;
    padding: 4rem 0 2rem 0;
    max-width: 100vw; 
    padding-left: 50px;
`;

export const Span = styled("span")`
    font-size: 2rem;
    color: white;
`;
export const SpanTwo = styled("span")`
    font-size: 2rem;
    color: ${theme.primary};
`;
export const H4 = styled("h4")`
    color: white;
`;
export const FormWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `;
    export const Form = styled("input")`
    padding: 0.2rem;
        border-radius: 5px;
        color: black;
        border: 2px solid ${theme.white};
        background-color: transparent;
        width: 420px;
        ::placeholder{
            font-size: 1rem;
            color: black;
        }
    `;

    export const Register = styled("button")`
    border: 1px solid ${theme.primary};
    border-radius: 25px;
    color: ${theme.white};
    padding: 1rem 3rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column; 
    align-items: flex-end;
    cursor: pointer;
    background: ${theme.primary};
    transition: all 0.3s;
    font-size: 1rem;
`;