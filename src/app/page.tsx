import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <div className="bg-[#091D41]">
        <div className="m-auto max-w-[1920px]">
          <Hero />
        </div>
      </div>
      <div className="bg-[#F4F9FF]">
        <div className="m-auto max-w-[1920px] ">
          <Services />
        </div>
      </div>
      <div className="m-auto max-w-[1920px]">
        <Features />
      </div>
      <Footer />
    </main>
  );
}
