import Footer from "./_components/footer";
import HeroHeading from "./_components/heading";
import HeroSection from "./_components/heroes";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto max-w-4xl min-h-screen">
      <article className="flex flex-col flex-1 justify-center md:justify-start items-center gap-y-8 px-6 pb-10 text-center">
        <HeroHeading />
        <HeroSection />
      </article>
      <Footer />
    </main>
  );
}
