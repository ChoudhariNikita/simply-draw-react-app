# Simply Draw

Simply Draw is a web application that allows users to create and share drawings. It is built using React and Vite, with Tailwind CSS for styling.

## Features

- Create and edit drawings
- Save drawings locally
- Share drawings with others
- Responsive design

## Folder Structure

```
simply-draw/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.jsx
│   ├── assets/
│   │   ├── brush.svg
│   │   └── logo.svg
│   ├── components/
│   │   ├── common/
│   │   │   └── Header.jsx
│   │   ├── drawing/
│   │   │   ├── Canvas.jsx
│   │   │   ├── DrawingInterface.jsx
│   │   │   └── Tools.jsx
│   │   ├── modals/
│   │   │   ├── ConfirmationModal.jsx
│   │   │   └── SaveModal.jsx
│   │   └── SuccessAlert.jsx
│   ├── constants/
│   │   └── index.js
│   ├── hooks/
│   │   └── useCanvas.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── DrawingPage.jsx
│   │   └── Home.jsx
├── tailwind.config.js
└── vite.config.js

```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Clone the Repository

```sh
git clone https://github.com/your-username/simply-draw.git
cd simply-draw
```

### Install Dependencies

```sh
npm install
```

### Setting Up Vite

Vite is already configured in this project. You can start the development server with:

```sh
npm run dev
```

### Setting Up Tailwind CSS

Tailwind CSS is already configured in this project. The configuration file is located at `src/styles/tailwind.config.js`. You can start using Tailwind classes in your components.

### Building the Project

To build the project for production, run:

```sh
npm run build
```

This will generate the production-ready files in the `dist` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
