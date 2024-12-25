import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Listing from "./components/listing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Listing />
    </>
  );
}
