import { Grid } from '@/components/Grid';
import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';
import { TabsSection } from '@/components/TabsSection';

const Page = async () => {
  return (
    <>
      <Hero />
      <Grid />
      <TabsSection />
      <Story />
    </>
  );
};

export default Page;

export const generateMetadata = () => {
  return {
    title: 'Next demo',
    description: 'The home page of Next demo',
    alternates: { canonical: '/' },
  };
};
