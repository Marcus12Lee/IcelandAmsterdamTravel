export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold text-white">Page not found</h1>
      <p className="text-frost-slate">This page could not be found.</p>
      <p className="text-sm text-glacier-mid">Use the root URL only (e.g. http://localhost:3000/ with nothing after the slash).</p>
      <a
        href="/"
        className="inline-block rounded-lg bg-glacier-mid/80 px-4 py-2 text-white transition hover:bg-glacier-mid"
      >
        Go to Travel Companion
      </a>
    </div>
  );
}
