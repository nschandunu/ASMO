-- Backfill existing Supabase Auth users into profiles table
-- This creates profiles for any users that existed before the trigger was set up

INSERT INTO public.profiles (id, username, role, xp_points, sustainability_score, attributes, avatar_url, "createdAt", "updatedAt")
SELECT
  id,
  COALESCE(raw_user_meta_data->>'username', SPLIT_PART(email, '@', 1)) as username,
  'USER' as role,
  0 as xp_points,
  'STABLE' as sustainability_score,
  COALESCE(raw_user_meta_data, '{}'::jsonb) as attributes,
  raw_user_meta_data->>'avatar_url' as avatar_url,
  created_at as "createdAt",
  NOW() as "updatedAt"
FROM auth.users
WHERE id NOT IN (SELECT id FROM public.profiles)
ON CONFLICT (id) DO NOTHING;
