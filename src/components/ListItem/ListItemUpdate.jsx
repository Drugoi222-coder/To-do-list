const ListItemUpdate = ({
    handleSubmit,
    isOnUpdate,
    updateItem,
    text,
    removeItem,
}) => (
    <form className="list__form" onSubmit={handleSubmit}>
        <input
            type="text"
            onChange={updateItem}
            value={text}
            className="list__text"
        />
        <button className="list__btn-update" onClick={isOnUpdate}>
            <img src="" alt="Готово" />
        </button>
        <button className="list__btn-delete" onClick={removeItem}>
            <img src="" alt="Удалить" />
        </button>
    </form>
);

export default ListItemUpdate;
