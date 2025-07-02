import { ClipLoader } from "react-spinners";

export function Loader() {
  return (
    <div className="fixed inset-0 z-[10] flex h-screen w-screen flex-col items-center justify-center darkBack">
      <div className="rounded-xl bg-secondary p-4">
        <ClipLoader size={64} color="black" />
      </div>
    </div>
  );
}
