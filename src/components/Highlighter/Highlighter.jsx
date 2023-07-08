import { useMainStore } from "../../hooks/mainStoreContext";

const Highlighter = () => {
    const mainStore = useMainStore();
    const highlightOddTodoItems = () => mainStore.highlightOddTodoItems();
    const highlightEvenTodoItems = () => mainStore.highlightEvenTodoItems();

    return (
        <div className="list__filter">
            <p className="list__descr">Выделить элементы:</p>
            <button onClick={highlightEvenTodoItems} className="list__btn-even">
                Чётные
            </button>
            <button onClick={highlightOddTodoItems} className="list__btn-odd">
                Нечётные
            </button>
        </div>
    );
};

export default Highlighter;
