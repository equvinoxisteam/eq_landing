import { Link } from 'react-router-dom';

export default function SocialProof() {
  return (
    <section className="bg-black text-white py-20 text-center">
      <Link
        to="/case-studies"
        className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105"
      >
        See Case Studies: 30–50% Efficiency Gains
      </Link>
    </section>
  );
}
