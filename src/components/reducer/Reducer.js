const Reducer = (card = [], action) => {
  if (action.type === 'ADD') {
    let tempcard = card.filter((item) => item.id === action.payload.id)
    if (tempcard < 1) {
      return [...card, action.payload]
    } else {
      return card
    }
  }
  if (action.type === 'Remove') {
    return card.filter((remove) => remove.id !== action.payload.id)
  }
  if (action.type === 'INC') {
    let inc = card.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    return inc
  }
  if (action.type === 'dec') {
    let inc = card.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    return inc
  }
  return card
}
export default Reducer
