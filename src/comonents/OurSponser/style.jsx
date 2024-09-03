
import styled from "@emotion/styled"
import theme from "../../config";

export const SponserWrapper = styled("div")`
    padding: 3rem 0;
    display: flex;
    padding: 3rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; 
    `;

export const Image = styled("img")`
    max-width: 100%; 
    width: 150px;
    height: auto;
    display: block;
    margin: 0 auto
`;

export const Span = styled("span")`
    font-weight: bold;
    padding-right: 1rem;
    font-size: 2rem;
    color: ${theme.black};
`;

export const SpanTwo = styled("span")`
    font-size: 2rem;
    font-weight: bold;
    padding-right: 1rem;
    color: ${theme.primary};
`;
