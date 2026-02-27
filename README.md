# Victor Medeiros — Portfolio

My personal portfolio site, built with Svelte, Vite, and Tailwind CSS.

🔗 **Live:** [medeirosvictor.github.io](https://medeirosvictor.github.io)

## Development

```bash
pnpm install
pnpm dev
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`.

---

## Color Scheme

The palette is anchored to the deep violet produced by the **DarkVeil** CPPN background animation and extended into a rust-purple CRT aesthetic.

### Palette

| Token | Hex | Usage |
|---|---|---|
| **Void** | `#030712` | Page background (`gray-950`) |
| **DarkVeil Violet** | `#4c1d95` | Primary brand color — dominant hue of the CPPN animation |
| **Rust-Purple BG** | `#1a0d1a` | CRT header background (warm, darkened purple) |
| **Rust-Purple Accent** | `#9b3a72` | Borders, dividers, separators (~3.3:1 contrast on void) |
| **Phosphor** | `#c084fc` | Nav link text with glow (`violet-400`) |
| **Phosphor Hot** | `#e879f9` | Hovered / active nav link (`fuchsia-400`) |

### Design Language

- **Background**: Near-black void (`#030712`) lets the animated DarkVeil layer breathe underneath all content.
- **Primary**: The CPPN shader naturally centers around a deep violet (`#4c1d95`). All interactive elements and brand moments reference this hue.
- **Header**: Solid rust-purple fill with a hard bottom border — no gradients, no rounded corners. Imitates a CRT terminal bezel in a purple-rust colorway (Pip-Boy aesthetic, purple edition).
- **Phosphor text**: Bright `#c084fc` with a matching `text-shadow` glow simulates old phosphor-screen lettering. Hover state intensifies to `#e879f9`.
- **Typography**: Monospace (`Courier New`) in the header to reinforce the terminal / retro-tech feel.
