# VorteX: Token-Gated Cultural Experiences on Soneium

A token-gated Web3 dApp for the Soneium Hackathon that uses AI agent dialogue, audio immersion, and on-chain mechanics for access gating.

## 🎭 Vision & Problem Statement

VorteX addresses a critical challenge for cultural event creators: how to monetize digital experiences while maintaining creative control and building direct relationships with audiences.

Inspired by the Vortex techno event series, this project creates a framework for token-gated cultural experiences that leverage Soneium's sonic asset capabilities to create new monetization models for creators.

## 🏆 Why VorteX Matters for Soneium

Soneium's focus on sonic assets and cultural experiences makes it the ideal platform for VorteX:

1. **Cultural Experience Monetization**: VorteX demonstrates how Soneium can power new business models for event creators.
2. **Sonic Asset Utilization**: The project leverages Soneium's unique capabilities for audio-based NFTs and experiences.
3. **Community Building**: TEE DOGG agent creates engaging interactions that build community around cultural experiences.
4. **Gamified Engagement**: The dice roll mechanic shows how randomness can create compelling user journeys on Soneium.

## 🚀 Progress for Hackathon Judges

This project demonstrates a modular architecture for a token-gated Web3 dApp with the following key components:

### Core Architecture (Implemented)

- ✅ **Modular Component Structure**: Clean separation of concerns with well-defined interfaces.
- ✅ **Documentation**: Comprehensive technical documentation and roadmap.
- ✅ **Configuration Management**: Externalized configuration for easy customization.
- ✅ **State Management**: Singleton pattern for consistent application state.

### Sequence Integration (Partially Implemented)

- ✅ **Wallet Connection Structure**: Framework for connecting to Sequence wallet.
- ✅ **Mock NFT Verification**: Structure for token-gated access control.
- 🔄 **State Persistence**: Local storage-based state persistence.
- 📝 **Real SDK Integration**: Planned activation of actual Sequence SDK.

### Startale Integration (Partially Implemented)

- ✅ **Configuration Structure**: Framework for Startale RPC endpoints and contract addresses.
- ✅ **Mock Dice Roller**: Client-side simulation of dice rolling.
- ✅ **Integration Points**: Clear interfaces for connecting to real Startale RPC.
- 📝 **Real RPC Connection**: Planned activation of actual Startale endpoints.

### User Interface (In Progress)

- 🔄 **Basic UI Components**: Simple interface elements for wallet connection.
- 🔄 **HTMX Integration Points**: Structure for declarative UI interactions.
- 📝 **TEE DOGG Agent UI**: Planned implementation of AI bouncer interface.

## 🔧 Technical Approach

VorteX takes an architecture-first approach, creating a solid foundation that can scale to support complex cultural experiences:

```mermaid
graph TD
    A[User] --> B[TEE DOGG Agent]
    B --> C[Wallet Verification]
    C --> D[Dice Roll Mechanic]
    D --> E[Token-Gated Experience]
    
    F[Sequence Bridge] --> C
    G[Startale Integration] --> D
    H[Soneium Backend] --> E