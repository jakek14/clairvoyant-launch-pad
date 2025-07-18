import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                S
              </div>
              <span className="text-xl font-semibold">sera</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Building the future of private, intelligent technology. Where AI meets uncompromising privacy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="#vision" className="hover:text-foreground transition-colors">Vision</Link></li>
              <li><Link to="#technology" className="hover:text-foreground transition-colors">Technology</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="#terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="#security" className="hover:text-foreground transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Sera. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Privacy-first intelligence for everyone.
          </p>
        </div>
      </div>
    </footer>
  )
}