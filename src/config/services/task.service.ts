import { TaskMap } from "../../types/TaskMap";
import apiService, { ResponseAPI } from "./api.service";

export interface TaskDto {
    id: string;
    title: string;
    description: string;
}

interface createRequest {
    title: string;
    description: string;
};

export type updateRequest = Partial<createRequest> & { idTask: string };

export async function create(datas: createRequest): Promise<ResponseAPI> {
    try {
        const response = await apiService.post("/task/create", datas);

        return {
            ok: response.data?.ok,
            message: response.data?.message,
            code: response.data?.code,
            data: response.data?.data
        };

    } catch (error: any) {
        return {
            ok: error.response.data?.ok,
            message: error.response.data?.message,
            code: error.response.data?.code,
            data: error.response.data?.data
        };
    }
};

export async function listAll() {
    try {
        const response = await apiService.get("/task");

        return {
            ok: response.data?.ok,
            message: response.data?.message,
            code: response.data?.code,
            data: response.data?.data
        };

    } catch (error: any) {
        return {
            ok: error.response.data?.ok,
            message: error.response.data?.message,
            code: error.response.data?.code,
            data: error.response.data?.data
        };
    }
};

export async function update( datas: TaskMap) {
    try {
        const body = { title: datas.title, description: datas.description };

        const response = await apiService.put(`/task/update/${datas.idTask}`, body);

        return {
            ok: response.data?.ok,
            message: response.data?.message,
            code: response.data?.code,
            data: response.data?.data
        };

    } catch (error: any) {
        return {
            ok: error.response.data?.ok,
            message: error.response.data?.message,
            code: error.response.data?.code,
            data: error.response.data?.data
        };
    }
};

export async function deleteT(idTask: string) {
    try {
        const response = await apiService.delete(`/task/delete/${idTask}`);

        return {
            ok: response.data?.ok,
            message: response.data?.message,
            code: response.data?.code,
            data: response.data?.data
        };

    } catch (error: any) {
        return {
            ok: error.response.data?.ok,
            message: error.response.data?.message,
            code: error.response.data?.code,
            data: error.response.data?.data
        };
    }
};