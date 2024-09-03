import styled from "@emotion/styled"
import theme from "../../config";


export const SpeakerWrapper = styled("div")`
    width: 100%;
    padding:3rem ;
    text-align: center;
    color:${theme.primary};
    background-color: ${theme.whiteSmoke};

`;

export const H2 = styled("h2")`
    color:${theme.secondry};
`;
export const SpanThree = styled("span")`
    color:${theme.gray};
    font-size: 1rem;
`;
    export const Span = styled("span")`
        font-weight: bold;
        padding-right: 1rem;
        font-size: 2rem;
        color:${theme.black};
    `;
    export const SpanTwo = styled("span")`
        font-size: 2rem;
        font-weight: bold;
        padding-right: 1rem;

        color:${theme.primary};
    `;
