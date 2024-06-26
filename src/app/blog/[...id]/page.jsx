// "use client";

// import { useParams } from "next/navigation";
// import { useEffect } from "react";

export default function page({params}) {
  // const { id } = useParams();
    const {id} = params;

  // useEffect(() => {
  //   console.log(id);
  // }, [id]);

  return (
    <div>
      <div className="min-h-screen bg-slate-400 w-full items-center justify-center font-mono lg:flex">
        <h1 className="p-12 text-lg font-bold"> This is Blog Details Page for Article id NUMBER {id}</h1>
      </div>
    </div>
  );
}
