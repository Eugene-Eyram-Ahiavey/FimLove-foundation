# Our Approach (Sticky Scroll) Implementation Plan

## 1. Intro Section (Softened Copy)
- Keep the existing typography and layout for the intro.
- **Heading:** "Wherever there is a need, we bring hope."
- **Revised Paragraph:** "True compassion adapts to wherever the need is greatest. Whether it's a widow in need of a meal, a student needing tuition, or a family drowning in hospital bills, we go where the pain is. We listen, and we act."

## 2. Interactive "Sticky Scroll" Architecture
We will replace the existing 4 static cards with a premium scroll-linked layout.
- **Desktop Layout:** Two-column split (`grid-cols-12`).
  - **Left (Sticky):** `col-span-5` or `col-span-6`. Uses `sticky top-32` and a fixed height to hold the images.
  - **Right (Scrolling):** `col-span-7` or `col-span-6`. Holds the vertical list of text blocks.
- **Mobile Layout:** Stacked layout where each section appears normally (Image -> Text -> Image -> Text) without the complex sticky logic, ensuring mobile usability.

## 3. Scroll Logic (Framer Motion)
1. Each text block on the right will be wrapped in a component that tracks when it enters the viewport using `useInView` with a threshold (e.g., `amount: 0.5`).
2. A React state `activeIndex` will track which block is currently in view.
3. The left Sticky container will render all 4 images absolutely positioned on top of each other. Their `opacity` will animate to `1` if their index matches the `activeIndex`, and `0` otherwise, creating a smooth crossfade.

## 4. Animated SVG Icons
- For each block, we will create a clean, elegant SVG icon (Pencil, Medical Cross, Hands, Flower).
- We will use Framer Motion's SVG path drawing features (`initial={{ pathLength: 0 }}` to `animate={{ pathLength: 1 }}`) so the icons "draw" themselves smoothly as they scroll into view.

## 5. Content Payload
1. **Education & Youth Empowerment** (Icon: Pencil)
   - *Providing career guidance, educational materials, and financial support for pregnant teenagers, alongside distributing sanitary pads to keep girls in school.*
   - Image: Anglican School
2. **Healthcare & Medical Relief** (Icon: Medical Cross)
   - *Settling medical bills and lab fees for families in need at Korle Bu Child Health Dept, while donating essential hospital supplies like linens and sanitizers.*
   - Image: Korle Bu
3. **Community & Orphanage Outreach** (Icon: Hands/House)
   - *Supporting the Royal Seed Orphanage with daily essentials, and organizing major Christmas outreach programs to provide food and clothing to children in Pute Village.*
   - Image: Royal Seed
4. **Honoring Widows** (Icon: Flower)
   - *Through our "Sprinkles of Love" initiative, we provide festive financial support and essential items to widows and their children during the Christmas season.*
   - Image: Widows Outreach
