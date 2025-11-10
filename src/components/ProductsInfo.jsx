import React from 'react';
import { ShieldCheck, Car, Home, Briefcase, LifeBuoy } from 'lucide-react';

const ProductCard = ({ icon: Icon, title, desc, benefits }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="mb-3 flex items-center gap-2 text-slate-800">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-sky-600 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-semibold">{title}</div>
    </div>
    <p className="text-sm text-slate-600">{desc}</p>
    <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
      {benefits.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  </div>
);

const ProductsInfo = () => {
  const products = [
    {
      icon: Car,
      title: 'Asuransi Kendaraan',
      desc: 'Perlindungan menyeluruh untuk kendaraan dari risiko kecelakaan, pencurian, dan bencana alam.',
      benefits: ['All risk / TLO', 'Tanggung jawab pihak ketiga', 'Bengkel rekanan luas'],
    },
    {
      icon: Home,
      title: 'Asuransi Properti',
      desc: 'Proteksi rumah dan aset bisnis dari kebakaran, banjir, dan risiko lainnya.',
      benefits: ['Kebakaran & banjir', 'Gempa opsional', 'Perbaikan cepat'],
    },
    {
      icon: Briefcase,
      title: 'Asuransi Perjalanan Bisnis',
      desc: 'Perlindungan saat perjalanan dinas termasuk keterlambatan, bagasi, dan kecelakaan.',
      benefits: ['Keterlambatan & pembatalan', 'Bagasi hilang', 'Medical emergency'],
    },
    {
      icon: LifeBuoy,
      title: 'Asuransi Kecelakaan Diri',
      desc: 'Santunan atas risiko kecelakaan yang menimpa karyawan saat bekerja.',
      benefits: ['Santunan meninggal', 'Cacat tetap', 'Biaya perawatan'],
    },
  ];

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-sky-600" />
        <h2 className="text-lg font-semibold text-slate-800">Informasi Produk Asuransi Umum</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductsInfo;
