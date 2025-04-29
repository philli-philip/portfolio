import Navigation from "./components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-24 flex max-w-[1440px] flex-row">
      <Navigation />
      <main className="mx-12">{children}</main>
    </div>
  );
}
