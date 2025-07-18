import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Brain, Zap, Lock, Users, Sparkles } from 'lucide-react'

const valueProps = [
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "Your data stays yours. Advanced encryption and on-device processing ensure complete privacy without compromising intelligence."
  },
  {
    icon: Brain,
    title: "Adaptive Intelligence",
    description: "AI that learns your patterns and preferences, delivering personalized insights that evolve with your needs."
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Real-time analysis and recommendations that help you make better decisions faster, without the wait."
  },
  {
    icon: Lock,
    title: "Zero-Knowledge Architecture",
    description: "Advanced cryptographic techniques ensure we can provide intelligent services without ever seeing your private data."
  },
  {
    icon: Users,
    title: "Seamless Integration",
    description: "Works effortlessly with your existing tools and workflows, enhancing rather than replacing your current setup."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
}

export function ValuePropositions() {
  return (
    <section id="vision" className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            Intelligence that 
            <span className="text-gradient"> respects you</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We're building the future of personal intelligence—where cutting-edge AI meets uncompromising privacy.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl border bg-card hover-lift cursor-pointer"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <prop.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}