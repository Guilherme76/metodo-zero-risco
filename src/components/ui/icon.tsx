import { cloneElement, isValidElement, type ReactElement } from "react";
import { cn } from "@/lib/cn";

type IconChildProps = {
  className?: string;
  "aria-hidden"?: boolean;
  "aria-label"?: string;
  role?: string;
  width?: number | string;
  height?: number | string;
};

type IconProps = {
  children: ReactElement<IconChildProps>;
  size?: number | string;
  className?: string;
  label?: string;
  decorative?: boolean;
};

export function Icon({
  children,
  size = 20,
  className,
  label,
  decorative = true,
}: IconProps) {
  if (!isValidElement(children)) {
    return null;
  }

  const isHidden = decorative && !label;
  const ariaProps: IconChildProps = label
    ? { role: "img", "aria-label": label }
    : isHidden
      ? { "aria-hidden": true }
      : {};

  const childClassName = (children.props as IconChildProps).className;

  return cloneElement(children, {
    ...ariaProps,
    width: size,
    height: size,
    className: cn("shrink-0", childClassName, className),
  } as IconChildProps);
}
