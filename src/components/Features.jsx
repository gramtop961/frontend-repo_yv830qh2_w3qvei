export default function Features() {
  const features = [
    {
      title: 'Unified API Layer',
      desc: 'Connect services and data sources under a consistent, secure gateway with role‑based access.',
    },
    {
      title: 'Data Fabric',
      desc: 'Real‑time pipelines with schema governance and lineage to keep teams aligned and compliant.',
    },
    {
      title: 'Observability',
      desc: 'End‑to‑end tracing, metrics, and anomaly detection built for complex B2B ecosystems.',
    },
    {
      title: 'Enterprise SSO',
      desc: 'SOC2‑ready identity with SAML, SCIM, and granular policies across tenants and regions.',
    },
  ];

  return (
    <section id="solutions" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Enterprise platform for complex businesses
          </h2>
          <p className="mt-4 text-gray-700">
            Everything you need to build resilient, compliant, and scalable systems for your customers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 opacity-90 group-hover:opacity-100"></div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              <div className="mt-4 text-sm font-medium text-gray-900">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
