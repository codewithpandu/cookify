export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="w-full max-w-7xl mx-auto">
        <div>{children}</div>
      </div>
    </main>
  );
}
