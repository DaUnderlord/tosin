import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative h-20 w-20 transition-transform hover:scale-105">
                 <Image src={Logo} alt="RAPHAUTOS Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Everything Cars, Everything Us. Experience the epitome of automotive excellence with our curated collection of premium vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/inventory" className="hover:text-white transition-colors">Inventory</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Sales & Leasing</li>
              <li>Trade-Ins</li>
              <li>Financing</li>
              <li>Vehicle Sourcing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>123 Auto Drive, Car City</li>
              <li>+1 (555) 123-4567</li>
              <li>sales@raphautos.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} RAPHAUTOS. All rights reserved.
          </p>
          <div className="flex gap-4 text-zinc-500 text-sm">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
