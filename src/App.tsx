import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function App() {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white pb-20">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 flex justify-between items-center text-warm-bg mix-blend-difference">
        <h1 className="font-serif text-2xl tracking-widest uppercase">Tasty</h1>
        <div className="space-x-8 hidden md:block text-sm font-medium tracking-wide uppercase font-sans">
          <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
          <a href="#story" className="hover:text-accent transition-colors">Our Story</a>
          <a href="#visit" className="hover:text-accent transition-colors">Visit Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=2000" 
            alt="Indian Cuisine" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20"
          initial="hidden"
          animate="visible"
          variants={STAGGER}
        >
          <motion.p variants={FADE_UP} className="text-accent font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-semibold">
            Authentic & Contemporary
          </motion.p>
          <motion.h2 variants={FADE_UP} className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-bg leading-tight mb-8 font-light">
            Tasty Indian<br/><span className="text-accent italic">Food</span>
          </motion.h2>
          <motion.div variants={FADE_UP}>
            <a href="#menu" className="inline-block bg-accent hover:bg-accent/90 text-warm-bg font-sans text-sm tracking-widest uppercase py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
              Discover Menu
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
          >
            <motion.h3 variants={FADE_UP} className="font-serif text-4xl md:text-5xl mb-6 text-primary leading-tight">
              A symphony of <span className="italic text-accent">spices</span> & tradition.
            </motion.h3>
            <motion.p variants={FADE_UP} className="text-primary/70 font-sans leading-relaxed mb-6 font-light text-lg">
              Born from a passion for rich, bold flavors, Tasty brings the true essence of Indian culinary heritage to your table. 
              We blend time-honored recipes with a modern approach, serving dishes that are both comforting and unexpectedly elegant.
            </motion.p>
            <motion.p variants={FADE_UP} className="text-primary/70 font-sans leading-relaxed font-light text-lg">
              Every dish tells a story of careful preparation, from slow-roasted spices to overnight marinades, ensuring an unforgettable dining experience.
            </motion.p>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=1000" 
              alt="Pouring curry"
              className="w-full aspect-[3/4] object-cover rounded-[2rem] md:rounded-[4rem] shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary rounded-full -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-accent rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 md:py-32 bg-secondary/30 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="font-serif text-4xl md:text-5xl text-primary mb-4">Curated Classics</h3>
            <p className="text-primary/60 font-sans uppercase tracking-widest text-sm">A glimpse into our kitchen</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-16">
            {[
              { name: "Butter Chicken", desc: "Tandoor-roasted chicken simmered in a velvety tomato and fenugreek gravy.", price: "R145" },
              { name: "Lamb Rogan Josh", desc: "Slow-cooked lamb in a rich, aromatic sauce infused with Kashmiri chilies.", price: "R185" },
              { name: "Palak Paneer", desc: "Fresh cottage cheese cubes in a delicately spiced, creamy spinach puree.", price: "R130" },
              { name: "Signature Biryani", desc: "Fragrant basmati rice layered with marinated meat, saffron, and crispy onions.", price: "R160" },
              ...(showFullMenu ? [
                { name: "Prawn Coconut Curry", desc: "Succulent prawns cooked in a coastal style coconut and mustard seed base.", price: "R210" },
                { name: "Dal Makhani", desc: "Black lentils slow-cooked overnight with churned butter and fresh cream.", price: "R115" },
              ] : [])
            ].map((item, i) => (
              <motion.div 
                key={item.name}
                className="group border-b border-primary/10 pb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">{item.name}</h4>
                  <span className="font-sans text-sm tracking-wider text-primary/60">{item.price}</span>
                </div>
                <p className="font-sans font-light text-primary/70 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-20">
             <button 
              onClick={() => setShowFullMenu(!showFullMenu)}
              className="border border-primary text-primary hover:bg-primary hover:text-warm-bg font-sans text-sm tracking-widest uppercase py-4 px-10 rounded-full transition-all duration-300 cursor-pointer"
             >
              {showFullMenu ? "Show Less" : "View Full Menu"}
            </button>
          </div>
        </div>
      </section>

      {/* Visit/Contact Section */}
      <section id="visit" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto bg-primary text-warm-bg rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h3 className="font-serif text-4xl md:text-6xl mb-8">Join us for a <br/><span className="text-accent italic">taste</span>.</h3>
              <p className="font-sans font-light text-warm-bg/70 max-w-md leading-relaxed text-lg mb-12">
                Experience the warmth of our hospitality. Whether it's a casual dinner or an intimate celebration, we're ready to serve you.
              </p>
              
              <div className="space-y-6 font-sans font-light text-warm-bg/90">
                <div className="flex items-center gap-4">
                  <MapPin className="text-accent w-5 h-5" />
                  <p>123 Culinary Ave, Cape Town, South Africa</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-accent w-5 h-5" />
                  <p>+27 21 555 0192</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-accent w-5 h-5 mt-1" />
                  <div>
                    <p>Tue - Sun: 12:00 PM - 10:00 PM</p>
                    <p className="text-warm-bg/50 text-sm mt-1">Closed on Mondays</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-warm-bg/5 rounded-3xl p-8 backdrop-blur-sm border border-warm-bg/10 flex flex-col justify-center">
              <h4 className="font-serif text-2xl mb-6 text-center">Reserve a Table</h4>
              {isBooked ? (
                <div className="text-center py-8">
                  <p className="font-serif text-2xl text-accent mb-2">Thank You!</p>
                  <p className="font-sans font-light text-warm-bg/80">Your table request has been received. We will contact you shortly to confirm.</p>
                  <button 
                    onClick={() => setIsBooked(false)}
                    className="mt-8 border border-warm-bg/20 hover:border-accent text-warm-bg/60 hover:text-warm-bg font-sans text-xs tracking-widest uppercase py-2 px-6 rounded-full transition-colors cursor-pointer"
                  >
                    Make Another
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsBooked(true); }}>
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b border-warm-bg/20 px-0 py-3 text-warm-bg placeholder:text-warm-bg/40 focus:outline-none focus:border-accent transition-colors font-sans font-light"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="date" 
                      required
                      className="w-full bg-transparent border-b border-warm-bg/20 px-0 py-3 text-warm-bg/40 focus:text-warm-bg focus:outline-none focus:border-accent transition-colors font-sans font-light"
                    />
                    <input 
                      type="time" 
                      required
                      className="w-full bg-transparent border-b border-warm-bg/20 px-0 py-3 text-warm-bg/40 focus:text-warm-bg focus:outline-none focus:border-accent transition-colors font-sans font-light"
                    />
                  </div>
                  <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-warm-bg font-sans text-sm tracking-widest uppercase py-4 rounded-full transition-colors mt-8 cursor-pointer">
                    Book Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pb-8 pt-12 md:px-12 flex flex-col md:flex-row justify-between items-center text-primary/50 text-sm font-sans">
        <p>© {new Date().getFullYear()} Tasty Indian Food. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5"/></a>
          <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5"/></a>
        </div>
      </footer>
    </div>
  );
}
