export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500"></div>
            <div className="mt-3 font-semibold text-gray-900">NebulaCore</div>
            <p className="mt-2 text-sm text-gray-600">The enterprise platform for building, scaling, and securing modern B2B ecosystems.</p>
          </div>
          <div>
            <div className="font-medium text-gray-900">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#solutions" className="hover:text-gray-900">Solutions</a></li>
              <li><a href="#platform" className="hover:text-gray-900">Platform</a></li>
              <li><a href="#enterprise" className="hover:text-gray-900">Enterprise</a></li>
              <li><a href="#resources" className="hover:text-gray-900">Resources</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-gray-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-gray-900">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} NebulaCore Inc. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Status</a>
            <a href="#" className="hover:text-gray-900">Docs</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
