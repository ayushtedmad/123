# Next.js Documentation Website

This project is a multi-page documentation website built with Next.js, featuring a responsive design, dark/light theme toggle, and an advanced admin panel for managing documentation content.

## Features

- **User Authentication**: Admin and Editor roles for managing content.
- **WYSIWYG Editor**: Create and edit HTML pages easily.
- **Theme Selection**: Switch between multiple themes dynamically.
- **Analytics Dashboard**: View traffic and search insights.
- **Responsive Design**: Optimized for various devices.

## Project Structure

```
nextjs-docs-website
├── public
│   ├── favicon.ico
│   └── images
├── src
│   ├── components
│   │   ├── AdminPanel
│   │   ├── Auth
│   │   ├── Layout
│   │   ├── ThemeToggle.tsx
│   │   └── ResponsiveDesign.tsx
│   ├── pages
│   │   ├── admin
│   │   ├── api
│   │   ├── docs
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── styles
│   │   ├── globals.css
│   │   └── themes
│   └── utils
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/nextjs-docs-website.git
   ```

2. Navigate to the project directory:
   ```
   cd nextjs-docs-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.