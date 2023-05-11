import Link  from "next/link"

function BlogPost({posts}){

    return <div
    style={{
        padding: '1rem'
        }}
    >
        <h2>Blog Posts</h2>
        {posts.map((post) => {
            return <Link key={post.id} href={`/blog/posts/${post.id}`}>
                <div 
                /*onClick={() => router.replace(`/blog/posts/${post.id}`)}*/
                style={{
                    background: '#eee', 
                    borderRadius: '1rem',
                    marginBottom: '2rem',
                    padding: '1rem'
                    }}
                >   
                    <h2>Post {post.id}</h2>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            </Link>
        })}
    </div>
}

export default BlogPost

export async function getStaticProps(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}