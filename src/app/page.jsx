export default function Home() {
  return (
    <main className="flex h-dvh flex-col">
      <div className="flex h-2/3 p-4 text-9xl capitalize">
        <div className="relative isolate flex flex-1 items-start justify-center p-4">
          <span className="pt-10">garrett</span>
          <img
            className="absolute -z-50 h-full w-full rounded-md object-cover object-bottom opacity-60"
            src="/trail.jpg"
            alt="forest"
          ></img>
          <span className="font-rofane pt-10 italic">vaughn</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex justify-between gap-4 text-sm capitalize tracking-wider *:cursor-pointer">
          <span>featured work</span>
          <span>expertise</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <p className="w-full max-w-2xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            minima ex, facilis consequatur et vitae, voluptas similique commodi
            reiciendis corrupti quibusdam totam omnis optio quos, ut quia
            doloremque accusamus repudiandae.
          </p>
          <span className="cursor-pointer capitalize">say hi</span>
        </div>
      </div>
    </main>
  );
}
