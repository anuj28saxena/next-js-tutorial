
export type Post = {
     slug: string;
     title: string;
    description: string;
    content: string;
};

export const posts: Post[] = [  
    {
        slug: "nextjs",
        title: "NEXTjs Basics",
        description: "Learn the basics of Next.js, a powerful React framework for building server-side rendered applications.",
        content: "Next.js is a React framework that enables server-side rendering and static site generation for React applications. It provides features like automatic code splitting, optimized performance, and a great developer experience. With Next.js, you can easily create fast and SEO-friendly web applications."
    },  
    {
        slug: "react",
        title: "React Basics",          
        description: "Learn the fundamentals of React, a popular JavaScript library for building user interfaces.",
        content: "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently. React uses a virtual DOM to optimize rendering performance and provides a declarative syntax for building complex UIs."
    },
    {
        slug: "node",
        title: "Node.js Basics",
        description: "Learn the basics of Node.js, a powerful JavaScript runtime for building server-side applications.",
        content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, enabling you to build scalable and high-performance applications. Node.js uses an event-driven, non-blocking I/O model, making it ideal for building real-time applications and APIs."
    }
];                
        
export function getPosts(){
    return posts ;
}

export function getPostBySlug(slug: string): Post | undefined {
    return posts.find(post => post.slug === slug) ;
}