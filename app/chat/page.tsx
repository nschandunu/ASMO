'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  Map, 
  Trees, 
  Globe, 
  Lock, 
  ChevronRight, 
  ShieldAlert, 
  Plus,
  X,
  Heart,
  Leaf, 
  Bus, 
  Recycle,
  Users,
  LogOut,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

import { LoadingScreen } from "@/components/loading-screen"

const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

const FloatingSDGIcons = () => {
  const icons = [
    { Icon: Leaf, color: "#22C55E", x: "5%", y: "15%" },
    { Icon: Building2, color: "#38BDF8", x: "90%", y: "10%" },
    { Icon: Bus, color: "#FD9D24", x: "15%", y: "80%" },
    { Icon: Recycle, color: "#8B5CF6", x: "85%", y: "85%" },
  ];
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
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

interface ChatRoom {
  id: string
  name: string
  is_public: boolean
  created_at: string
}

interface MembershipStatus {
  [roomId: string]: boolean
}

export default function ChatDirectoryPage() {
  const supabase = createClient()
  const [rooms, setRooms] = useState<ChatRoom[]>([])
  const [membershipStatus, setMembershipStatus] = useState<MembershipStatus>({})
  const [loading, setLoading] = useState(true)
  const [joiningRoomId, setJoiningRoomId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  }, []);

  useEffect(() => { fetchRooms() }, [])

  async function fetchRooms() {
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      if (authError) throw new Error('Authentication error')
      if (!user) throw new Error('You must be logged in')
      setCurrentUserId(user.id)
      const { data, error: roomsError } = await supabase.from('chatroom').select('*').order('created_at', { ascending: false })
      if (roomsError) throw new Error('Failed to load neighborhoods')
      setRooms(data || [])
      const { data: memberData } = await supabase.from('chatroom_member').select('chatroom_id').eq('member_id', user.id)
      const statusMap: MembershipStatus = {}
      data?.forEach((room) => {
        statusMap[room.id] = memberData?.some((m) => m.chatroom_id === room.id) || false
      })
      setMembershipStatus(statusMap)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally { setLoading(false) }
  }

  async function handleJoinRoom(roomId: string, isPublic: boolean, e: React.MouseEvent) {
    e.preventDefault(); e.stopPropagation();
    if (!currentUserId) return;
    setJoiningRoomId(roomId); setError(null); setSuccess(null);
    try {
      if (isPublic) {
        const { error: joinError } = await supabase.from('chatroom_member').insert({ chatroom_id: roomId, member_id: currentUserId })
        if (joinError) throw new Error(joinError.message)
        setSuccess('Neighborhood Entry Successful!'); setMembershipStatus(p => ({ ...p, [roomId]: true }));
      } else {
        const { error: requestError } = await supabase.from('chatroom_join_request').insert({ chatroom_id: roomId, user_id: currentUserId, status: 'pending' })
        if (requestError) throw new Error(requestError.message)
        setSuccess('Access Request Sent!');
      }
      setTimeout(() => setSuccess(null), 3000)
    } catch (err: any) { setError(err.message); setTimeout(() => setError(null), 5000) } finally { setJoiningRoomId(null) }
  }

  async function handleLeaveRoom(roomId: string, e: React.MouseEvent) {
    e.preventDefault(); e.stopPropagation();
    if (!currentUserId || !window.confirm('Depart from this neighborhood?')) return;
    setJoiningRoomId(roomId);
    try {
      const { error } = await supabase.from('chatroom_member').delete().eq('chatroom_id', roomId).eq('member_id', currentUserId)
      if (error) throw error
      setSuccess('Neighborhood Departed'); setMembershipStatus(p => ({ ...p, [roomId]: false }));
    } catch (err: any) { setError(err.message) } finally { setJoiningRoomId(null) }
  }

  return (
    <LoadingScreen>
      <div 
        className="relative min-h-screen w-full bg-[#0F172A]"
        style={{ cursor: SDG_CURSOR }}
      >
        <FloatingSDGIcons />

        <div className="relative z-10 pt-24 pb-32 px-6">
          <div className="max-w-4xl mx-auto">

            <div className="mb-12">
              <Link href="/protected">
                <motion.button
                  whileHover={{ x: -5, color: "#38BDF8" }}
                  className="flex items-center gap-2 text-slate-400 text-sm font-semibold transition-colors uppercase tracking-widest"
                >
                  <ArrowLeft size={18} />
                  Return to System Dashboard
                </motion.button>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-bold tracking-widest uppercase mb-4">
                  <Heart className="w-3 h-3 fill-current" />
                  SDG 11: Neighborhood Directory
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
                  COMMUNITY <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#22C55E]">HUB</span>
                </h1>
              </motion.div>

              <Link href="/rooms/new">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(56,189,248,0.2)" }} 
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] text-slate-900 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-2xl flex items-center gap-2 shadow-xl"
                >
                  <Plus size={18} /> Build New Neighborhood
                </motion.button>
              </Link>
            </div>

            <AnimatePresence>
              {(success || error) && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className={`mb-8 rounded-2xl border backdrop-blur-xl p-4 flex justify-between items-center ${
                    success ? 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]' : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                >
                  <div className="flex items-center gap-3 font-medium text-sm">
                    {success ? <ShieldCheck size={18} /> : <AlertCircle size={18} />}
                    {success || error}
                  </div>
                  <button onClick={() => { setSuccess(null); setError(null); }} className="p-1 hover:bg-white/10 rounded-full">
                    <X size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid gap-6">
              {rooms.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="bg-white/5 border border-white/10 rounded-[2.5rem] p-20 text-center backdrop-blur-md"
                >
                  <Map size={48} className="mx-auto text-slate-700 mb-6" />
                  <p className="text-slate-500 font-medium text-sm tracking-widest uppercase">No Communities established yet</p>
                  <Link href="/rooms/new" className="text-[#38BDF8] hover:underline mt-4 inline-block text-sm">
                    [Build the first Neighborhood]
                  </Link>
                </motion.div>
              ) : (
                rooms.map((room, i) => {
                  const isMember = membershipStatus[room.id]
                  const isSyncing = joiningRoomId === room.id

                  return (
                    <motion.div
                      key={room.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative w-full"
                    >
                      <div className={`absolute -inset-0.5 rounded-[2rem] blur opacity-0 group-hover:opacity-10 transition duration-500 ${isMember ? 'bg-[#38BDF8]' : 'bg-[#FD9D24]'}`} />
                      <div className="relative bg-[#1E293B]/60 backdrop-blur-2xl border border-white/5 p-6 rounded-[1.8rem] flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-[#1E293B]/80 transition-colors">
                        <div className="flex items-center gap-6 flex-1 w-full text-left">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${isMember ? 'bg-[#38BDF8]/10 text-[#38BDF8]' : 'bg-slate-700/30 text-slate-500'}`}>
                            <Building2 size={24} />
                          </div>
                          <div className="flex-1">
                            <Link href={isMember ? `/rooms/${room.id}` : '#'}>
                              <h2 className="text-xl font-bold text-white tracking-tight uppercase group-hover:text-[#38BDF8] transition-colors">{room.name}</h2>
                            </Link>
                            <div className="flex items-center gap-4 mt-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                              <span className={`flex items-center gap-1.5 ${room.is_public ? 'text-[#22C55E]' : 'text-red-400'}`}>
                                {room.is_public ? <Globe size={10} /> : <Lock size={10} />}
                                {room.is_public ? 'Inclusive' : 'Restricted'}
                              </span>
                              <span>• Established: {new Date(room.created_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                          {isMember ? (
                            <>
                              <Link href={`/rooms/${room.id}`} className="flex-1 md:flex-none">
                                <motion.button whileHover={{ scale: 1.05 }} className="w-full px-8 py-3 bg-white text-slate-900 font-black text-xs rounded-xl uppercase tracking-widest shadow-xl">ENTER</motion.button>
                              </Link>
                              <button onClick={(e) => handleLeaveRoom(room.id, e)} className="p-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white transition-all"><LogOut size={16} /></button>
                            </>
                          ) : (
                            <motion.button onClick={(e) => handleJoinRoom(room.id, room.is_public, e)} disabled={isSyncing} className={`w-full md:w-48 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${room.is_public ? 'bg-slate-800 text-slate-300 border border-white/10' : 'bg-[#FD9D24] text-slate-900'}`}>{isSyncing ? 'Mapping...' : 'Join settlement'}</motion.button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })
              )}
            </div>

            {rooms.length > 0 && (
              <div className="mt-16 p-6 rounded-[1.8rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse shadow-[0_0_10px_#22c55e]" />
                  <p className="font-medium text-[10px] text-slate-500 uppercase tracking-[0.2em]">Neighborhoods_Joined: <span className="text-white">{Object.values(membershipStatus).filter(Boolean).length}</span> / {rooms.length}</p>
                </div>
                <Users size={20} className="text-slate-800" />
              </div>
            )}

            <div className="mt-12 flex items-center justify-center gap-3 text-slate-600 font-medium text-xs">
              <CheckCircle2 size={14} />
              <span>Building for SDG Target 11.3: Participatory Settlement Planning</span>
            </div>
          </div>
        </div>
      </div>
    </LoadingScreen>
  )
}