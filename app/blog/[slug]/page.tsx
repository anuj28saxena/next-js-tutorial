import type { Metadata } from 'next' ;
import { title } from 'process';
import { getPostBySlug } from '@/lib/posts'; 

interface BlogPageProps{
    params: {
        slug: string;
    }
}

type Props = {
    params: Promise<{slug: string}>
}

async function getPostData(slug: string){
    return {
        title: `Post about ${slug}`,
        content: `This is the content of the post about ${slug}.`   
    }
}

// dynamic seo 

export async function generateMetadata({params}: Props): Promise<Metadata>{
    const {slug} = await params ;
    const postData = await getPostBySlug(slug) ;

      if(!postData){
            return {
                title: "Post Not Found",
            }
        }

    return {
        title: postData.title,
        description: postData.description, 
        openGraph : {
            title: postData.title,
            description: postData.description,
            images: ["/og-image.png"]
        }
    }
}

// Page content

// const blogData : Record<string , {title: string, content: string}> = {
//     "nextjs" : {
//         title: "NEXTjs Basics",
//         content: "asffb fdbfdb fdb"
//     },
//     "react" : {
//         title: "react Basics",
//         content: "asffb dsggs fdb"
//     },
//     "node" : {
//         title: "node Basics",
//         content: "asffb fddsbfdb fdb"
//     }
// };

export default async function PostPage({params}: Props){
        const {slug} = await params ;   

        const post =  getPostBySlug(slug) ;

        if(!post){
            return <h1>post not Found</h1>
        }

        return (
            <article>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <p>{post.content}</p>
            </article>
        )
}