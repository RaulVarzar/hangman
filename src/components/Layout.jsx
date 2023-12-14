export default function Layout({children}) {
    return (
        <div className="flex flex-col h-screen overflow-hidden place-content-center md:flex bg-base-300">
            {/* <div className="grid content-start max-w-full mx-auto overflow-hidden bg-stone-500"> */}
                {children}
            {/* </div> */}
        </div>
    )
}