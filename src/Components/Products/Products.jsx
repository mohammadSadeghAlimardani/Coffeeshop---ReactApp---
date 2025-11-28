import { useEffect, useState } from "react";
import "./products.css";
import SingleProduct from "./SingleProduct";
import FilterBtn from "./FilterBtn";

const url = "https://api.npoint.io/e0102edc73a1e6726966";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [btns, setBtns] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = (price) => {
        if (totalPrice + price >= 0) {
            setTotalPrice(totalPrice + price);
        }
    };
    const fetchProducts = async () => {
        try {
            let response = await fetch(url);
            let data = await response.json();
            setBtns([
                "all",
                ...new Set(data.map((singleProduct) => singleProduct.category)),
            ]);
            setProducts(data);
        } catch (error) {
            setIsError(true);
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const filterProducts = (textBtn) => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                let response = await fetch(url);
                let data = await response.json();
                if (textBtn === "all") {
                    setProducts(data);
                } else {
                    setProducts(
                        data.filter(
                            (singleProduct) =>
                                singleProduct.category === textBtn
                        )
                    );
                }
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            setIsLoading(false);
        };
        fetchProducts();
    };

    if (isLoading) {
        return (
            <div className="products">
                <div className="circle-loading">
                    <div className="circle-loading-icon"></div>
                </div>
            </div>
        );
    }
    if (isError) {
        return (
            <div className="alert alert-danger">
                <div className="alert-icon">&#10799;</div>
                <p>There was an error</p>
            </div>
        );
    }
    return (
        <div className="products" id="products">
            <section className="section-center">
                <div className="filter-btns">
                    {btns.map((btn) => {
                        return (
                            <FilterBtn
                                key={btn}
                                filterProducts={filterProducts}
                                textBtn={btn}
                            />
                        );
                    })}
                </div>
                <div className="column column-3">
                    {products.map((singleProduct) => {
                        return (
                            <SingleProduct
                                key={singleProduct.id}
                                {...singleProduct}
                                calculateTotalPrice={calculateTotalPrice}
                            />
                        );
                    })}
                </div>
                <div className="total-price">
                    <h3>total price : {totalPrice}$</h3>
                </div>
            </section>
        </div>
    );
};

export default Products;
