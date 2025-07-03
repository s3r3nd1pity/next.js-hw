import {serverAction} from "@/server/serverActions";
import Form from "next/form";

const FormComponent = () => {
    return (
        <div>
            <Form action={serverAction} className={"flex flex-col gap-5"}>
                <label>
                    <input
                        type={"text"}
                        name={"brand"}
                        required={true}
                        pattern={"^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$"}
                        placeholder={"Write brand"}
                        title={"Brand must be 1–20 Cyrillic or Latin letters only."}
                        className={"w-120 border border-gray-300 p-2 rounded"}
                    />
                </label>

                <label>
                    <input
                        type={"number"}
                        name={"price"}
                        required={true}
                        min={0}
                        max={1000000}
                        step={1}
                        placeholder={"Write price"}
                        title={"Price must be between 0 and 1,000,000"}
                        className={"w-120 border border-gray-300 p-2 rounded"}
                    />
                </label>

                <label>
                    <input
                        type={"number"}
                        name={"year"}
                        required={true}
                        min={1990}
                        max={2024}
                        step={1}
                        placeholder={"Write year"}
                        title={"Year must be between 1990 and 2024"}
                        className={"w-120 border border-gray-300 p-2 rounded"}
                    />
                </label>
                <button type={"submit"} className={"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"}>
                    Save
                </button>
            </Form>
        </div>
    );
};

export default FormComponent;