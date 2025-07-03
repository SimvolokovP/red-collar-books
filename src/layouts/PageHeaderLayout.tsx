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
    <div className="flex flex-col justify-between items-center md:flex-row gap-[16px]">
      <div>
        <h1 className="text-2xl font-bold mb-[8px] text-center md:text-left">
          {title}
        </h1>
        {description && <p className="font-light mb-[8px]">{description}</p>}
      </div>

      <div className="flex gap-[16px] mb-[8px] w-full md:w-auto">{actions}</div>
    </div>
  );
}
