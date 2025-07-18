import React from 'react'
import { 
  EyeOpenIcon, 
  LockClosedIcon, 
  CounterClockwiseClockIcon, 
  ComponentInstanceIcon, 
  ReloadIcon 
} from '@radix-ui/react-icons'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

const features = [
  {
    icon: <EyeOpenIcon className="h-4 w-4 text-neutral-500" />,
    title: "Anonymous Traffic Identification",
    description: "Track and identify anonymous website visitors through our proprietary pixel technology, matching sessions against our comprehensive opt-in database.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"></div>,
    className: "md:col-span-1",
  },
  {
    icon: <ComponentInstanceIcon className="h-4 w-4 text-neutral-500" />,
    title: "First-Party Data Ownership",
    description: "Own your visitor data completely—get full contact records including email and postal addresses without ongoing rental fees from ad platforms.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20"></div>,
    className: "md:col-span-2",
  },
  {
    icon: <CounterClockwiseClockIcon className="h-4 w-4 text-neutral-500" />,
    title: "Cost-Efficient Retargeting",
    description: "Pay once for matched contact information instead of per-click retargeting. More affordable than traditional click-based advertising campaigns.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20"></div>,
    className: "md:col-span-1",
  },
  {
    icon: <LockClosedIcon className="h-4 w-4 text-neutral-500" />,
    title: "Opt-in Compliance",
    description: "All data sourced from permission-based, opt-in databases ensuring full compliance with CAN-SPAM and other privacy regulations.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20"></div>,
    className: "md:col-span-1",
  },
  {
    icon: <ReloadIcon className="h-4 w-4 text-neutral-500" />,
    title: "Multi-Channel Retargeting",
    description: "Use acquired data across email, direct mail, phone outreach, or upload to ad platforms—complete flexibility in your marketing approach.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20"></div>,
    className: "md:col-span-1",
  },
]

export function ValuePropositions() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Core Capabilities
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Transform your anonymous website traffic into actionable contact data with our patent-pending platform
          </p>
        </div>
        
        <BentoGrid className="max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <BentoGridItem
              key={i}
              title={feature.title}
              description={feature.description}
              header={feature.header}
              icon={feature.icon}
              className={feature.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}