import { observer } from "mobx-react";
import { switchComplete, switchHighlight } from "../../utils/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import ListItemReady from "./ListItemReady";
import ListItemUpdate from "./ListItemUpdate";
import "./ListItem.css";

const handleSubmit = (e) => e.preventDefault();

const ListItem = observer(({ store }) => {
  const { content, condition, onUpdate, highlight } = store;
  const removeItem = () => store.removeTodoItem();
  const completeItem = () => store.completeTodoItem();
  const isOnUpdate = () => store.isOnUpdate();
  const [text, setText] = useState(content);

  const updateItem = (e) => {
    store.updateTodoItem(e.target.value);
    setText(e.target.value);
  };

  const switchEffects = () => {
    const isCompleted = switchComplete(condition);
    const isHighlighted = switchHighlight(highlight);
    return `list__list-item ${isCompleted} ${isHighlighted}`;
  };

  return (
    <motion.li
      exit={{ y: -15, opacity: 0 }}
      initial={{ y: -15, opacity: 0 }}
      animate={highlight ? { y: 0, opacity: 1, x: 15 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={switchEffects()}
    >
      {onUpdate ? (
        <ListItemUpdate
          highlight={highlight}
          handleSubmit={handleSubmit}
          isOnUpdate={isOnUpdate}
          updateItem={updateItem}
          text={text}
          removeItem={removeItem}
        />
      ) : (
        <ListItemReady
          highlight={highlight}
          text={text}
          completeItem={completeItem}
          isOnUpdate={isOnUpdate}
          removeItem={removeItem}
        />
      )}
    </motion.li>
  );
});

export default ListItem;
