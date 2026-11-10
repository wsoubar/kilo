import { CtaSection } from './sections/cta-section'
import { FeaturesSection } from './sections/features-section'
import { HeroSection } from './sections/hero-section'
import { HowItWorksSection } from './sections/how-it-works-section'
import { LoyaltySection } from './sections/loyalty-section'
import { TrustStrip } from './sections/trust-strip'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FeaturesSection />
      <HowItWorksSection />
      <LoyaltySection />
      <CtaSection />
    </>
  )
}
