import React from 'react'
import { HeroSection } from '@/components/hero-section'
import { ValuePropositions } from '@/components/value-propositions'
import { UseCasesAndProcess } from '@/components/use-cases-process'
import { EmailSignup } from '@/components/email-signup'
import { Footer } from '@/components/footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValuePropositions />
      <UseCasesAndProcess />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
