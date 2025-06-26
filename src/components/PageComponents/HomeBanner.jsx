import React from 'react'
import HeadIphoneimg from '../../assets/img/iPhone.png'

const HomeBanner = () => {
    return (
        <>
            <section className="w-full bg-[#211C24] text-white pt-16">
                <div className="w-[90%] max-w-[1400px] h-[500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

                    <div className="flex-1 space-y-6 text-center lg:text-left z-10">
                        <p className="text-lg text-gray-400 tracking-wide">Pro. Beyond.</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            iPhone 14 <span className="text-purple-400">Pro</span>
                        </h1>
                        <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
                            Created to change everything for the better. For everyone.
                        </p>
                        <button className="mt-4 px-8 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-full font-semibold shadow-lg">
                            Shop Now
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center w-full h-[100%] overflow-hidden absolute md:relative z-0">
                        <img
                            src={HeadIphoneimg}
                            alt="iPhone 14"
                            className="w-[500px] drop-shadow-2xl transition-transform duration-500 hover:scale-105 md:mt-200 mt-140 hover:-rotate-5"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default HomeBanner
