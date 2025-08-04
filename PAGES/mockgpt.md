
### **Project Meta Document: MockGPT**

**1. Project Name**
MockGPT

**2. Elevator Pitch**
A $9/month web application that provides a pixel-perfect, fully interactive replica of the ChatGPT interface, allowing users to craft and stage their own AI conversations for marketing, demos, and creative content.

**3. Core Problem & Target Audience**
* **Problem:** Marketers, developers, and content creators need a quick, no-code way to create realistic-looking AI chat screenshots for ad campaigns, product mockups, social media content, presentations, and entertainment.
* **Target Audience:** Digital marketers, social media managers, startup founders, UI/UX designers, and content creators.

**4. Core Product & MVP Features**
A high-fidelity, form-based web application that mirrors the ChatGPT UI.
* **Full UI Replication:** The app will look and feel exactly like the real ChatGPT interface, including the sidebar for managing multiple "chats," the main conversation window, and header elements, although the sidebar will be static for now. The logo will be a parody version.
* **Interactive Mockup Creation:**
    * Users type their "prompt" into the standard chat input bar at the bottom.
    * Users can then directly type the "AI's" response into the generated response bubble.
    * The entire conversation is editable in-place, functioning as a rich text editor within a chat UI.
* **No AI Backend:** The app is purely front-end driven. There are no API calls to an actual language model, ensuring zero token costs and instant response generation.
* **Output:** Users can take their own screenshots of the crafted conversations. The primary value is the creation environment itself.

**5. Monetization Model**
* **Pricing:** A single subscription tier at **$9/month**.
* **Value Proposition:** Unlimited access to the tool for creating and managing an infinite number of mock conversations. Users are paying for a specialized, high-fidelity "what you see is what you get" (WYSIWYG) editor for faking AI interactions, saving them significant time compared to using graphic design software.

**6. Go-to-Market Angle & Key Messaging**
The strategy is to highlight the tool's utility for professionals while retaining its fun, general-purpose appeal.
* **Primary Slogan:** "MockGPT: Fake Your AI, Power Your Marketing."
* **Key Messages:**
    * "All the ChatGPT™ vibes—none of the API fees."
    * "Build the perfect ChatGPT screenshot. No code, no tokens, no limits."
    * "The fastest way to prototype AI copy and product demos."
* **Use Cases to Promote:**
    * **Marketing:** Create mockups of an AI promoting a new product, show, or event.
    * **Sales:** Pitch AI features in a deck before they are built.
    * **Content:** Generate humorous or viral "what if ChatGPT said this?" posts.
    * **Personal:** Design creative birthday invitations or greetings.

**7. Suggested Tech Stack**
* **Frontend:** **Next.js** (React framework) with **Tailwind CSS**. This provides a robust structure for UI components, routing, and API routes for authentication.
* **Screenshot Generation:** **html2canvas** or **dom-to-image-more** library to implement a "Download as PNG" button client-side.
* **Authentication & Database:** **Supabase** or **Firebase**. Provides user authentication, a simple database for storing user chats, and is easy to integrate.
* **Payments:** **Stripe Checkout**. The industry standard for easy and secure subscription billing integration.
* **Deployment:** **Vercel** or **Netlify**. For seamless, continuous deployment directly from a Git repository.