// components/PaypalDonation.tsx
import PaypalSimpleButton from "./PaypalButton";

const PaypalDonation: React.FC = () => (
  <div className="bg-white shadow-lg rounded-lg p-8 mb-10 text-center max-w-screen-xl mx-auto">
    <h3 className="text-3xl font-bold text-gray-800 mb-4">Donar con Paypal</h3>
    <p className="text-lg mb-6">
      Selecciona el monto que deseas donar y realiza tu donación aunque no tengas cuenta a través de PayPal de forma fácil y segura.
    </p>
    <PaypalSimpleButton />
  </div>
);

export default PaypalDonation;
