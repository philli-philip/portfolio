import Link from "next/link";
import { cn } from "../../utils/cn";
import { ArrowUpRight } from "lucide-react";

export function ProjectContainer({
  children,
  className,
  show,
}: {
  children: React.ReactNode;
  className?: string;
  show: boolean;
}) {
  return (
    <div
      aria-disabled={!show}
      className={cn(
        "outline-hidden group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl outline-[16px] outline-offset-4 outline-blue-500 duration-300",
        show ? " opacity-100" : " cursor-default opacity-10",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ProjectImage({
  lightImage,
  className,
}: {
  className?: string;
  lightImage: string;
}) {
  return (
    <div className={cn("h-auto flex-1 overflow-hidden rounded-t-3xl")}>
      <img src={lightImage} className={cn("", className)} />
    </div>
  );
}

export function ProjectLink({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "peer absolute right-4 top-4 block size-12 rounded-full bg-white p-2 text-black duration-75",
        className
      )}
    >
      <ArrowUpRight className="size-8" strokeWidth={1.5} />
    </Link>
  );
}
export function ProjectDescription({
  className,
  children,
}: {
  className?: string;
  children: string | React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "absolute top-[100%] h-full w-full p-6 backdrop-blur duration-200 group-hover:top-0 peer-focus:top-0 group-aria-disabled:group-hover:top-[100%]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function ProjectTitle({
  children,
  className,
}: {
  children: string | React.ReactNode;
  className?: string;
}) {
  return <span className={cn("p-6", className)}>{children}</span>;
}
