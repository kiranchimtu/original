import Link from "next/link";
import Image from "next/image";

const Banner = ({ setBanner }) => {

    const closeBanner = () => {
        setBanner(false);
    }
    return (
        <div className="pb-[80px]">
            <center className="mx-[10%] md:mx-[30%] shadow-2xl rounded-md border-1 border-black border-solid bg-stone-200">
                <button className="absolute right-[11.7%] sm:right-[31.7%]" onClick={closeBanner}>
                    [x]
                </button>
                <div className="py-[7%] px-[2%]">
                    <div>
                        <p className="font-bold"> If the current display of results is not in the correct format due to high server load at JNTUH. We kindly request your patience until the results can be displayed accurately.</p>
                        <br />
                        <span className="font-bold">Check out your results with statistics </span>
                        <Link href="https://jntuh-results-stats.vercel.app/multi">
                            <strong className="hover:cursor-pointer text-sky-900">here</strong>
                        </Link>
                    </div>
                </div>
            </center>
        </div>
    );

}
export default Banner;
