import React from "react";
import Hero from "./MiniComponent/Hero";
import Timeline from "./MiniComponent/Timeline";
import Skills from "./MiniComponent/Skill";
import MyApps from "./MiniComponent/MyApps";
import About from "./MiniComponent/About";
import Portfolio from "./MiniComponent/Portfolio";
import Contact from "./MiniComponent/Contact";
import Header from "./MiniComponent/Header"

const Home = () => {
  return (
    <>
    <Header/>
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-zinc-950 dark:to-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-3">

        {/* Hero */}
        <section className="rounded-2xl p-2 sm:p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm">
          <Hero />
        </section>
        {/* Timeline */}
        <section className="rounded-2xl p-4 sm:p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm">
          <Timeline />
        </section>


        {/* About */}
        <section className="rounded-2xl p-4 sm:p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm">
          <About/>
        </section>

        
        {/* Skills */}
        <section className="rounded-2xl p-4 sm:p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm">
          <Skills />
        </section>

        {/* Portfolio */}
        <section className="rounded-2xl p-4 sm:p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm">
          <Portfolio/>
        </section>

        {/* Apps */}
        <section className="rounded-2xl p-4 sm:p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm">
          <MyApps />
        </section>

        {/* Contact */}
        <section className="rounded-2xl p-4 sm:p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm">
          <Contact />
        </section>

      </div>
    </main>
    </>
  );
};

export default Home;