import { Topbar } from './components/Topbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Process } from './components/Process';
import { FaultFile } from './components/FaultFile';
import { TrustStrip } from './components/TrustStrip';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';

export default function App() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Problem />
        <Process />
        <FaultFile />
        <TrustStrip />
        <Offer />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
