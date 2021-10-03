import fetch from "node-fetch";

export async function getData() {
    const currencies = ['usd', 'eur', 'uah', 'gbp', 'aud', 'chf']
    const randomValue = Math.floor(Math.random() * currencies.length);
    const res = await fetch(`https://api.cryptonator.com/api/ticker/btc-${currencies[randomValue]}`)
    const text = await res.json()
    console.log(text);
}

