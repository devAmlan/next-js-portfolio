import Footer from "./_components/Footer";
import Intro from "./_components/Intro";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <main className="w-full min-h-screen md:p-10 p-5 flex justify-start items-start flex-col gap-10">
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
