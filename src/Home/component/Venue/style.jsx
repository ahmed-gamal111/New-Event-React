import styled from "@emotion/styled";
import theme from "../../../config";
import back from "../../../Shared/aseets/speakers/work-01.jpg";

export const VenueWrapper = styled("section")`
    height: 500px;
    background: url(${back}) no-repeat center center fixed;
    background-size: cover;
    padding: 6rem 0 2rem 0;
    max-width: 100vw; 
    padding-left: 50px;
    
`;
export const H = styled("h2")`
    color:${theme.primary}

`;
export const P = styled("p")`
    max-width: 600px;
    line-height: 1.5;
`;
export const Span = styled("span")`
    display: block;
    font-size: 1rem;
    font-weight: bold;
    padding: .5rem 0;
    color: ${theme.black};
`;