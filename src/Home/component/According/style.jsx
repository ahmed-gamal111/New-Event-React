import styled from "@emotion/styled"
import theme from "../../../config"

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

export const Wrapper = styled("div")`
display: flex;
align-items: center;
justify-content: center;
`;
export const AccordingWrapper = styled("div")`
width: 70%;
margin-bottom: 20px;
box-shadow: 6px 4px 6px -4px ${theme.white};
`;
export const H = styled("h3")`
color:${theme.black};
`;

export const Title = styled("div")`
display: flex;
justify-content: space-between;
text-align: center;
padding: 0 1rem;
align-items: center;
cursor: pointer;
border-radius: 5px;
background-color: ${theme.whiteSmoke};
`;

export const AccordingSwitch = styled("div")`
padding: 0 1rem;
margin: 0 0 0 0.1rem;
overflow: hidden;
max-height: 0;
transition: 0.6s all cubic-bezier(0,1,0,1) ;
&.show{
    height: auto;
    max-height: 9999px;
    transition: 0.6s all cubic-bezier(1,0,1,0) ;
}
`;


