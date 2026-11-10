import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-surface px-4 pt-28 pb-16">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-navy">Page not found</h1>
        <p className="mt-4 text-base text-charcoal/70">
          The page you are looking for is unavailable. Return to the homepage to explore AQ
          Technical Services.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-deep"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
