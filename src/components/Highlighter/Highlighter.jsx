import { useMainStore } from "../../hooks/mainStoreContext";
import "./Highlighter.css";

const Highlighter = () => {
  const mainStore = useMainStore();
  const highlightOddTodoItems = () => mainStore.highlightOddTodoItems();
  const highlightEvenTodoItems = () => mainStore.highlightEvenTodoItems();
  const turnOffAllHighlight = () => mainStore.turnOffAllHighlight();

  return (
    <div className="list__filter">
      <p className="list__descr">Выделить элементы:</p>
      <button onClick={highlightEvenTodoItems} className="list__btn">
        Чётные
      </button>
      <button onClick={highlightOddTodoItems} className="list__btn">
        Нечётные
      </button>
      <button onClick={turnOffAllHighlight} className="list__btn">
        Снять выделение
      </button>
    </div>
  );
};

export default Highlighter;
