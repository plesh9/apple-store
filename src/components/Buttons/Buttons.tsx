"use client"
import Link from 'next/link';
import { FC, MouseEventHandler, ReactNode } from 'react';

interface IButton {
    className?: string;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface ILinkButton {
    className?: string;
    children: ReactNode;
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    target?: '_blunk' | '_self'
}

export const Button: FC<IButton> = ({ className, children, onClick }) => {
    return (
        <button className={`${className || ''} button`} onClick={onClick}>
            {children}
        </button>
    );
};

export const SecondaryButton: FC<IButton> = ({ className, children, onClick }) => {
    return (
        <Button className={`${className} button-secondary`} onClick={onClick}>
            {children}
        </Button>
    );
};

export const LinkButton: FC<ILinkButton> = ({ className, children, href, target, onClick }) => {
    return (
        <Link href={href} className={`${className || ''} button`} onClick={onClick} target={target}>
            {children}
        </Link>
    );
};

export const SecondaryLinkButton: FC<ILinkButton> = ({ className, children, href, target, onClick }) => {
    return (
        <LinkButton href={href} className={`${className || ''} button-secondary`} onClick={onClick} target={target}>
            {children}
        </LinkButton>
    );
};
