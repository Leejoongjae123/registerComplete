import Image from "next/image";

export default function Home() {
  return (
    <section class="bg-white dark:bg-gray-900 w-full h-screen">
      <div class="flex justify-center items-center py-8 px-4 mx-auto h-screen w-full ">
        <div class="mx-auto text-center gap-y-5">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-blue-700">
            정상적으로 가입이 완료되었습니다.
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            렛츠두잇을 본격적으로 시작해보세요
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            POWERED BY Let's Do It
          </p>
        </div>
      </div>
    </section>
  );
}
