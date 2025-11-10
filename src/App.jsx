import Navbar from './components/Navbar';
import OverviewCards from './components/OverviewCards';
import ChartsPanel from './components/ChartsPanel';
import ProductsInfo from './components/ProductsInfo';
import PremiumSimulator from './components/PremiumSimulator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Dashboard Operasional Asuransi</h1>
            <p className="mt-2 text-slate-600">Ringkasan aktivitas internal: register aplikasi, polis, klaim, dan rencana marketing.</p>
          </div>
        </section>
        <OverviewCards />
        <ChartsPanel />
        <ProductsInfo />
        <PremiumSimulator />
        <section id="login" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Masuk ke Sistem</h2>
            <p className="mt-1 text-sm text-slate-600">Gunakan akun Anda untuk mengakses modul internal.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">Login</a>
              <a href="#signup" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">Sign Up</a>
            </div>
          </div>
        </section>
        <section id="signup" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Daftar Akun</h2>
            <p className="mt-1 text-sm text-slate-600">Belum punya akun? Daftar untuk mendapatkan akses.</p>
            <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Nama Lengkap" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <input type="email" placeholder="Email" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <input type="password" placeholder="Password" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <input type="password" placeholder="Konfirmasi Password" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <div className="sm:col-span-2">
                <button type="button" className="w-full rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Buat Akun</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
