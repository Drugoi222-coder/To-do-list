import { makeAutoObservable } from "mobx";
import { ToDoStore } from "./ToDoStore";
import { conditions } from "../constants/constants";

class MainStore {
  toDos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodoItem(item) {
    this.toDos.unshift(new ToDoStore(item));
  }

  removeTodoItem(todoItem) {
    this.toDos = this.toDos.filter((item) => item !== todoItem);
  }

  highlightEvenTodoItems() {
    this.toDos = [
      ...this.startedToDos.map((item, index) => {
        item.highlight = index % 2 !== 0;
        return item;
      }),
      ...this.completedToDos
        .map((item) => {
          item.highlight = false;
          return item;
        })
        .reverse(),
    ];
  }

  highlightOddTodoItems() {
    this.toDos = [
      ...this.startedToDos.map((item, index) => {
        item.highlight = index % 2 === 0;
        return item;
      }),
      ...this.completedToDos
        .map((item) => {
          item.highlight = false;
          return item;
        })
        .reverse(),
    ];
  }

  turnOffAllHighlight() {
    this.toDos = this.toDos.map((item) => {
      item.highlight = false;
      return item;
    });
  }

  removeFirstItem() {
    this.toDos.shift();
  }

  removeLastItem() {
    this.toDos.pop();
  }

  get completedToDos() {
    return [...this.toDos].filter(
      ({ condition }) => condition === conditions.complete
    );
  }

  get startedToDos() {
    return [...this.toDos].filter(
      ({ condition }) => condition === conditions.start
    );
  }

  get sortedToDos() {
    return [...this.startedToDos, ...this.completedToDos.reverse()];
  }
}

export default new MainStore();
