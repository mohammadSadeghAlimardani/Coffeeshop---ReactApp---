const FilterBtn = ({ textBtn, filterProducts }) => {
    return (
        <button
            className="btn btn-inline-brown"
            onClick={() => filterProducts(textBtn)}
        >
            {textBtn}
        </button>
    );
};

export default FilterBtn;
