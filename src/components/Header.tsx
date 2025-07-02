import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="container">
      <div className="flex items-center justify-between">
        <div>Logo</div>
        <Navigation />
      </div>
    </header>
  );
}
