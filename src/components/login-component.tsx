"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LoginComponent() {
   

  const [logErrors, setLogErrors] = useState<any>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<any>(false);
  return isLoading ? (
    <section className="">
      <form>
        <div
          className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5"
          style={{ backgroundImage: "url('/images/bg-trail.jpg')" }}
        >
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-2xl w-full overflow-hidden max-w-[1000px]">
            <div className="md:flex w-full">
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-5">
                  <h1 className="font-bold text-5xl text-gray-900">
                    سجل الدخول
                  </h1>
                  <p className="mt-2">أدخل معلوماتك للدخول الى الحساب </p>
                  <p className="text-red-600 px-1">{""}</p>
                </div>
                <div>
                  <div
                    style={{ borderTopColor: "transparent" }}
                    className="w-8 h-8 border-4 border-[#222] rounded-full animate-spin text-center m-auto my-20"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  ) : (
    <section className="">
      <form>
        <div
          className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5"
          style={{ backgroundImage: "url('/images/bg-trail.jpg')" }}
        >
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-2xl w-full overflow-hidden max-w-[1000px]">
            <div className="md:flex w-full">
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10 mx-auto">
                <div className="text-center mb-5">
                  <h1 className="font-bold text-5xl text-gray-900">
                    سجل الدخول
                  </h1>
                  <p className="mt-2">أدخل معلوماتك للدخول الى الحساب </p>
                  <p className="text-red-600 px-1">{""}</p>
                </div>
                <div>
                  <div className="flex m-3">
                    <div className="w-full px-3 mb-3">
                      <label
                        htmlFor="username"
                        className="text-xs font-semibold px-1"
                      >
                        أسم المستخدم
                      </label>
                      <div className="flex">
                        <input
                          
                          type="text"
                          id="username"
                          className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none`}
                          placeholder="ahmed2023"
                        />
                      </div>
                      <p className="text-red-600 px-1">
                        {""}
                      </p>
                    </div>
                  </div>
                  <div className="flex m-3">
                    <div className="w-full px-3 mb-5">
                      <label
                        htmlFor="password"
                        className="text-xs font-semibold px-1"
                      >
                        كلمة المرور
                      </label>
                      <div className="flex">
                        <input
                          
                          id="password"
                          type="password"
                          className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none `}
                          placeholder="************"
                        />
                      </div>
                      <p className="text-red-600 px-1">
                        {""}
                      </p>
                    </div>
                  </div>

                  <div className="flex m-3 mt-10">
                    <div className="w-full px-3 mb-5">
                      <button className="block w-full max-w-xs mx-auto bg-[#222]  text-[#fdf9c6] hover:bg-[#000528]  rounded-lg px-3 py-3 font-semibold">
                        سجـل الأن
                      </button>
                    </div>
                  </div>
                  {/* <div className="flex m-3 mt-20">
                        <Link
                          href={"/auth/register"}
                          className="w-full px-3 mb-5 text-center"
                        >
                          <p className="text-2xl text-[#222] hover:bg[#F7941D]">
                            ليس لديك حساب ؟ سجل حساب جديد
                          </p>
                        </Link>
                      </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default LoginComponent;
