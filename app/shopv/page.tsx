import { createClient } from "@/lib/supabase/server";
import { ShoppingBag, Sparkles, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LoadingScreen } from "@/components/loading-screen";

export default async function ShopPage() {
  const supa = await createClient();
  
  // Fetching vouchers from the public schema
  const { data: shop } = await supa.from("vouchers").select("*");

  return (
    <LoadingScreen>
      <div className="min-h-screen bg-[#0F172A] relative overflow-x-hidden">
        
        {/* Navigation - Back Button */}
        <div className="absolute top-8 left-8 z-50">
          <Link href="/protected">
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors uppercase font-mono text-[10px] tracking-[0.3em] bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <ArrowLeft size={14} /> Back to Hub
            </button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FC9D25]/10 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FC9D25]/10 rounded-full border border-[#FC9D25]/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#FC9D25]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FC9D25]">
                  Exclusive SDG 11 Rewards
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                ASMO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC9D25] to-[#F59E0B]">SHOP</span>
              </h1>
              <p className="text-slate-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                Convert your sustainability contributions into tangible neighborhood benefits and exclusive vouchers.
              </p>
            </div>
          </div>
        </div>

        {/* Vouchers Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shop?.map((voucher) => (
              <div
                key={voucher.id}
                className="group relative bg-[#1E293B]/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#FC9D25]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FC9D25]/10 hover:-translate-y-2"
              >
                {/* Voucher Header Visual */}
                <div className="relative h-56 bg-gradient-to-br from-[#FC9D25] to-[#F59E0B] p-8 flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[80px] -mr-16 -mt-16" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                      <Tag className="w-3 h-3 text-[#0F172A]" />
                      <span className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest">
                        Node Benefit
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <h3 className="text-3xl font-black text-[#0F172A] mb-1 uppercase tracking-tighter">
                      {voucher.title}
                    </h3>
                    <p className="text-[10px] font-bold text-[#0F172A]/60 uppercase tracking-widest">
                      Valid for {voucher.validity_days || 30} Days
                    </p>
                  </div>
                </div>

                {/* Voucher Content */}
                <div className="p-8">
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                    {voucher.description || "Exclusive community-vetted discount for resilient local businesses."}
                  </p>

                  {/* Metadata Stats */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Required_XP</span>
                      <span className="font-black text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#FC9D25]" />
                        {voucher.cost_points || voucher.points_required} XP
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Current_Inventory</span>
                      <span className="font-bold text-white uppercase text-xs">
                        {voucher.stock > 0 ? `${voucher.stock} Units` : 'Depleted'}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    disabled={voucher.stock === 0}
                    className="w-full bg-white text-[#0F172A] hover:bg-[#FC9D25] hover:text-[#0F172A] font-black py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em] shadow-lg disabled:opacity-30 disabled:cursor-not-allowed group-hover:scale-[1.02]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Initialize Redemption
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {(!shop || shop.length === 0) && (
            <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-white/5 border-dashed">
              <ShoppingBag className="w-16 h-16 text-slate-800 mx-auto mb-6 opacity-50" />
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
                Inventory Offline
              </h3>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">
                Scanning for new exclusive vouchers... Check back soon.
              </p>
            </div>
          )}
        </div>

        {/* Global Footer Elements */}
        <div className="max-w-7xl mx-auto px-4 pb-20 text-center opacity-30">
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.4em]">
            Sustainable Settlements Protocol // All transactions encrypted
          </p>
        </div>
      </div>
    </LoadingScreen>
  );
}