import styled from "@emotion/styled"
import theme from "../../../config"
import back from "../../../Shared/aseets/speakers/work-01.jpg"


export const HeaderWrapper = styled("section")`
    height: 100vh;
    background: url(${back}) fixed;
    text-align: center;
    padding: 20% 0;
    background-repeat: no-repeat ;
    background-size: cover;
`;
export const H3 = styled("h3")`
    color: black;
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;
export const H2 = styled("h2")`
    color: black;
    font-size: 3.5rem;
    margin-bottom: 1.6rem;
`;
export const Learn = styled("button")`
    border: 1px solid ${theme.white};
    border-radius: 5px;
    color: ${theme.secondry};
    padding: 1rem 3rem;
    margin-right: 2rem;
    cursor: pointer;
    background: ${theme.white};
    transition: all 0.3s;
    font-size: 1rem;
    :hover{
        color: ${theme.white};
        background: ${theme.primary};
        border: 1px solid ${theme.primary};
    }
`;
export const Register = styled("button")`
    border: 1px solid ${theme.primary};
    border-radius: 5px;
    color: ${theme.white};
    padding: 1rem 3rem;
    cursor: pointer;
    background: ${theme.primary};
    transition: all 0.3s;
    font-size: 1rem;
    :hover{
        color: ${theme.secondry};
        background: ${theme.white};
        border: 1px solid ${theme.white};
    }
`;

