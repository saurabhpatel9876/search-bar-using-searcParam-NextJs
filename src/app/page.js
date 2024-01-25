"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";

export default function Home() {
  const [coins,setCoins]=useState([])
  useEffect(()=>{
    const getCoins=async()=>{
      // const response = await fetch('/api/coins')
      // const coin = response.json()
      // setCoins(coin.data.coins)

   
        const response = await fetch('/api/coins');
        const coin = await response.json();
        setCoins(coin.data.coins);
    }
    getCoins()
  },[])
  return (
<>
 <div>
  <Coin coins={coins}/>
 </div>
</>
  );
}
