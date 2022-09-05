import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className='card'>
              <img src="https://i.postimg.cc/pXFTDTfw/kja.webp" alt="asd" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="itemCount">
                  <ItemCount
                    stock={5} initial={1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className='card'>
              <img src="https://i.postimg.cc/pXFTDTfw/kja.webp" alt="asd" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="itemCount">
                  <ItemCount
                    stock={5} initial={1}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>

  )

}

export default ItemListContainer;