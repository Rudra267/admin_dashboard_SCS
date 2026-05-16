import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-[#FCE5EF] text-[#D9145C]",
        success: "bg-[#DCFCE7] text-[#16A34A]",
        warning: "bg-[#FFEDD5] text-[#EA580C]",
        info: "bg-[#DBEAFE] text-[#005BDB]",
        muted: "bg-[#F5F8FC] text-[#61708F]",
        violet: "bg-[#EEE8FF] text-[#6D28D9]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
