import { Star } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-pink-100" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium ring-1 ring-indigo-200 mb-4">
              <Star size={14} /> AI-powered sandbox
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Build full apps in minutes
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Design, code, and deploy interactive experiences with a real backend and database — all from your browser.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white font-medium shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20">
                Start building
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 font-medium shadow ring-1 ring-gray-200 hover:bg-gray-50">
                Explore features
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="h-16 rounded-md bg-gradient-to-br from-indigo-200 to-pink-200" />
              ))}
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-indigo-200/60 blur-2xl" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-pink-200/60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
