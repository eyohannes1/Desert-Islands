import { motion } from 'motion/react';
import { Upload, ChevronRight, Star, Quote, Leaf, ShieldCheck, Award, Droplets, Sun } from 'lucide-react';
import { useState, useRef } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand/30 selection:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="bg-glow w-[600px] h-[600px] bg-brand/20 top-[-200px] left-[-200px]"></div>
      <div className="bg-glow w-[800px] h-[800px] bg-brand/10 bottom-[10%] right-[-300px]"></div>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <TrustedBySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <Leaf className="w-6 h-6 text-brand" />
        <span className="text-xl font-semibold tracking-widest uppercase">Desert Islands</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
        <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
      </div>
      <button className="btn-glass px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider hidden md:block">
        Call Us
      </button>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-6 leading-[1.1]">
            Transform Your <br className="hidden md:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Backyard</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-20 font-light leading-relaxed"
        >
          At Desert Islands, we specialize in unique design concepts that transform AZ backyard spaces into beautiful outdoor escapes. Our team is dedicated to creating that outdoor environment that reflects your unique desires and style.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="btn-solid-glass px-10 py-5 rounded-full text-base font-semibold uppercase tracking-widest w-full sm:w-auto flex items-center justify-center gap-2 group">
            Get Free Quote
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs uppercase tracking-widest"
      >
        <span>Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </motion.div>
    </section>
  );
}

function TrustedBySection() {
  const logos = [
    { icon: ShieldCheck, name: "AZ Landscape Contractors" },
    { icon: Award, name: "Best of Houzz 2025" },
    { icon: Droplets, name: "WaterSense Partner" },
    { icon: Sun, name: "Scottsdale Green Building" },
    { icon: Star, name: "BBB A+ Rated" },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40 mb-12">
          Certified & Trusted By Industry Leaders
        </p>
        
        <div className="relative overflow-hidden flex">
          <motion.div 
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          >
            {/* Double the array for seamless looping */}
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white/50 grayscale hover:grayscale-0 hover:text-white transition-all duration-500">
                <logo.icon className="w-8 h-8 opacity-70" />
                <span className="text-sm font-medium tracking-wider uppercase">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Desert Islands completely reimagined our Paradise Valley property. The custom grill station and fire pit they designed have become the centerpiece of our home. Truly exceptional craftsmanship.",
      author: "James & Sarah M.",
      location: "Paradise Valley, AZ"
    },
    {
      quote: "From the initial 3D rendering to the final planting of the saguaros, the experience was flawless. They understand luxury and deliver on every promise. Our backyard feels like a five-star resort.",
      author: "David L.",
      location: "North Scottsdale, AZ"
    },
    {
      quote: "Their attention to detail is unmatched. The lighting design they implemented highlights the natural desert beauty while providing an elegant atmosphere for our evening gatherings.",
      author: "Elena R.",
      location: "Cave Creek, AZ"
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">What Our Clients Say</h2>
          <div className="w-24 h-[1px] bg-brand mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-colors duration-500"
            >
              <Quote className="w-10 h-10 text-brand/30 mb-6 group-hover:text-brand/50 transition-colors duration-500" />
              <p className="text-white/80 font-light leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                  ))}
                </div>
                <p className="font-medium text-white">{testimonial.author}</p>
                <p className="text-sm text-white/40">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Form inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand/5 blur-[100px] pointer-events-none"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Start Your Project</h2>
            <p className="text-white/60 font-light">Share your vision with us, and we'll bring it to life.</p>
          </div>

          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-medium text-white/70 uppercase tracking-wider ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full glass-input rounded-2xl px-6 py-4 text-white placeholder:text-white/20"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-white/70 uppercase tracking-wider ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full glass-input rounded-2xl px-6 py-4 text-white placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-white/70 uppercase tracking-wider ml-2">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your dream backyard..."
                className="w-full glass-input rounded-2xl px-6 py-4 text-white placeholder:text-white/20 resize-none"
              ></textarea>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-white/70 uppercase tracking-wider ml-2">Attachments (Optional)</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="w-full glass-input rounded-2xl px-6 py-8 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white/[0.05] transition-colors group"
              >
                <input 
                  type="file" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-5 h-5 text-brand" />
                </div>
                <p className="text-white/80 font-medium mb-1">
                  {fileName ? fileName : "Click to upload files"}
                </p>
                <p className="text-white/40 text-sm">
                  {fileName ? "File selected" : "Share photos of your current space or inspiration"}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="btn-solid-glass w-full py-5 rounded-2xl text-base font-semibold uppercase tracking-widest flex items-center justify-center gap-2 group">
                Submit Request
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center relative z-10">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Leaf className="w-5 h-5 text-brand" />
        <span className="text-lg font-semibold tracking-widest uppercase">Desert Islands</span>
      </div>
      <p className="text-white/40 text-sm font-light">
        © {new Date().getFullYear()} Desert Islands Landscaping. All rights reserved.
      </p>
      <div className="mt-4">
        <a href="#terms" className="text-white/40 hover:text-white text-sm font-light transition-colors">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}

