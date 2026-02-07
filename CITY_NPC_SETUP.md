# City NPC Setup Guide

## ✅ Completed Setup

Your City NPC application database and core APIs are ready!

### What's Been Created:

1. **Database Schema** - 11 tables in Supabase:
   - profiles, city_states, city_memories, tasks, user_task_progress
   - petitions, posts, vouchers, transactions, audit_logs, reports

2. **City Brain System** - [`lib/city-brain/index.ts`](lib/city-brain/index.ts)
   - Initialize & manage the City AI singleton
   - Track city health stats (water, waste, air, transport, energy)
   - Update city mood based on user actions
   - Store city memories (event history)

3. **API Routes**:
   - `POST /api/city/init` - Initialize the City Brain
   - `GET /api/city` - Get current City state and recent memories

## 🚀 Next Steps

### 1. Start Your Dev Server
```bash
npm run dev
```

### 2. Initialize the City Brain
Once your server is running, call this endpoint **once**:

```bash
curl -X POST http://localhost:3000/api/city/init
```

Or visit: `http://localhost:3000/api/city/init` in your browser (it will auto-call POST).

### 3. Verify It Worked
Check the City Brain state:

```bash
curl http://localhost:3000/api/city
```

You should see:
```json
{
  "success": true,
  "data": {
    "city": {
      "id": "00000000-0000-0000-0000-000000000001",
      "mood": "NEUTRAL",
      "health_stats": {
        "water": 50,
        "waste": 50,
        "air": 50,
        "transport": 50,
        "energy": 50
      }
    },
    "recentMemories": [...]
  }
}
```

## 📋 What to Build Next

Now that the foundation is ready, you can build:

### Option A: Dashboard (Recommended First)
Create a dashboard at `/app/dashboard/page.tsx` to display:
- User's XP and Sustainability Score
- City's mood and health stats
- Available tasks
- Recent city memories

### Option B: Tasks System
Create the gamified tasks feature:
- API routes for tasks (list, start, submit, complete)
- Tasks page UI
- XP reward system

### Option C: Seed Data
Create sample tasks and test data:
- API route: `POST /api/seed`
- Populate 5-10 example tasks across categories

## 📁 Key Files Created

- [`prisma/schema.prisma`](prisma/schema.prisma) - Database schema
- [`lib/prisma.ts`](lib/prisma.ts) - Prisma client singleton
- [`lib/city-brain/index.ts`](lib/city-brain/index.ts) - City Brain logic
- [`app/api/city/init/route.ts`](app/api/city/init/route.ts) - Initialization API
- [`app/api/city/route.ts`](app/api/city/route.ts) - Get City state API

## 🔧 Troubleshooting

If you encounter SSL connection issues when running scripts:
- Use the API routes instead (they work better with Supabase)
- Make sure your `DATABASE_URL` in `.env` is correct
- Check that your Supabase project isn't paused

## 🎮 Ready to Continue?

Let me know which feature you want to build next and I'll help you implement it!
