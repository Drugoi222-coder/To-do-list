import { makeAutoObservable } from "mobx";
import { conditions } from "../constants/constants";
import MainStore from "./MainStore";

export class ToDoStore {
    condition = conditions.start;
    onUpdate = false;
    highlight = false;

    constructor(content) {
        makeAutoObservable(this);
        this.content = content;
    }

    isOnUpdate() {
        if (this.onUpdate === false) {
            this.onUpdate = true;
        } else {
            this.onUpdate = false;
        }
    }

    updateTodoItem(newContent) {
        this.content = newContent;
    }

    completeTodoItem() {
        if (this.condition === conditions.start) {
            this.condition = conditions.complete;
        } else {
            this.condition = conditions.start;
        }
    }

    removeTodoItem() {
        MainStore.removeTodoItem(this);
    }
}
