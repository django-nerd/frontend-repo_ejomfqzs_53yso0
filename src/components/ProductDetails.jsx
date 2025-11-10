import React from 'react';
import { ArrowLeft, CheckCircle2, Calculator } from 'lucide-react';

const formatList = (items) => (
  <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
    {items.map((b) => (
      <li key={b}>{b}</li>
    ))}
  </ul>
);

const ProductDetails = ({ product, onBack, onOpenSimulator, showSimulatorButton }) => {
  if (!product) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke daftar produk
      </button>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{product.title}</h2>
            <p className="mt-1 text-slate-600 max-w-2xl">{product.desc}</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-md bg-sky-50 px-3 py-1 text-sky-700">
            <CheckCircle2 className="h-4 w-4" />
            Tersedia
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-slate-700">Manfaat</h3>
            {formatList(product.benefits)}
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-700">Pilihan Tambahan</h3>
            {formatList(product.addons || ["Perluasan banjir", "Gempa bumi", "Tanggung jawab hukum pihak ketiga"]) }
          </div>
        </div>
        {showSimulatorButton && product.hasSimulator && (
          <div className="mt-6">
            <button onClick={onOpenSimulator} className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">
              <Calculator className="h-4 w-4" /> Buka Simulasi Premi
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
