import AboutSection from "../components/aboutSection/AboutSection";
import BrandSection from "../components/brandSection/BrandSection";
import CollectionsInfo from "../components/collections/CollectionsInfo";
import HeroSection from "../components/heroSection/HeroSection";
import CollectionFillterButtons from "../components/ui/buttons/collectionButton/CollectionFillterButtons";
import CreatorsMarketButton from "../components/ui/buttons/CreatorsMarketButton";
import MainCollectionButton from "../components/ui/buttons/MainCollectionButton";

const Home = () => {
  return (
    <div className=" mx-6">
      <div className="flex items-center justify-center pt-12 mb-24">
        <MainCollectionButton />
        <CreatorsMarketButton />
      </div>
      <HeroSection />
      <BrandSection />
      <AboutSection />
      <CollectionsInfo />
      <CollectionFillterButtons/>
    </div>
  );
};

export default Home;
