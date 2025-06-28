// import LogoutButton from "@/components/LogoutButton";
// import { isAuthenticated } from "@/lib/actions/auth.action";

import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  //   const isUserAuthenticated = await isAuthenticated();
  const isUserAuthenticated = true;

  if (!isUserAuthenticated) redirect("/register");
  return (
    <div className="root-layout">
      <div className="flex justify-center items-center w-full px-6 py-4 bg-amber-400">
        <div className="text-[15px] text-blue-950">
          Get a Free special Needs Assesment Today
        </div>
        <span className="text-xl uppercase text-blue-950 p-1">
          USE code Lorem ipsum dolor sit.
        </span>
        <button
          type="button"
          className="text-white bg-pink-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800 my-1"
        >
          Book Now
        </button>
      </div>
      {/* <nav className="flex justify-between items-center w-full px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">SpEd@home</h2>
        </Link>
      </nav> */}
    <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default RootLayout;
