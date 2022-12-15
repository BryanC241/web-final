import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import '../comp.css';

const Products = () => {

    /*function to get fakestore api*/
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }

        }
        getProducts();

    }, []);
    /*skelton should show a placeholder for items while render but didnt work*/
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList);
    }

    const searchInput = React.useRef(null);
    useEffect(() => {
        searchInput.current.focus();
    }, [search]);
    const searchProduct = (e) => {
        setSearch(e);
        const updatedSearchList = data.filter((x) => {
            if (e === '') {
                return x;
            }
            else if (x.title.toLowerCase().includes(e.toLowerCase())) {
                return x;
            }
        });
        setFilter(updatedSearchList);
    }


    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                    <button className="btn btn-outline-light me-2" onClick={() => setFilter(data)}>ALL</button>
                    <button className="btn btn-outline-light me-2" onClick={() => filterProduct("men's clothing")}>Men's clothing</button>
                    <button className="btn btn-outline-light me-2" onClick={() => filterProduct("women's clothing")} >Women's clothing</button>
                    <button className="btn btn-outline-light me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-light me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                    <input ref={searchInput} type="text" placeholder="Search" value={search} onChange={(e) => searchProduct(e.target.value)} />
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title}</h5>
                                        <p className="card-text">
                                            ${product.price}
                                        </p>
                                        <NavLink to={`/product/ ${product.id}`} className="btn btn-outline-dark">
                                            Buy Now
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        )
    }





    return (
        <div>
            <div className=" container  py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="shine" >Latest products</h1>
                        <hr />
                    </div>

                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}

export default Products;