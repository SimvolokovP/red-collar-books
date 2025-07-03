import type { ReactNode } from "react";

interface PageLayoutProps {
  header: ReactNode;
  children: ReactNode;
}

export function PageLayout({ header, children }: PageLayoutProps) {
  return (
    <div className="container relative pt-0 pb-[70px] md:pb-0 md:pt-[40px]">
      <div>
        {header}
        {children}
      </div>
    </div>
  );
}
