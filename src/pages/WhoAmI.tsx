import { motion } from 'motion/react';

export default function WhoAmI() {
  return (
    <div className="bg-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/yogateacher/800/1000" 
                alt="Yoga Teacher" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-200 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-blue-300 rounded-full -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl text-blue-900 mb-8">Hello, I'm <span className="italic text-blue-600">Sarah</span></h1>
            <div className="space-y-6 text-blue-600 text-lg leading-relaxed">
              <p>
                My journey with yoga began over a decade ago, not as a physical practice, but as a way to find stillness in a chaotic world. What started as a few minutes on the mat has evolved into a lifelong dedication to mindful living.
              </p>
              <p>
                I believe that yoga is for everyone—regardless of age, flexibility, or background. My teaching style blends traditional Hatha principles with modern functional movement, creating a practice that is both grounding and liberating.
              </p>
              <p>
                Through this platform, I hope to share not just the physical postures, but the philosophy, nutrition, and lifestyle choices that support a holistic well-being.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl text-blue-800 mb-2">500+</h3>
                <p className="text-sm uppercase tracking-widest text-blue-500">Hours Training</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-blue-800 mb-2">10+</h3>
                <p className="text-sm uppercase tracking-widest text-blue-500">Years Practice</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
