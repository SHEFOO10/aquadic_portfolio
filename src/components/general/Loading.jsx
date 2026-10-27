export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="relative flex h-[calc(100vh-100px)] w-full items-center justify-center bg-white"
    >
      <span className="sr-only">Loading</span>
      <span
        aria-hidden="true"
        className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#EA433A] motion-reduce:animate-none"
      />
    </div>
  );
}
