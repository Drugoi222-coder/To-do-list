import { makeAutoObservable } from "mobx";
import { conditions } from "../constants/constants";

export class ToDoStore {
    condition = conditions.start;
    weight = 0;

    constructor(content) {
        makeAutoObservable(this);
        this.content = content;
    }

    updateTodoItem() {
        return this.content;
    }

    completeTodoItem() {
        if (this.condition === conditions.start) {
            this.condition = conditions.complete;
            this.weight = 100;
        } else if (this.condition === conditions.complete) {
            this.condition = conditions.start;
            this.weight = 0;
        }
    }

    removeTodoItem() {
        this.condition = conditions.remove;
    }
}