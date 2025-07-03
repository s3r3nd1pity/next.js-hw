import {ICar} from "@/models/ICar";
import {FC} from "react";

type CarPropsType = {
    car:ICar;
}

const CarComponent:FC<CarPropsType> = ({car}) => {
    return (
        <div>
            <div
                className={"p-4 border border-gray-300 rounded-xl shadow-md bg-white"}
            >
                <h2 className={"text-xl font-semibold text-gray-800"}>
                    {car.brand}
                </h2>
                <p className={"text-gray-600"}>Year: {car.year}</p>
                <p className={"text-gray-600"}>Price: {car.price} $</p>
            </div>
        </div>
    );
};

export default CarComponent;