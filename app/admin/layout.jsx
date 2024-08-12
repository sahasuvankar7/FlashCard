import React from "react";
import { notFound, redirect } from "next/navigation";
import { auth } from "../../auth";
const layout = async ({ children }) => {
  const session = await auth();
  console.log(session);
//   if (!session?.user) return redirect("/api/auth/signin");
//   if (session?.user?.type != "admin") return redirect("/");
  return (
    <>
      <nav className="flex justify-between">
        <div></div>
        <div>
          <button className="bg-blue-700 text-white rounded-md px-6 py-3 relative top-6">
            Create Card
          </button>
        </div>
      </nav>
      {children}
    </>
  );
};

export default layout;
