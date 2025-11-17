export default function Features() {
  const features = [
    {
      title: 'Fast Backend',
      desc: 'API is ready with FastAPI, CORS, and a test route. Connect instantly.'
    },
    {
      title: 'Live Preview',
      desc: 'Hot reload and instant updates as you iterate on your idea.'
    },
    {
      title: 'Styled with Tailwind',
      desc: 'Clean, responsive UI with modern gradients and soft shadows.'
    },
    {
      title: 'Database Ready',
      desc: 'MongoDB integration enabled with schema definitions out of the box.'
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">Everything you need</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">A streamlined stack that lets you focus on your product, not boilerplate.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-white p-6 shadow ring-1 ring-black/5">
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
