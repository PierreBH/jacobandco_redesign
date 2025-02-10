import {cn} from "@/app/lib/Utils";

export default function Meteors ({number, className, width}: {
  number?: number;
  className?: string;
  width: number;
}) {
  const meteors = new Array(number || 20).fill(true);
  return (
    <div className={cn("absolute top-0 left-0 w-full h-full")}>
      {meteors.map((el, idx) => (
        <div
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * width) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></div>
      ))}
    </div>
  );
};