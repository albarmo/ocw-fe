import React from "react";
import Image from "next/image";
import Link from "next/link";

const choseDomainPage = () => {
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
                                step 1
                            </h1>
                            <h2 className="font-semibold text-2xl">
                                Select Domain
                            </h2>
                            <p className="font-normal text-xs">
                                Using a domain name to identify a location on
                                the Internet rather than the numeric IP address
                                makes it much easier to remember and type web
                                addresses.
                            </p>
                        </article>
                    </div>
                    <div className=" px-9">
                        <article className=" px-4">
                            <h1 className="font-semibold text-base text-[#1E1E1E] pb-2">
                                Check domain name availability
                            </h1>
                            <div className="flex justify-between bg-gray-50 border-b">
                                <form action="">
                                    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                                        <Image
                                            src={"/assets/search-logo.png"}
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="w-[24px] h-[24px] absolute ml-3 pointer-events-none"
                                        />
                                        <input
                                            type="text"
                                            name="search"
                                            placeholder="search here.."
                                            className="w-[473px] h-[58px] text-base font-medium pl-12 py-2 placeholder-gray-500 text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2
                                            "
                                        />
                                        <section className="pl-9">
                                            <button className="bg-[#009BF7] w-[177px] h-[53px] rounded text-white text-base font-base hover:bg-blue-900">
                                                Check
                                            </button>
                                        </section>
                                    </div>
                                </form>
                            </div>
                        </article>
                        <article className="w-10/12 m-5 flex justify-between pt-[73px]">
                            <h1>Domain-abc.com</h1>
                            <h2>Unavailable</h2>
                        </article>
                        <article className=" w-10/12 m-5 flex justify-between items-center pt-[55px]">
                            <h1>Domain-abc.com</h1>
                            <section className="flex items-center space-x-4">
                                <h1 className="text-xl font-bold text-[#057EC1]">
                                    Rp 280.000{" "}
                                    <span className="text-[#7CB4D3] text-sm font-medium">
                                        /year <br />
                                    </span>
                                    <span className="flex justify-end text-sm line-through text-[#979797]">
                                        Rp 400.000{" "}
                                    </span>
                                </h1>
                                <button className="bg-[#009BF7] w-[98px] h-[35px] rounded text-base font-medium text-[#F8F2F2] hover:bg-blue-900">
                                    Choose
                                </button>
                            </section>
                        </article>
                        <article className=" w-10/12 m-5 flex justify-between items-center pt-[62px]">
                            <h1>Domain-abc.com</h1>
                            <section className="flex items-center space-x-4">
                                <h1 className="text-xl font-bold text-[#057EC1]">
                                    Rp 280.000{" "}
                                    <span className="text-[#7CB4D3] text-sm font-medium">
                                        /year <br />
                                    </span>
                                    <span className="flex justify-end text-sm line-through text-[#979797]">
                                        Rp 400.000{" "}
                                    </span>
                                </h1>
                                <button className="bg-[#009BF7] w-[98px] h-[35px] rounded text-base font-medium text-[#F8F2F2] hover:bg-blue-900">
                                    Choose
                                </button>
                            </section>
                        </article>
                        <article className="w-10/12 m-5 flex justify-between items-center pt-[70px]">
                            <button className="w-full h-[53px] rounded text-base font-medium bg-[#009BF7] hover:bg-blue-900 text-[#F8F2F2]">
                                <Link href={"/order-form/administration"}>
                                    Continue
                                </Link>
                            </button>
                        </article>
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

export default choseDomainPage;
