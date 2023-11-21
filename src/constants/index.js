import {
	car,
	contact,
	css,
	git,
	github,
	html,
	javascript,
	mongodb,
	mui,
	nextjs,
	nodejs,
	pricewise,
	react,
	redux,
	sass,
	tailwindcss,
	travel,
	typescript,
} from '../assets/icons'

export const skills = [
	{
		imageUrl: css,
		name: 'CSS',
		type: 'Frontend',
	},
	{
		imageUrl: git,
		name: 'Git',
		type: 'Version Control',
	},
	{
		imageUrl: github,
		name: 'GitHub',
		type: 'Version Control',
	},
	{
		imageUrl: html,
		name: 'HTML',
		type: 'Frontend',
	},
	{
		imageUrl: javascript,
		name: 'JavaScript',
		type: 'Frontend',
	},
	{
		imageUrl: mongodb,
		name: 'MongoDB',
		type: 'Database',
	},
	{
		imageUrl: mui,
		name: 'Material-UI',
		type: 'Frontend',
	},
	{
		imageUrl: nextjs,
		name: 'Next.js',
		type: 'Frontend',
	},
	{
		imageUrl: nodejs,
		name: 'Node.js',
		type: 'Backend',
	},
	{
		imageUrl: react,
		name: 'React',
		type: 'Frontend',
	},
	{
		imageUrl: redux,
		name: 'Redux',
		type: 'State Management',
	},
	{
		imageUrl: sass,
		name: 'Sass',
		type: 'Frontend',
	},
	{
		imageUrl: tailwindcss,
		name: 'Tailwind CSS',
		type: 'Frontend',
	},
	{
		imageUrl: typescript,
		name: 'TypeScript',
		type: 'Frontend',
	},
]

export const socialLinks = [
	{
		name: 'Contact',
		iconUrl: contact,
		link: '/contact',
	},
	{
		name: 'GitHub',
		iconUrl: github,
		link: 'https://github.com/YaroslavBerezka',
	},
]

export const projects = [
	{
		iconUrl: pricewise,
		theme: 'btn-back-red',
		name: 'Amazon Price Tracker',
		description:
			'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
		link: 'https://github.com/YaroslavBerezka/Price-Wise',
	},
	{
		iconUrl: travel,
		theme: 'btn-back-green',
		name: 'Travel App',
		description: 'An application was created to make traveling even easier.',
		link: 'https://github.com/YaroslavBerezka/Travel',
	},
	{
		iconUrl: car,
		theme: 'btn-back-blue',
		name: 'Car Finding App',
		description:
			'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
		link: 'https://github.com/YaroslavBerezka/Cars-Shop-Next-13',
	},
]
