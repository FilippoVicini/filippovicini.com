import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Expriences from "@/components/Expriences";


export default function Home() {
    return (
        <div className="bg-[#faf7f5]">
            <Navbar/>
            <div className="mx-96 ">
                <Expriences/>

            </div>


        </div>
    );
}
