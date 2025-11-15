// src/pages/HomePage.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/imagenes/AcaClickHsinfondo.png"
                alt="AcaClick Logo"
                className="h-10"
              />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#beneficios"
                className="text-gray-600 hover:text-orange-500 font-medium transition"
              >
                Beneficios
              </a>
              <a
                href="#como-funciona"
                className="text-gray-600 hover:text-orange-500 font-medium transition"
              >
                Cómo Funciona
              </a>
              <a
                href="#plantillas"
                className="text-gray-600 hover:text-orange-500 font-medium transition"
              >
                Plantillas
              </a>
              <a
                href="#precios"
                className="text-gray-600 hover:text-orange-500 font-medium transition"
              >
                Precios
              </a>
            </div>

            <button className="hidden md:block px-6 py-3 gradient-orange-purple text-white font-bold rounded-full hover:opacity-90 transition shadow-lg">
              <a href="/login">Comenzar Gratis</a>
            </button>

            <button className="md:hidden text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section with Carousel */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="blob blob-orange"></div>
        <div className="blob blob-purple"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
                🚀 La forma más rápida de vender online
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                Crea tu{" "}
                <span className="gradient-text">tienda online</span> en minutos
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                La manera más fácil para que pequeños negocios comiencen a vender
                en línea. Sin necesidad de programar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 gradient-orange-purple text-white font-bold rounded-full hover:scale-105 transition shadow-2xl">
                  <a href="/login">Empieza tu Prueba Gratis</a>
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-full hover:bg-gray-50 transition border-2 border-gray-200">
                  Ver Demo
                </button>
              </div>

              <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-purple-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-pink-400 border-2 border-white"></div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-800">
                    Más de 10,000+ usuarios
                  </p>
                  <p className="text-xs text-gray-500">
                    ⭐⭐⭐⭐⭐ 4.9/5 calificación
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="relative float-animation">
              <div className="hero-carousel rounded-3xl overflow-hidden shadow-2xl">
                <Slider {...heroSettings}>
                  <div className="relative">
                    <img
                      src="/imagenes/Banner3AcaClick.png"
                      alt="Banner AcaClick"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                  </div>

                  <div className="relative">
                    <img
                      src="/imagenes/Banner3.png"
                      alt="Banner2 AcaClick"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                  </div>

                  <div className="relative">
                    <img
                      src="/imagenes/Banner4.png"
                      alt="Banner3 AcaClick"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                  </div>
                </Slider>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-orange-purple rounded-2xl blur-2xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-2xl blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              ¿Por qué elegir <span className="gradient-text">AcaClick?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para vender online con éxito
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-hover bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-100">
              <div className="w-16 h-16 gradient-orange-purple rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Fácil de Usar</h3>
              <p className="text-gray-600">
                Interfaz intuitiva diseñada para que cualquiera pueda crear su
                tienda sin conocimientos técnicos.
              </p>
            </div>

            <div className="card-hover bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Diseños Hermosos</h3>
              <p className="text-gray-600">
                Plantillas profesionales optimizadas para convertir visitantes
                en clientes.
              </p>
            </div>

            <div className="card-hover bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-100">
              <div className="w-16 h-16 gradient-orange-purple rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Pagos Seguros</h3>
              <p className="text-gray-600">
                Procesamiento de pagos encriptado y certificado para proteger a
                tus clientes.
              </p>
            </div>

            <div className="card-hover bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Crece tu Negocio</h3>
              <p className="text-gray-600">
                Herramientas de marketing, SEO y analytics para escalar tus
                ventas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="galeria"
        className="py-20 px-6 bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Nuestra <span className="gradient-text">Plataforma</span>
            </h2>
            <p className="text-xl text-gray-600">
              Descubre cómo funciona AcaClick
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/imagenes/Imagen2.jpg"
                alt="Plataforma AcaClick"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/imagenes/carrucel3.png"
                alt="Características AcaClick"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/imagenes/galeria2.png"
                alt="Galería AcaClick"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Cómo <span className="gradient-text">Funciona</span>
            </h2>
          <p className="text-xl text-gray-600">
              Tres pasos simples para lanzar tu tienda
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg card-hover relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 gradient-orange-purple rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">
                1
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-4 mt-4">
                  Elige tu Diseño
                </h3>
                <p className="text-gray-600 mb-6">
                  Selecciona una plantilla profesional que se adapte a tu
                  marca. Personalízala fácilmente con nuestro editor visual.
                </p>
                <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold">
                    Plantilla Personalizable
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg card-hover relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">
                2
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-4 mt-4">
                  Agrega tus Productos
                </h3>
                <p className="text-gray-600 mb-6">
                  Sube fotos de productos, escribe descripciones y establece
                  precios. Gestiona tu inventario desde un solo panel.
                </p>
                <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold">
                    Gestión de Productos
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg card-hover relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 gradient-orange-purple rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">
                3
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-4 mt-4">Lanza y Vende</h3>
                <p className="text-gray-600 mb-6">
                  Publica tu tienda con un solo clic. Comienza a aceptar pedidos
                  y envía a clientes en todo el mundo.
                </p>
                <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold">
                    Tienda Online Activa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¡Próximamente!
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Estamos trabajando en nuevas características y funcionalidades para
            ti. ¡Mantente atento!
          </p>

          <div className="flex flex-wrap justify-center gap-10 mb-10">
            <img
              src="/imagenes/android.jpg"
              alt="Disponible próximamente en Android"
              className="h-16 md:h-20 object-contain"
            />
            <img
              src="/imagenes/aple.jpg"
              alt="Disponible próximamente en iOS"
              className="h-16 md:h-20 object-contain"
            />
          </div>

          <div className="max-w-md mx-auto">
            <img
              src="/imagenes/mobile.png"
              alt="Aplicación Móvil AcaClick"
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Precios <span className="gradient-text">Simples</span>
            </h2>
            <p className="text-xl text-gray-600">
              Para cada etapa de tu negocio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Básico */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 card-hover">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Básico</h3>
              <div className="mb-4">
                <span className="text-5xl font-black">Gratis</span>
              </div>
              <p className="text-gray-600 mb-6">Perfecto para empezar</p>
              <button className="w-full py-3 bg-orange-100 text-orange-600 font-bold rounded-full hover:bg-orange-200 transition mb-6">
                Comenzar
              </button>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  <span className="text-gray-600">Registra tu negocio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  <span className="text-gray-600">Muestra tus productos</span>
                </li>
              </ul>
            </div>

            {/* Plus */}
            <div className="gradient-orange-purple rounded-3xl p-1 relative scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-sm font-bold text-orange-500">
                Más Popular
              </div>
              <div className="bg-white rounded-3xl p-8 h-full">
                <h3 className="text-xl font-bold gradient-text mb-2">Plus</h3>
                <div className="mb-4">
                  <span className="text-5xl font-black">$500</span>
                  <span className="text-gray-500">/mes</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Para negocios en crecimiento
                </p>
                <button className="w-full py-3 gradient-orange-purple text-white font-bold rounded-full hover:opacity-90 transition mb-6">
                  Comenzar
                </button>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span className="text-gray-600">
                      3 negocios registrados
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span className="text-gray-600">
                      Venta de productos online
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span className="text-gray-600">
                      Administración de página
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 card-hover">
              <h3 className="text-xl font-bold text-purple-500 mb-2">
                Premium
              </h3>
              <div className="mb-4">
                <span className="text-5xl font-black">$1500</span>
                <span className="text-gray-500">/mes</span>
              </div>
              <p className="text-gray-600 mb-6">Para negocios establecidos</p>
              <button className="w-full py-3 bg-purple-100 text-purple-600 font-bold rounded-full hover:bg-purple-200 transition mb-6">
                Comenzar
              </button>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  <span className="text-gray-600">Negocios ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  <span className="text-gray-600">
                    Pedidos y reservaciones
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  <span className="text-gray-600">
                    Administración completa
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 gradient-orange-purple relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full -bottom-48 -right-48"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Únete a miles de emprendedores que ya están vendiendo con AcaClick
          </p>
          <button className="px-10 py-5 bg-white text-orange-500 font-bold rounded-full hover:scale-105 transition shadow-2xl text-lg">
            <a href="/login">Crear Mi Tienda Gratis</a>
          </button>
          <p className="text-white/80 mt-4 text-sm">
            No se requiere tarjeta de crédito • Configura en 5 minutos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-purple-900 to-purple-800 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <img
                src="/imagenes/AcaClickHsinfondo.png"
                alt="Logotipo de AcaClick"
                className="h-12 mb-4"
              />
              <p className="text-purple-200 mb-4 max-w-md">
                Diseña y personaliza tu página web para destacar en línea y
                hacer crecer tu negocio.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/acaclickes/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram de AcaClick"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Enlaces rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors duration-300"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#beneficios"
                    className="text-purple-200 hover:text-white transition-colors duration-300"
                  >
                    Características
                  </a>
                </li>
                <li>
                  <a
                    href="#precios"
                    className="text-purple-200 hover:text-white transition-colors duration-300"
                  >
                    Planes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors duration-300"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Contacto
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-envelope text-purple-200 mt-1 mr-2"></i>
                  <span className="text-purple-200">info@acaclick.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone text-purple-200 mt-1 mr-2"></i>
                  <span className="text-purple-200">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-purple-200 mt-1 mr-2"></i>
                  <span className="text-purple-200">Ciudad, País</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-purple-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-purple-300 text-sm mb-4 md:mb-0">
                © 2024 AcaClick - Todos los derechos reservados
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-purple-300 hover:text-white text-sm transition-colors duration-300"
                  title="Política de privacidad"
                >
                  Política de privacidad
                </a>
                <span className="text-purple-300">|</span>
                <a
                  href="#"
                  className="text-purple-300 hover:text-white text-sm transition-colors duration-300"
                  title="Términos de servicio"
                >
                  Términos de servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
