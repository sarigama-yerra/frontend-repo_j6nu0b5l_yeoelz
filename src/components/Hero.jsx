export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-full">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
            AI-powered builder
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Generate a beautiful website in seconds
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Describe your idea and watch it come to life. Clean design, smooth animations, and a fast backend ready to go.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
              Explore features
            </a>
            <a href="/test" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-semibold shadow hover:bg-black transition-colors">
              Check backend
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">No setup required. Fully responsive. Tailwind styling.</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="h-full w-full grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,.15),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(168,85,247,.15),transparent_40%)]">
              <div className="text-center p-8">
                <p className="text-sm uppercase tracking-widest text-gray-500">Preview</p>
                <h3 className="mt-2 text-2xl font-bold">Modern UI Kit</h3>
                <p className="mt-2 text-gray-600">Responsive sections, animated buttons, and thoughtful spacing out of the box.</p>
                <div className="mt-6 flex justify-center gap-3">
                  <button className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 transition-colors">Primary</button>
                  <button className="rounded-md bg-white text-gray-800 ring-1 ring-black/10 px-4 py-2 text-sm font-medium shadow hover:bg-black/5 transition-colors">Secondary</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
