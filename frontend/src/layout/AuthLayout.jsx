import { Outlet } from 'react-router-dom'
const AuthLayout = () => {
    return (
        <>
            <main className="container mx-auto md:grid  mt-12 gap-12 p-5 items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <Outlet />
            </main>
        </>
    )
};

export default AuthLayout;
