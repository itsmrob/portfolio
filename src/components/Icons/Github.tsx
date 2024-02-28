import { IconsProps } from '../../types/FooterIcons';

const Github: React.FC<IconsProps> = ({ size = 24, color = 'currentColor' }) => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill={color} d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.725-4.033-1.415-4.033-1.415-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.082-.729.082-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .32.21.697.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg >
);
export default Github;
