'use server';

import sql from "better-sqlite3";
import {revalidatePath} from "next/cache";

const db = sql("meals.db");

export const saveMeal = async (formData:FormData) => {
    console.log(formData.get("name"))

    const titleValue = formData.get("name")
    db.prepare("insert into meals(title)values(?)")
        .run(titleValue);
    revalidatePath("/");
}

export const getMeals = async ():Promise<{id:number, title:string}[]> =>{
    return db.prepare<{id:number, title:string}[]>("select * from meals").all() as {id:number, title:string}[];
}