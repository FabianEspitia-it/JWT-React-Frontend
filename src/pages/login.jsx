export function Login(){
    return <main className="flex items-center justify-center h-screen">
    <form className="flex flex-col items-center justify-center bg-white rounded shadow-lg p-8 w-96" action="POST">
    <label className="font-semibold text-xs" htmlFor="usernameField">Email</label>
    <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"/>
    <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
    <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
    <button className="h-12 px-6 w-64 text-black bg-gradient-to-br from-cyan-500 to-blue-500 mt-8 rounded font-semibold text-sm hover:text-white duration-300">Login</button>
    <a className="h-12 px-6 w-64 pt-3 text-black bg-gradient-to-br from-cyan-500 to-blue-500 mt-4 rounded font-semibold text-sm hover:text-white duration-300" href="/register">Register</a>
</form>
    </main>
}