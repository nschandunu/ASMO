'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  Map, 
  Trees, 
  Globe, 
  Lock, 
  ChevronLeft, 
  ShieldAlert, 
  Plus,
  CheckCircle2,
  X,
  Heart,
  Leaf, 
  Bus, 
  Recycle 
} from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

/* ═══════════════════════════════════════════════════════════════════════════
   SDG 11 VISUAL THEME
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

const FloatingSDGIcons = () => {
  const icons = [
    { Icon: Leaf, color: "#22C55E", x: "5%", y: "15%" },
    { Icon: Building2, color: "#38BDF8", x: "90%", y: "10%" },
    { Icon: Bus, color: "#FD9D24", x: "15%", y: "80%" },
    { Icon: Recycle, color: "#8B5CF6", x: "85%", y: "85%" },
  ];
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <item.Icon size={32} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
};

export default function NewRoomPage() {
  const supabase = createClient()
  const router = useRouter()

  const [name, setName] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function createRoom(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      if (authError) throw new Error(`Authentication error: ${authError.message}`)
      if (!user) throw new Error('You must be logged in to create a room')
      if (!name.trim()) throw new Error('Community name cannot be empty')

      const { data, error: insertError } = await supabase
        .from('chatroom')
        .insert({ name: name.trim(), is_public: isPublic })
        .select()
        .single()

      if (insertError) throw new Error(`Failed to create community: ${insertError.message}`)
      if (!data || !data.id) throw new Error('No community ID returned')

      const { error: memberError } = await supabase
        .from('chatroom_member')
        .insert({ chatroom_id: data.id, member_id: user.id })

      if (memberError) {
        await supabase.from('chatroom').delete().eq('id', data.id)
        throw new Error(`Failed to add you as member: ${memberError.message}`)
      }

      router.push('/chat')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div 
      className="relative min-h-screen w-full bg-[#0F172A] overflow-x-hidden flex flex-col"
      style={{ cursor: SDG_CURSOR }}
    >
      <FloatingSDGIcons />

      <section className="relative flex-grow pt-20 pb-20 px-6 flex flex-col items-center justify-center">
        
        {/* --- Back Link --- */}
        <div className="max-w-xl w-full mb-10 relative z-10">
          <Link href="/chat">
            <motion.div 
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-slate-400 hover:text-[#38BDF8] transition-colors text-sm font-medium"
            >
              <ChevronLeft size={16} /> Back to Community Hub
            </motion.div>
          </Link>
        </div>

        {/* --- SDG 11 Header --- */}
        <div className="max-w-xl w-full mb-12 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-bold tracking-widest uppercase mb-4">
              <Heart className="w-3 h-3 fill-current" />
              SDG 11: Build Inclusive Settlements
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Start a New <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#22C55E]">Neighborhood</span>
            </h1>
            <p className="text-slate-400 mt-4 font-light leading-relaxed">
              Create a space for inclusive, safe, and resilient dialogue within the ASMO network.
            </p>
          </motion.div>
        </div>

        {/* --- Community Builder Card --- */}
        <div className="max-w-xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1E293B]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            {/* Soft Ambient Glows */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#22C55E]/10 rounded-full blur-3xl" />

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl mb-8 flex items-center justify-between text-sm font-mono uppercase tracking-widest"
                >
                  <div className="flex items-center gap-3">
                    <ShieldAlert size={18} /> {error}
                  </div>
                  <button onClick={() => setError(null)}><X size={18} /></button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={createRoom} className="space-y-10">
              {/* Community Name */}
              <div className="space-y-4">
                <label htmlFor="group-name" className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-widest">
                  <Map size={14} className="text-[#38BDF8]" /> Neighborhood Name
                </label>
                <div className="relative group">
                  <input
                    id="group-name"
                    type="text"
                    placeholder="e.g. Sustainable Mobility Squad"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8]/50 focus:bg-slate-900 transition-all text-lg font-medium"
                    required
                    disabled={loading}
                    minLength={1}
                    maxLength={100}
                  />
                </div>
              </div>

              {/* Inclusivity Toggle (Public/Private) */}
              <div className="space-y-4">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <Trees size={14} className="text-[#22C55E]" /> Accessibility Level
                </label>
                <div 
                  onClick={() => !loading && setIsPublic(!isPublic)}
                  className={`group flex items-center justify-between p-6 rounded-2xl cursor-pointer border transition-all duration-500 ${
                    isPublic ? 'bg-[#22C55E]/5 border-[#22C55E]/20' : 'bg-[#FD9D24]/5 border-[#FD9D24]/20'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl transition-colors duration-500 ${isPublic ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-[#FD9D24]/10 text-[#FD9D24]'}`}>
                      {isPublic ? <Globe size={24} /> : <Lock size={24} />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white uppercase tracking-wider">
                        {isPublic ? 'Inclusive (Public)' : 'Restricted (Private)'}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed max-w-[200px]">
                        {isPublic ? 'Open to everyone in the settlement.' : 'For authorized residents only.'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Custom Toggle Switch */}
                  <div className={`w-14 h-7 rounded-full relative transition-colors duration-500 ${isPublic ? 'bg-[#22C55E]/20' : 'bg-[#FD9D24]/20'}`}>
                    <motion.div 
                      animate={{ x: isPublic ? 28 : 4 }}
                      className={`absolute top-1 w-5 h-5 rounded-full ${isPublic ? 'bg-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'bg-[#FD9D24] shadow-[0_0_15px_rgba(253,157,36,0.5)]'}`}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(56,189,248,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden bg-gradient-to-r from-[#38BDF8] to-[#22C55E] text-slate-900 font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl disabled:opacity-50 transition-shadow"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    'Creating Neighborhood...'
                  ) : (
                    <>Establish Community <Plus size={18} /></>
                  )}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* SDG 11 Mission Tag */}
        <div className="max-w-xl w-full mt-12 flex items-center justify-center gap-3 text-slate-600 font-medium text-xs">
          <CheckCircle2 size={14} />
          <span>Building for SDG Target 11.3: Participatory Settlement Planning</span>
        </div>
      </section>
    </div>
  )
}