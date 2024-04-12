import React from "react"
import { Table, TableContainer, } from "./tableHome.styled";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskMap } from "../../types/TaskMap";

interface TableHomeProps {
    TaskMap: TaskMap[];
    deleted: (idTask: string ) => void;
}

const TableHome: React.FC<TableHomeProps> = ({ TaskMap, deleted}) => {
    return (
        <React.Fragment>
            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descrição</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TaskMap.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td> <Button variant="contained" endIcon={<SendIcon />} color="success" size="small">
                                    Editar
                                </Button>
                                    <Button variant="contained" startIcon={<DeleteIcon />} color="error" size="small" onClick={()=> deleted(item.idTask)} >
                                        Deletar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
};

export default TableHome;