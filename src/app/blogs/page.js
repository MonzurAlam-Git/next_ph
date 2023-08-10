import Link from "next/link";

const blogsLink = [
    {
        id:1,
        year: 2021,
        title: "Blog 1"
    },
    {
        id:2,
        year: 2022,
        title:"Blog 2"
    },
    {
        id:3,
        year: 2023,
        title: "Blog 3"
    },
    {
        id:4,
        year: 2024,
        title: "Blog 4"
    },
]
const blogs = () => {
    console.log("blogs Page rendered");

    return (
        <div className="container mx-auto">
            {
                blogsLink.map(({id,year,title}) =>(
                    <Link className="block border border-blue-500 my-5 p-5" key={id} href={`/blogs/${year}/${id}`}> {title}</Link>
                ))
            }
        </div>
    );
};

export default blogs;