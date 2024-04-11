import styled from "styled-components";

export const ContainerInputs = styled.form`
    width: 100%;
    height: 100px;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    gap: 5px;

    > Button {
        width: 150px;
        height: 40px;
        padding: 21px;
    }

    @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    > Button {
    width: 100%;
    margin-top: 10px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    height: auto;

    > Button {
    width: 100%;
    margin-top: 0;
    }
}

@media (min-width: 1024px) {
    flex-direction: row;
    height: 100px;

    > Button {
    width: 170px;
    height: 40px;
    padding: 21px;
    }
}
`;
