type NavLink = {
    href: string;
    key: string;
    label: string;
}

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