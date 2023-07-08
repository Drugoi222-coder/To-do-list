const ListItemReady = ({
    text,
    completeItem,
    isOnUpdate,
    removeItem,
}) => (
    <>
        <p className="list__text">{text}</p>
        <button className="list__btn-complete" onClick={completeItem}>
            <img src="" alt="Выполнить" />
        </button>
        <button className="list__btn-update" onClick={isOnUpdate}>
            <img src="" alt="Изменить" />
        </button>
        <button className="list__btn-delete" onClick={removeItem}>
            <img src="" alt="Удалить" />
        </button>
    </>
);

export default ListItemReady;
