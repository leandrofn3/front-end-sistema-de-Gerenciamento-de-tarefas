import React, { FormEvent, useState, useEffect } from "react";
import { create, deleteT, listAll, update, updateRequest } from "../config/services/task.service";
import TableHome from "../components/tableHome";
import NavBar from "../components/NavBar";
import Inputs from "../components/Inputs";
import ContainerHome from "../components/ContainerHome";
import { TaskMap } from "../types/TaskMap";

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<TaskMap[]>([]);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [editMode, setEditMode] = useState<string>("")

    function clearInputs() {
        setTitle("");
        setDescription("");
        setTasks([]);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!title || !description) {
            return;
        };

        await create({
            title,
            description
        });

        clearInputs();
        searchForData();
    };

    async function searchForData() {
        const response = await listAll();

        if (response.code !== 200) {
            alert(response.message);
            return;
        };
        setTasks(response.data);
    };

    const deleteTask = async (id: string) => {

        const response = await deleteT(id);

        if (response.code !== 200) {
            console.log(response.message);
            return alert(response.message);
        };

        searchForData();
    };

    const edit = async ( datas: TaskMap) => {
        const response = await update(datas);

        if(response){
            console.log(response.data.idTask)
            setTitle(response.data.title);
            setDescription(response.data.description);
        }
    }
    useEffect(() => {
        searchForData();
    }, []);

    return (
        <ContainerHome>
            <NavBar />
            <Inputs
                handleSubmit={handleSubmit}
                setTitle={setTitle}
                setDescription={setDescription}
            />
            <TableHome TaskMap={tasks} deleted={deleteTask} edit={edit} />
        </ContainerHome>
    );
};

export default Home;
