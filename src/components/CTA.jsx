export default function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="mx-auto max-w-6xl px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">Ready to generate your website?</h2>
        <p className="mt-3 text-blue-100 max-w-2xl mx-auto">Start with a solid foundation. You can extend sections, add pages, and connect real data whenever you want.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/test" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-blue-700 font-semibold shadow hover:bg-blue-50 transition-colors">Verify backend</a>
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-blue-500/20 ring-1 ring-white/30 px-5 py-3 text-white font-semibold hover:bg-blue-500/30 transition-colors">Learn more</a>
        </div>
        <p className="mt-4 text-xs text-blue-100">Deployed preview updates automatically while you build.</p>
      </div>
    </section>
  )
}
