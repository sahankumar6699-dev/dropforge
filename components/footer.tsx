export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700/50 bg-slate-950/50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {currentYear} DropForge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
