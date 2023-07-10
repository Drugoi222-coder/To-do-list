import DeleteBtns from "../DeleteBtns/DeleteBtns";
import Highlighter from "../Highlighter/Highlighter";
import "./ChangeBtns.css";

const ChangeBtns = () => {
  return (
    <div className="list__change-btns">
      <Highlighter />
      <DeleteBtns />
    </div>
  );
};

export default ChangeBtns;
