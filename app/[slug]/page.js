import Apicall from "@/app/lib/apicall";
import { notFound } from "next/navigation";

async function getAllMenues() {
  const apiPath = "/menu?menu_name=primary-menu&api_key=epG7yb9FHzFP8Y3O";
  const reData = await Apicall(apiPath);
  const { menus } = await reData;
  return menus.map((post) => ({
    slug: post.slug, // Ensure the parameter matches the dynamic segment name in the folder
    title: post.title,
    url: post.url,
    children: post.children,
  }));
}

async function getPostBySlug(slug) {
  const menus = await getAllMenues();
  return menus.find((post) => {
    // console.log("post slug", post.slug);
    // console.log("slug", slug);
    return post.slug === slug;
  });
}

// Function to define the paths to pre-render
export async function generateStaticParams() {
  const fetchMenus = await getAllMenues();
  return fetchMenus.map((post) => ({
    slug: post.slug,
  }));
}

// Page component

export default async function page({ params }) {
  const { slug } = await params;
  // console.log("ss", slug);
  const post = await getPostBySlug(slug); // Destructure params.slug
  //   const post = menus.find((p) => p.id === slug); // Use slug directly
  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
