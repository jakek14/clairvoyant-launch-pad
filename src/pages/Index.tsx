import React from 'react'
import { HeroSection } from '@/components/hero-section'
import { ValuePropositions } from '@/components/value-propositions'
import { SneakPeek } from '@/components/sneak-peek'
import { EmailSignup } from '@/components/email-signup'
import { Footer } from '@/components/footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValuePropositions />
      <SneakPeek />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
