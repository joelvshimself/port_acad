import Navbar from "@/components/navbar";
import Hero from '@/components/Hero'; 
import Mycovervisual from "@/components/mycovervisual";
import { Treeditems } from "@/components/Treeditems";
import Footer from "@/components/footer";

export const dynamic = 'force-dynamic'; // Force dynamic rendering

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>

      <section id="servicios" className="hidden sm:block">
        <Mycovervisual />
      </section>


      <section id="contacto">
        <Treeditems />
      </section>

      <Footer />


      {/* Puedes seguir agregando más secciones si lo necesitas */}
    </>
  );
}
