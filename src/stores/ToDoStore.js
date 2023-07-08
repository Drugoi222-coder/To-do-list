import { makeAutoObservable } from "mobx";
import { conditions } from "../constants/constants";

export class ToDoStore {
    condition = conditions.start;
    weight = 0;
    onUpdate = false;

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
            this.weight = 100;
        } else if (this.condition === conditions.complete) {
            this.condition = conditions.start;
            this.weight = 0;
        }
    }

    removeTodoItem() {
        this.condition = conditions.remove;
    }

    get onReadyTodoItem() {
        return this.condition && this.content && !this.onUpdate;
    }

    get onUpdateTodoItem() {
        return this.condition && this.content && this.onUpdate;
    }
}