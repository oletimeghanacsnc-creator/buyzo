function Button({
  children,
  className = "",
  disabled = false,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600",
    secondary:
      "bg-primary-50 text-primary-700 hover:bg-primary-100 focus-visible:outline-primary-500",
    ghost:
      "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-slate-400",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
