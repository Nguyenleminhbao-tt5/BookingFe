type Props = {
    business_name: string;
    image: string;
};

export const CardBusiness = ({ business_name, image }: Props) => {
    return (
        <div className="w-full bg-slate-500 h-[250px] rounded-md shadow-md ">
            <img className="w-full h-full rounded-lg" src={image} />
            <h1 className=" text-black font-bold text-xl mt-2">
                {business_name}
            </h1>
        </div>
    );
};
