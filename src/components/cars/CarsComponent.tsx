import {getAllCars} from "@/services/cars.api.services";
import CarComponent from "@/components/cars/CarComponent";

const CarsComponent = async () => {
    const cars = await getAllCars();
    return (
        <div>
            {cars && cars.map(value => <CarComponent car={value} key={value.id}/>).reverse()}
        </div>
    );
};

export default CarsComponent;