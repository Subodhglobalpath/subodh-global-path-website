export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-900 text-white py-6 px-8 shadow-md">
        <h1 className="text-3xl font-bold">Subodh Global Path</h1>
        <p className="text-sm mt-2">Connecting Global Careers</p>
      </header>

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="mb-6">
          Subodh Global Path is an international recruitment and career consulting agency based in Dubai and operating across Europe, including Malta. We specialize in connecting ambitious professionals with life-changing career opportunities abroad.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Overseas Recruitment – Skilled and Semi-skilled Workers</li>
          <li>Career Counseling & CV Assistance</li>
          <li>Visa Support for Malta, Croatia, UAE and more</li>
          <li>Work Permit Process Management</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Experienced team with international placement knowledge</li>
          <li>Transparent processing and regular follow-ups</li>
          <li>Personalized career guidance and legal document support</li>
        </ul>
      </section>

      <section className="bg-gray-100 px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Email: info@subodhglobalpath.com</p>
          <p className="mb-2">WhatsApp / Phone: +971 50 764 1579</p>
          <p className="mb-2">Office: Dubai, UAE & Partner Locations in Malta</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Subodh Global Path. All rights reserved.
      </footer>
    </main>
  );
}
