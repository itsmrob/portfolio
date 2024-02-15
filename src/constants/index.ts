import { NavLink } from "@/types/NavLinks"

export const NAV_LINKS: NavLink[] = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/blog', key: 'blog', label: 'Writing' },
    { href: '/contact', key: 'contact', label: 'Contact' },
]

export const FOOTER_LINKS: NavLink[] = [
    { href: '/about', key: 'about', label: 'About' },
    { href: '/tools', key: 'tools', label: 'Tools' },
    { href: '/contact', key: 'contact', label: 'Contact' },
]

export const FOOTER_SOCIAL: NavLink[] = [
    { href: 'https://twitter.com/robbreik', icon: '/gorjeo.png', key: 'x', label: 'X' },
    { href: 'https://github.com/itsmrob', icon: '/github-mark.png', key: 'github', label: 'GitHub' },
    { href: 'https://instagram.com/itsmrob', icon: '/instagram.png', key: 'instagram', label: 'Instagram' },
    { href: 'https://linkedin.com/robertoajuchan', icon: '/linkedin.png', key: 'linkedin', label: 'Linkedin' },
    { href: 'mailto:email@example.com', icon: '/email.png', key: 'email', label: 'Email' },
]