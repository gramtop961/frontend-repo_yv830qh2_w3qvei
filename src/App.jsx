import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import EnterpriseCTA from './components/EnterpriseCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <EnterpriseCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
