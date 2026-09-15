import type { ReactNode, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>
const Icon = ({ children, ...props }: IconProps & { children: ReactNode }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>
export const ArrowRight = (p: IconProps) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
export const Check = (p: IconProps) => <Icon {...p}><path d="m5 12 4 4L19 6" /></Icon>
export const ChevronDown = (p: IconProps) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>
export const Instagram = (p: IconProps) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" stroke="none"/></Icon>
export const Mail = (p: IconProps) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Icon>
export const MapPin = (p: IconProps) => <Icon {...p}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>
export const Menu = (p: IconProps) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>
export const Phone = (p: IconProps) => <Icon {...p}><path d="M6 3h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L16 13l5 2v3c0 1.2-1 2-2.2 2C10.8 20 4 13.2 4 5.2 4 4 4.8 3 6 3Z"/></Icon>
export const Play = (p: IconProps) => <Icon {...p}><path d="m9 6 9 6-9 6V6Z"/></Icon>
export const Send = (p: IconProps) => <Icon {...p}><path d="m21 3-7.5 18-3.5-8-8-3.5L21 3Z"/><path d="M10 13 21 3"/></Icon>
export const X = (p: IconProps) => <Icon {...p}><path d="m6 6 12 12M18 6 6 18"/></Icon>
