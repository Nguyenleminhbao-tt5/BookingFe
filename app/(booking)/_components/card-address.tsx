import Link from "next/link";

type Props = {
    province: string;
    image: string;
};

export const CardAddress = ({ province, image }: Props) => {
    return (
        <div className="w-full bg-slate-500 h-[300px] rounded-lg relative shadow-md">
            <img className="w-full h-full rounded-lg" src={image} />
            <h1 className=" absolute top-2 left-4 text-white font-bold text-2xl">
                {province}
            </h1>
        </div>
    );
};
