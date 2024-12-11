import React from "react"
import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import ProductCard from "./components/ProductCard"
const Homepage = () =>{
    const [products,setProducts] = useState([])
    const [searchTerm,setSearchTerm] = useState(null)
    const [pageSize,setPageSize] = useState(10)

    const getProducts = async ()=>{
        const response = await fetch(searchTerm? `http://localhost:3000/api/products?searchTerm=${searchTerm}&pageSize=${pageSize}`: `http://localhost:3000/api/products?pageSize=${pageSize}`)

        const data = await response.json()

        setProducts(data.products)
    }
    useEffect(()=>{
        getProducts()
    },[searchTerm,pageSize])

    return(
        <>
            <SearchBar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
            <div className="grid grid-cols-3 gap-10 p-10">
                {products?.map((product,index) => <ProductCard key = {index} product =  {product}/>)}
                {/* <button onClick={}></button> */}
            </div>
        </>
    )
}

export default Homepage