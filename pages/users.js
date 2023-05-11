function UserList({users}){
    // console.log(users)
    return <div
    style={{
        padding: '1rem'
        }}
    >
        <h1>List of Users</h1>
        {users.map((user) => {
            return <div 
            key={user.id} 
            style={{
                background: '#eee', 
                borderRadius: '1rem',
                marginBottom: '2rem',
                padding: '1rem'
                }}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        })}
    </div>
}

export default UserList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = response.json()
    const data = await response.json()
    
    return {
        props: {
            users: data
        }
    }
}