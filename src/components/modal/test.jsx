import React from "react";

function Test() {
  return (
    // <!-- ====== Modal Section Start -->
    <section x-data="{modalOpen: false}">
      <div className="container mx-auto py-20">
        <button
          //   @click="modalOpen = true"
          className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white">
          Open Modal
        </button>
      </div>
      <div
        x-show="modalOpen"
        x-transition
        className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5">
        <div
          //   @click.outside="modalOpen = false"
          className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
          <h3 className="text-dark pb-2 text-xl font-bold sm:text-2xl">
            Your Message Sent Successfully
          </h3>
          <span className="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-body-color mb-10 text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-1/2 px-3">
              <button
                // @click="modalOpen = false"
                className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
                Cancel
              </button>
            </div>
            <div className="w-1/2 px-3">
              <button className="bg-primary border-primary block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ====== Modal Section End -->
  );
}

export default Test;
