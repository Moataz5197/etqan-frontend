import React from "react";

function RegisterComponent() {
  return (
    <section className="">
      <form>
        <div
          className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5"
          style={{ backgroundImage: "url('/images/bg-trail.jpg')" }}
        >
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
            <div className="md:flex w-full">
              <div className="w-full py-10 px-5 md:px-10">
                <div className="md:mr-[24%]"></div>
                <div className="text-center mt-5 mb-5">
                  {/* <h1 className="font-bold text-5xl text-[#000528]">
                        إستمارة تسجيل الأعضاء
                      </h1> */}
                  <p className="mt-3 text-xl font-bold">
                    أدخل معلوماتك لتسجيل العضوية
                  </p>
                  <p className="text-red-600 px-1">{""}</p>
                </div>
                <div>
                  <div className="md:flex m-3">
                    <div className="px-3 mb-3 md:w-1/2 flex flex-col gap-2">
                      <label
                        htmlFor="username"
                        className="text-sm font-bold px-1"
                      >
                        الإسم بالكامل
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          id="username"
                          className={`w-full h-[42px] -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none `}
                          placeholder="أحمد على محمد"
                        />
                      </div>
                      <p className="text-red-600 px-1">{""}</p>
                    </div>
                    <div className="px-3 mb-3 md:w-1/2 flex flex-col gap-2">
                      <label
                        htmlFor="nickname"
                        className="text-sm font-bold px-1"
                      >
                        إسم الشهرة
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          id="nickname"
                          className={`w-full h-[42px] -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none`}
                          placeholder="الحناوى"
                        />
                      </div>
                      <p className="text-red-600 px-1">{""}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RegisterComponent;
