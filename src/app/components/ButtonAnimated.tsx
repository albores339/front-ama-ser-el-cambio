"use client";
import React from "react";
import { MoveRight } from "lucide-react";

import { cn } from "../lib/utils";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
}

export default function ArrowButton({
  text = "Open",
  textColor = "text-cyan-700",
  buttonOverlayColor = "bg-vwhite",
  borderColor = "border-cyan-500",
  iconColor = "text-cyan-700",
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 ${borderColor} bg-background px-10 py-3 font-medium shadow-md transition duration-300 ease-out`,
        className
      )}
    >
      <span
        className={cn(
          `absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center ${buttonOverlayColor} ${iconColor} duration-300 group-hover:translate-x-0`
        )}
      >
        <MoveRight className={iconColor} />
      </span>
      <span
        className={cn(
          `absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out ${textColor} group-hover:translate-x-full`
        )}
      >
        {text}
      </span>
      <span className="invisible relative">Button</span>
    </button>
  );
}
