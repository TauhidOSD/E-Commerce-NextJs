import { Send, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/#products" },
  { label: "New Arrivals", href: "/?category=all" },
  { label: "Electronics", href: "/?category=electronics" },
  { label: "Accessories", href: "/?category=accessories" },
];

const supportLinks = [
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Shipping Info", href: "/#faq" },
  { label: "Returns & Refunds", href: "/#faq" },
  { label: "Order Tracking", href: "/#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy" },
];

const socialLinks = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: BsTwitter, href: "#", label: "Twitter" },
  { icon: BsInstagram, href: "#", label: "Instagram" },
  { icon: BsYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-gray-300">
      {/* ── Newsletter Bar ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="text-lg font-bold text-white">
              Join Our Newsletter
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Get exclusive deals, new arrivals, and style tips delivered to your
              inbox.
            </p>
          </div>
          <div className="flex w-full max-w-md items-center gap-2 sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark">
              <Send className="h-4 w-4" />
              Join
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              NextGen Store
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your one-stop shop for premium fashion, electronics, and lifestyle
              essentials. Quality products, unbeatable prices.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>123 Commerce St, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>support@nextgenstore.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="mt-8">
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} NextGen Store. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="rounded bg-white/5 px-2 py-1">Visa</span>
            <span className="rounded bg-white/5 px-2 py-1">Mastercard</span>
            <span className="rounded bg-white/5 px-2 py-1">Stripe</span>
            <span className="rounded bg-white/5 px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
