import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5 flex items-center">
            <Link href="/">
                <Image src="/parklink-logo.svg" alt="logo" width={50} height={25} />
            </Link>

            <ul className="flex gap-4">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="text-gray-50 flex items-center cursor-pointer pb-1.5 transition-all hover:font-bold text-base">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="flex items-center">
                <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" size="small" />
                <Button type="button" title="Register" icon="/user.svg" variant="btn_dark_green" size="small" />
            </div>

            <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />
        </nav>
    );
};

export default Navbar;
