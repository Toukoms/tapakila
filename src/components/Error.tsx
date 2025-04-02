import Link from "next/link";

function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-danger-600">Error</h1>
        <p className="text-2xl text-secondary-900 mt-4">
          An unexpected error occurred
        </p>
        <p className="text-lg text-primary-900 mt-2">
          Please try again later or contact our support team if the issue
          persists.
        </p>
        <Link href="/" className="mt-8 btn btn-lg btn-secondary">
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default Error;
