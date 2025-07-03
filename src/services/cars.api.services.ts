import {ICar} from "@/models/ICar";

export const getAllCars = async ():Promise<ICar[]>=>{
    return await fetch("http://185.69.152.209/carsAPI/v1/cars").then(value => value.json());
};
