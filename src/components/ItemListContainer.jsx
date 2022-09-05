import React, { useState, useEffect } from 'react';
import customFetch from '../Utils/CustomFechts';
import dataFromBD from '../Utils/Data';
import ItemList from './ItemList';



const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        customFetch(2000, dataFromBD)
            .then((datos) => setData(dataFromBD))
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
        <div className="container" id='container'>
            <div className="productCatalog">
                <div className="gridCatalog">
                  
                        <ItemList data={data} />
           
                </div>
            </div>
            </div>
        </>
    )
};



export default ItemListContainer;