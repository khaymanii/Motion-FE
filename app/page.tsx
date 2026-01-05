import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhatsappDemo from "@/components/WhatsappDemo";
import WhyWhatsApp from "@/components/WhyWhatsapp";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <WhatsappDemo />
      <WhyWhatsApp />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
