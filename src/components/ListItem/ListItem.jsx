import { observer } from "mobx-react";
import { conditions } from "../../constants/constants";

const ListItem = observer(({ store }) => {
  const { content, condition } = store;

  const removeItem = () => store.removeTodoItem();
  const completeItem = () => store.completeTodoItem();

  const isCompleted = () => {
    const classNameItemComplete = "list__list-item";
    if (condition === conditions.complete) {
      return classNameItemComplete + " completed";
    } else {
      return classNameItemComplete;
    }
  }

  if (condition && content) {
    return (
      <li className={isCompleted()}>
        <p className="list__text">{content}</p>
        <button onClick={completeItem} className="list__btn-complete">
          <img src="" alt="Выполнено" />
        </button>
        <button onClick={removeItem} className="list__btn-delete">
          <img src="" alt="Удалить" />
        </button>
        <button className="list__btn-update">
          <img src="" alt="Изменить" />
        </button>
      </li>
    );
  }
});

export default ListItem;
