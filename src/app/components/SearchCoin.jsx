"use client"

import React, { useState } from 'react'

const SearchCoin = ({getSearchCoin}) => {
  const[query,setQuery]=useState('')
  const handleSearch = async(event)=>{
    event.preventDefault()
    const coin = await fetch(`/api/coins/seach?query=${query}`)
    const response = coin.json()
    getSearchCoin(response)
  }
  return (
    <div className=' text-center  my-20'>
      <form onSubmit={handleSearch}>
        <input type='text' placeholder='coin name'/>
        <button type='submit'>seach</button>
      </form>
    </div>
  )
}

export default SearchCoin