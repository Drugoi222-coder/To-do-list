import check from "../../assets/img/check.svg";
import trashBin from "../../assets/img/trash_bin.svg";

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
    <div className="list__btn-group">
      <button className="list__btn-list-item" onClick={isOnUpdate}>
        <img src={check} alt="Готово" />
      </button>
      <button className="list__btn-list-item" onClick={removeItem}>
        <img src={trashBin} alt="Удалить" />
      </button>
    </div>
  </form>
);

export default ListItemUpdate;
