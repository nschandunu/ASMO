import { NextResponse } from 'next/server';
import { moderatePost } from '@/lib/ai-moderator';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  const supabase = await createClient();
  const { content } = await req.json();

  //Run AI Moderation Logic
  const result = await moderatePost(content);

  //Log result for AI Governance
  await supabase.from('moderation_logs').insert({
    post_id: null, 
    approved: result.approved,
    confidence: result.confidence,
    method: result.method,
    category: result.label
  });

  return NextResponse.json(result);
}