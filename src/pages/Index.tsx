import Header from "@/components/teivah/Header";
import Hero from "@/components/teivah/Hero";
import FeaturedProducts from "@/components/teivah/FeaturedProducts";
import Categories from "@/components/teivah/Categories";
import Services from "@/components/teivah/Services";
import Footer from "@/components/teivah/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
