
import { NavLink } from "react-router-dom"
const searchBar = ({searchTerm,setSearchTerm})=>{
    return (
        <div className='w-full flex justify-center items-center gap-5 border-b border-zinc-400 py-3'>
            <h3>Search:</h3>
            <input value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value)
            }} placeholder='Enter search term' className='border border-zinc-300 px-2 py-1' type="text" />
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    )
}
export default searchBar