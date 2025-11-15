// src/layouts/AdminLayout.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const linkBase =
  "px-3 py-2 rounded-lg text-sm font-medium transition-colors";
const linkInactive = "text-slate-500 hover:text-slate-900 hover:bg-slate-100";
const linkActive = "text-white bg-indigo-600";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold">
              A
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900">AcaClick</span>
              <span className="text-xs text-slate-500">
                Panel administrador
              </span>
            </div>
          </div>

          <nav className="flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Iniciar sesión
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Registrarse
            </NavLink>

            <NavLink
              to="/panel"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Panel
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
