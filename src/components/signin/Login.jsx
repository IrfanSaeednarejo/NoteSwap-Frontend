import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, remember });
    };

    return (
        <section className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8">
                <div className="flex flex-col items-center mb-6">
                    <img
                        className="w-10 h-10 mb-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    <h1 className="text-2xl font-bold text-white mb-4">Sign in to your account</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 text-sm rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="name@college.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 text-sm rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-300">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                className="w-4 h-4 mr-2 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                            />
                            Remember me
                        </label>
                        <a
                            href="#"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign in
                    </button>
                    <p className="text-sm text-gray-400 text-center">
                        Don’t have an account yet?{' '}
                        <a href="/signup" className="text-blue-500 hover:underline font-medium">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Login;