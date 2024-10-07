import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/NavBar";
import Intro from "../components/homeComponents/Intro";
import ResidentsSection from "../components/homeComponents/AnimalSlider";
import OpinionsSlider from "../components/homeComponents/OpinionsSlider";
import OpinionsForm from "../components/homeComponents/OpinionsForm";

const Index = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Intro />
      <ResidentsSection />
      <OpinionsSlider />
      <OpinionsForm />
      <Footer />
    </>
  );
};

export default Index;
