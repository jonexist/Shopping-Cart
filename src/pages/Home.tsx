import { AboutSection } from '../components/AboutSection';
import { HeroSection } from '../components/HeroSection';
import { ReviewSection } from '../components/ReviewSection';
import { TrustedSection } from '../components/TrustedSection';
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
