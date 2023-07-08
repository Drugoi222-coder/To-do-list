import { makeAutoObservable } from "mobx";
import { ToDoStore } from "./ToDoStore";

export default class MainStore {
  ToDos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodoItem(item) {
    this.ToDos = this.ToDos.filter(({condition}) => condition);
    this.ToDos.push(new ToDoStore(item));
  }

  removeFirstItem() {
    this.ToDos.pop();
  }

  removeLastItem() {
    this.ToDos.shift();
  }

  get SortedToDos() {
    const rawArr = [];
    this.ToDos.forEach((item) => {
      if (item.weight === 0) {
        rawArr.unshift(item);
      } else if (item.weight === 100) {
        rawArr.push(item);
      }
    })
    return rawArr;
  }
}
