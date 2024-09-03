import styled from "@emotion/styled"
import theme from "../../../config";

export const NavbarWrapper = styled("section")`
  
    padding:1.5rem 0;
    position: fixed;
    width: 100%;
    z-index: 5      ;
    color:${theme.white};
    background-color: ${theme.secondry};
`;
export const NavbarContainer = styled("div")`
     display:flex ;
    align-items:center;
    justify-content:space-between;
`;
export const NavTitle = styled("span")`
    font-size: 1.7rem;
`;
export const Event = styled("span")`
   color: ${theme.primary};
`;
export const Link = styled("a")`
   font-size: 1rem;
   color:${theme.white};
    text-decoration:none;
`;
export const LinksWrapper = styled("div")`
   gap: 1rem;
   display: flex;
   align-items: center;
`; 

