'use server'

export const serverAction = async (formData: FormData) => {
    return await fetch("http://185.69.152.209/carsAPI/v1/cars", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            brand: formData.get("brand"),
            price: Number(formData.get("price")),
            year: Number(formData.get("year")),
        })
    }).then(value => value.json()).catch((e) => {
        console.log(e);
    })
}