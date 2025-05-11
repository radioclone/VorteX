# TEE DOGG VORTEX ACCESS

A token-gated Web3 dApp for the Soneium Hackathon. It uses AI agent dialogue, audio immersion, and on-chain mechanics for access gating.

---

## 🔧 Tech Stack
- **HTML/HTMX/JS** for UI
- **Web Audio API** for immersive audio (voice, stems, ambience, UI)
- **Sequence Wallet** for NFT connection
- **Startale Dice Roller** (mocked + RPC ready)
- **Docker/Vite ready** for post-hackathon scale

---

## ✅ Minimum Viable Setup (MVA)
This version focuses on:
- TEE DOGG AI bouncer (pre-scripted dialogue)
- Sequence wallet connection (mock NFT check)
- Dice roller with mocked randomness
- Audio layers for voice/music/ambience/UI

---

## 🚀 How to Run (Local Dev)

```bash
# Optionally install serve
npm install -g serve

# Run locally
serve app
```

OR use Docker:

```bash
docker build -t vortex-access .
docker run -p 3000:80 vortex-access
```

---

## 🗂 Folder Structure Overview
- `app/` – frontend
- `tee-dogg/` – agent logic and dialogue
- `sequence-bridge/` – wallet + NFT checks
- `dice-roller/` – Startale integration
- `assets/audio/` – organized by layer (voice, UI, music, ambience)

---

## 🧠 AI Agent Notes
- Currently rule-based dialogue (state machine)
- Can evolve into real-time LLM interaction with Crossmint, OpenAI, etc.

---

## 🎲 Startale Integration

To integrate a working Startale RPC-based dice roller:

1. Add your **RPC URL** and **contract address** in `dice-roller/index.js`
2. Use `ethers.js` or Startale SDK inside:
```js
await provider.getRandomNumber(walletAddress);
```
3. Replace the mock logic in `tee-dogg/agent-logic.js → rollDice()` with:
```js
import { rollWithStartale } from '../dice-roller/index.js'
```

---

## 🧾 Contributors
- @radioclone
- @wentelteefje
- @0xcrackedlabs

---

## 🪜 Roadmap
- [ ] Replace mock NFT check with Sequence SDK
- [ ] Plug in real Startale RPC
- [ ] Add Supabase for access logging
- [ ] Enable dynamic dialogue injection via JSON/LLM

---

### 🧰 📦 Future Architecture Considerations (Post-Hackathon)

While this submission is optimized for rapid development and modular experimentation, the following architecture extensions are under consideration:

#### 🐳 Containerization Plan
- Future modules (e.g., **voice synthesis**, **NFT verification APIs**, or **Supabase-backed logic**) can be packaged into **independent Docker containers**
- This allows clean separation of logic, creative tooling, and real-time backends across services

#### 🔧 Frontend Scalability
- Current structure uses **vanilla HTML + HTMX + JS** to minimize friction and optimize creative flexibility
- A future **Vite-based Remix/Next.js UI layer** may be introduced to support:
  - Authenticated dashboards
  - Marketplace integrations
  - Wallet session management
- This will remain isolated from the creative layer to avoid introducing architectural bottlenecks prematurely

#### 🎮 Dynamic Scene Embedding
- The interface layer is built to support **interactive visual frameworks**, such as:
  - **Unity3D**
  - **Godot**
  - **Spline 3D**
  - or any future custom renderer
- These will communicate with the main app using postMessage or local socket bridge and can be containerized independently

#### 🔒 Why Not Now?
- **Vite & SPA routing** are intentionally avoided to reduce limbic friction and build lock-in
- **Docker is available now**, and allows for post-hackathon migration without altering the working base

---
