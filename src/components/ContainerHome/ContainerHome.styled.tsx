import styled from "styled-components";

const ContainerHome = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

@media (max-width: 768px) {
    width: 100%;
    height: 100%;
}

@media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: 100%;
}

@media (min-width: 1025px) {
    width: 100%;
    height: 100%;
}
`
export default ContainerHome;