import { NextResponse } from "next/server"

export async function fetchCoin(){
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',{
        method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0fc2dfad54mshf4ca7c17b1cf486p15dddajsnd597948d06f8',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}

    })
    return response.json()
}

export async function GET(){
    const coins = await fetchCoin()
    return NextResponse.json(coins)
}