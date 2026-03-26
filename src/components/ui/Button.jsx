const variantStyles = {
  primary:
    'bg-[#E8A838] text-[#1E3A5F] font-bold hover:bg-[#D4922E]',
  secondary:
    'bg-[#1E3A5F] text-white hover:bg-[#2E5F8A]',
  outline:
    'bg-transparent border border-white text-white hover:bg-white/10',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}) {
  const base =
    'inline-block rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer';
  const styles = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (href.startsWith('#')) {
      const handleClick = (e) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        if (onClick) onClick(e);
      };
      return (
        <a href={href} onClick={handleClick} className={styles}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}

export default Button;
