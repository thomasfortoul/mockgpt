# Technical Master Plan: MockGPT

This document outlines the phased development plan for MockGPT, a web application for creating realistic, interactive mockups of AI conversations.

## Phase 1: MVP - The Core Mockup Tool

**Objective:** To build a single-page application that perfectly replicates the ChatGPT UI and allows a user to create, edit, and screenshot a single conversation. This phase focuses on delivering the core value proposition as quickly as possible.

### 1.1: Project Setup
*   **Framework:** Initialize a new **Next.js** project.
*   **Styling:** Integrate **Tailwind CSS** for utility-first styling to ensure a pixel-perfect replication of the original UI.
*   **Version Control:** Set up a Git repository.

### 1.2: UI Replication (Static)
*   **Component-Based Structure:** Break down the UI into reusable React components:
    *   `Header.js`: The top bar, initially static.
    *   `Sidebar.js`: The left-hand navigation panel, also static for the MVP.
    *   `ChatWindow.js`: The main container for the conversation.
    *   `MessageBubble.js`: The component for individual user and AI messages.
    *   `ChatInput.js`: The text input area at the bottom.
*   **Styling Details:** Analyze [`chat.html`](chat.html) and the CSS files in `chat-files/` to extract:
    *   Color palette (backgrounds, text, accents).
    *   Font families, sizes, and weights.
    *   Spacing, padding, and layout dimensions.
    *   Icons and other visual assets.

### 1.3: Core Editable Functionality
*   **In-Place Editing:** Implement direct editing of message content within the `MessageBubble` components. The `contentEditable` HTML attribute is a strong candidate for this.
*   **State Management:** Use React's `useState` hook in the main page component (`pages/index.js`) to manage the conversation as an array of message objects. Each object will contain an `id`, `role` ('user' or 'assistant'), and `content`.
*   **Dynamic Messages:**
    *   The `ChatInput` component will have a button to add a new user/AI message pair to the state array.
    *   Each `MessageBubble` will have a delete button (`X`) that removes the corresponding message object from the state array.

### 1.4: Screenshot Generation
*   **Library Integration:** Install and import the `html2canvas` library.
*   **Implementation:** Add a "Download as PNG" button. On click, it will trigger a function that:
    1.  Selects the `ChatWindow` DOM element.
    2.  Uses `html2canvas` to render the element onto a canvas.
    3.  Converts the canvas to a PNG data URL.
    4.  Creates a temporary link element and programmatically clicks it to trigger the download.

---

## Phase 2: Multi-Chat Functionality & Persistence

**Objective:** To expand the MVP by allowing users to manage multiple conversations and persist their work.

*   **Backend & Authentication:**
    *   Integrate **Supabase** for its simple authentication and PostgreSQL database.
    *   Implement user sign-up and login flows.
*   **Multi-Chat Management:**
    *   Make the `Sidebar` component dynamic, allowing users to create new chats, switch between them, and delete them.
    *   Each chat will have its own state, and the application will manage which chat is currently active.
*   **Database Persistence:**
    *   Create a `conversations` table in Supabase linked to user IDs.
    *   Save conversation content to the database automatically on edit.
    *   Load a user's conversations from the database when they log in.

---

## Phase 3: Monetization

**Objective:** To integrate a payment system and restrict premium features to subscribed users.

*   **Payments:**
    *   Integrate **Stripe Checkout** to handle subscription billing.
    *   Create a single subscription product at $9/month.
*   **Feature Gating:**
    *   Use Supabase's user roles or a custom field to track subscription status.
    *   Limit non-subscribed users (e.g., to a maximum of 3 saved chats) and show upgrade prompts.
    *   Unlock unlimited conversations for subscribed users.

---

## Phase 4: Deployment & Go-to-Market

**Objective:** To deploy the application and create a public-facing presence.

*   **Deployment:**
    *   Deploy the Next.js application to **Vercel** for seamless, continuous deployment from the Git repository.
*   **Landing Page:**
    *   Create a simple, effective landing page that communicates the value proposition, showcases the product with an animated demo, and includes a clear call-to-action to sign up.
