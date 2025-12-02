import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Mock data function
const getCar = (id: string) => {
  // In a real app, fetch from Supabase
  const cars = [
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
      description: "This Toyota 86 is a masterpiece of engineering. With its sleek design and powerful engine, it offers an unparalleled driving experience. Perfect for those who demand performance and style.",
      images: ["https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1000&auto=format&fit=crop"],
      status: "available",
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
      description: "The Hyundai Sonata combines efficiency with luxury. Ideal for daily commuting or long road trips, it features advanced safety systems and a premium interior.",
      images: ["https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop"],
      status: "available",
    },
  ];
  return cars.find((c) => c.id === id);
};

export default async function CarDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params; // Await params in Next.js 15+
  const car = getCar(id);

  if (!car) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
           <h1 className="text-4xl font-bold">Car Not Found</h1>
           <Button asChild className="mt-4 bg-white text-black">
             <Link href="/inventory">Back to Inventory</Link>
           </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-zinc-800">
            <Image
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
             <div className="mb-6">
               <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                 {car.year} {car.make} {car.model}
               </h1>
               <p className="mt-4 text-3xl text-gray-300">${car.price.toLocaleString()}</p>
             </div>

             <div className="grid grid-cols-2 gap-4 mb-8 border-y border-zinc-800 py-6">
                <div>
                  <p className="text-sm text-zinc-500">Mileage</p>
                  <p className="text-lg font-medium">{car.mileage.toLocaleString()} miles</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Transmission</p>
                  <p className="text-lg font-medium">{car.transmission}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Fuel Type</p>
                  <p className="text-lg font-medium">{car.fuel_type}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Color</p>
                  <p className="text-lg font-medium">{car.color}</p>
                </div>
             </div>

             <div className="mb-8">
               <h3 className="text-lg font-semibold mb-2">Description</h3>
               <p className="text-zinc-400 leading-relaxed">
                 {car.description}
               </p>
             </div>

             <div className="flex flex-col gap-4 sm:flex-row">
               <Button size="lg" className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto" asChild>
                 <Link href="/contact">Inquire Now</Link>
               </Button>
               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto" asChild>
                 <Link href="/inventory">Back to Inventory</Link>
               </Button>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
