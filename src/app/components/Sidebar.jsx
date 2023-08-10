import Link from "next/link";

const navLinks = [
    {
        url: "/dashboard/admin",
        title: "Admin Panel",
    },
    {
        url: "/dashboard/user",
        title: "User Panel",
    },
    {
        url: "/",
        title: "Home",
    }
]
const Sidebar = () => {
    return (
            <aside className="mr-10">
                <h1 className="text-red-400">Sidebar</h1>
                <ul>
                    {
                        navLinks.map(({url,title}) =>(
                            <li className="my-2" key={url}><Link href={url}>{title}</Link></li>
                        ))
                    }
                </ul>
            </aside>
    );
};

export default Sidebar;