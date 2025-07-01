export default function Home() {
    return (
        <div className="p-4">
            <form action={"/submit"} className="flex gap-2">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    className="border px-2 py-1 rounded"
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Enter pass"
                    className="border px-2 py-1 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
}
