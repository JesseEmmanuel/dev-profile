---
name: Premium Dark Felt Dashboard
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c6'
  primary: '#c8c6c6'
  on-primary: '#303030'
  primary-container: '#2d2d2d'
  on-primary-container: '#959494'
  inverse-primary: '#5f5e5e'
  secondary: '#ccc89c'
  on-secondary: '#333212'
  secondary-container: '#4a4826'
  on-secondary-container: '#bab78c'
  tertiary: '#a7cdd9'
  on-tertiary: '#0d353f'
  tertiary-container: '#08323c'
  on-tertiary-container: '#769ba6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e8e4b7'
  secondary-fixed-dim: '#ccc89c'
  on-secondary-fixed: '#1d1d02'
  on-secondary-fixed-variant: '#4a4826'
  tertiary-fixed: '#c3e9f6'
  tertiary-fixed-dim: '#a7cdd9'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#274c56'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  accent-note:
    fontFamily: Epilogue
    fontSize: 14px
    fontWeight: '300'
    lineHeight: '1.2'
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  note-padding: 20px
  stack-overlap: -12px
---

## Brand & Style

This design system reimagines the casual utility of a physical sticky-note board as a high-end, executive productivity dashboard. The brand personality is **Tactile, Professional, and Focused**. By utilizing a "Dark Felt" aesthetic, the system provides a deep, textured canvas that minimizes eye strain while allowing "notes" to pop with intentionality.

The design style is **Tactile Minimalist**. It avoids the clutter of traditional skeuomorphism in favor of subtle physical metaphors: sharp edges, microscopic textures, and layered depth. The goal is to evoke the feeling of a physical war-room or a high-stakes planning board, where every element feels placed with purpose. It targets professionals who value spatial organization and a distinctive, non-corporate aesthetic.

## Colors

The color palette is anchored by the **#2D2D2D** Felt background, which serves as a sophisticated, near-black canvas. This neutral base is essential for providing the high contrast needed for the digital "paper" elements.

- **Felt (Base):** `#2D2D2D` is the primary surface.
- **Deep Felt (Well):** `#1A1A1A` is used for inset areas or containers that sit "behind" the main board.
- **Note Yellow:** `#FFFBCC` - The primary action or high-priority note color.
- **Note Cyan:** `#CCF2FF` - Used for secondary information or categorized tasks.
- **Note Pink:** `#FFCCE5` - Reserved for alerts, critical deadlines, or distinctive markers.
- **Note Lime:** `#E2FFCC` - Used for completed states or creative brainstorming.

Text on the colored notes should always use a high-contrast dark charcoal to maintain readability while preserving the "ink on paper" feel.

## Typography

The typography strategy balances editorial character with functional precision. 

**Epilogue** is used for headlines and display text. Its geometric yet slightly quirky construction mirrors the "marker-on-board" vibe without sacrificing professional rigor. Use it for note titles and board headers.

**Inter** handles the heavy lifting for body copy and UI labels. It ensures that even within a highly tactile environment, the information density remains high and legible.

**Stylistic Note:** For "handwritten" accents, use the lighter weights of Epilogue with slight italicization. This mimics the varied pressure of a physical marker while keeping the system cohesive.

## Layout & Spacing

The layout follows a **Fluid Spatial Grid**. Unlike a rigid corporate grid, this system allows for organic placement and "intentional imperfection."

- **The Board:** The main canvas uses a 12-column grid for structural layout (sidebars, navigation), but the internal content area allows for free-form or masonry-style placement of notes.
- **Rhythm:** An 8px base unit is used for most UI elements, but a 4px "micro-unit" is used for the tactile details (tape widths, pin diameters).
- **Note Rotations:** To achieve the "Premium Felt Board" look, individual note components should have a randomized rotation between `-1deg` and `1deg`. This breaks the digital monotony while maintaining alignment.
- **Breakpoints:** On mobile, notes transition from a free-form layout to a single-column stack, losing their rotation to maximize screen real estate.

## Elevation & Depth

Elevation is the core of this design system's tactile nature. We use **Tonal Layers** and **Ambient Shadows** to define the hierarchy.

1.  **The Base (Level 0):** The Dark Felt surface. It should have a subtle noise texture to simulate fabric.
2.  **Inset Elements (Level -1):** Use inner shadows to create "wells" or "slots" for search bars and navigation rails, making them feel like they are carved into the felt.
3.  **Floating Notes (Level 1):** Sticky notes use a sharp, multi-layered shadow. A close, dark shadow represents the note being flush with the board, while a slightly offset, blurred shadow on one corner suggests a "peeling" or "lifted" effect.
4.  **Hardware (Level 2):** Push pins, tape strips, and paper clips sit at the highest elevation, casting small, sharp shadows onto the notes below them.

**Shadow Specification:** Use `#000000` at 30% opacity with a `0px` spread for the primary note shadow, favoring a downward-right offset to simulate a top-left light source.

## Shapes

The shape language is **Strictly Square**. To maintain the "Premium" part of the narrative, we avoid rounded corners on notes. The sharp, 0px radius corners create a sophisticated, architectural feel that distinguishes the design system from "bubbly" consumer apps.

- **Notes:** Perfect 90-degree corners.
- **Tape Strips:** Rectangular with "torn" edges (achieved via small jagged masks or CSS clip-paths).
- **Push Pins:** Circular (the only rounded exception) to represent physical hardware.
- **Input Fields:** Sharp borders with no rounding, using a 1px solid stroke.

## Components

### Sticky Notes
The hero component. Each note is a square container with a solid background color from the accent palette. Titles are `headline-sm` and body text is `body-sm`. 
- **Interaction:** On hover, the note's rotation should neutralize to `0deg` and the shadow should deepen, suggesting it is being "picked up."

### Tape Strips
Used as a decorative "fastener" for notes or to group items. These are semi-transparent white or beige overlays with a rough "torn" edge on the left and right sides. They are placed at the top center of a note.

### Push Pins & Paper Clips
- **Push Pins:** 12x12px circles with a slight radial gradient to suggest volume, placed at corners of notes to "anchor" them.
- **Paper Clips:** Abstract 1px wireframes used to "link" two notes that are stacked or overlapping.

### Buttons
Buttons do not use the note colors. They are "Dark Felt" styled: `#1A1A1A` background with a 1px border using the secondary color (`#FFFBCC`). This makes them feel like "embossed" controls on the dashboard.

### Input Fields
Stylized as "labels" or "tags." They should appear as underline-only or subtle inset boxes to minimize visual weight against the colorful notes.

### The "Well" (Sidebar)
A vertical container on the left or right that is slightly darker than the main board (`#1A1A1A`). It houses navigation and the "tray" of new, unused notes ready to be dragged onto the board.