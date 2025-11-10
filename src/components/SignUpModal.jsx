import React from 'react';
import { X, UserPlus } from 'lucide-react';

const Backdrop = ({ onClose }) => (
  <div
    className="fixed inset-0 z-40 bg-slate-900/50"
    onClick={onClose}
    aria-hidden
  />
);

const SignUpModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <UserPlus className="h-5 w-5 text-sky-600" />
              Daftar Akun
            </div>
            <button
              onClick={onClose}
              className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm text-slate-600">Isi data berikut untuk membuat akun baru.</p>
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
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
