import Link from "next/link";

export default function page() {
  const blogs = [
    {
      id: 1,
      name: "This is About Arts of Manson .",
    },
    {
      id: 2,
      name: "Man of the black Lake !",
    },
    {
      id: 3,
      name: "Hollway max bmf UFC sp .",
    },
  ];
  return (
    <div>

      <div className="min-h-screen bg-red-200 w-full items-center justify-center font-mono lg:flex">
        <br />
        <h1 className="text-lg font-bold">Blogs </h1> :
        <div>
          {blogs.map((blog) => (
            <Link  key={blog.id} href={`/blog/${blog.id}`}>
              <h2 className="m-6 bg-white p-4 rounded-md  hover:bg-violet-300">{blog.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
