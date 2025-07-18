'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { HyperText } from '@/components/ui/hyper-text'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import IconCloudDemo from '@/components/icon-cloud'

const dynamicWords = [
    'Leads',
    'Customers', 
    'Buyers',
    'Subscribers',
    'Clients',
    'Conversions',
    'Opportunities',
    'Revenue',
    'Sales'
]

export function HeroSection() {
    const [email, setEmail] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
        }, 2500)
        
        return () => clearInterval(interval)
    }, [])

    return (
        <main className="overflow-x-hidden">
            <section>
                <div className="pb-24 pt-20 md:pb-32 lg:pb-56 lg:pt-32">
                    <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                        <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                            <div className="mt-8 lg:mt-16">
                                <h1 className="text-5xl font-medium md:text-6xl xl:text-7xl leading-tight">
                                    Turn anonymous visitors into{' '}
                                    <div className="inline-block">
                                        <HyperText
                                            text={dynamicWords[currentWordIndex]}
                                            className="text-primary font-bold"
                                            duration={600}
                                            animateOnLoad={false}
                                        />
                                    </div>
                                </h1>
                            </div>
                            <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">TrySERA identifies your anonymous website visitors and provides their email and postal addresses—even if they never filled out a form. Transform lost traffic into actionable contact data.</p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 h-12 px-4 text-base bg-background border-2 focus:border-primary transition-colors min-w-[280px]"
                                    />
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-8 text-base hover-lift group h-12">
                                        <Link to="#signup">
                                            <span className="text-nowrap">Join the Waitlist</span>
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none order-first ml-auto w-full lg:absolute lg:inset-0 lg:-right-20 lg:-top-8 lg:order-last lg:w-3/5 flex items-center justify-center">
                            <div className="scale-110 lg:scale-125">
                                <IconCloudDemo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm text-muted-foreground">Trusted by marketers</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit opacity-60"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Technology Leader"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit opacity-60"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="Developer Platform"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit opacity-60"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="AI Research"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit opacity-60"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Technology Framework"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit opacity-60"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Platform Partner"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}
