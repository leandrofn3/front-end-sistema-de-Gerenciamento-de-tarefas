import styled from "styled-components";


export const ContainerNavBar = styled.section`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #48a9cc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

@media (max-width: 768px) {
    width: 100%;
    height: 50px;
    padding: 10px;
}

@media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: 70px;
    padding: 20px;
}

@media (min-width: 1025px) {
    width: 100%;
    height: 70px;
    padding: 20px;
}
`;

export const TextNavBar = styled.h4`
    font-size: 20px;
    font-family: roboto;
    font-weight: 500;
    color: white;

@media (max-width: 768px) {
    font-size: 16px;
}

@media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;
}

@media (min-width: 1025px) {
    font-size: 20px;
}
`;