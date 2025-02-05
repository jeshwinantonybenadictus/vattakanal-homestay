"use client"

import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = ["Home", "Rooms", "Services", "Location", "Activities", "Gallery", "Reviews", "Contact"]

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="relative">
            <button onClick={toggleMenu} className="p-2 hover:bg-blue-700 rounded">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            {isMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold">Jenova Homestays</h1>
          <div className="w-8"></div> {/* Placeholder for symmetry */}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen pt-16">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Jenova Homestays"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to Jenova Homestays</h1>
          <p className="text-xl md:text-2xl mb-8 text-center">Experience the serenity of Vattakanal</p>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-0 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">About Jenova Homestays</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Jenova+Homestays"
                alt="Jenova Homestays"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4 text-gray-700">
                Nestled in the serene hills of Vattakanal, Jenova Homestays offers a perfect retreat from the hustle and
                bustle of city life. Our cozy accommodations provide a home away from home, surrounded by the
                breathtaking beauty of the Western Ghats.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're seeking a peaceful getaway, an adventure in nature, or a base to explore the charming
                town of Kodaikanal, Jenova Homestays is your ideal destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 px-4 md:px-0 bg-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Our Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Deluxe Room", "Family Suite", "Mountain View Room"].map((room, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=${room}`}
                  alt={room}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{room}</h3>
                <p className="text-gray-600">
                  Comfortable and cozy {room.toLowerCase()} with modern amenities and stunning views.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 md:px-0 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Home-cooked Meals", "Guided Treks", "Bonfire Nights", "Wi-Fi", "Parking", "Laundry"].map(
              (service, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">{service}</h3>
                  <p className="text-gray-600">
                    Enjoy our {service.toLowerCase()} during your stay at Jenova Homestays.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 px-4 md:px-0 bg-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Our Location</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Map"
                alt="Jenova Homestays Location"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4 text-gray-700">
                Jenova Homestays is located in the serene hills of Vattakanal, offering breathtaking views of the
                Western Ghats. Our location provides easy access to popular attractions while maintaining a peaceful
                atmosphere.
              </p>
              <p className="text-lg text-gray-700">
                Address: Jenova Homestays, Vattakanal, Kodaikanal, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 px-4 md:px-0 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Nature Walks", "Bird Watching", "Photography Tours", "Meditation Sessions"].map((activity, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{activity}</h3>
                <p className="text-gray-600">
                  Explore the beauty of Vattakanal through our guided {activity.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 md:px-0 bg-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <Image
                key={index}
                src={`/placeholder.svg?height=300&width=300&text=Image+${index + 1}`}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 md:px-0 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Guest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "John D.",
                comment: "Amazing stay with breathtaking views! The staff was incredibly friendly and helpful.",
              },
              {
                name: "Sarah M.",
                comment:
                  "The home-cooked meals were delicious! I loved waking up to the misty mountains every morning.",
              },
              {
                name: "Raj K.",
                comment: "Perfect getaway from the city hustle. The guided treks were the highlight of our trip.",
              },
              {
                name: "Emma L.",
                comment: "Cozy rooms and a warm atmosphere. We'll definitely be coming back to Jenova Homestays!",
              },
            ].map((review, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-2">"{review.comment}"</p>
                <p className="text-blue-800 font-semibold">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-0 bg-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Jenova+Homestays"
                alt="Jenova Homestays Exterior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4 text-gray-700">
                Ready to book your stay or have any questions? Feel free to reach out to us!
              </p>
              <div className="flex items-center mb-4">
                <Phone className="mr-2 text-blue-800" />
                <a href="tel:9865153573" className="text-xl font-semibold hover:underline text-blue-800">
                  +91 98651 53573
                </a>
              </div>
              <p className="text-lg text-gray-700">Email: info@jenovahomestays.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Jenova Homestays. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

