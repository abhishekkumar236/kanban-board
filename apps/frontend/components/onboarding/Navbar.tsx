import { Logo } from "@/app/auth/layout";

function Navbar() {
    const email = "test@gmail.com";
    return (
        <div className="fixed top-0 left-0 right-0 w-full border-b border-gray-300">
            <div className="p-3 flex justify-between items-center">
                <Logo />
                <div className="text-sm">
                    <span> Signed in as {email}</span>{" "}
                    <button className="underline">Log Out</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
