import Hero from "./components/Hero";
import AbooutPage from "./about/page";
import Projects from "./projects/page";
import ContactPage from "./projects/contact/page";
import DiziblozPage from "./components/Dizibloz";

export default function Home() {
  return (
    <main>
      <Hero />
      <AbooutPage />
      <Projects />
      <DiziblozPage/> 
      <ContactPage />
    </main>
  );
}
