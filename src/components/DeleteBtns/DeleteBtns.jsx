import { useMainStore } from "../../hooks/mainStoreContext";
import "./DeleteBtns.css";

const DeleteBtns = () => {
  const store = useMainStore();

  const removeFirstItem = () => store.removeFirstItem();
  const removeLastItem = () => store.removeLastItem();

  return (
    <div className="list__delete-btns">
      <p className="list__descr">Удалить:</p>
      <button onClick={removeFirstItem} className="list__btn">
        Первый элемент списка
      </button>
      <button onClick={removeLastItem} className="list__btn">
        Последний элемент списка
      </button>
    </div>
  );
};

export default DeleteBtns;
