import { observer } from "mobx-react";
import { conditions } from "../../constants/constants";
import { useState } from "react";
import ListItemReady from "./ListItemReady";
import ListItemUpdate from "./ListItemUpdate";

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

    const switchHighlight = () => {
        if (highlight === true) {
            return " highlighted";
        } else {
            return null;
        }
    };

    const switchComplete = () => {
        if (condition === conditions.complete) {
            return " completed";
        } else {
            return null;
        }
    };

    const switchEffects = () => {
        let classNameItemComplete = "list__list-item";
        const isCompleted = switchComplete();
        const isHighlighted = switchHighlight();
        if (isCompleted) {
            classNameItemComplete += isCompleted;
        }
        if (isHighlighted) {
            classNameItemComplete += isHighlighted;
        }
        return classNameItemComplete;
    };

    return (
        <li className={switchEffects()}>
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
        </li>
    );
});

export default ListItem;
