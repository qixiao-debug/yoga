import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Sun } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-blue-200">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/yogahero/1920/1080?blur=2" 
            alt="Yoga Background" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            A space for evolving <br/> <span className="italic">with me</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              to="/who-am-i" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-900 rounded-full hover:bg-blue-100 transition-all transform hover:scale-105 uppercase text-xs tracking-widest font-semibold"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Yoga Knowledge Preview */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-blue-900 mb-4">Yoga Knowledge</h2>
            <div className="w-24 h-1 bg-blue-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Practice', icon: Sun, desc: 'Asanas, flows, and movement for every body.', link: '/yoga?section=practice' },
              { title: 'Food', icon: Leaf, desc: 'Nourishing recipes to fuel your practice.', link: '/yoga?section=food' },
              { title: 'Lifestyles', icon: Heart, desc: 'Mindfulness off the mat and into daily life.', link: '/yoga?section=lifestyles' },
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-blue-800">{item.title}</h3>
                <p className="text-blue-600 mb-6 leading-relaxed">{item.desc}</p>
                <Link to={item.link} className="text-blue-900 text-sm font-medium uppercase tracking-wider hover:underline inline-flex items-center">
                  Read More <ArrowRight size={14} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Sharing Preview */}
      <section className="py-24 bg-blue-900 text-blue-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Different voices shape us brain</h2>
          <p className="text-blue-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our community of practitioners. Share your journey, ask questions, and grow together in a supportive environment.
          </p>
          <Link 
            to="/community" 
            className="inline-flex items-center px-8 py-4 bg-blue-100 text-blue-900 rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase text-xs tracking-widest font-semibold"
          >
            I want to share
          </Link>
        </div>
      </section>
    </div>
  );
}
