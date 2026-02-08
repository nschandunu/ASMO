'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Repeat2, 
  Send, 
  ShieldCheck, 
  Share2
} from 'lucide-react';

import { LoadingScreen } from "@/components/loading-screen";

export default function SDGFeed() {
  const supabase = createClient();
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [activeCommentId, setActiveCommentId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const initSession = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    initSession();
    fetchPosts();

    const channel = supabase
      .channel('realtime_feed')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, () => {
        fetchPosts();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        profiles(username, avatar_url),
        likes(user_id),
        comments(*, profiles(username))
      `)
      .order('createdAt', { ascending: false });

    if (error) {
      console.error("Supabase Query Error:", error.message);
    } else {
      setPosts(data || []);
    }
  }

  async function handleLike(postId: string, hasLiked: boolean) {
    if (!user) return;
    if (hasLiked) {
      await supabase.from('likes').delete().eq('post_id', postId).eq('user_id', user.id);
    } else {
      await supabase.from('likes').insert({ post_id: postId, user_id: user.id });
    }
    fetchPosts();
  }

  async function handleComment(e: React.FormEvent, postId: string) {
    e.preventDefault();
    if (!commentText || !user) return;
    await supabase.from('comments').insert({ post_id: postId, user_id: user.id, content: commentText });
    setCommentText("");
    fetchPosts();
  }

  async function handleCreatePost(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/posts/moderate', { method: 'POST', body: JSON.stringify({ content: newPost }) });
    const result = await res.json();
    
    if (!result.approved) {
      alert(`Reject: Content not related to SDG 11.`);
      setLoading(false); return;
    }

    await supabase.from('posts').insert({ content: newPost, author_id: user.id, sdg_tag: result.label });
    setNewPost("");
    setLoading(false);
    fetchPosts();
  }

  return (
    <LoadingScreen>
      <div className="min-h-screen bg-[#0F172A] text-white p-4 pb-20">
        <div className="max-w-2xl mx-auto space-y-8">

          <div className="bg-[#1E293B]/40 backdrop-blur-xl border border-white/5 p-6 rounded-[2.5rem] shadow-2xl">
            <form onSubmit={handleCreatePost}>
              <textarea 
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Broadcast Urban Intelligence..."
                className="w-full bg-transparent border-none focus:ring-0 text-lg resize-none h-24 placeholder:text-slate-600"
              />
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#22C55E]" /> AI_UPLINK_ACTIVE
                </span>
                <button 
                  disabled={loading || !newPost}
                  className="bg-[#FD9D24] hover:bg-[#F59E0B] text-[#0F172A] font-black px-8 py-2.5 rounded-full transition-all disabled:opacity-50 text-xs uppercase"
                >
                  {loading ? "Analyzing..." : "Post Intel"}
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            {posts.length === 0 && !loading && (
              <div className="text-center py-20 opacity-20 font-mono uppercase tracking-[0.4em] text-xs">
                No Data Packets Found in Sector_01
              </div>
            )}
            {posts.map((post) => {
              const hasLiked = post.likes?.some((l: any) => l.user_id === user?.id);
              
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={post.id} 
                  className="bg-[#1E293B]/40 border border-white/5 p-6 rounded-[2.5rem] hover:bg-[#1E293B]/60 transition-all group"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 overflow-hidden flex-shrink-0 border border-white/10">
                      <img src={post.profiles?.avatar_url || "/assets/pandap.webp"} alt="avatar" className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-sm uppercase tracking-tight">{post.profiles?.username}</span>
                          <span className="text-[10px] text-slate-500 font-mono">/ {new Date(post.createdAt).toLocaleTimeString()}</span>
                        </div>
                        <span className="text-[9px] bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full uppercase font-black tracking-tighter border border-cyan-500/20">
                          {post.sdg_tag}
                        </span>
                      </div>
                      
                      <p className="mt-3 text-slate-300 leading-relaxed text-md font-medium">{post.content}</p>
                      
                      <div className="flex justify-between mt-6 max-w-sm text-slate-500">
                        <button 
                          onClick={() => setActiveCommentId(activeCommentId === post.id ? null : post.id)}
                          className="flex items-center gap-2 hover:text-cyan-400 transition-colors group/icon"
                        >
                          <div className="p-2 rounded-full group-hover/icon:bg-cyan-400/10">
                            <MessageCircle size={18} />
                          </div>
                          <span className="text-xs font-bold">{post.comments?.length || 0}</span>
                        </button>

                        <button 
                          onClick={() => handleLike(post.id, hasLiked)}
                          className={`flex items-center gap-2 transition-colors group/icon ${hasLiked ? 'text-red-500' : 'hover:text-red-500'}`}
                        >
                          <div className={`p-2 rounded-full group-hover/icon:bg-red-500/10`}>
                            <Heart size={18} className={hasLiked ? 'fill-current' : ''} />
                          </div>
                          <span className="text-xs font-bold">{post.likes?.length || 0}</span>
                        </button>

                        <button className="p-2 rounded-full hover:bg-white/5 hover:text-white transition-colors">
                          <Share2 size={18} />
                        </button>
                      </div>

                      <AnimatePresence>
                        {activeCommentId === post.id && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-6 pt-6 border-t border-white/5 space-y-4 overflow-hidden"
                          >
                            <form onSubmit={(e) => handleComment(e, post.id)} className="flex gap-2">
                              <input 
                                type="text"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Add a sustainable insight..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-400/50"
                              />
                              <button type="submit" className="p-2 bg-cyan-500 text-[#0F172A] rounded-xl hover:bg-cyan-400 transition-colors">
                                <Send size={18} />
                              </button>
                            </form>

                            <div className="space-y-3">
                              {post.comments?.map((comment: any) => (
                                <div key={comment.id} className="bg-white/5 p-3 rounded-2xl border border-white/5">
                                  <p className="text-[10px] font-black uppercase text-cyan-400 mb-1">@{comment.profiles?.username}</p>
                                  <p className="text-xs text-slate-300">{comment.content}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </LoadingScreen>
  );
}