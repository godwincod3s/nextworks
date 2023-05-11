import {useRouter} from 'next/router'

function Post({post}){
    const router = useRouter()

    return <div     style={{
        padding: '1rem'
        }}>
     <div
                     style={{
                        background: '#eee', 
                        borderRadius: '1rem',
                        marginBottom: '2rem',
                        padding: '1rem'
                        }} 
     >
        
    <h1>Post {post.id}</h1>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    </div>  

    <button onClick={() => router.push('/blog/posts')}>back to posts</button>
    </div>
}

export default Post

// Generates `/posts/1` and `/posts/2`
//check back to know why you needed to add getStaticPaths to manually expose a
//dynamic route to the params object.
export async function getStaticPaths(ctx) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    ctx.win = 23;

    // let data = {length: 100}
    let arr = [];
    for (let i = 0; i < data.length; i++){
        arr.push({params: {postID: `${i}`}})
    }

    return {
      paths: arr,
      fallback: false, 
    }
  }

export async function getStaticProps( ctx ){

    const { params } = ctx;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
    const data = await response.json()

    return{
        props: {
            post: data
        }
    }
}