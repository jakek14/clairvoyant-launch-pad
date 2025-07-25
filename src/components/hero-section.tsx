'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Send, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { HyperText } from '@/components/ui/hyper-text'
import RainingLetters from '@/components/raining-letters'


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

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    const [email, setEmail] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
        }, 4000) // Increased to 4 seconds to allow HyperText to fully complete
        
        return () => clearInterval(interval)
    }, [])

    return (
        <main className="overflow-hidden">
            <section className="relative">
                <RainingLetters />
                <div className="relative mx-auto max-w-6xl px-6 pt-20 lg:pb-16 lg:pt-32 z-10">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                            >
                                <h1 className="text-balance text-4xl font-medium sm:text-5xl md:text-6xl">
                                    Turn anonymous visitors<br />into{' '}
                                    <div className="inline-block min-h-[1.2em]">
                                        <HyperText
                                            key={currentWordIndex}
                                            text={dynamicWords[currentWordIndex]}
                                            className="text-primary font-bold"
                                            duration={800}
                                            animateOnLoad={true}
                                        />
                                    </div>
                                </h1>

                                <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
                                    TrySERA identifies your anonymous website visitors and provides their email and postal addresses—even if they never filled out a form. Transform lost traffic into actionable contact data.
                                </p>

                                <form className="mt-12 mx-auto max-w-sm">
                                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] pr-1.5 items-center rounded-[1rem] border shadow shadow-zinc-950/5 has-[input:focus]:ring-2 lg:pr-0">
                                        <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                                        <input
                                            placeholder="Enter your email address"
                                            className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <div className="md:pr-1.5 lg:pr-0">
                                            <Button
                                                aria-label="submit"
                                                size="sm"
                                                className="rounded-[0.5rem]">
                                                <span className="hidden md:block">Join Waitlist</span>
                                                <Send
                                                    className="relative mx-auto size-5 md:hidden"
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>

                <div className="relative mt-16 mx-auto max-w-4xl">
                    <div className="relative">
                        <img 
                            src="/lovable-uploads/b4dc9b20-2391-4647-9330-007959961e78.png"
                            alt="Earth globe showing global reach"
                            className="w-full h-auto max-w-2xl mx-auto rounded-lg"
                        />
                        {/* Blur overlay for bottom portion */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
                    </div>
                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
            </main>
    )
}
