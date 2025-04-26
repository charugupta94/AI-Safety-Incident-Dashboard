# AI Safety Incident Dashboard

An interactive dashboard for monitoring, reporting, and tracking AI safety incidents.

✨ Features

Display and filter incidents by severity (Low, Medium, High)
Sort incidents by reported date
Toggle visibility of detailed incident descriptions
Report new incidents through a validated form
Responsive design that works across devices



🛠️ Tech Stack
Framework: Next.js 13 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Component Library: shadcn/ui
Form Handling: React Hook Form with Zod validation



🚀 Installation
```bash
# Install dependencies
npm install
```



🔥 Running Locally

```bash
# Start the development server
npm run dev
```
The app will be available at http://localhost:3000.


📁 Project Structure
The application follows a modular architecture:

`/app`         - Next.js app router files
`/components`  - UI components
`/dashboard `  - Dashboard-specific components
`/ui`          - Reusable UI components from shadcn/ui
`/lib`         - Utilities, types, and mock data


🎨 Design Decisions

- Used client-side state management since the data is managed locally
- Implemented responsive grid layouts that adapt to screen sizes
- Applied consistent visual language with color-coded severity indicators
- Added subtle animations for expanding/collapsing incident details
- Included form validation with helpful error messages
