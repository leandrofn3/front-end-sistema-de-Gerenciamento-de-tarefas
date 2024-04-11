import { Button, TextField } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { ContainerInputs } from "./Inputs.styled";


interface InputsPropos {
    handleSubmit: (e: FormEvent) => void;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    editMode?: boolean;
}

const Inputs: React.FC <InputsPropos>= ({handleSubmit, setTitle, setDescription, editMode}) => {


    return (
        <React.Fragment>
            <ContainerInputs onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Título" variant="outlined" size="small" fullWidth onChange={e => setTitle(e.target.value)}/>
                <TextField id="outlined-basic" label="Descrição" variant="outlined" size="small" fullWidth onChange={e => setDescription(e.target.value)}/>
                <Button variant="contained" color="success" type="submit" >{editMode ? "Salvar" : "Cadrastrar"}</Button>
            </ContainerInputs>
        </React.Fragment>
    );
};

export default Inputs;