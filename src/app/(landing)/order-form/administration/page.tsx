import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdministrationPage = () => {
    return (
        <div className=" h-screen flex justify-center">
            <div className=" w-11/12 flex flex-row">
                <section className="w-full basis-6/12 mt-32 space-y-5">
                    <div className="h-40 flex space-x-10 pr-40 pb-[55px]">
                        <Image
                            src={"/assets/domain.png"}
                            alt=""
                            width={200}
                            height={200}
                            className="object-cover h-full"
                        />
                        <article className="my-3 space-y-2">
                            <h1 className="font-bold text-xs uppercase">
                                step 2
                            </h1>
                            <h2 className="font-semibold text-2xl">
                                Fill Administration Data
                            </h2>
                            <p className="font-normal text-xs">
                                Using a domain name to identify a location on
                                the Internet rather than the numeric IP address
                                makes it much easier to remember and type web
                                addresses.
                            </p>
                        </article>
                    </div>
                    <div className="px-9">
                        <article className=" px-4">
                            <h1 className="font-semibold text-base text-[#1E1E1E] pb-11">
                                Check domain name availability
                            </h1>
                            <div className="border-b w-[674px]">
                                <form action="">
                                    <div className="flex space-x-8">
                                        <section className=" focus-within:text-gray-600">
                                            <h1 className="text-sm font-medium pb-1">
                                                Firstname
                                            </h1>
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Click here..."
                                                className="w-[320px] h-[47px] text-base font-medium pl-3 py-2 placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2
                                            "
                                            />
                                        </section>
                                        <section className=" focus-within:text-gray-600">
                                            <h1 className="text-sm font-medium pb-1">
                                                Lastname
                                            </h1>
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Click here..."
                                                className="w-[320px] h-[47px] text-base font-medium pl-3 py-2 placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2
                                            "
                                            />
                                        </section>
                                    </div>
                                </form>
                            </div>
                        </article>
                        <article className="w-10/12 m-5 pt-[21px]">
                            <div className="border-b w-[674px]">
                                <form action="">
                                    <div className="space-y-5">
                                        <section className=" focus-within:text-gray-600">
                                            <h1 className="text-sm font-medium pb-1">
                                                Email
                                            </h1>
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Click here..."
                                                className="w-full h-[47px] text-base font-medium pl-3 py-2 placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2
                                            "
                                            />
                                        </section>
                                        <section className=" focus-within:text-gray-600">
                                            <h1 className="text-sm font-medium pb-1">
                                                Phone Number
                                            </h1>
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Click here..."
                                                className="w-full h-[47px] text-base font-medium pl-3 py-2 placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2
                                            "
                                            />
                                        </section>
                                    </div>
                                </form>
                            </div>
                        </article>
                        <article className=" w-10/12 m-5 flex justify-between items-center pt-[60px]">
                            <div className="border-b w-[674px]">
                                <form action="">
                                    <div className="space-y-8">
                                        <section className=" focus-within:text-gray-600">
                                            <h1 className="text-sm font-medium pb-1">
                                                KTP
                                            </h1>
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Click here..."
                                                className="w-full h-[47px] text-base font-medium pl-3 py-2 placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2
                                            "
                                            />
                                        </section>
                                        <section className=" focus-within:text-gray-600">
                                            <h1 className="text-sm font-medium pb-1">
                                                Upload KTP
                                            </h1>
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Click here..."
                                                className="w-full h-[47px] text-base font-medium pl-3 py-2 placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2
                                            "
                                            />
                                        </section>
                                    </div>
                                </form>
                            </div>
                        </article>
                        <article className=" w-10/12 m-5 flex justify-between items-center pt-[45px]">
                            <button className="w-[219px] h-[53px] text-[#767676] text-base font-medium rounded cursor-pointer hover:bg-slate-300">
                                Prevorious
                            </button>
                            <button className="w-[411px] h-[53px] rounded text-base font-medium cursor-pointer hover:bg-blue-900 bg-[#009BF7] text-[#F8F2F2]">
                                Continue
                            </button>
                        </article>
                        <article className="w-10/12 m-5 flex justify-between items-center pt-[70px]"></article>
                    </div>
                </section>
                <section className=" basis-6/12 mt-32">
                    <article className="px-20 pt-7">
                        <h1 className="text-2xl font-semibold">
                            Order Summary
                        </h1>
                    </article>
                    <article className="px-20 pt-16 space-y-6">
                        <section className="flex space-x-96 items-center">
                            <h1>
                                Domain (1 Tahun) <br />
                                <span className="text-slate-500 font-light">
                                    albarms.com
                                </span>
                            </h1>
                            <h2 className="text-[#383838]">Rp 280.000</h2>
                        </section>
                        <section className="flex space-x-96 items-center">
                            <h1>
                                Web Template
                                <br />
                                <span className="text-slate-500 font-light">
                                    theme name here
                                </span>
                            </h1>
                            <h2 className="text-[#383838]">Rp 280.000</h2>
                        </section>
                        <section className="flex px-10 space-x-64 items-center pt-16">
                            <h1 className="text-lg font-medium">
                                Total Payment
                            </h1>
                            <h2 className="text-xl font-semibold">
                                Rp 780.000
                            </h2>
                        </section>
                    </article>
                    <article className="px-20 pt-6">
                        <Image
                            src={"/assets/mask.png"}
                            alt=""
                            width={670}
                            height={20}
                            className=" absolute right-60 bottom-20 z-0"
                        />
                    </article>
                </section>
            </div>
        </div>
    );
};

export default AdministrationPage;
