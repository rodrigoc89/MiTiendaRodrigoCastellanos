import React from 'react';
import ItemCount from './ItemCount';

function Item({ title, stock, img,precio,id}) {
    return (
        <>
            <div className='card'>
                <img src={img} alt="asd" />
                <div className="card-body">
                    <p>{title}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>${precio}</p>
                    <div className="itemCount">
                        <ItemCount
                            stock={stock} initial={1}
                        />
                    </div>
                </div>
            </div>
        </>
 
    )

}

export default Item;