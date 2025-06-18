# Aman Chauhan - Frontend Developer Portfolio
#Note:- pushed all the soruce codes in one hour of span 


A modern, responsive portfolio website showcasing my skills and projects as a frontend developer. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Parallax scrolling and micro-interactions for better UX
- **Contact Form**: Functional contact form with EmailJS integration
- **Performance Optimized**: Optimized for both high-end and low-end devices
- **Modern UI**: Clean, professional design with glass-morphism effects

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **EmailJS** - Contact form functionality
- **Framer Motion** - Smooth animations and transitions

## 📦 Installation & Setup

### Prerequisites

Make sure you have Node.js installed (version 16 or higher). You can install it using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aman-chauhan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the portfolio

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── hero/           # Hero section components
│   ├── Contact.tsx     # Contact form component
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects gallery
│   └── Navbar.tsx      # Navigation component
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── lib/                # Utility functions
└── styles/             # Global styles
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Contact.tsx` - Contact details and EmailJS configuration
- `src/components/About.tsx` - Personal information and timeline
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Projects.tsx` - Your projects

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `src/index.css`
- Component-specific styles in individual component files

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the configuration in `src/components/Contact.tsx`:
   ```typescript
   const result = await emailjs.send(
     'your-service-id',      // Your EmailJS service ID
     'your-template-id',     // Your email template ID
     templateParams,
     'your-public-key'       // Your EmailJS public key
   );
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure your domain

### Other Platforms
The project can be deployed to any static hosting service that supports React applications.

## 📱 Performance

The portfolio is optimized for performance with:
- **Lazy loading** for images and components
- **Device detection** to adjust animations for low-end devices
- **Optimized scroll handling** with requestAnimationFrame
- **Minimal bundle size** with tree shaking

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: chauhanaman838@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ by Aman Chauhan
