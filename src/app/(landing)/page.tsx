import Captcha from "@/components/Captcha";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="w-full min-h-screen">
            {/* Hero */}
            <div
                className="h-screen w-full flex items-center p-24"
                style={{
                    backgroundImage: `url("/assets/grid.svg")`,
                    backgroundSize: "contain",
                }}
            >
                <div className="w-1/3 space-y-3">
                    <h1 className="text-3xl font-semibold">
                        Wujudkan Ide-Ide Anda ke dalam{" "}
                        <span className="italic text-[#05286D]">
                            Realitas Digital
                        </span>
                    </h1>
                    <p className="text-gray-600">
                        Wujudkan desain website profesional untuk bisnis impian
                        yang mudah dikelola. Dapatkan paket pembuatan website
                        sesuai dengan kebutuhan bisnis Anda.
                    </p>
                    <ul className="my-5">
                        <li>Fast Deployment</li>
                        <li>Free Website Migration</li>
                        <li>24/7 Customer Support</li>
                    </ul>
                    <h2>
                        Rp <span className="text-3xl font-bold">200.000</span>
                        /mo
                    </h2>
                    <button className="p-2 w-6/12 bg-blue-400 text-white hover:bg-blue-900">
                        <Link href={"/order-form/domain"}>Try Now</Link>
                    </button>
                    <p className="text-xs">30-Day Money-Back Guarantee</p>
                </div>
                <Image
                    src={"/assets/any-devices.svg"}
                    alt="Build Website for any Devices"
                    width={500}
                    height={500}
                    className="absolute right-0 bottom-0"
                />
            </div>
            {/* CTA 1 */}
            <div className="bg-white mx-24 flex justify-between items-center z-30">
                <section className="w-2/6 p-10 space-y-2">
                    <h1 className="text-3xl font-semibold">
                        Its Time To Building The Future
                    </h1>
                    <p>
                        Wujudkan desain website profesional untuk bisnis impian
                        yang mudah dikelola. Dapatkan paket pembuatan website
                        sesuai dengan kebutuhan bisnis Anda.
                    </p>
                </section>
                <Image
                    src={"/assets/blocks.svg"}
                    alt="Easy way to build website application"
                    width={490}
                    height={350}
                    className="h-full"
                />
            </div>
            {/* Theme Picks 1 */}
            <div className="px-32 py-20">
                <h1 className="text-xl font-semibold my-5">Themes Picks</h1>
                <section className="grid grid-cols-2 gap-20">
                    {[1, 2].map((theme, index) => (
                        <article key={index} className="w-full">
                            <Image
                                src={"/sample-theme.jpg"}
                                alt="Easy way to build website application"
                                width={350}
                                height={350}
                                className="w-full"
                            />
                            <h1 className="mt-2 leading-3">
                                Home properties and architecture design web{" "}
                                {theme}
                            </h1>
                            <p>900 People like this theme</p>
                        </article>
                    ))}
                </section>
            </div>
            {/* Theme Picks 1 */}
            <div className="px-32 py-10">
                <section className="flex justify-between mb-5">
                    <div className="bg-gray-100 flex items-center space-x-10 p-2 pr-8 rounded">
                        {[
                            "Industrial",
                            "Package",
                            "Webiste Theme",
                            "Portofolio",
                            "Properti",
                        ].map((themeType) => (
                            <p
                                key={themeType}
                                className={`${
                                    themeType === "Industrial"
                                        ? "bg-gray-500 p-1 px-2 rounded text-white"
                                        : " text-gray-400"
                                } cursor-pointer`}
                            >
                                {themeType}
                            </p>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="Search here ..."
                        className="w-1/3 px-4"
                    />
                </section>
                <section className="grid grid-cols-3 gap-10">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((theme, index) => (
                        <article key={index} className="w-full">
                            <Image
                                src={"/sample-theme.jpg"}
                                alt="Easy way to build website application"
                                width={350}
                                height={350}
                                className="w-full"
                            />
                            <h1 className="mt-2 leading-3">
                                Home properties and architecture design web{" "}
                                {theme}
                            </h1>
                            <p>900 People like this theme</p>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}
