import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <section>
            <div className="mx-auto max-w-full py-16 px-6 text-center">
                <h1 className="mb-4 font-extrabold text-9xl">404</h1>
                <p className="mb-4 text-lg font-light text-gray-500">
                    Are you sure you're on the right URL? Check again.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="text-white bg-blue-900 hover:bg-blue-800 text-nowrap font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 w-42"
                >
                    Back to Homepage
                </button>
            </div>
        </section>
    );
}
