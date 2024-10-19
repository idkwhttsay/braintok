import axios from "axios";
import ICourse from "@/api/models/course.model";
import IAssignment from "@/api/models/assignment.model";
import IModule from "@/api/models/module.model";

export default class CanvasClass {
    bearerToken: string;

    constructor(bearerToken: string) {
        this.bearerToken = bearerToken;
    }

    async getAllCourses(): Promise<ICourse[]> {
        const response = await axios.get(
            `https://gatech.instructure.com/api/v1/courses?access_token=${this.bearerToken}`
        );

        const clearedResponse: ICourse[] = [];
        for (let i = 0; i < response.data.length; ++i) {
            clearedResponse.push({
                id: response.data[i].id,
                name: response.data[i].name,
                uuid: response.data[i].uuid,
            } as ICourse);
        }

        return clearedResponse;
    }

    async getCourseById(courseId: number): Promise<ICourse> {
        const response = await axios.get(
            `https://gatech.instructure.com/api/v1/courses/${courseId}?access_token=${this.bearerToken}`
        );

        return {
            id: response.data.id,
            name: response.data.name,
            uuid: response.data.uuid,
        } as ICourse;
    }

    async getAllAssignmentsByCourseId(
        courseId: number
    ): Promise<IAssignment[]> {
        const response = await axios.get(
            `https://gatech.instructure.com/api/v1/courses/${courseId}/assignments?access_token=${this.bearerToken}`
        );

        const clearedResponse: IAssignment[] = [];
        for (let i = 0; i < response.data.length; ++i) {
            clearedResponse.push({
                id: response.data[i].id,
                name: response.data[i].name,
                description: response.data[i].description,
                due_at: response.data[i].due_at,
            } as IAssignment);
        }

        return clearedResponse;
    }

    async getAssignmentById(
        courseId: number,
        assignmentId: number
    ): Promise<IAssignment> {
        const response = await axios.get(
            `https://gatech.instructure.com/api/v1/courses/${courseId}/assignments/${assignmentId}?access_token=${this.bearerToken}`
        );

        return {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            due_at: response.data.due_at,
        } as IAssignment;
    }

    async getCourseModules(courseId: number): Promise<IModule[]> {
        const response = await axios.get(
            `https://gatech.instructure.com/api/v1/courses/${courseId}/modules?access_token=${this.bearerToken}`
        );

        const clearedResponse: IModule[] = [];

        for (let i = 0; i < response.data.length; ++i) {
            clearedResponse.push({
                id: response.data[i].id,
                name: response.data[i].name,
                position: response.data[i].position,
                itemsCount: response.data[i].itemsCount,
                itemsUrl: response.data[i].itemsUrl,
            } as IModule);
        }

        return clearedResponse;
    }

    async getCourseModuleById(
        courseId: number,
        moduleId: number
    ): Promise<IModule> {
        const response = await axios.get(
            `https://gatech.instructure.com/api/v1/courses/${courseId}/modules/${moduleId}?access_token=${this.bearerToken}`
        );

        return {
            id: response.data.id,
            name: response.data.name,
            position: response.data.position,
            itemsCount: response.data.itemsCount,
            itemsUrl: response.data.itemsUrl,
        } as IModule;
    }

    async getFilesOfModuleById(courseId: number, moduleId: number) {
        const res: IModule = await this.getCourseModuleById(courseId, moduleId);

        const items = await axios.get(`${res.itemsUrl}`);

        const files: string[] = [];
        for (let i = 0; i < items.data.length; ++i) {
            if (items.data[i].url) {
                files.push(items.data[i].url);
            }
        }

        return files;
    }

    async getAllFiles() {
        const courses: ICourse[] = await this.getAllCourses();

        const files: string[] = [];

        for (let i = 0; i < courses.length; ++i) {
            const modules = await this.getCourseModules(courses[i].id);

            for (let j = 0; j < modules.length; ++j) {
                const tmp: string[] = await this.getFilesOfModuleById(
                    courses[i].id,
                    modules[i].id
                );

                files.push(...tmp);
            }
        }

        return files;
    }
}
