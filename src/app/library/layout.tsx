import Navigation from "./components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex max-w-[1440px] flex-row">
      <Navigation />
      <main className="mx-12 flex grow flex-col pt-24">{children}</main>
    </div>
  );
}
