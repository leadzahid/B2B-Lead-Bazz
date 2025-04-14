import image from "@/../public/404.png";
import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const NotFound = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="text-center animate-fadeIn">
          <Image
            src={image}
            alt="404 Illustration"
            className="mx-auto sm:w-80 w-64 animate-[float_3s_infinite] shadow-xl rounded-lg"
          />
          <h1 className="sm:text-7xl text-5xl font-extrabold text-purple-700 mt-6">
            {" Looks Like You're Lost!"}
          </h1>
          <p className="sm:text-xl  text-gray-700 mt-2">
            {" We can't seem to find the page you're looking for."}
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-purple-700 text-white px-8 py-3 rounded-full sm:text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-purple-800"
          >
            Return Home
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default NotFound;
