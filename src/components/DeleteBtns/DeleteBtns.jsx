import { useMainStore } from "../../hooks/mainStoreContext";

const DeleteBtns = () => {
  const store = useMainStore();

  const removeFirstItem = () => store.removeFirstItem();
  const removeLastItem = () => store.removeLastItem();

  return (
    <div className="list__delete-btns">
      <p className="list__descr">Удалить:</p>
      <button onClick={removeFirstItem} className="list__btn-first-out">Первый элемент списка</button>
      <button onClick={removeLastItem} className="list__btn-last-out">Последний элемент списка</button>
    </div>
  );
};

export default DeleteBtns;
