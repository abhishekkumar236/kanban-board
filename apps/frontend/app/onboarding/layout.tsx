import OnboardingNavbar from "@/components/onboarding/OnboardingNavbar";
import { OnboardingContextProvider } from "@/context/OnboardingContextProvider";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <OnboardingNavbar />
            <OnboardingContextProvider>
                <main className="flex-1">{children}</main>
            </OnboardingContextProvider>
        </div>
    );
}

export default Layout;
