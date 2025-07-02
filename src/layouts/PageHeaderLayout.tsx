import type { ReactNode } from "react";

interface PageHeaderLayoutProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function PageHeaderLayout({
  title,
  description,
  actions,
}: PageHeaderLayoutProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold mb-[8px]">{title}</h1>
        {description && <p className="font-light mb-[8px]">{description}</p>}
      </div>

      <div className="flex gap-[16px] mb-[8px]">{actions}</div>
    </div>
  );
}
