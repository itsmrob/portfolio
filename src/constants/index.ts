import { NavLink } from "@/types/NavLinks"
import { X, Instagram, Linkedin, Github, Email } from "@/components/Icons"

export const NAV_LINKS: NavLink[] = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/blog', key: 'blog', label: 'Writing' },
    { href: '/about', key: 'about', label: 'About' },
    { href: '/contact', key: 'contact', label: 'Contact' }
]

export const FOOTER_LINKS: NavLink[] = [
    { href: '/about', key: 'about', label: 'About' },
    { href: '/tools', key: 'tools', label: 'Tools' },
    { href: '/contact', key: 'contact', label: 'Contact' },
]

export const FOOTER_SOCIAL: NavLink[] = [
    { href: 'https://twitter.com/robbreik', iconComponent: X, key: 'x', label: 'X' },
    { href: 'https://github.com/itsmrob', iconComponent: Github, key: 'github', label: 'GitHub' },
    { href: 'https://instagram.com/itsmrob', iconComponent: Instagram, key: 'instagram', label: 'Instagram' },
    { href: 'https://linkedin.com/robertoajuchan', iconComponent: Linkedin, key: 'linkedin', label: 'Linkedin' },
    { href: 'mailto:email@example.com', iconComponent: Email, key: 'email', label: 'Email' },
]
