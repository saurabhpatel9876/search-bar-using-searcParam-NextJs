
import React from 'react'

const Coin = ({coins}) => {
  return (
    <div>
        <div>
            {coins.map(item => (
                <li key={item.uuid}>
                 <h1>{item.name}</h1>
                 <p>{item.symbol}</p>
                 <p>{item.price}</p>
                </li>
            ))}
        </div>
    </div>
  )
}

export default Coin