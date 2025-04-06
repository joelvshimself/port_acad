import Navbar from "@/components/navbar";
import Hero from '@/components/Hero'; 
import Mycovervisual from "@/components/mycovervisual";
import { Treeditems } from "@/components/Treeditems";

export const dynamic = 'force-dynamic'; // Force dynamic rendering

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Mycovervisual />
      <Treeditems/>
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />

      
      
    </>
  );
}
