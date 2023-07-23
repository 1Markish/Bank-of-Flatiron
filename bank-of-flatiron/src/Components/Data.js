import React , {useState} from "react"


function Data(){
    const [transactionsData , setTransactionsData] = useState([])
    
    
    fetch('http://localhost:8001/transactions')
    .then((res) => res.json())
    .then((data)=> setTransactionsData(data.transactions))


}


export default Data