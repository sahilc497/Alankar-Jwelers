'use client';

interface InputProps {
  placeholder: string;
  type?: string;
  className?: string;
}

export default function Input({ placeholder, type = 'text', className = '' }: InputProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-foreground/30 py-3 font-sans text-sm focus:outline-none focus:border-foreground placeholder:italic placeholder:font-serif placeholder:text-foreground/40 transition-colors"
      />
    </div>
  );
}
