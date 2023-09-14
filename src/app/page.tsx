import FeaturedMovie from "@/components/featuredMovie";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "MovieBox | by codeReaper",
  description: "Welcome to the world of movies",
};

export default function Home() {
  return (
    <>
      <main className="">
        <Header />
        <Hero />
        <FeaturedMovie />
      </main>
      <Footer />
    </>
  );
}
