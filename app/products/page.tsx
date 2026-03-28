
import Link from "next/link" ;
import CurrentFilter from "./CurrentFilter" ;
import {  products } from "@/lib/products";
 
// interface ProductsPageProps {
//     searchParams : {
//         category? : string;
//         sort?: string;   
//     }
// }

type Product = {
    searchParams : Promise  <{
        category? : string;
        page?: string;
    }>;
}

const PAGE_SIZE = 2 ;


// const products = [
//     { id:1, name: "React Course", category: "react" },
//     { id:2, name: "Angular Course", category: "angular" },
//     { id:3, name: "Vue Course", category: "vue" },
//     { id:4, name: "Next js Course", category: "next" },
//     { id:5, name: "MongoDb Course", category: "mongoDb" },
// ]

export default async function ProductsPage({searchParams} : Product){
    const { category , page } = await searchParams ;

    let filtered = products ;

    if(category){
        filtered = filtered.filter(product => product.category === category );
    }

    const currentPage = Number(page) || 1 ;
    const start = (currentPage - 1) * PAGE_SIZE ;

    const paginated = filtered.slice(start, start + PAGE_SIZE) ;


    return (
        <div>
            <h1>
                Products Page
            </h1>


            <div style={{display:"flex", gap:12}}>
                <Link href="/products">All</Link>  
                <Link href="/products?category=react">React</Link>  
                <Link href="/products?category=angular">Angular</Link>
                <Link href="/products?category=vue">Vue</Link>  
                <Link href="/products?category=next">Next</Link>           
            </div>

            <p>
                Current Filter : <b>{category || "All"} </b> | Sort:{" "} 
            </p>

{/* product list */}
            <ul>    
                {paginated.map(product => (
                    <li key={product.id}>{product.name} - <i>{product.category}</i></li>
                ))} 
            </ul>

            <CurrentFilter />

            {/* pagination */}
            <div style={{display:'flex',gap:10}}>
               {currentPage > 1 && (
                    <Link href={`/products?category=${category || ""}&page=${currentPage - 1}`}>
                        Previous
                    </Link>
                )}
                {start + PAGE_SIZE < filtered.length && (
                    <Link href={`/products?category=${category || ""}&page=${currentPage + 1}`}>
                        Next
                    </Link>
                )}
            </div>

        </div>
    )
}