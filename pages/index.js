import Link from 'next/link'
import {useRouter} from 'next/router'

function Home() {
  const router = useRouter();

  const handleClick = () => {
    return {
      placeOrder: () => {
        console.log('placing your order')
        router.push('/product')
      }
    }
  }

  return<>
    <h1>Home page</h1>
    <nav>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/product">Products</Link>
      <Link href="/docs">Docs</Link>
    </nav>

    <button onClick={handleClick().placeOrder}>Place Order</button>
  </>
}

export default Home