# TEE DOGG VORTEX ACCESS

A token-gated Web3 dApp for the Soneium Hackathon. It uses AI agent dialogue, audio immersion, and on-chain mechanics for access gating.

> **⚠️ WORK IN PROGRESS**: This project is currently in early development. Many features described in this README are planned but not yet implemented. See [Current Status](docs/CURRENT-STATUS.md) for details.

---

## 🔧 Tech Stack
- **HTML/HTMX/JS** for UI *(HTMX planned but not yet implemented)*
- **Web Audio API** for immersive audio *(planned)*
- **Sequence Wallet** for NFT connection *(planned)*
- **Startale Dice Roller** *(mock structure only, not RPC ready)*
- **Docker/Vite ready** for post-hackathon scale

---

## 📚 Documentation

Comprehensive documentation is available in the `docs/` directory:

- [**Architecture**](docs/ARCHITECTURE.md) - System design and component relationships
- [**Roadmap**](docs/ROADMAP.md) - Development timeline and milestones
- [**Technical Vision**](docs/TECHNICAL-VISION.md) - Long-term technical goals
- [**User Experience**](docs/USER-EXPERIENCE.md) - User journey and interaction design
- [**Feedback Framework**](docs/FEEDBACK-FRAMEWORK.md) - Approach to gathering and implementing feedback
- [**Current Status**](docs/CURRENT-STATUS.md) - Candid assessment of project state
- [**HTMX Documentation**](docs/HTMX-DOCUMENTATION.md) - Detailed explanation of HTMX usage
- [**Lessons Learned**](docs/LESSONS-LEARNED.md) - Insights and challenges from development
- [**Submission Guide**](docs/SUBMISSION-GUIDE.md) - Guide for hackathon submission
- [**Judges Note**](docs/JUDGES-NOTE.md) - Direct message to hackathon judges

---

## ✅ Minimum Viable Setup (MVA)
This version aims to focus on:
- TEE DOGG AI bouncer (pre-scripted dialogue)
- Sequence wallet connection (mock NFT check)
- Dice roller with mocked randomness
- Audio layers for voice/music/ambience/UI

> **Note**: The current implementation contains placeholder files for these features. See [Current Status](docs/CURRENT-STATUS.md) for implementation details.

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
- `interface-layer/` - scene and interaction logic
- `docs/` - comprehensive project documentation
- `assets/audio/` – organized by layer (voice, UI, music, ambience) *(planned)*

---

## 🧠 AI Agent Notes
- Currently rule-based dialogue (state machine) *(planned)*
- Can evolve into real-time LLM interaction with Crossmint, OpenAI, etc.

---

## 🎲 Startale Integration

To integrate a working Startale RPC-based dice roller (future implementation):

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
- [ ] Implement basic HTMX interactions
- [ ] Create TEE DOGG dialogue system
- [ ] Add Web Audio API foundation
- [ ] Implement mock wallet connection
- [ ] Replace mock NFT check with Sequence SDK
- [ ] Plug in real Startale RPC
- [ ] Add Supabase for access logging
- [ ] Enable dynamic dialogue injection via JSON/LLM

See [detailed roadmap](docs/ROADMAP.md) for complete development timeline.

---

## 📊 Current Project Status

This project is currently in the early stages of development. The repository contains:

- ✅ Project structure and architecture
- ✅ Comprehensive documentation
- ✅ Docker configuration
- ⏳ Basic frontend foundation (in progress)
- ⏳ TEE DOGG agent structure (in progress)
- ⏳ Interface layer (in progress)
- 🔜 HTMX integration (planned)
- 🔜 Web Audio implementation (planned)
- 🔜 Blockchain integration (planned)

See [Current Status](docs/CURRENT-STATUS.md) for a detailed assessment of the project state.

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
  - **Interactive Interface Module**
  - or any future custom renderer
- These will communicate with the main app using postMessage or local socket bridge and can be containerized independently

#### 🔒 Why Not Now?
- **Vite & SPA routing** are intentionally avoided to reduce limbic friction and build lock-in
- **Docker is available now**, and allows for post-hackathon migration without altering the working base

---
