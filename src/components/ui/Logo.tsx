interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Три наклонные полосы */}
      <polygon points="0,44 25,20 25,26 6,44" />
      <polygon points="28,44 53,20 53,26 34,44" />
      <polygon points="80,26 93,14 93,20 86,26" />

      {/* Буква С */}
      <path d="M22,62 C12,62 6,70 6,80 C6,90 12,98 22,98 C26,98 30,97 33,95 L32,88 C29,90 26,91 23,91 C16,91 12,86 12,80 C12,74 16,69 23,69 C26,69 29,70 32,72 L33,65 C30,63 26,62 22,62 Z" />
      {/* Буква Д */}
      <path d="M44,98 L44,94 L47,94 L47,66 L58,66 L58,94 L61,94 L61,98 L58,98 L56,104 L53,104 L54,98 L51,98 L51,104 L48,104 L47,98 Z M50,94 L55,94 L55,71 L50,71 Z" />
      {/* Буква С */}
      <path d="M78,62 C68,62 62,70 62,80 C62,90 68,98 78,98 C82,98 86,97 89,95 L88,88 C85,90 82,91 79,91 C72,91 68,86 68,80 C68,74 72,69 79,69 C82,69 85,70 88,72 L89,65 C86,63 82,62 78,62 Z" />
    </svg>
  );
}