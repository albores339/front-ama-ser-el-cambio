import { ArrowRight } from "lucide-react";

import { cn } from "../lib/utils";

interface IGetStartedButtonProps {
  text: string;
  className?: string;
}

export default function GetStartedButton({
    text = "Get started",
    className,
  }: IGetStartedButtonProps) {
    return (
      <div className="flex items-center justify-center min-h-12 w-full animate-shake rounded-xl">
        <button
          className={cn(
            "group flex h-12 w-56 items-center justify-center gap-3 rounded-2xl bg-white p-8 font-bold transition-colors duration-100 ease-in-out hover:bg-lime-700",
            className,
          )}
        >
          <span
            className={cn(
              "text-lime-700 transition-colors duration-100 ease-in-out group-hover:text-white text-4xl",
            )}
          >
            {text}
          </span>
          <div
            className={cn(
              "relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100",
              "bg-lime-700 group-hover:bg-lime-100 text-2xl",
            )}
          >
            <div className="absolute left-0 flex h-10 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
              <ArrowRight
                size={20}
                className={cn(
                  "size-10 transform p-1 text-lime-600 opacity-0 group-hover:opacity-100",
                )}
              />
              <ArrowRight
                size={20}
                className={cn(
                  "size-10 transform p-1 text-amber-100 opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0",
                )}
              />
            </div>
          </div>
        </button>
      </div>
    );
  }
  
