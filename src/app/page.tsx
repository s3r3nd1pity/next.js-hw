import Form from "next/form";
import {getMeals, saveMeal} from "@/server-actions/serverActions";

export default async function Home() {
    const meals = await getMeals();
    return (
        <div className={"max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-lg border border-gray-200"}>
            <Form action={saveMeal} className={"flex flex-col gap-4"}>
                <input
                    type={"text"}
                    name={"name"}
                    placeholder={"Enter your name"}
                    className={"border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}
                />
                <button
                    className={"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"}
                >
                    Submit
                </button>
            </Form>

            <div className={"space-y-2"}>
                {meals &&
                    meals.map((value) => (
                        <div
                            key={value.id}
                            className={"p-3 border border-gray-300 rounded-md shadow-sm bg-white"}
                        >
                            <span className={"font-semibold text-gray-800"}>{value.id}.</span>{" "}
                            <span className={"text-gray-700"}>{value.title}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
}
