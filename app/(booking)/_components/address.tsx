import { CardAddress } from "./card-address";
import { CardBusiness } from "./card-business";

export const Address = () => {
    return (
        <div className="px-80 flex flex-col mt-10">
            <h1 className=" font-bold text-black text-2xl">
                Điểm đến đang thịnh hành
            </h1>
            <span className=" text-gray-500  text-md mt-2 mb-4">
                Du khách tìm kiếm về Việt Nam cũng đặt chỗ ở những nơi này
            </span>
            <section className=" grid grid-cols-2 gap-3">
                <CardAddress
                    province="Hà Nội"
                    image="https://cf.bstatic.com/xdata/images/city/540x270/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o="
                />
                <CardAddress
                    province="TP. Hồ Chí Minh"
                    image="https://cf.bstatic.com/xdata/images/city/540x270/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o="
                />
            </section>

            <section className=" grid grid-cols-3 gap-3 mt-3">
                <CardAddress
                    province="Hội An"
                    image="https://cf.bstatic.com/xdata/images/city/354x266/688866.jpg?k=fc9d2cb9fe2f6d1160e10542cd2b83f5a8008401d33e8750ee3c2691cf4d4f7e&o="
                />
                <CardAddress
                    province="Đà Nẵng"
                    image="https://cf.bstatic.com/xdata/images/city/354x266/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
                />
                <CardAddress
                    province="Ninh Bình"
                    image="https://cf.bstatic.com/xdata/images/city/354x266/640445.jpg?k=50b44df6e3029c95c1874da1ae9634d62ac2264961b917271d56d7637ccb059c&o="
                />
                <CardAddress
                    province="Quảng Ngãi"
                    image="https://static.vinwonders.com/production/du-lich-quang-ngai-1.jpg"
                />
                <CardAddress
                    province="Hạ Long"
                    image="https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-3.jpg?tr=dpr-2,w-675"
                />
                <CardAddress
                    province="Nha Trang"
                    image="https://static.vinwonders.com/production/nha-trang-o-dau-1.jpg"
                />
            </section>

            <h1 className=" font-bold text-black text-2xl mt-10">
                Các loại hình dịch vụ
            </h1>

            <section className="grid grid-cols-4 gap-3 mt-3 mb-20">
                <CardBusiness
                    business_name="Hotel"
                    image="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                />
                <CardBusiness
                    business_name="Apartment"
                    image="https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
                />
                <CardBusiness
                    business_name="Resort"
                    image="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
                />
                <CardBusiness
                    business_name="Villa"
                    image="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
                />
            </section>
        </div>
    );
};
