export default function Layout({children}) {
    return (
        <div className="flex h-screen bg-base-300">
            <div className="grid content-center max-w-full mx-auto">
                {children}
            </div>
        </div>
    )
}