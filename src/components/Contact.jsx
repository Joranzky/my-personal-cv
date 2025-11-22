import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Let's Work Together</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui email atau media sosial.
        </p>
        <a href="mailto:email@example.com" className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:shadow-teal-500/50 transition duration-300">
          Kirim Email
        </a>
      </div>
    </section>
  );
};

export default Contact;