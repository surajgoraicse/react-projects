import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
	SignedIn,
	SignedOut,
	SignIn,
	SignInButton,
	UserButton,
	useUser,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, CloudCog, Heart, PenBox } from "lucide-react";

function Header() {
	const { user } = useUser();
	const [showSignedIn, setShowSignedIn] = useState(false);
	const [search, setSearch] = useSearchParams();

	useEffect(() => {
		if (search.get("sign-in")) {
			setShowSignedIn(true);
		}
	}, [search]);

	// function removes the login box on click outside
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			setShowSignedIn(false);
			setSearch({});
		}
	};

	return (
		<>
			<nav className="py-4 flex justify-between items-center">
				<Link>
					<img src="/logo.png" className="h-20" />
				</Link>
				<div className="flex gap-8 ">
					<SignedOut>
						<Button onClick={() => setShowSignedIn(true)} variant="outline">
							Login
						</Button>
					</SignedOut>
					<SignedIn>
						{user?.unsafeMetadata?.role === "recruiter" && (
							<Link to={"/post-job"}>
								<Button variant="destructive" className="rounded-full">
									<PenBox size={20} className="mr-2" />
									Post a Job
								</Button>
							</Link>
						)}
						<UserButton
							appearance={{
								elements: {
									avatarBox: "w-10 h-10",
								},
							}}
						>
							<UserButton.MenuItems>
								<UserButton.Link
									label="My Jobs"
									labelIcon={<BriefcaseBusiness size={15} />}
									href="/my-jobs"
								/>
								<UserButton.Link
									label="Saved Jobs"
									labelIcon={<Heart size={15} />}
									href="/saved-job"
								/>
							</UserButton.MenuItems>
						</UserButton>
					</SignedIn>
				</div>
			</nav>
			{showSignedIn && (
				<div
					onClick={handleOverlayClick}
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
				>
					<SignIn
						signUpForceRedirectUrl="/onboarding"
						fallbackRedirectUrl="/onboarding"
					/>
				</div>
			)}
		</>
	);
}

export default Header;
