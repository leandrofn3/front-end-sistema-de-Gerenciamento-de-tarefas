import React from "react"
import { ContainerNavBar, TextNavBar } from "./NavBar.styled";

const NavBar: React.FC = () => {
    return (
        <React.Fragment>
            <ContainerNavBar>
                <TextNavBar>
                    Sitema de Gerenciamento de Tarefas
                </TextNavBar>
            </ContainerNavBar>
        </React.Fragment>
    );
};

export default NavBar;