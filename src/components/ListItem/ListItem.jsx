import { observer } from "mobx-react";
import { conditions } from "../../constants/constants";
import { useState } from "react";

const ListItem = observer(({ store }) => {
  const { content, condition, onReadyTodoItem, onUpdateTodoItem } = store;
  const removeItem = () => store.removeTodoItem();
  const completeItem = () => store.completeTodoItem();
  const isOnUpdate = () => store.isOnUpdate();

  const [text, setText] = useState(content);

  const updateItem = (e) => {
    store.updateTodoItem(e.target.value);
    setText(e.target.value);
  };

  const isCompleted = () => {
    const classNameItemComplete = "list__list-item";
    if (condition === conditions.complete) {
      return classNameItemComplete + " completed";
    } else {
      return classNameItemComplete;
    }
  };

  if (onReadyTodoItem) {
    return (
      <li className={isCompleted()}>
        <p className="list__text">{text}</p>
        <button className="list__btn-complete" onClick={completeItem}>
          <img src="" alt="Выполнено" />
        </button>
        <button className="list__btn-delete" onClick={removeItem}>
          <img src="" alt="Удалить" />
        </button>
        <button className="list__btn-update" onClick={isOnUpdate}>
          <img src="" alt="Изменить" />
        </button>
      </li>
    );
  } else if (onUpdateTodoItem) {
    return (
      <li className={isCompleted()}>
        <input
          type="text"
          onChange={updateItem}
          value={text}
          className="list__text"
        />
        <button className="list__btn-delete" onClick={removeItem}>
          <img src="" alt="Удалить" />
        </button>
        <button className="list__btn-update" onClick={isOnUpdate}>
          <img src="" alt="Готово" />
        </button>
      </li>
    );
  }
});

export default ListItem;
