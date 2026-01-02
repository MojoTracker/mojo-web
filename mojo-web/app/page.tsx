import HomeHero from "@/components/Heros/HomeHero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <NavBar />
      <HomeHero />
    </div>
  );
}
