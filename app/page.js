import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import PreBuiltHomes from './components/Pre-build-section/Pre-build-section';
import FeaturesSection from "./components/WooCommerce-Features-Section/WooCommerce-Features-Section";
import featuresData from "./Data/FeaturesData";
import InnerPagesSection from './components/InnerPagesSection/InnerPageSection';
import ThemeCoreSection from './components/ThemeCoreSection/ThemeCoreSection';
import PurchaseSection from './components/PurchaseSection/PurchaseSection';
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Marquee/>
      <PreBuiltHomes 
      title="Pre-Build Home Pages Ready For You" 
      spanText="Get Started With Us!" 
      description="A high-converting Auto Parts WooCommerce WordPress theme with 05 unique pre-made 
      homepages, designed for flexibility, performance, and stunning details. "
    />
          <ThemeCoreSection  title="Take your WooCommerce site 
to the next level with these features " 
      spanText="Theme Core Features" 
      description="Everything you need in one package, from advanced customization to powerful features." 
      />
    <InnerPagesSection />
    <FeaturesSection features={featuresData} 
      title="Top-Notch Features Included it make our 
      theme Compact for your WooCommerce Site" 
      spanText="Top-Noch Included Features" 
      description="Everything you need in one package, from advanced customization to powerful features." 
      />
      <PurchaseSection/>
    </>
    
  );
}
