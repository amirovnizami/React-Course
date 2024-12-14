import React from "react"
import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import ProductCard from "./ProductCard"
import { useStore } from "zustand"
import {Store} from "../../common/Store"

const Products = () =>{
    const {theme,toggle} = useStore(Store)
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
        <div className={`w-full h-full ${theme === "light" ? "bg-white" : "bg-zinc-500"}`}>
            <SearchBar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
            <div className="grid grid-cols-3 gap-10 p-10">
                {products?.map((product,index) => <ProductCard key = {index} product =  {product}/>)}
                {/* <button onClick={}></button> */}
            </div>
        </div>
    )
}

export default Products