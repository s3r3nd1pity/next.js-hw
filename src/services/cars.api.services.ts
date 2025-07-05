import {ICar} from "@/models/ICar";

export const getAllCars = async (): Promise<ICar[]> => {
    return await fetch("http://185.69.152.209/carsAPI/v1/cars").then(value => value.json());
};

export const makeCar = async (car: ICar) => {
    return await fetch("http://185.69.152.209/carsAPI/v1/cars", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            brand: car.brand,
            price: car.price,
            year: car.year,
        })
    }).then(value => value.json()).catch((e) => {
        console.log(e);
    })
}
