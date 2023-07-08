import { nanoid } from "nanoid";
import { useMainStore } from "../../hooks/mainStoreContext";
import ListItem from "../ListItem/ListItem";
import { observer } from "mobx-react";

const List = observer(() => {
    const mainStore = useMainStore();

    return (
        <ul className="list__list">
            {mainStore.SortedToDos.map((item) => (
                <ListItem key={nanoid()} store={item} />
            ))}
        </ul>
    );
});

export default List;
