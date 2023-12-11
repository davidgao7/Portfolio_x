import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free Now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
          <Button
            type="button"
            title="Download App"
            icon="/apple.svg"
            variant="btn_white"
            full
          />
          <Button
            type="button"
            title="Download App"
            icon="/android.svg"
            variant="btn_dark_green_outline"
            full
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end">
          <Image src="/phone.svg" alt="phones" width={50} height={870} />
        </div>
    </section>
  );
};

export default GetApp;