"use client"

import { Suspense, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Menu, X, Mail, Phone, Github, Instagram, Linkedin, MessageCircle, Globe, Puzzle, ChevronDown, User, Code, FolderKanban, PhoneCall } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";

const menuItems = [
	{ name: "درباره من", href: "about", icon: User },
	{ name: "مهارت‌ها", href: "skills", icon: Code },
	{ name: "پروژه‌ها", href: "projects", icon: FolderKanban },
	{ name: "تماس", href: "contact", icon: PhoneCall },
];

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { scrollY } = useScroll();

	useEffect(() => {
		return scrollY.onChange((latest) => {
			setIsScrolled(latest > 50);
		});
	}, [scrollY]);

	useEffect(() => {
		// اطمینان از اینکه صفحه از بالا شروع می‌شود
		window.scrollTo(0, 0);
		// بعد از لود اولیه، حالت لودینگ را غیرفعال می‌کنیم
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-white"
				>
					Loading...
				</motion.div>
			</div>
		);
	}

	return (
		<motion.main 
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 text-right" 
			dir="rtl"
		>
			{/* Navbar */}
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl backdrop-blur-lg border border-white/5 ring-1 ring-white/10 rounded-2xl py-3 px-4 md:py-4 md:px-6 transition-all duration-300 ${
					isScrolled ? 'bg-black/50 shadow-lg' : 'bg-black/30'
				}`}
			>
				<div className="flex flex-row-reverse justify-between items-center">
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-2 flex-row"
					>
						Pooya.Dev
						<Image
							src="/img/logo.webp"
							alt="Logo"
							width={32}
							height={32}
							className="rounded-lg"
							priority
						/>
					</motion.h1>

					{/* Desktop Menu */}
					<nav className="hidden md:flex justify-end items-center gap-2">
						{menuItems.map((item, i) => {
							const Icon = item.icon;
							return (
								<motion.a
									key={item.name}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.1 }}
									href={`#${item.href}`}
									className="px-3 py-2 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-200 flex items-center gap-2"
								>
									<Icon className="w-4 h-4" />
									{item.name}
								</motion.a>
							);
						})}
					</nav>

					{/* Mobile Menu Button */}
					<motion.button
						whileTap={{ scale: 0.95 }}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all"
					>
						{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</motion.button>
				</div>

				{/* Mobile Menu Panel */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.nav
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="md:hidden overflow-hidden"
						>
							<motion.div className="flex flex-col space-y-3 py-4 px-2 mt-4 border-t border-gray-800/50">
								{menuItems.map((item, i) => {
									const Icon = item.icon;
									return (
										<motion.a
											key={item.name}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: i * 0.1 }}
											href={`#${item.href}`}
											className="px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
											onClick={() => setIsMenuOpen(false)}
										>
											<Icon className="w-4 h-4" />
											{item.name}
										</motion.a>
									);
								})}
							</motion.div>
						</motion.nav>
					)}
				</AnimatePresence>
			</motion.header>

			{/* Hero with eager loading */}
			<section className="flex flex-col items-center justify-center min-h-screen pt-20">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="mb-8 relative"
				>
					<Image
						src="/img/pooya.webp"
						alt="Pooya"
						width={200}
						height={200}
						className="rounded-3xl border-2 border-gray-800/50 shadow-2xl"
						priority
					/>
					{/* Floating Elements with lazy loading */}
					<motion.img
						src="/img/laptop.webp"
						alt="React"
						width={80}
						height={80}
						className="absolute -top-8 -right-8 w-20 h-20"
						loading="lazy"
            animate={{
							y: [0, -8, 0],
							rotate: [0, -3, 0]
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 3
						}}
					/>
					<motion.img
						src="/img/gett.webp"
						alt="Node.js"
						className="absolute -bottom-6 -left-10 w-21 h-21"
						animate={{
							y: [0, -18, 0],
							rotate: [0, -3, 0]
						}}
						transition={{
							duration: 3.5,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 1
						}}
					/>
					<motion.img
						src="/img/shat.webp"
						alt="AI"
						className="absolute -bottom-10 left-1/2 w-20 h-20"
						animate={{
							y: [0, -8, 0],
							x: [0, 8, 0]
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 1.5
						}}
					/>
				</motion.div>
				<h2 className="text-4xl md:text-6xl font-extrabold">سلام، من پویا‌ام 👋</h2>
				<p className="mt-4 text-lg text-gray-300 max-w-xl">
					توسعه‌دهنده‌ی وب، عاشق هوش مصنوعی و به دنبال ساختن آینده‌ای آزاد
				</p>
				<Button className="mt-6" variant="secondary" asChild>
					<a href="#projects" className="flex flex-row-reverse items-center gap-2">
						دیدن پروژه‌ها <ArrowDown size={18} />
					</a>
				</Button>
			</section>

			{/* درباره من */}
			<section id="about" className="py-20 max-w-3xl mx-auto text-right">
				<h3 className="text-2xl font-bold mb-4">درباره من 🦦</h3>
				<p className="text-gray-300 leading-7">
					پویا یگانه فر هستم متولد ۲۷ مرداد ۱۳۸۵ از شهرستان خلیل‌ آباد استان خراسان رضوی ٬ دیپلم کامپیوتر دارم و آموزش برنامه نویسی رو از ۱۴ سالگی با علاقه زیاد با سی پلاس پلاس شروع کردم ٬ بعد از امتحان کردن راه های مختلف از جمله بازی سازی٬ درحال حاضر از چیزی که پول درمیارم طراحی سایت هست و تصمیم گرفتم ادامش بدم
				</p>
			</section>

			{/* مهارت‌ها */}
			<Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
				<section id="skills" className="py-20 max-w-4xl mx-auto text-right">
					<h3 className="text-2xl font-bold mb-8 ">مهارت‌ها</h3>
					<div className="flex flex-wrap gap-6 justify-center">
						{[
							{
								name: "React.js",
								icon: "/img/react.png",
								desc: "توسعه رابط کاربری",
								gradient: "from-blue-500/20 to-cyan-500/20"
							},
							{
								name: "Next.js",
								icon: "/img/next.png",
								desc: "فول استک جاوااسکریپت",
								gradient: "from-gray-500/20 to-slate-500/20"
							},
							{
								name: "WordPress",
								icon: "/img/wp.png",
								desc: "توسعه قالب و افزونه",
								gradient: "from-blue-600/20 to-blue-400/20"
							},
							{
								name: "UI/UX",
								icon: "/img/ui.png",
								desc: "طراحی تجربه کاربری",
								gradient: "from-purple-500/20 to-pink-500/20"
							},
						].map((skill, i) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								viewport={{ once: true }}
								className="w-[calc(50%-1.5rem)] md:w-[calc(25%-1.5rem)]"
							>
								<motion.div
									whileHover={{ y: -5 }}
									className={`h-full rounded-xl bg-gradient-to-br ${skill.gradient} p-[1px] backdrop-blur-xl`}
								>
									<Card className="h-full bg-gray-900/90 border-0">
										<CardContent className="p-6 text-center h-full flex flex-col items-center justify-between gap-4">
											<motion.div
												whileHover={{ scale: 1.1, rotate: 5 }}
												transition={{ type: "spring", stiffness: 400 }}
											>
												<Image
													src={skill.icon}
													alt={skill.name}
													width={56}
													height={56}
													className="mx-auto drop-shadow-xl"
													loading="lazy"
												/>
											</motion.div>
											<div>
												<h4 className="text-lg font-semibold mb-2 text-white">{skill.name}</h4>
												<p className="text-sm text-gray-400">{skill.desc}</p>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							</motion.div>
						))}
					</div>
				</section>
			</Suspense>

			{/* پروژه‌ها */}
			<Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
				<section id="projects" className="py-20 max-w-4xl mx-auto text-right">
					<h3 className="text-2xl font-bold mb-6">پروژه‌ها</h3>

					{/* پروژه اصلی */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-gray-700/50 mb-12 overflow-hidden group">
							<CardContent className="p-0">
								<div className="flex flex-col md:flex-row items-stretch">
									<div className="md:w-1/3 relative overflow-hidden">
										<Image
											src="/img/ringe.webp"
											alt="Ringe Team"
											width={400}
											height={300}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
										/>
									</div>
									<div className="md:w-2/3 p-6 md:p-8">
										<h4 className="text-2xl font-bold text-white mb-3">تیم رینگ</h4>
										<p className="text-gray-300 mb-4 leading-relaxed">
											تیمی خلاق، آماده و تازه‌نفس که با تخصص و اشتیاق، پروژه‌های استارتاپی را به بهترین شکل به سرانجام می‌رسانند.
										</p>
										<Button variant="secondary" asChild>
											<a href="https://ringe.ir" target="_blank" className="flex items-center gap-2">
												<Globe className="w-4 h-4" />
												مشاهده وب‌سایت
											</a>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* وب‌سایت‌ها و افزونه‌ها */}
					<div className="space-y-3">
						<h4 className="text-xl font-semibold mb-4">نمونه کارهای من به عنوان طراح سایت</h4>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
							{[
								{ name: "مجله کشاورزی زومکشت", url: "http://zoomkesht.com/", type: "website" },
								{ name: "شرکت کود رویش سبز", url: "https://ruyeshesabz.ir/", type: "website" },
								{ name: "افزونه فعال سازی و گارنتی نوا", url: "https://wp1.com", type: "plugin" },
								{ name: "فروشگاه کود و سم کالاکشت", url: "https://kalakesht.com", type: "website" },
								{ name: "فروشگاه لوازم جانبی سلونر", url: "https://selloner.ir/", type: "website" },
								{ name: "افزونه ورود و ثبت نام با پنل", url: "https://wp2.com", type: "plugin" },
								{ name: "فروشگاه ملزومات چاپ رول کالا", url: "https://rollkala.com", type: "website" },
								{ name: "افزونه مدیریت تبلیغات جهت", url: "https://wp3.com", type: "plugin" },
								{ name: "سایت فروش نهال موندراپ توسلی", url: "https://angorkaran.ir/", type: "website" },
								{ name: "فروشگاه کود و سم مستر پسته", url: "http://mrpestee.com/", type: "website" },
								{ name: "فروشگاه لوازم خانگی ام تی پی کالا", url: "https://mtpkala.com/", type: "website" },
								{ name: "افزونه سوالات متداول نوشته ها", url: "https://wp3.com", type: "plugin" },
								{ name: "منو آنلاین هتل پارادایس", url: "https://hotel-menu-gray.vercel.app", type: "website" },
							]
								.slice(0, showMore ? undefined : 6)
								.map((item, i) => (
									<motion.a
										key={item.name}
										href={item.url}
										target="_blank"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: i * 0.1 }}
										viewport={{ once: true }}
										className="group"
									>
										<Card className="bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50 transition-all">
											<CardContent className="py-3 px-4 flex items-center gap-3">
												{item.type === 'website' ? (
													<Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
												) : (
													<Puzzle className="w-4 h-4 text-green-400 flex-shrink-0" />
												)}
												<span className="text-sm text-gray-200 group-hover:text-white transition-colors">
													{item.name}
												</span>
											</CardContent>
										</Card>
									</motion.a>
								))}

						</div>

						{/* دکمه نمایش بیشتر */}
						{!showMore && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="flex justify-center mt-8"
							>
								<Button
									variant="outline"
									onClick={() => setShowMore(true)}
									className="group relative overflow-hidden bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50"
								>
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
										animate={{
											scale: [1, 1.5, 1],
											opacity: [0, 0.2, 0],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									/>
									<span className="relative z-10 flex items-center gap-2">
										نمایش بیشتر
										<motion.span
											animate={{ rotate: [0, 180] }}
											transition={{
												duration: 0.3,
												ease: "easeInOut",
											}}
										>
											<ChevronDown className="w-4 h-4" />
										</motion.span>
									</span>
								</Button>
							</motion.div>
						)}
					</div>
				</section>
			</Suspense>

			{/* تماس */}
			<section id="contact" className="py-20 max-w-3xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h3 className="text-2xl font-bold mb-4">تماس با من</h3>
					<p className="text-gray-300 mb-8">می‌تونی از طریق ایمیل یا شبکه‌های اجتماعی باهام در تماس باشی 👇</p>

					<Button className="mb-8" size="lg">
						<a href="tel:+989302169243" className="flex items-center gap-2">
							<Phone className="w-4 h-4" />
							همین الان تماس بگیرید
						</a>
					</Button>

					<div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-xl mx-auto">
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="mailto:pyeganehfar@gmail.com"
							className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all"
						>
							<Mail className="w-6 h-6 text-blue-400" />
							<span className="text-sm">ایمیل</span>
						</motion.a>

						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="https://t.me/pooyayeganefar"
							target="_blank"
							className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all"
						>
							<MessageCircle className="w-6 h-6 text-blue-400" />
							<span className="text-sm">تلگرام</span>
						</motion.a>

						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="https://www.instagram.com/pooyayeganefar?igsh=MXJzN2prMXA0ejBieQ%3D%3D&utm_source=qr"
							target="_blank"
							className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all"
						>
							<Instagram className="w-6 h-6 text-pink-400" />
							<span className="text-sm">اینستاگرام</span>
						</motion.a>

						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="https://www.linkedin.com/in/pooya-yeganefar-761a7b201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
							target="_blank"
							className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all"
						>
							<Linkedin className="w-6 h-6 text-blue-500" />
							<span className="text-sm">لینکدین</span>
						</motion.a>

						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="https://github.com/pooyayeganehfar"
							target="_blank"
							className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all"
						>
							<Github className="w-6 h-6 text-gray-200" />
							<span className="text-sm">گیت‌هاب</span>
						</motion.a>
					</div>
				</motion.div>
			</section>

			{/* Footer */}
			<footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
				© {new Date().getFullYear()} Pooya | ساخته‌شده با عشق و کد 💻❤️
			</footer>
		</motion.main>
	);
}