import React from 'react'

const AboutUs = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                            src="https://th.bing.com/th/id/OIP.u23nFvSZTorAfoxDaUtkiQHaE8?w=1000&h=667&rs=1&pid=ImgDetMain"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        At the heart of every successful React application lies a team of dedicated developers who bring their creativity, technical expertise, and passion to the forefront. These developers are not just coders—they are problem solvers, innovators, and dreamers who transform ideas into seamless user experiences.
                        </p>
                        <p className="mt-4 text-gray-800">
                        If you're looking for a team that lives and breathes React, you're in the right place. Our developers are ready to bring your vision to life with unparalleled dedication and passion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs