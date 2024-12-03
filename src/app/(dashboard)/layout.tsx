import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-screen flex">
        {/* Left */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4"> {/* bg-red-200 */}
            <Link href="/" 
            className=" flex items-center justify-center lg:justify-start gap-2">
                <Image src="/logo.png" alt="logo" width={32} height={32} />
                <span className="hidden lg:block">E-Learning</span>
            </Link>
            <Menu/>
        </div>
        {/* right */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] ">r</div>{/* bg-blue-200 */}
    </div>; 
  }