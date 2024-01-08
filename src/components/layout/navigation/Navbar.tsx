import Image from "next/image";
import Link from "next/link";
import React from "react";

const MENU_LIST = [
    { id: "package", label: "Package", href: "/package", submenu: [] },
    { id: "theme", label: "Website Theme", href: "/theme", submenu: [] },
    { id: "portofolio", label: "Portofolio", href: "/portofolio", submenu: [] },
];

type ActionType = "button" | "link" | "profile" | undefined;
type Action = {
    id: string;
    label: string;
    href: string;
    submenu: any[];
    type: ActionType;
};

interface IPropsNavbarAction {
    type: ActionType;
    action: Action;
}
const NAVBAR_ACTION_LIST: Action[] = [
    {
        id: "login",
        label: "Login",
        href: "/login",
        submenu: [],
        type: "profile",
    },
    {
        id: "contact-sales",
        label: "Contact Sales",
        href: "/contact-sales",
        submenu: [],
        type: "button",
    },
];

const RenderNavbarAction: React.FC<IPropsNavbarAction> = ({ type, action }) => {
    switch (type) {
        case "button":
            return (
                <button className="bg-blue-400 rounded-full p-1 px-4 text-white">
                    {action?.label}
                </button>
            );
        case "profile":
            return <p>{action?.label}</p>;
        default: {
            return action?.label;
        }
    }
};

const Navbar = () => {
    return (
        <header className="w-full fixed z-40 bg-white h-16 flex items-center px-10 justify-between">
            <Image src={"/ocw-logo.svg"} alt="" width={200} height={100} />
            <nav className="flex items-center justify-evenly space-x-10">
                {MENU_LIST.map((navItem) => (
                    <Link href={navItem.href} key={navItem.id}>
                        {navItem.label}
                    </Link>
                ))}
            </nav>
            <nav className="flex space-x-5">
                {NAVBAR_ACTION_LIST.map((navItem: Action) => (
                    <Link
                        href={navItem.href}
                        key={navItem.id}
                        className="flex items-center"
                    >
                        <RenderNavbarAction
                            type={navItem?.type}
                            action={navItem}
                        />
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
