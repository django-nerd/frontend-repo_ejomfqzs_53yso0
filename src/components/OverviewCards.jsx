import React from 'react';
import { FileSpreadsheet, FileCheck2, FileX, Send, Clock4, RotateCcw, ClipboardList, Loader2, CheckCircle2, XCircle, Target, PlayCircle, Flag } from 'lucide-react';

const StatCard = ({ title, items }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 text-sm font-semibold text-slate-700">{title}</div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {items.map((it) => (
          <div key={it.label} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
            <div className="flex items-center gap-2 text-slate-700">
              {it.icon}
              <span>{it.label}</span>
            </div>
            <span className="font-semibold text-slate-900">{it.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const OverviewCards = () => {
  const registerApp = [
    { label: 'Terdaftar', value: 128, icon: <FileCheck2 className="h-4 w-4 text-emerald-600" /> },
    { label: 'Pending', value: 24, icon: <Clock4 className="h-4 w-4 text-amber-600" /> },
    { label: 'Batal', value: 7, icon: <FileX className="h-4 w-4 text-rose-600" /> },
    { label: 'Total', value: 159, icon: <FileSpreadsheet className="h-4 w-4 text-slate-600" /> },
  ];

  const polis = [
    { label: 'Terkirim', value: 96, icon: <Send className="h-4 w-4 text-sky-600" /> },
    { label: 'Pending', value: 11, icon: <Clock4 className="h-4 w-4 text-amber-600" /> },
    { label: 'Retur', value: 4, icon: <RotateCcw className="h-4 w-4 text-rose-600" /> },
    { label: 'Total', value: 111, icon: <FileSpreadsheet className="h-4 w-4 text-slate-600" /> },
  ];

  const klaim = [
    { label: 'Pending', value: 18, icon: <ClipboardList className="h-4 w-4 text-amber-600" /> },
    { label: 'On Proses', value: 23, icon: <Loader2 className="h-4 w-4 text-sky-600" /> },
    { label: 'Selesai', value: 64, icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" /> },
    { label: 'Ditolak', value: 5, icon: <XCircle className="h-4 w-4 text-rose-600" /> },
  ];

  const marketing = [
    { label: 'Draft', value: 12, icon: <Target className="h-4 w-4 text-slate-600" /> },
    { label: 'On Proses', value: 9, icon: <PlayCircle className="h-4 w-4 text-sky-600" /> },
    { label: 'Realisasi', value: 21, icon: <Flag className="h-4 w-4 text-emerald-600" /> },
  ];

  return (
    <section id="overview" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Register Aplikasi" items={registerApp} />
        <StatCard title="Polis Asuransi" items={polis} />
        <StatCard title="Register Klaim" items={klaim} />
        <StatCard title="Marketing Plan" items={marketing} />
      </div>
    </section>
  );
};

export default OverviewCards;
