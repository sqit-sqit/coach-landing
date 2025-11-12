import { Header } from '@/components/layout';
import { Hero, ForWhom, FlowXR, ForCoachesTherapists, Philosophy, HowWeSupport, Benefits, CTA, ForYourself, Testimonials, LatestNews, FAQ, Contact, Footer } from '@/components/sections';

export default function Home() {
  return (
        <main className="min-h-screen w-full max-w-[1440px] mx-auto">
          <Header />
          <Hero />
          <ForWhom />
          <FlowXR />
          <ForCoachesTherapists />
          <Philosophy />
          <HowWeSupport />
          <Benefits />
          <ForYourself />
          <Testimonials />
          <CTA />
          <LatestNews />
          <FAQ />
          <Contact />
          <Footer />
      </main>
  );
}