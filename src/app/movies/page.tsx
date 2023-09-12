import SideBar from "@/components/movie/sideBar";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "MovieBox | by codeReaper",
  description: "Welcome to the world of movies",
};

export default function Movies() {
  return (
    <main className="flex font-poppins">
      <SideBar />
    </main>
  );
}
