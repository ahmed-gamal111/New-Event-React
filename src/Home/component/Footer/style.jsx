import styled from "@emotion/styled/macro";
import theme from "../../../config";

export const FooterWrapper = styled("div")`
padding: 3rem 0;
text-align: center;
`;

export const Span = styled("span")`
    color: ${theme.primary};
`;

export const Ul = styled("ul")`
    display: flex;
    align-items: center ;
    justify-content: center;
    gap:3rem;
    list-style: none;
`;

export const Li = styled("li")`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 1.5rem;
    color: ${theme.gray};
    display: flex;
    align-items: center ;
    justify-content: center;
    transition: 0.5s all;
    :hover{
        background-color: ${theme.primary};
        color: ${theme.white};
    }
`;

