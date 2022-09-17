export const UserGreeting = () => {
    const isLoggedIn = true
    return(
        <div>
            {/* If you need false output: <h1>Welcome {isLoggedIn ? "Edbert" : "User"}</h1> */}
            <h1>Welcome {isLoggedIn && "Edbert"}</h1>
        </div>
    )
}