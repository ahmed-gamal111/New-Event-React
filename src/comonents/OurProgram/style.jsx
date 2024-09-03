import styled from "@emotion/styled"
import theme from "../../config";

export const OurProgramWrapper = styled("div")`
    padding: 1rem 0;
    gap:3rem;
`;
export const Image = styled("img")`
    width: 100%;
    border-radius: 50%;
`;
export const ImageWrapper = styled("div")`
    width:10%;
`;
export const IconWrapper = styled("div")`
    display: flex;
    gap: 2rem;
`;
export const Title = styled("h2")`
    color:${theme.gray}
`;
;export const Name = styled("span")`
    color:${theme.white}
`;
export const Description = styled("p")`
    color:${theme.white}
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
export const Line = styled("div")`
    height: 2px;
    background-color: ${theme.gray};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;  
`;
export const Wrapper = styled("div")`
    display: flex;
    gap: 2rem;
    position: relative;

`;
export const SpanTap = styled("span")`
    font-weight: bold;
    display: block;
    cursor: pointer;
    padding: 10px 0;
    color: ${({ isActive }) => (isActive ? theme.primary : '#000')};
    border-bottom: ${({ isActive }) => (isActive ? `4px solid ${theme.primary}` : 'none')};
    transition: all 0.2s ease;


    &:hover {
        color: ${theme.black};
    }
`;
