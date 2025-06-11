// import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <footer className="text-center">
            &copy; 2025 OOPSVINCENT
        </footer>
    </main>
  );
}
