import React, { useMemo, useState } from 'react';
import { Calculator, Percent, DollarSign, CalendarClock } from 'lucide-react';

const Input = ({ label, children }) => (
  <label className="flex w-full flex-col gap-1 text-sm">
    <span className="text-slate-700">{label}</span>
    {children}
  </label>
);

function formatIDR(num) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num || 0);
}

const PremiumSimulator = () => {
  const [sumInsured, setSumInsured] = useState(100_000_000);
  const [rate, setRate] = useState(0.35); // persen
  const [adminFee, setAdminFee] = useState(25000);
  const [tenor, setTenor] = useState(12);

  const premium = useMemo(() => (sumInsured * (rate / 100)), [sumInsured, rate]);
  const stamp = premium > 0 ? 10000 : 0;
  const total = premium + adminFee + stamp;
  const monthly = tenor > 0 ? total / tenor : total;

  return (
    <section id="simulator" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex items-center gap-2">
        <Calculator className="h-5 w-5 text-sky-600" />
        <h2 className="text-lg font-semibold text-slate-800">Simulasi Perhitungan Premi</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Nilai Pertanggungan (Sum Insured)">
              <input type="number" value={sumInsured} onChange={(e) => setSumInsured(Number(e.target.value))} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </Input>
            <Input label="Rate (%)">
              <div className="relative">
                <Percent className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input type="number" step="0.01" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full rounded-md border border-slate-300 px-9 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
            </Input>
            <Input label="Biaya Administrasi">
              <div className="relative">
                <DollarSign className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input type="number" value={adminFee} onChange={(e) => setAdminFee(Number(e.target.value))} className="w-full rounded-md border border-slate-300 px-9 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
            </Input>
            <Input label="Tenor (bulan)">
              <div className="relative">
                <CalendarClock className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input type="number" value={tenor} onChange={(e) => setTenor(Number(e.target.value))} className="w-full rounded-md border border-slate-300 px-9 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
            </Input>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Premi Dasar</span>
              <span className="font-semibold text-slate-900">{formatIDR(premium)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Biaya Admin</span>
              <span className="font-semibold text-slate-900">{formatIDR(adminFee)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Materai</span>
              <span className="font-semibold text-slate-900">{formatIDR(stamp)}</span>
            </div>
            <div className="my-3 h-px bg-slate-200" />
            <div className="flex items-center justify-between text-base">
              <span className="font-medium text-slate-700">Total Premi</span>
              <span className="font-semibold text-slate-900">{formatIDR(total)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Cicilan per bulan</span>
              <span className="font-semibold text-slate-900">{formatIDR(monthly)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSimulator;
