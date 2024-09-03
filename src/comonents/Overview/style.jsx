import styled from "@emotion/styled"
import 'bootstrap/dist/css/bootstrap.min.css'
import theme from "../../config";


export const OverviewWrapper = styled("div")`   
    text-align: center;
    background-color: ${theme.black};
    width: 100%;
    padding: 5rem 0;
    `;
export const Title = styled("h2")`
    color: #d4d4d4;
`;
export const Descripton = styled("p")`
    color: ${theme.gray};
`;
