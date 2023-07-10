import { useMainStore } from "../../hooks/mainStoreContext";
import ListItem from "../ListItem/ListItem";
import { observer } from "mobx-react";
import "./List.css";
import { AnimatePresence } from "framer-motion";

const List = observer(() => {
  const mainStore = useMainStore();

  return (
    <ul className="list__list">
      <AnimatePresence>
        {mainStore.sortedToDos.map((item) => (
          <ListItem exit={{ y: -15, opacity: 0 }} key={item.id} store={item} />
        ))}
      </AnimatePresence>
    </ul>
  );
});

export default List;
