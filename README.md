# Personal Portfolio Website

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features dark mode toggle, smooth animations, and a fully responsive design.

## 🚀 Features

- **React.js** - Modern component-based architecture
- **Tailwind CSS** - Utility-first CSS framework with custom dark mode support
- **Framer Motion** - Smooth animations and transitions
- **Dark Mode Toggle** - Switch between light and dark themes with persistent preference
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling Navigation** - Enhanced user experience with active section highlighting
- **Contact Form** - Working contact form with validation
- **Modern UI/UX** - Clean, professional design with elegant animations

## 📋 Sections

1. **About Me** - Introduction and professional summary
2. **Skills** - Technical skills showcase with icons and hover effects
3. **Education** - Educational background with timeline visualization
4. **Projects** - Portfolio projects with descriptions and tech stacks
5. **Contact** - Contact form for reaching out

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animation library
- **Simple Icons** - Technology icons
- **Unsplash** - Project placeholder images

## 📁 Project Structure

```
Personal_portfolio/
│
├── public/
│   └── vishu.png          # Profile image
│
├── src/
│   ├── components/
│   │   ├── About.jsx      # About section component
│   │   ├── Contact.jsx    # Contact form component
│   │   ├── Education.jsx  # Education timeline component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Header.jsx      # Navigation header component
│   │   ├── Projects.jsx   # Projects showcase component
│   │   ├── Sidebar.jsx    # Sidebar profile component
│   │   └── Skills.jsx     # Skills grid component
│   │
│   ├── contexts/
│   │   └── DarkModeContext.jsx  # Dark mode context provider
│   │
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles and Tailwind imports
│
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit the following files:
- **Profile Image**: Replace `public/vishu.png` with your image
- **Name and Title**: Update in `src/components/Sidebar.jsx`
- **Contact Information**: Update email, phone, and location in `src/components/Sidebar.jsx`
- **Social Media Links**: Update URLs in `src/components/Sidebar.jsx`
- **About Section**: Edit content in `src/components/About.jsx`

### Modify Skills

Edit the `skills` array in `src/components/Skills.jsx`:

```jsx
const skills = [
  { name: 'Your Skill', icon: 'https://simpleicons.org/icons/yourskill.svg' },
  // Add more skills...
]
```

### Update Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    image: 'project-image-url',
    tags: ['React', 'Node.js'],
  },
  // Add more projects...
]
```

### Change Colors

Edit the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#ffbf00',  // Your primary color
    dark: '#e6a800',
  },
  // Customize dark and light mode colors...
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Features in Detail

### Dark Mode

The dark mode toggle persists user preference in localStorage. The theme automatically applies on page load based on saved preference.

### Animations

- **Framer Motion** animations on scroll
- **Stagger animations** for skills and projects grids
- **Hover effects** on interactive elements
- **Smooth transitions** between sections

### Responsive Design

- **Desktop**: Full layout with sidebar and main content (1024px+)
- **Tablet**: Single column layout (768px - 1024px)
- **Mobile**: Optimized single column with adjusted spacing (< 768px)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Vishwash Kumar**
- Email: vishwaskumar55347@gmail.com
- GitHub: [@heyvishusri](https://github.com/heyvishusri)
- LinkedIn: [Vishwash Kumar Srivastava](https://www.linkedin.com/in/vishwash-kumar-srivastava-104661266/)
- Twitter: [@sriwastaw51186](https://x.com/sriwastaw51186)

## 🙏 Acknowledgments

- Icons provided by [Simple Icons](https://simpleicons.org/)
- Placeholder images from [Unsplash](https://unsplash.com/)
- Design inspiration from modern portfolio websites

---

**Note**: Make sure to replace placeholder images and update all personal information before deploying to production.
