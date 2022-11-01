import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data } from './data'

const Home = () => {
  const card = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(card)

  return (
    <div className="home">
      {data?.map((item) => {
        item.quantity = 1
        return (
          <div className="card_box" key={item.id}>
            <img src={item.image} alt="" />
            <div className="card_box1">
              <div className="title">{item.title}</div>
              <div className="text">{item.text}</div>
              <p>{item.price} $</p>
              <button onClick={() => dispatch({ type: 'ADD', payload: item })}>
                Add
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
