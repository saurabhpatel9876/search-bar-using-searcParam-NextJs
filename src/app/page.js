"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";
import SearchCoin from "./components/SearchCoin";

export default function Home() {
  const [coins,setCoins]=useState([])
  useEffect(()=>{
    const getCoins=async()=>{
      const response = await fetch('/api/coins');
        const coin = await response.json();
        setCoins(coin.data.coins);
    }
    getCoins()
  },[])
  return (
<>
 <div>
 <SearchCoin getSearchCoin={(results)=>setCoins(results)}/>
  <Coin coins={coins}/>
 
 </div>
</>
  );
}
