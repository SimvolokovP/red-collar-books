import { Link } from "react-router-dom";

interface ErrorBlockProps {
  error: string;
  isMainPage?: boolean;
}

export function ErrorBlock({ error, isMainPage = false }: ErrorBlockProps) {
  return (
    <div className="text-center py-[16px]">
      <div className="font-bold text-[32px]">{error}</div>
      {!isMainPage && (
        <Link className="underline text-[24px]" to={"/"}>
          На главную
        </Link>
      )}
    </div>
  );
}
