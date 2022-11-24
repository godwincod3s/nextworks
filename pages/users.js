function UserList(){
    // console.log(users)
    return <>
        <h1>List of Users</h1>
        {/* {users.map((user) => {
            return <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        })} */}
    </>
}

export default UserList

// export async function getStaticProps(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // const data = response.json()
//     const data = response.json()

//     // setInterval(() => {console.log(response.json())}, 8000)
//     // response.json().then(res => console.log(res))
    
//     // users: data.then((res) => {
//     //     console.log(res)
//     //     return res
//     // })
//     return {
//         props: {
//             users: data
//         }
//     }
// }