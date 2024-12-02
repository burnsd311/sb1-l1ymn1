import React from 'react';
import { FileCheck, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Privacy Policy', href: '/' },
      { name: 'Terms of Service', href: '/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/' },
      { name: 'Blog', href: '/' },
      { name: 'Support', href: '/' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Contact Sales', href: 'mailto:sales@billdflow.com' },
      { name: 'Schedule Demo', href: '/' },
      { name: 'Help Center', href: '/' },
    ],
  },
];

const socialLinks = [
  { Icon: Facebook, href: '/', label: 'Facebook' },
  { Icon: Twitter, href: '/', label: 'Twitter' },
  { Icon: Linkedin, href: '/', label: 'LinkedIn' },
  { Icon: Mail, href: '/', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <FileCheck className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">BilldFlow</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Streamlining construction billing with intelligent automation and secure workflows.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  to={href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} BilldFlow. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <select
                className="bg-gray-800 text-gray-300 text-sm rounded-lg px-3 py-1 focus:ring-blue-500 focus:border-blue-500"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}