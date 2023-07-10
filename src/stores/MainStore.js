import { makeAutoObservable } from "mobx";
import { ToDoStore } from "./ToDoStore";
import { conditions } from "../constants/constants";

class MainStore {
    ToDos = [];

    constructor() {
        makeAutoObservable(this);
    }

    highlightEvenTodoItems() {
        this.ToDos = this.SortedToDos.map((item) => {
            item.highlight = false;
            return item;
        }).map((item, index) => {
            if (index % 2 !== 0) {
                item.highlight = true;
            }
            return item;
        });
    }

    highlightOddTodoItems() {
        this.ToDos = this.SortedToDos.map((item) => {
            item.highlight = false;
            return item;
        }).map((item, index) => {
            if (index % 2 === 0) {
                item.highlight = true;
            }
            return item;
        });
    }

    addTodoItem(item) {
        this.ToDos.unshift(new ToDoStore(item));
    }

    removeTodoItem(todoItem) {
        this.ToDos = this.ToDos.filter((item) => item !== todoItem);
    }

    removeFirstItem() {
        this.ToDos.shift();
    }

    removeLastItem() {
        this.ToDos.pop();
    }

    get SortedToDos() {
        const startedToDos = [...this.ToDos].filter(
            ({ condition }) => condition === conditions.start
        );
        const completedToDos = [...this.ToDos]
            .filter(({ condition }) => condition === conditions.complete)
            .reverse();
        return [...startedToDos, ...completedToDos];
    }
}

export default new MainStore();
