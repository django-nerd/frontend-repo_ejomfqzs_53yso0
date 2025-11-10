import { Code, Database, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Frontend scaffolding',
    desc: 'Vite + React with Tailwind and modern UI primitives prewired.'
  },
  {
    icon: Database,
    title: 'Real database',
    desc: 'MongoDB persistence available out of the box for your app data.'
  },
  {
    icon: Globe,
    title: 'FastAPI backend',
    desc: 'Clean endpoints, Pydantic schemas, and business logic separated.'
  },
  {
    icon: Zap,
    title: 'Live preview',
    desc: 'Instant previews and hot reload as you iterate your product.'
  }
];

function Features() {
  return (
    <section id="features" className="py-16 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need</h2>
          <p className="mt-3 text-gray-600">Structured components, clean APIs, and a productive editing flow.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-5 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center mb-4">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
