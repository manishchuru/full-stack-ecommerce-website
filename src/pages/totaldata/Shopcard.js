import React from 'react';

import { useCart } from 'react-use-cart';
import './product.css'
const Shopcard = () => {
    const {
        isEmpty,
        totalItems,
        items,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        emptyCart,
        removeItem
    } = useCart();
    return (
      <div>
      <section className='py-4 container  choose'>
      <div className="row justify-content-center">
      <div className="col-12">
      <h5>Cart({totalUniqueItems}) total items: ({totalItems})</h5>
      <table className='table table-light table-hover m-0'>
      <tbody>
      {items.map((value)=>{
       return(   <tr>
          <td>
          <img src={value.img} alt={value.alt} />
          </td>
          <td>{value.price}</td>
          <td>quantity{value.quantity}</td>
          <td>
          <button 
          className='btn-danger add'
          onClick={()=> updateItemQuantity(value.id , value.quantity-1)}>-</button>
          <button  className='btn-dark sub' 
          onClick={()=> updateItemQuantity(value.id , value.quantity+1)}
          >+</button>
          <button className='btn-info remo'
           onClick={()=>removeItem(value.id)}>delete</button>
          
          </td>
          </tr>
       )
      })}
      </tbody>
      </table>
      </div>
      <div className="col-auto">
      <h2>Total price:${cartTotal}</h2>
      </div>
      <div className="col-auto">
      <button className="btn-info"
      onClick={()=>{emptyCart()}}> clear cart</button>
      </div>
      <button className="btn-primary col-2">Buy now</button>
      </div>
      </section>
      <div className="pages">
      
      Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nemo corrupti veniam quaerat harum laborum quasi eius mollitia officia. Nam nulla debitis natus nihil quasi corrupti neque sunt veritatis nostrum numquam nisi quisquam, aliquid rem dolores. Suscipit alias ad magni hic corrupti voluptatum accusantium? Repellendus pariatur corrupti animi officia vel rem aut hic! Mollitia, odit! Impedit blanditiis numquam corporis quidem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci atque vero quam aliquid fugit dolorem, similique perferendis beatae facere officia qui repellat quia laudantium. Accusantium cupiditate harum, itaque tenetur nulla vel corporis magnam vero a ex libero veniam recusandae aut accusamus culpa fuga? Consequuntur est exercitationem perspiciatis repellendus odit Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates id facere quae laborum fuga accusantium esse quam dolor eaque, voluptatibus eveniet nesciunt quia perferendis fugiat aspernatur itaque soluta rem deleniti ex dolorem. Velit obcaecati maxime hic esse laboriosam dicta eveniet tempora earum repellendus, iste, assumenda cupiditate in deleniti consequuntur exercitationem sint consectetur reprehenderit soluta inventore nam nobis ea alias? Natus numquam molestias consequatur porro enim ea placeat, rem minima nihil non tempore reiciendis optio vero. Quam quaerat cumque porro tempore enim, aliquid error at amet assumenda laudantium quod ea laborum, qui, debitis cum ipsum reprehenderit aspernatur expedita voluptas. Hic voluptas saepe laborum quam magni cupiditate nam enim. Incidunt esse, cumque reprehenderit provident iusto temporibus! Mollitia asperiores aliquid excepturi reprehenderit minima deserunt incidunt, aut blanditiis voluptas nulla ipsam nostrum eaque neque exercitationem porro sapiente magni. Porro commodi eius ad nesciunt non possimus illum beatae, officia neque obcaecati totam deserunt. Laboriosam quae, inventore nesciunt illo perferendis id. Praesentium qui earum quae necessitatibus labore sunt eveniet dolor fuga dicta a quod corrupti dolores officia debitis, aliquam molestiae odit ullam cupiditate autem ipsum mollitia magnam, voluptate deserunt amet! Dolorem illo, laudantium excepturi asperiores distinctio consectetur inventore ratione cumque commodi,</div>
      </div>
    );
}

export default Shopcard;
