import Head from "next/head";
import Image from "next/image";
import Hero from "./components/page/homepage/Hero";
import WhoWeAreSection from "./components/page/homepage/WhoWeAre";
import ServicesHighlightSection from "./components/page/homepage/ServicesHighlightSection";
import AboutSection from "./components/page/homepage/AboutSection";
import EventsGallery from "./components/page/homepage/EventsGallery";
import FormSection from "./components/page/homepage/FormSection";
import PressReleaseSection from "./components/page/homepage/PressSection";



export default function Home() {
  return (
    <>
      <Head>
        <title>Simcoe Geoscience</title>
        <meta
          name="description"
          content="Advanced geophysical surveys delivering deeper insights, faster decisions, and reduced exploration risk."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <WhoWeAreSection />
      <ServicesHighlightSection />
      <AboutSection />
      <PressReleaseSection />
      <EventsGallery />
      <FormSection />
    </>
  );
}
