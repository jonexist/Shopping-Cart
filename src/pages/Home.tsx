import { HeroSection } from '../components/Home/HeroSection';
import { AboutSection } from '../components/Home/AboutSection';
import { TrustedSection } from '../components/Home/TrustedSection';
import { ReviewSection } from '../components/Home/ReviewSection';
import { data } from '../data/dummyData';
import { review } from '../data/dummyReview';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TrustedSection data={data} />
      <ReviewSection review={review} />
    </>
  );
};
