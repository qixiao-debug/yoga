import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const sections = [
  { id: 'practice', label: 'Practice', description: 'Asanas, flows, and movement for every body.' },
  { id: 'food', label: 'Food', description: 'Nourishing recipes to fuel your practice.' },
  { id: 'lifestyles', label: 'Lifestyles', description: 'Mindfulness off the mat and into daily life.' },
];

const content = {
  practice: [
    { title: 'Morning Flow for Energy', image: 'https://picsum.photos/seed/yoga1/800/600', desc: 'A 15-minute sequence to wake up your body and mind.' },
    { title: 'Restorative Evening Routine', image: 'https://picsum.photos/seed/yoga2/800/600', desc: 'Wind down with these gentle stretches for better sleep.' },
    { title: 'Core Strength Basics', image: 'https://picsum.photos/seed/yoga3/800/600', desc: 'Building stability from the center out.' },
  ],
  food: [
    { title: 'Green Smoothie Bowl', image: 'https://picsum.photos/seed/food1/800/600', desc: 'Packed with spinach, banana, and hemp seeds.' },
    { title: 'Ayurvedic Kitchari', image: 'https://picsum.photos/seed/food2/800/600', desc: 'A healing one-pot meal for digestion reset.' },
    { title: 'Post-Yoga Protein Snacks', image: 'https://picsum.photos/seed/food3/800/600', desc: 'Quick bites to replenish your muscles.' },
  ],
  lifestyles: [
    { title: 'Creating a Home Altar', image: 'https://picsum.photos/seed/life1/800/600', desc: 'Setting up a sacred space for your daily practice.' },
    { title: 'Mindful Walking', image: 'https://picsum.photos/seed/life2/800/600', desc: 'Meditation in motion for busy days.' },
    { title: 'Journaling Prompts', image: 'https://picsum.photos/seed/life3/800/600', desc: 'Questions to deepen your self-inquiry.' },
  ],
};

export default function Yoga() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get('section');
    if (sectionId) {
      // Small delay to ensure rendering is complete
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-blue-900 mb-6"
          >
            Yoga Knowledge
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Explore our comprehensive guide to yoga practice, mindful eating, and conscious living.
          </motion.p>
        </div>

        <div className="space-y-32">
          {sections.map((section, sectionIndex) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-12 text-center"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">0{sectionIndex + 1}</span>
                <h2 className="font-serif text-4xl text-blue-900 mb-4">{section.label}</h2>
                <div className="w-12 h-1 bg-blue-800 mb-6"></div>
                <p className="text-blue-600 max-w-xl">{section.description}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {content[section.id as keyof typeof content].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-blue-100 flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="font-serif text-2xl text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-blue-600 text-base leading-relaxed mb-6 flex-grow">{item.desc}</p>
                      <button className="text-blue-900 text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors flex items-center self-start mt-auto group/btn">
                        Read Article <ArrowRight size={14} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
