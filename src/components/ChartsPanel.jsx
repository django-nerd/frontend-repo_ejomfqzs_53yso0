import React from 'react';

const Card = ({ title, children }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="mb-3 text-sm font-semibold text-slate-700">{title}</div>
    {children}
  </div>
);

const Bar = ({ label, value, max = 100, color = 'bg-sky-500' }) => {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
        <span>{label}</span>
        <span className="font-medium text-slate-800">{value}</span>
      </div>
      <div className="h-2 w-full rounded bg-slate-100">
        <div className={`h-2 rounded ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

const ChartsPanel = () => {
  // Dummy data comparison against active marketers
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
  const app = [20, 35, 40, 30, 45, 50];
  const marketing = [10, 15, 25, 18, 30, 32];
  const polis = [18, 22, 28, 26, 33, 37];

  const maxVal = Math.max(...app, ...marketing, ...polis);

  return (
    <section id="charts" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Register Aplikasi vs Marketing">
          {months.map((m, i) => (
            <div key={m} className="mb-4">
              <div className="mb-1 text-xs font-medium text-slate-700">{m}</div>
              <Bar label="Register Aplikasi" value={app[i]} max={maxVal} color="bg-sky-500" />
              <Bar label="Marketing Aktif" value={marketing[i]} max={maxVal} color="bg-emerald-500" />
            </div>
          ))}
        </Card>
        <Card title="Polis vs Marketing">
          {months.map((m, i) => (
            <div key={m} className="mb-4">
              <div className="mb-1 text-xs font-medium text-slate-700">{m}</div>
              <Bar label="Polis Dikirim" value={polis[i]} max={maxVal} color="bg-indigo-500" />
              <Bar label="Marketing Aktif" value={marketing[i]} max={maxVal} color="bg-emerald-500" />
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default ChartsPanel;
