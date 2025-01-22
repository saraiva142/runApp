import { router, Slot } from "expo-router"
import { ClerkProvider, useAuth } from "@clerk/clerk-expo"

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

function InitialLayout() {
    const { isSignedIn , isLoaded } = useAuth()

    if (isSignedIn) {
        router.replace("(Home)")
    } else {

    }

    return <Slot/>
}

export default function Layout() {
    
    return (
        <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <InitialLayout />
        </ClerkProvider>
    )
}