import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "telegram"
  | "outline"
  | "ghost"
  | "dark";
type ButtonSize = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold leading-none select-none disabled:cursor-not-allowed disabled:opacity-60 transition-all duration-200 ease-out whitespace-nowrap";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-black-950 shadow-[0_8px_24px_-8px_rgba(212,175,55,0.5)] hover:bg-gold-300 hover:shadow-[0_12px_32px_-8px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 active:bg-gold-600 active:translate-y-0",
  secondary:
    "bg-green-700 text-white shadow-[0_8px_24px_-8px_rgba(17,133,58,0.5)] hover:bg-green-600 hover:shadow-[0_12px_32px_-8px_rgba(17,133,58,0.6)] hover:-translate-y-0.5 active:bg-green-800 active:translate-y-0",
  telegram:
    "bg-[#229ED9] text-white shadow-[0_8px_24px_-8px_rgba(34,158,217,0.5)] hover:bg-[#1d8bbf] hover:shadow-[0_12px_32px_-8px_rgba(34,158,217,0.6)] hover:-translate-y-0.5 active:bg-[#1978a3] active:translate-y-0",
  outline:
    "border border-gold-500/40 bg-transparent text-gold-300 hover:border-gold-300 hover:bg-gold-500/10 hover:-translate-y-0.5 active:bg-gold-500/20 active:translate-y-0",
  ghost:
    "bg-transparent text-white hover:bg-white/5 active:bg-white/10",
  dark:
    "bg-black-800 text-white border border-white/10 hover:bg-black-700 hover:border-gold-500/30 hover:-translate-y-0.5 active:bg-black-900",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
  lg: "h-12 px-6 text-base sm:h-14 sm:px-8 sm:text-lg",
};

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black-950";

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

function buildClassName({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: StyleProps): string {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    focusStyles,
    fullWidth && "w-full",
    className,
  );
}

type ContentProps = {
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
};

function renderContent({
  loading,
  leftIcon,
  rightIcon,
  children,
}: ContentProps): ReactNode {
  return (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!loading && rightIcon}
    </>
  );
}

type ButtonOwnProps = StyleProps & ContentProps;

type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>;

export type { ButtonProps };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant,
      size,
      fullWidth,
      className,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = "button",
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={buildClassName({ variant, size, fullWidth, className })}
        {...rest}
      >
        {renderContent({ loading, leftIcon, rightIcon, children })}
      </button>
    );
  },
);

type ButtonLinkProps = ButtonOwnProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonOwnProps | "href"
  > & {
    href: string;
  };

export type { ButtonLinkProps };

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    {
      variant,
      size,
      fullWidth,
      className,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <a
        ref={ref}
        aria-busy={loading || undefined}
        aria-disabled={loading || undefined}
        className={buildClassName({ variant, size, fullWidth, className })}
        {...rest}
      >
        {renderContent({ loading, leftIcon, rightIcon, children })}
      </a>
    );
  },
);
