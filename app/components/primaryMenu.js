import Link from "next/link";
import Apicall from "../lib/apicall";

async function getAllMenues() {
  const apiPath = "/menu?menu_name=primary-menu&api_key=epG7yb9FHzFP8Y3O";
  const reData = await Apicall(apiPath);
  const { menus } = await reData;
  return menus.map((post) => ({
    id: post.id,
    slug: post.slug, // Ensure the parameter matches the dynamic segment name in the folder
    title: post.title,
    url: post.url,
    children: post.children,
  }));
}

// Page component

export default async function PrimaryMenu() {
  const fetchMenus = await getAllMenues();
  // console.log(fetchMenus);
  return (
    <header>
      <ul>
        {fetchMenus.map((post) => (
          <li key={post.id}>
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
