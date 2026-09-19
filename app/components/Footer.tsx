export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center">
        <p>
          <span className="font-semibold text-zinc-900">WebElvate</span> —
          websites for businesses in Sambalpur &amp; Bargarh, Odisha
        </p>
        <p>© {new Date().getFullYear()} WebElvate. All rights reserved.</p>
      </div>
    </footer>
  );
}
