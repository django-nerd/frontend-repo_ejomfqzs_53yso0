import { useState } from 'react';
import Navbar from './components/Navbar';
import OverviewCards from './components/OverviewCards';
import ChartsPanel from './components/ChartsPanel';
import ProductsInfo from './components/ProductsInfo';
import PremiumSimulator from './components/PremiumSimulator';
import ProductDetails from './components/ProductDetails';
import SignUpModal from './components/SignUpModal';
import Footer from './components/Footer';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSimulator, setShowSimulator] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setShowSimulator(false);
    window.location.hash = 'products';
  };

  const handleOpenSimulator = () => {
    setShowSimulator(true);
    // ensure scroll to simulator section
    setTimeout(() => {
      const el = document.getElementById('simulator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onOpenSignUp={() => setOpenSignUp(true)} />
      <main>
        <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Dashboard Operasional Asuransi</h1>
            <p className="mt-2 text-slate-600">Ringkasan aktivitas internal: register aplikasi, polis, klaim, dan rencana marketing.</p>
          </div>
        </section>
        <OverviewCards />
        <ChartsPanel />
        {!selectedProduct && (
          <ProductsInfo onSelect={handleSelectProduct} />
        )}
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onOpenSimulator={handleOpenSimulator}
            showSimulatorButton={!showSimulator}
          />
        )}
        {showSimulator && <PremiumSimulator />}
        <section id="login" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Masuk ke Sistem</h2>
            <p className="mt-1 text-sm text-slate-600">Gunakan akun Anda untuk mengakses modul internal.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">Login</a>
              <button onClick={() => setOpenSignUp(true)} className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">Sign Up</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SignUpModal open={openSignUp} onClose={() => setOpenSignUp(false)} />
    </div>
  );
}

export default App;
