import React from 'react';
import Item from './Item';

function ItemList({data}){
    return (
        data.map((item) =>( 
            <Item
            key={item.id}
            stock={item.stock}
            title={item.title}
            img={item.img}
            />
        ))
    )
}

export default ItemList;