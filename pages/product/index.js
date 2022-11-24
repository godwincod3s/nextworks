import Link from 'next/link'

function ProductList({productID = [1,2,3,4,5]}){
    {return productID.map((item, i) => {
        if(i === productID.lastIndexOf(productID[productID.length - 1])){
            return <div key={i}><Link href={`/product/${item}`} replace>Product{item}</Link></div>
        }
       return <div key={i}><Link href={`/product/${item}`} >Product{item}</Link></div>
    })}
}

export default ProductList