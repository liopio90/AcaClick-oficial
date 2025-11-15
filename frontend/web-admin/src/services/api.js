// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8001/api";

// 🔐 Login: devuelve { access, refresh }
export async function loginUser({ correo, password }) {
  const response = await fetch(`${API_URL}/auth/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ correo, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    // lanzamos un error con info útil
    throw { status: response.status, data };
  }

  return data;
}

// 👤 Traer información del usuario logueado
export async function getCurrentUser(accessToken) {
  const response = await fetch(`${API_URL}/auth/me/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw { status: response.status, data };
  }

  return data; // aquí viene id_usuario, correo, nombre, rol, etc.
}
