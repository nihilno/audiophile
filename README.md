# Next.js Demo Shop

A fully functional **demo e-commerce shop** built with **Next.js** and **TypeScript**, featuring local cart management, checkout flow, and order confirmation—all without a backend. Fully responsive and designed to look amazing on all devices.

---

## Features

- **Product Showcase**: Display products with title, description, price, and image. Adjust quantity before adding to cart.
- **Cart Management**: Add items to a local cart stored in `localStorage`. Update item quantities, remove items, or clear the cart.
- **Cart Popover**: Shows all items currently in the cart, with real-time total price updates.
- **Checkout**: Dynamic order summary showing total, shipping, VAT, and grand total. Form validation using Zod and React Hook Form.
- **Order Confirmation**: Modal confirmation after checkout submission showing ordered items and grand total.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **UI**: Tailwind CSS, Lucide React icons, Shadcn
- **State Management**: React Context for cart
- **Forms**: React Hook Form + Zod
- **Storage**: `localStorage` for cart persistence
