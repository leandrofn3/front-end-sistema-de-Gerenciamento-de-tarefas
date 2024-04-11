import { styled } from "styled-components";

export const TableContainer = styled.div`
    width: 1000px;
    overflow: auto;
    margin-top: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

@media (max-width: 768px) {
    width: 100%;
}
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

th,
td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd;

    > Button {
        margin-left: 2.5px;
    }
}

th {
        background-color: #f2f2f2;
        font-weight: bold;
}

@media (max-width: 768px) {
    thead {
    display: none;
    }

    tr {
        display: flex;
        flex-direction: column;
    }

    td {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        padding: 1rem 0;

    > Button {
        margin-left: 2.5px;
    }
}

    td:first-child {
        font-weight: bold;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    th,
    td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #ddd;

    > Button {
        margin-left: 2.5px;
    }
}

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }
}

@media (min-width: 1025px) {
    th,
    td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #ddd;

    > Button {
        margin-left: 2.5px;
    }
}

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }
}
`;