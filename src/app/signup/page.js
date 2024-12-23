import Link from "next/link";

export const metadata = {
    title: "Sign Up Page | JetHR",
    description: "This is the sign up page for JetHR, software that automates expense tracking"
}

export default function SignupPage() {
    return (
        <>
            <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-20 lg:pt-[180px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                    <div className="shadow-three mx-auto max-w-[500px] rounded bg-gray-400 px-6 py-10 dark:bg-dark sm:p-[60px]">
                        <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                        Create your account
                        </h3>
                        <p className="mb-11 text-center text-base font-medium text-body-color">
                        It’s totally free, secure and easy
                        </p>
                        <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                            <span className="mr-3">
                                <svg
                                fill="currentColor"
                                width="22"
                                height="22"
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z" />
                                </svg>
                            </span>
                            Sign in with Github
                        </button>
                        <div className="mb-8 flex items-center justify-center">
                            <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                            <p className="w-full px-5 text-center text-base font-medium text-body-color">
                                Or, register with your email
                            </p>
                            <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                        </div>
                        <form>
                            <div className="mb-8">
                                <label
                                htmlFor="name"
                                className="mb-3 block text-sm text-dark dark:text-white"
                                >
                                {" "}
                                Full Name{" "}
                                </label>
                                <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                                />
                            </div>
                            <div className="mb-8">
                                <label
                                htmlFor="email"
                                className="mb-3 block text-sm text-dark dark:text-white"
                                >
                                {" "}
                                Work Email{" "}
                                </label>
                                <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                                />
                            </div>
                            <div className="mb-8">
                                <label
                                htmlFor="password"
                                className="mb-3 block text-sm text-dark dark:text-white"
                                >
                                {" "}
                                Your Password{" "}
                                </label>
                                <input
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                                />
                            </div>
                            <div className="mb-8 flex">
                                <label
                                htmlFor="checkboxLabel"
                                className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                                >
                                <div className="relative">
                                    <input
                                    type="checkbox"
                                    id="checkboxLabel"
                                    className="sr-only"
                                    />
                                    <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                                        <span className="opacity-0">
                                            <svg
                                            width="11"
                                            height="8"
                                            viewBox="0 0 11 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                                fill="#3056D3"
                                                stroke="#3056D3"
                                                strokeWidth="0.4"
                                            />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <span className="border-solid border-black">
                                    By creating account means you agree to the
                                    <a href="#0" className="text-primary hover:underline">
                                    {" "}
                                    Terms and Conditions{" "}
                                    </a>
                                    , and our
                                    <a href="#0" className="text-primary hover:underline">
                                    {" "}
                                    Privacy Policy{" "}
                                    </a>
                                </span>
                                </label>
                                </div>
                                <div className="mb-6">
                                    <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-amber-400 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        <p className="text-center text-base font-medium text-body-color">
                            Already have an account?{" "}
                            <Link href="/signin" className="text-primary hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    </>
    );
};
