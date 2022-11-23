// import Link from 'next/router'

function ProductList({productID = [1,2,3,4,5]}){
    {productID.map((item, i) => {
       // <div><Link href={`/products/${item}`} >Product{item}</Link></div>
        if(i === productID.lastIndexOf(productID[productID.length - 1])){
            // <div><Link href={`/products/${item}`} replace>Product{item}</Link></div>
        }
    })}

    return<div>Product1</div>
}

export default ProductList