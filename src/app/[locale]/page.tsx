import { Header } from '@/components/layout/Header';
import { CinematicHero } from '@/components/hero/CinematicHero';
import { BrandManifesto } from '@/components/home/BrandManifesto';
import { MenuUniverse } from '@/components/home/MenuUniverse';
import { SignatureItems } from '@/components/home/SignatureItems';
import { IngredientStory } from '@/components/ingredient-story/IngredientStory';
import { FeaturedOffers } from '@/components/home/FeaturedOffers';
import { BranchExperience } from '@/components/home/BranchExperience';
import { EditorialGallery } from '@/components/home/EditorialGallery';
import { FinalOrderCTA } from '@/components/home/FinalOrderCTA';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CinematicHero />
        <BrandManifesto />
        <MenuUniverse />
        <SignatureItems />
        <IngredientStory />
        <FeaturedOffers />
        <BranchExperience />
        <EditorialGallery />
        <FinalOrderCTA />
      </main>
      <Footer />
    </>
  );
}
