import { Logo } from "@/app/auth/layout";

function OnboardingNavbar() {
    const email = "test@gmail.com";
    return (
        <header className="w-full border-b border-gray-300">
            <div className="p-3 flex justify-between items-center">
                <Logo />

                <div className="text-sm">
                    <span>Signed in as {email}</span>{" "}
                    <button className="underline">Log Out</button>
                </div>
            </div>
        </header>
    );
}

export default OnboardingNavbar;
