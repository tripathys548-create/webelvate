type IconProps = { className?: string };

export function WebsiteIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 8.5h18" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8.4" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

export function LanguageIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5S9.8 5.8 12 3.5Z" />
    </svg>
  );
}

export function SupportIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.25" />
      <path d="m6 6 3.3 3.3M18 6l-3.3 3.3M6 18l3.3-3.3M18 18l-3.3-3.3" />
    </svg>
  );
}

export function PhoneShopIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="7.5" y="2.5" width="9" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </svg>
  );
}

export function ToothIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3c-2.4 0-3.2 1.2-4.5 1.2C5.8 4.2 4.5 5.7 4.5 8c0 2 .8 3 1.1 5 .3 2 .6 5.5 2.2 5.5 1.3 0 1.2-3.3 2.3-3.3s1 3.3 2.3 3.3c1.6 0 1.9-3.5 2.2-5.5.3-2 1.1-3 1.1-5 0-2.3-1.3-3.8-3-3.8C15.2 4.2 14.4 3 12 3Z" />
    </svg>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2M12 18.5v2M4.9 6.4l1.4 1.4M17.7 16.2l1.4 1.4M3.5 12h2M18.5 12h2M4.9 17.6l1.4-1.4M17.7 7.8l1.4-1.4" />
    </svg>
  );
}
