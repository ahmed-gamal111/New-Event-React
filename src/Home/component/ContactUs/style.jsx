import styled from "@emotion/styled/macro";
import back from "../../../Shared/aseets/speakers/work-01.jpg"; 
import theme from "../../../config";

export const ContactUsWrapper = styled("section")`
    height: 700px;
    background: url(${back}) no-repeat center center fixed;
    background-size: cover;
    padding: 3rem  0;
    max-width: 100vw; 
    gap:1.5rem;
    padding-left: 50px;
`;

export const Span = styled("span")`
    color: ${theme.primary};
`;

export const Half = styled("div")`
    background-color: ${theme.white};
    border-radius: 10%;
    width: 30%;
    margin-left: 3rem;
    text-align: center;
`;

export const InputWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
export const Input = styled("input")`
    outline: none;
    border: none;
    background-color: ${theme.white};
`;

export const TextArea = styled("textarea")`
    outline: none;
    border: none;
    background-color: ${theme.white};
`;

export const Send = styled("button")`
border: 1px solid ${theme.primary};
border-radius: 25px;
color: ${theme.white};
padding: 1rem 4rem;
font-size: 1rem;
margin-top: 6rem;
display: flex;
flex-direction: column; 
align-items: flex-end;
justify-content: flex-end;
cursor: pointer;
background: ${theme.primary};
transition: all 0.3s;
font-size: 1rem;
:hover{
    background: ${theme.black};
    color: ${theme.whiteSmoke};
    border: 1px solid ${theme.black};
}
`;


