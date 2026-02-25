import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-blue-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-blue-900 mb-6">Get in Touch</h1>
          <p className="text-blue-600 max-w-xl mx-auto">
            Have questions about classes, workshops, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 bg-blue-900 text-blue-100 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 text-blue-400" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-blue-500 mb-1">Email</p>
                    <p className="text-lg">hello@yogawithme.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mt-1 mr-4 text-blue-400" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-blue-500 mb-1">Phone</p>
                    <p className="text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-4 text-blue-400" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-blue-500 mb-1">Studio</p>
                    <p className="text-lg">123 Mindfulness Lane<br/>Wellness City, WC 90210</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex space-x-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">IG</div>
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">TW</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Name</label>
                <input type="text" className="w-full border-b border-blue-300 py-2 focus:outline-none focus:border-blue-900 transition-colors bg-transparent" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Email</label>
                <input type="email" className="w-full border-b border-blue-300 py-2 focus:outline-none focus:border-blue-900 transition-colors bg-transparent" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-blue-300 py-2 focus:outline-none focus:border-blue-900 transition-colors bg-transparent resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="button" className="bg-blue-900 text-white px-8 py-3 rounded-full uppercase text-xs tracking-widest font-bold hover:bg-blue-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
