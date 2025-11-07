export default function EnterpriseCTA() {
  return (
    <section id="enterprise" className="relative py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Built for global scale and security
            </h2>
            <p className="mt-4 text-gray-700">
              Multi‑region deployments, dedicated VPCs, and advanced compliance out of the box. Work with our solutions architects to plan your rollout and migration.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="h-5 w-5 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 mt-1"></span> Uptime SLA 99.99% with proactive incident response</li>
              <li className="flex items-start gap-3"><span className="h-5 w-5 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 mt-1"></span> Data residency controls and audit logging</li>
              <li className="flex items-start gap-3"><span className="h-5 w-5 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 mt-1"></span> White‑glove onboarding and technical enablement</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-black transition-colors">Contact enterprise sales</a>
              <a href="#resources" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 font-medium border border-gray-200 hover:bg-gray-50">Security overview</a>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <div className="grid grid-cols-2 gap-6">
              {[
                { k: 'Regions', v: '14+' },
                { k: 'Latency', v: '<40ms' },
                { k: 'SLA', v: '99.99%' },
                { k: 'Customers', v: '3k+' },
              ].map((m) => (
                <div key={m.k} className="p-4 rounded-xl bg-gray-50">
                  <div className="text-sm text-gray-600">{m.k}</div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900">{m.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-fuchsia-50 border border-cyan-100 text-sm text-gray-700">
              SOC2 Type II, ISO 27001, GDPR, HIPAA readiness. Pen testing reports available upon request.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
