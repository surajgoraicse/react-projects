import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import companies from "../components/data/Companies.json";
import Autoplay from 'embla-carousel-autoplay'

function LandingPage() {
	return (
		<main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
			<section className="text-center">
				<h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4 ">
					Find Your Dream Job{" "}
					<span className="flex items-center gap-2 sm:gap-6">
						and get{" "}
						<img
							src="/logo.png"
							alt="Hired Logo"
							className="h-14 sm:h-24 lg:h-32"
						/>
					</span>
				</h1>
				<p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
					Explore thousands of job listings or find the perfect candidate
				</p>
			</section>
			<div className="flex gap-6 justify-center">
				<Link to="/jobs">
					<Button variant="blue" size="xl">
						Find Job
					</Button>
				</Link>
				<Link to="/post-job">
					<Button variant="destructive" size="xl">
						Post a Job
					</Button>
				</Link>
			</div>
			<Carousel plugins={[Autoplay({ delay: 2000})]} className="w-full py-10">
				<CarouselContent className="flex gap-5 sm:gap-20 item-center">{
					companies.map(({ name, id, path }) => {
						return (
							<CarouselItem className="basis-1/3 lg:basis-1/6" >
							<img key={id} src={path} alt={name} className="h-9 sm:h-14 object-contain" />	
						</CarouselItem>
					)
				})
				}</CarouselContent>
			</Carousel>

			{/* banner */}
			<section>{/* card */}</section>
		</main>
	);
}

export default LandingPage;
