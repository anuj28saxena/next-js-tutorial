
import Link from 'next/link';
import type { Metadata } from 'next' ;
import { getPosts } from '../../lib/posts';

const blogs = [
    {slug:"nextjs",title:"NEXTjs Basics"},
    {slug:"react",title:"react Basics"},
    {slug:"node",title:"node Basics"},
]

export const metadata: Metadata = {
  title: 'blog' ,
  description: 'Latest Blog page',
  openGraph : {
    title: 'Blog | My Next.js App',
    description: 'Latest Blog page',
    images: ["/og-image.png"]
  },
  twitter:{
    card: 'summary_large_image',
    title:  'Blog | My Next.js App',
    description: 'Latest Blog page',
    images: ["/og-image.png"]
  }
} 

export default function BlogPage(){

  const posts = getPosts() ;

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {
            posts.map((post)=> (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}