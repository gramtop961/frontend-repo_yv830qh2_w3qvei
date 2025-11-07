import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth - pointer-events-none so 3D remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/80 backdrop-blur border border-gray-200 text-xs font-medium text-gray-700">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"></span>
            Trusted enterprise platform for B2B teams
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Build, connect, and scale with a unified enterprise tech stack
          </h1>
          <p className="mt-5 text-gray-700 text-lg">
            NebulaCore helps modern organizations ship faster with secure APIs, data orchestration, and real‑time analytics—all powered by an interactive 3D control center.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#solutions" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-black transition-colors">
              Explore solutions
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 font-medium border border-gray-200 hover:bg-gray-50">
              Talk to sales
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
            {[
              'Acme Corp',
              'Syntax Labs',
              'Nimbus AI',
              'Vertex Systems',
            ].map((name) => (
              <div key={name} className="text-sm text-gray-600">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
