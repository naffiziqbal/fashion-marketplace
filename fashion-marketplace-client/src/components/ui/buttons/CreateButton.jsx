import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <div>
      <button className="btn__ghost border">
        <Link to={'/create-product'} >
          Create
        </Link>
      </button>
    </div>
  );
};

export default CreateButton;
