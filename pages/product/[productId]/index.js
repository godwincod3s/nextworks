import {useRouter} from 'next/router'

function ProductDetail(props){
    const router = useRouter()
    console.log(router)

    return <div>Single Product Details of Product{router.query.productId}</div>
}

export default ProductDetail