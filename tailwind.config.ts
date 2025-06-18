
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'fira': ['Fira Code', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.6)' 
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					},
				},
				'particle-float': {
					'0%': { 
						transform: 'translateY(100vh) translateX(0px) rotate(0deg)',
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translateY(-100px) translateX(100px) rotate(360deg)',
						opacity: '0'
					},
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(-25%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'none',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' },
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.9)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'glow': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.7))'
					},
					'50%': {
						filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.9))'
					}
				},
				'text-shimmer': {
					'0%': {
						backgroundPosition: '-200% center'
					},
					'100%': {
						backgroundPosition: '200% center'
					}
				},
				'morph': {
					'0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
					'25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
					'50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%' },
					'75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in-down': 'fade-in-down 0.6s ease-out',
				'fade-in-left': 'fade-in-left 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'gradient-x': 'gradient-x 3s ease infinite',
				'particle-float': 'particle-float 15s linear infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 3s infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'scale-in': 'scale-in 0.5s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 2s linear infinite',
				'morph': 'morph 8s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
