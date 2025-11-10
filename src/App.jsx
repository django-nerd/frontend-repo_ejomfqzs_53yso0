import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="about" className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">A smooth way to ship ideas</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This sandbox pairs a modern React frontend with a real FastAPI backend and MongoDB persistence. Build features, test APIs, and see results instantly in one place.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
