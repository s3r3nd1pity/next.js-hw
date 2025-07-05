'use client'

import {useForm} from "react-hook-form";
import {ICar} from "@/models/ICar";
import {carValidator} from "@/validators/car.validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {makeCar} from "@/services/cars.api.services";

const FormComponent = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
    const handler = async (formData: ICar) => {
        await makeCar(formData)
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handler)} className={"flex flex-col gap-5"}>
                <label>
                    <input type={"text"} {...register("brand")} className={"w-120 border border-gray-300 p-2 rounded"}/>
                    <div>{errors.brand?.message}</div>
                </label>
                <label>
                    <input type={"number"} {...register("price")}
                           className={"w-120 border border-gray-300 p-2 rounded"}/>
                    <div>{errors.price?.message}</div>
                </label>
                <label>
                    <input type={"number"} {...register("year")}
                           className={"w-120 border border-gray-300 p-2 rounded"}/>
                    <div>{errors.year?.message}</div>
                </label>
                <button type="submit" className={"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default FormComponent;