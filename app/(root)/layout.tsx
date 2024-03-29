import Navbar from "@/components/shered/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar/>
      <div className="flex">
        LeftSidebar
        <section className="flex min-h-sereen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        RightSideBar
      </div>
    </main>
  );
};

export default Layout;
