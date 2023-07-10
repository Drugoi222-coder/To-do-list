import check from "../../assets/img/check.svg";
import trashBin from "../../assets/img/trash_bin.svg";
import pencil from "../../assets/img/pencil.svg";

const ListItemReady = ({ text, completeItem, isOnUpdate, removeItem }) => (
    <>
        <p className="list__text">{text}</p>
        <div className="list__btn-group">
            <button className="list__btn-list-item" onClick={completeItem}>
                <img src={check} alt="Выполнить" />
            </button>
            <button className="list__btn-list-item" onClick={isOnUpdate}>
                <img src={pencil} alt="Изменить" />
            </button>
            <button className="list__btn-list-item" onClick={removeItem}>
                <img src={trashBin} alt="Удалить" />
            </button>
        </div>
    </>
);

export default ListItemReady;
