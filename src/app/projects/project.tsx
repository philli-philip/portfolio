import Link from "next/link";
import { cn } from "../../utils/cn";

export function ProjectContainer({
  children,
  className,
  href = "#",
  show,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  show: boolean;
}) {
  return (
    <Link
      href={href}
      aria-disabled={!show}
      className={cn(
        "outline-hidden group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl outline-[16px] outline-offset-4 outline-red-500 duration-300",
        show ? " opacity-100" : " cursor-default opacity-10",
        className
      )}
    >
      {children}
    </Link>
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
        "absolute top-[100%] h-full w-full p-6 backdrop-blur duration-200 group-hover:top-0 group-focus:top-0 group-aria-disabled:group-hover:top-[100%] group-aria-disabled:group-focus:top-[100%]",
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
