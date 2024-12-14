import { useStore } from 'zustand'
import { Store } from '../../common/Store'

const ProductCard = ({product}) => {
    return (
        <div className='border border-zinc-300 size-[350px] flex flex-col items-center p-5'>
            <img className='w-[300px] h-[250px] object-scale-down' src={product.gallery[0]} alt="" />
            <h3 className='mt-5 text-lg font-semibold'>{product.title}</h3>
            <p>{product.currency}{product.price}</p>
        </div>
    )
}
export default ProductCard