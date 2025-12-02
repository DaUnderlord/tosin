import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Car } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Mock data for initial display - will be replaced by Supabase later
const mockCars: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "86",
    year: 2023,
    price: 35000,
    mileage: 5000,
    transmission: "Automatic",
    fuel_type: "Petrol",
    color: "Black",
    description: "Sporty and reliable.",
    images: ["https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1000&auto=format&fit=crop"],
    status: "available",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    make: "Hyundai",
    model: "Sonata",
    year: 2022,
    price: 22000,
    mileage: 15000,
    transmission: "Automatic",
    fuel_type: "Hybrid",
    color: "Blue",
    description: "Efficient and comfortable sedan.",
    images: ["https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop"],
    status: "available",
    created_at: new Date().toISOString(),
  },
  {
     id: "3",
     make: "Mercedes-Benz",
     model: "C-Class",
     year: 2021,
     price: 42000,
     mileage: 28000,
     transmission: "Automatic",
     fuel_type: "Petrol",
     color: "Silver",
     description: "Luxury defined.",
     images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop"],
     status: "available",
     created_at: new Date().toISOString(),
  }
];

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-12 px-4 text-center bg-zinc-900/20 border-b border-zinc-800">
         <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
         <p className="text-zinc-400 max-w-2xl mx-auto">
            Browse our hand-picked selection of premium vehicles. Each car meets our strict standards for quality and performance.
         </p>
      </div>

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Filters (Placeholder for now) */}
        <div className="flex flex-wrap gap-4 mb-12 p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
           <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-zinc-400">Filter by:</span>
              <select className="bg-black border border-zinc-700 rounded-md px-3 py-1.5 text-sm text-white focus:border-white focus:outline-none">
                 <option>All Makes</option>
                 <option>Toyota</option>
                 <option>Hyundai</option>
                 <option>Mercedes-Benz</option>
              </select>
              <select className="bg-black border border-zinc-700 rounded-md px-3 py-1.5 text-sm text-white focus:border-white focus:outline-none">
                 <option>Price: Any</option>
                 <option>Under $20k</option>
                 <option>$20k - $50k</option>
                 <option>Over $50k</option>
              </select>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCars.map((car) => (
            <Link href={`/inventory/${car.id}`} key={car.id} className="group block bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-white/50 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300">
              <div className="relative h-64 w-full bg-zinc-800 overflow-hidden">
                <Image 
                  src={car.images[0]} 
                  alt={`${car.make} ${car.model}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                   <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">{car.year}</span>
                   <h3 className="text-xl font-bold text-white">{car.make} {car.model}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-bold">
                  ${car.price.toLocaleString()}
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400 mb-4">
                   <div className="flex flex-col">
                      <span className="text-xs text-zinc-500">Mileage</span>
                      <span className="font-medium text-zinc-300">{car.mileage.toLocaleString()} mi</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-xs text-zinc-500">Transmission</span>
                      <span className="font-medium text-zinc-300">{car.transmission}</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-xs text-zinc-500">Fuel</span>
                      <span className="font-medium text-zinc-300">{car.fuel_type}</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-xs text-zinc-500">Color</span>
                      <span className="font-medium text-zinc-300">{car.color}</span>
                   </div>
                </div>
                <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                   View Details
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
