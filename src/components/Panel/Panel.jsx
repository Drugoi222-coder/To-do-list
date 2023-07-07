import { useState } from "react";
import { useMainStore } from "../../hooks/mainStoreContext";

const Panel = () => {
  const mainStore = useMainStore();
  const [inputText, setInputText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="list__search-panel">
      <input onChange={(e) => setInputText(e.target.value)} type="text" className="list__input" />
      <button onClick={() => mainStore.addTodoItem(inputText)} className="list__add-btn">Добавить</button>
    </form>
  );
};

export default Panel;
