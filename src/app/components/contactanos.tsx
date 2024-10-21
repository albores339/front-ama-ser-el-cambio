"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

const Contactanos: React.FC = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Validar formulario antes de enviarlo
  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.nombre) tempErrors.nombre = "El nombre es obligatorio";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) tempErrors.email = "Correo inválido";
    if (!formData.mensaje) tempErrors.mensaje = "El mensaje es obligatorio";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      // Captura y muestra errores de la base de datos si existen
      if (!response.ok) {
        if (result.errors) {
          const backendErrors: { [key: string]: string } = {};
          Object.keys(result.errors).forEach((field) => {
            backendErrors[field] = result.errors[field].message;
          });
          setErrors(backendErrors);
        } else {
          Swal.fire({
            title: "Error",
            text: result.message || "Error al enviar el mensaje.",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
      } else {
        Swal.fire({
          title: "Mensaje enviado",
          text: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
          icon: "success",
          confirmButtonColor: '#0E7490', // Cyan 700
          confirmButtonText: "Aceptar",
        });
        setFormData({ nombre: "", email: "", mensaje: "" });
        setErrors({});
      }
    } catch {
      Swal.fire({
        title: "Error del servidor",
        text: "Hubo un problema con el servidor. Intenta de nuevo más tarde.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="p-6 my-8 bg-stone-50 text-stone-700 rounded-lg mx-auto px-2">
      <div className="mx-auto px-2">
        <h2 className="text-2xl md:text-4xl font-bold text-cyan-700 text-center">Contáctanos</h2>
        <p className="text-center my-4">Puedes tomar la información de contacto o dejarnos un mensaje y nosotros te responderemos lo más rápido posible</p>

        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-x-6 max-w-screen-lg mx-auto">
          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit} className="md:w-2/3 bg-white p-4 shadow-lg rounded-lg">
            {["nombre", "email", "mensaje"].map((field) => (
              <div key={field} className="mb-6">
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                  {field}
                </label>
                {field === "mensaje" ? (
                  <textarea
                    id={field}
                    rows={4}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    className={`mt-1 p-3 w-full border ${errors[field] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-cyan-500 focus:border-cyan-500`}
                    placeholder={`Tu ${field}`}
                  ></textarea>
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    className={`mt-1 p-3 w-full border ${errors[field] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-cyan-500 focus:border-cyan-500`}
                    placeholder={`Tu ${field}`}
                  />
                )}
                {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}

            <button type="submit" disabled={isLoading} className="w-full bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-800 transition duration-300">
              {isLoading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>

          {/* Información de contacto */}
          <div className="md:w-1/3 bg-cyan-700 text-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="h-6 w-6 mr-4" />
              <p>Teléfono: 961 155 1352</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="h-6 w-6 mr-4" />
              <p>Email: abidan@amaserelcambio.org</p>
            </div>
            <div className="flex items-center mb-4">
              <FaWhatsapp className="h-6 w-6 mr-4" />
              <p>WhatsApp: 961 155 1352</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactanos;
