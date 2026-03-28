"use client"

// // import Image from 'next/image'
// import Counter from './components/Counter'
// import Link from 'next/link'

// export default async function Home(){

//   const data= await fetch("https://jsonplaceholder.typicode.com/posts").then((res)=> res.json())
//   return (

//     <div>
//       <p>Server Component</p>
//       <Link href="/server-client-demo">Server Client Demo</Link>
//       {/* <ul>
//         {data.map((item)=>(
//           <li key={item.id}>
//             <h3>{item.title}</h3>
//             <p>{item.body}</p>
//           </li>
//         ))}
//       </ul> */}
//       <Counter />
//     </div>

//     // <main style={{padding: "40px" }}>
//     //   <p> This is Main Component</p>

//     //   <Image src="/vercel.svg" alt="Next.js Logo" width={200} height={300} 
//     //   priority 
//     //   />

//     // </main>

//   )
// }

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// export default async function Home() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts" , { 
//       cache: "no-store", 
//       next : {revalidate: 1} 
//     }) ; // to avoid caching and get fresh data on every request


//   const posts: Post[] = await res.json();

//   throw new Error("Failed to fetch posts") ; // to test error handling
//   return (
//     <div>
//       <h1>Posts fetch from Server</h1>
//       <ul>
//         {posts.slice(0, 5).map(post => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default async function HomePage() {
//   const res = await fetch('http://localhost:3001/api/posts');
//   const posts = await res.json();

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <ul>
//         {posts.map((post: { id: number; title: string; content: string }) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useEffect, useState } from "react"


type Post = {
  id: number;
  title : string;
  content : string;
}

export default function HomePage(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  

  const [users, setUsers]= useState([]);
  const [editId , setEditId] = useState(null);
 
  const [posts, setPosts] = useState<Post[]>([]) ;
  const [title, setTitle] = useState("") ;
  const [content, setContent] = useState("") ;
  const [id, setId] = useState("") ;

  async function getPosts(){
    const res = await fetch('http://localhost:3001/api/posts');
    const data = await res.json() ;
    setPosts(data) ;
  }

  async function createPost(){
    const res = await fetch('http://localhost:3001/api/posts', {
      method : "POST",
      headers : { 
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({ 
        title,
        content
      })
    }) ;

    setContent("") ;
    setTitle("") ;
    getPosts() ;

  }

  async function patchPost(){
     await fetch(`/api/posts/${id}`, {
      method : "PATCH",
      headers : { 
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({ 
        title,
      })
    }) ;
 
    setTitle("") ;
    setId("") ;
    getPosts() ;
  }

  async function putPost(){
     await fetch(`/api/posts/${id}`, {
      method : "PUT", 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        title,
        content
      })
    }) ;
    setTitle("") ;
    setContent("") ;
    setId("") ;
    getPosts() ;
  }

  async function deletePost(){
    await fetch(`/api/posts/${id}`, {
      method : "DELETE"
    }) ;
    setId("") ;
    getPosts() ;
  }

  
  // load data 

  useEffect(()=>{
    getPosts() ;
    fetchUser();  
  }, [])

  // get user

  const fetchUser = async () => {
    const res = await fetch('api/users')
    const data = await res.json();
    setUsers(data.data);
  }


  // Create USer or Update User

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Update User
    if(editId){
      await fetch(`api/users/${editId}`, {
        method:"PUT",
        headers:{
           "Context-Type":"application/json",
        },
        body: JSON.stringify({name,email})
        
      })

      alert("User updated");
      setEditId(null);
      setName("")
      setEmail("")
      fetchUser();

    } else{
      // Add user

      const res = await fetch("/api/users",{
            method: "POST",
            headers:{
              "Context-Type":"application/json"
            },
            body: JSON.stringify({name,email})
        });
        
        const data = await res.json();
        console.log(data);
        
        alert("USer created");

        setName("")
        setEmail("")

        fetchUser();

    }
  }

  const handleEdit = (user: any) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user._id);

  }

  const handleDelete = async (userId: string) => {
    await fetch(`api/users/${userId}`, {
      method: "DELETE"
    }) ;
    alert("User deleted");
    fetchUser();
  }

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const res = await fetch("/api/users",{
  //       method: "POST",
  //       headers:{
  //          "Context-Type":"application/json"
  //       },
  //       body: JSON.stringify({name,email})
  //   });
    
  //   const data = await res.json();
  //   console.log(data);
    
  //   alert("USer created");

  //   setName("")
  //   setEmail("")

  // }


  return (
    <div style={{padding:20}}>
      <h1>GET, Patch AND POST and Delete API</h1>
      <button onClick={getPosts}>Get Posts</button>

      <div style={{marginTop:20}}>

        <input type="text" placeholder="ID(for PATCH put and Delete)" value={id} onChange={(e)=> setId(e.target.value)} />

        <br />
        <input type="text" placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <br />
        <textarea placeholder="Content" value={content} onChange={(e)=> setContent(e.target.value)} />
        <br />
        <button onClick={createPost}>Create Post</button>

        <button onClick={patchPost}>PATCH</button>

        <button onClick={putPost}>Put</button>

        <button onClick={deletePost}>Delete</button>

        </div>

      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>

      <div>
        <h1>{ editId ? "Updated User" : "Create User" }</h1>
        <br />  
        <form onSubmit={handleSubmit}>
          <input type="text" 
            placeholder="Enter name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />

          <br />

            <input type="text"  
            placeholder="Enter email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />

          <br />

          <button type="submit">{editId ? "Updated User" : "Create User"}</button>

        </form>

        <hr />

        <h2>Users List</h2>
        <ul>
        {
          users.map((user: any)=>(
            <li>
              <span key={user._id}>{user.name} : {user.email} </span>
              <button onClick={()=>handleEdit(user)}>Edit User</button>
              <button onClick={()=>handleDelete(user._id)}>Delete User</button>
            </li>  
          ))
        } 
        </ul>


      </div>

    </div>
  )

}
