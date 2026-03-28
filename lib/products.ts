

export type Product = {
   id: number;
   name: string;
   category: string;
};

    
export const products: Product[] = [
    { id:1, name: "React Course", category: "react" },
    { id:2, name: "Angular Course", category: "angular" },
    { id:3, name: "Vue Course", category: "vue" },
    { id:4, name: "Next js Course", category: "next" },
    { id:5, name: "MongoDb Course", category: "mongoDb" },
]