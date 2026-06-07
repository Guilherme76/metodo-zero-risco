"use client";

import { ButtonLink, type ButtonLinkProps } from "@/components/ui/button";
import { track, type AnalyticsParams } from "@/lib/analytics";
import {
  MagneticButtonLink,
  type MagneticButtonLinkProps,
} from "./magnetic-button-link";

type Destination = "checkout" | "anchor" | "external" | "telegram";

type TrackedButtonLinkProps = ButtonLinkProps & {
  tracking: {
    location: string;
    cta: string;
    destination?: Destination;
  };
  onBeforeNavigate?: () => void;
  extraParams?: AnalyticsParams;
};

export function TrackedButtonLink({
  tracking,
  onClick,
  onBeforeNavigate,
  extraParams,
  ...props
}: TrackedButtonLinkProps) {
  return (
    <ButtonLink
      {...props}
      onClick={(event) => {
        track("cta_click", {
          ...tracking,
          ...(extraParams ?? {}),
        });
        if (tracking.destination === "checkout") {
          track("checkout_start", {
            location: tracking.location,
            ...(extraParams ?? {}),
          });
        }
        onBeforeNavigate?.();
        onClick?.(event);
      }}
    />
  );
}

type MagneticTrackedButtonLinkProps = MagneticButtonLinkProps & {
  tracking: {
    location: string;
    cta: string;
    destination?: Destination;
  };
  onBeforeNavigate?: () => void;
  extraParams?: AnalyticsParams;
};

export function MagneticTrackedButtonLink({
  tracking,
  onClick,
  onBeforeNavigate,
  extraParams,
  ...props
}: MagneticTrackedButtonLinkProps) {
  return (
    <MagneticButtonLink
      {...props}
      onClick={(event) => {
        track("cta_click", {
          ...tracking,
          ...(extraParams ?? {}),
        });
        if (tracking.destination === "checkout") {
          track("checkout_start", {
            location: tracking.location,
            ...(extraParams ?? {}),
          });
        }
        onBeforeNavigate?.();
        onClick?.(event);
      }}
    />
  );
}
