import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero bg-gradient-to-b from-blue-500 to-blue-300 text-white text-center py-16">
        <h1 className="text-5xl font-bold">
          Discover Premium Water Bottles
        </h1>
        <p className="text-lg mt-4">
          Sustainable, stylish, and designed for your active lifestyle.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-700 hover:bg-blue-800 rounded-full text-white">
          Shop Now
        </button>
      </section>

      {/* Features Section */}
      <section className="features py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-2xl">Eco-Friendly Materials</h3>
            <p>Made of 100% recycled and sustainable materials.</p>
          </div>
          <div>
            <h3 className="text-2xl">Customizable Design</h3>
            <p>Create a unique bottle that aligns with your brand.</p>
          </div>
          <div>
            <h3 className="text-2xl">Durable & Long-lasting</h3>
            <p>Engineered to last and keep your water fresh all day.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about bg-blue-100 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center">
            About Our Mission
          </h2>
          <p className="text-lg mt-4 text-center">
            We’re dedicated to creating sustainable water bottles that help
            reduce plastic waste and promote a healthier planet.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-16 px-6">
        <h2 className="text-4xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-2xl">Bulk Orders</h3>
            <p>Perfect for businesses and events.</p>
          </div>
          <div>
            <h3 className="text-2xl">Custom Branding</h3>
            <p>Design bottles with your logo and colors.</p>
          </div>
          <div>
            <h3 className="text-2xl">Fast Shipping</h3>
            <p>Get your orders delivered on time, every time.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-blue-200 py-16 px-6">
        <h2 className="text-4xl font-bold text-center">What Our Customers Say</h2>
        <div className="carousel mt-8">
          <blockquote>
            "These water bottles are amazing! Durable, stylish, and eco-friendly."
          </blockquote>
          <p>- Happy Customer</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl">Basic</h3>
            <p>$10 per bottle</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl">Standard</h3>
            <p>$15 per bottle</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl">Premium</h3>
            <p>$20 per bottle</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq bg-blue-300 py-16 px-6">
        <h2 className="text-4xl font-bold text-center">FAQs</h2>
        <div className="mt-8">
          <h3 className="text-2xl">What materials are used?</h3>
          <p>All bottles are made with recycled and sustainable materials.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full mb-4 p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full mb-4 p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full mb-4 p-3 border rounded-lg"
            rows="4"
          />
          <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 rounded-full text-white">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Home;