import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle } from 'lucide-react';

interface Comment {
  id: number;
  name: string;
  content: string;
  created_at: string;
}

export default function Community() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comments');
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch (error) {
      console.error('Failed to fetch comments', error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, content }),
      });

      if (res.ok) {
        setName('');
        setContent('');
        fetchComments();
      }
    } catch (error) {
      console.error('Failed to post comment', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-blue-900 mb-4">Community Voices</h1>
          <p className="text-blue-600 max-w-2xl mx-auto">
            "Different voices shape us brain." Share your thoughts, experiences, and questions with the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 sticky top-24">
              <h3 className="font-serif text-xl mb-6 flex items-center">
                <MessageCircle className="mr-2" size={20} />
                Share Your Thought
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-blue-500 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-xs font-bold uppercase tracking-widest text-blue-500 mb-1">Message</label>
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
                    placeholder="What's on your mind?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-colors flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? 'Posting...' : <><Send size={14} className="mr-2" /> Post Comment</>}
                </button>
              </form>
            </div>
          </div>

          {/* Comments List */}
          <div className="md:col-span-2 space-y-6">
            {comments.length === 0 ? (
              <div className="text-center py-12 text-blue-400">
                <p>No comments yet. Be the first to share!</p>
              </div>
            ) : (
              comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-serif text-lg text-blue-900">{comment.name}</h4>
                    <span className="text-xs text-blue-400 uppercase tracking-wider">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-blue-600 leading-relaxed whitespace-pre-wrap">{comment.content}</p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
