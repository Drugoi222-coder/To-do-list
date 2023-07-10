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
        }).reverse()
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
        }).reverse()
    ];
  }

  turnOffAllHighlight() {
    this.toDos = this.toDos.map((item) => {
      item.highlight = false;
      return item;
    });
  }

  removeFirstItem() {
    if (this.startedToDos.length < 1) {
      this.toDos = [...this.completedToDos.reverse()].slice(0,-1);
    } else {
      this.toDos = [...this.startedToDos,...this.completedToDos.reverse()].slice(1);
    }
  }

  removeLastItem() {
    if (this.startedToDos.length < 1) {
      this.toDos = [...this.startedToDos,...this.completedToDos.reverse()].slice(1);
    } else if (this.startedToDos.length > 0 && this.completedToDos.length > 0) {
      this.toDos = [...this.startedToDos,...this.completedToDos].slice(0, -1);
    } else {
      this.toDos = [...this.startedToDos,...this.completedToDos.reverse()].slice(0,-1);
    }
  }

  get completedToDos() {
    const completedArr =  [...this.toDos].filter(
      ({ condition }) => condition === conditions.complete
    );  
    return completedArr.reverse();
  }

  get startedToDos() {
    return [...this.toDos].filter(
      ({ condition }) => condition === conditions.start
    );
  }

  get sortedToDos() {
    return [...this.startedToDos, ...this.completedToDos];
  }
}

export default new MainStore();
