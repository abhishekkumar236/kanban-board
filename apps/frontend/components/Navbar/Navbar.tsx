import Link from "next/link";
import { LogOutButton } from "./LogOutButton";
import ThemeToggle from "../themeToggle/ThemeToggle";

function Navbar() {
    return (
        <nav className="h-14 w-full flex items-center justify-between gap-5 px-4 py-3 fixed top-0 right-0 left-0 z-10 border-b border-border bg-background text-foreground">
            <span className="font-semibold text-2xl">Kanban</span>
            <div className="flex items-center gap-6">
                <Link href={"/boards"}>Boards</Link>
                <Link href={"/boards/add-board"}>Add Board</Link>
                <ThemeToggle />
                <LogOutButton />
            </div>
        </nav>
    );
}

export default Navbar;
