import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Card = () => {
  const card = useSelector((state) => state)
  console.log(card)
  const dispatch = useDispatch()
  const pul = (a, b) => {
    return a + b.price * b.quantity
  }
  const totalprice1 = card.reduce(pul, 0)
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Shopping Film</h1>
      {card?.map((item) => {
        const Dec = () => {
          if (item.quantity > 1) {
            dispatch({ type: 'dec', payload: item })
          } else {
            dispatch({ type: 'Remove', payload: item })
          }
        }
        return (
          <div className="cards" key={item.id}>
            <div className="card_image">
              <img src={item.image} alt="" />
            </div>
            <div className="cards_text">
              <div className="title">{item.title}</div>
              <p>{item.text}</p>
              <h3>summa {item.price} $</h3>
            </div>
            <div className="counter">
              <button onClick={() => dispatch({ type: 'INC', payload: item })}>
                +
              </button>
              <span>{item.quantity}</span>
              <button
                //   onClick={() => dispatch({ type: 'dec', payload: item })}
                onClick={Dec}
              >
                -
              </button>
            </div>
            <div className="total">{item.quantity * item.price} $</div>
            <div
              className="delete"
              onClick={() => dispatch({ type: 'Remove', payload: item })}
            >
              remove
            </div>
          </div>
        )
      })}
      <div>{totalprice1 && <h1>Jami mahsulot summasi {totalprice1}</h1>}</div>
    </div>
  )
}

export default Card
