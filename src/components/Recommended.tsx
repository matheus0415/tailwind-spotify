import Image from "next/image";

function Recommended() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-4">
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
      >
        <Image
          src="/album.jpg"
          className="w-full"
          width={120}
          height={120}
          alt="albumImg"
        />

        <strong className="font-semibold">Daily 1 Mix</strong>
        <span className="text-sm text-zinc-400">
          Wallows, COIN, girl in red and more
        </span>
      </a>
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
      >
        <Image
          src="/album.jpg"
          className="w-full"
          width={120}
          height={120}
          alt="albumImg"
        />
        <strong className="font-semibold">Daily 1 Mix</strong>
        <span className="text-sm text-zinc-400">
          Wallows, COIN, girl in red and more
        </span>
      </a>
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
      >
        <Image
          src="/album.jpg"
          className="w-full"
          width={120}
          height={120}
          alt="albumImg"
        />
        <strong className="font-semibold">Daily 1 Mix</strong>
        <span className="text-sm text-zinc-400">
          Wallows, COIN, girl in red and more
        </span>
      </a>
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
      >
        <Image
          src="/album.jpg"
          className="w-full"
          width={120}
          height={120}
          alt="albumImg"
        />
        <strong className="font-semibold">Daily 1 Mix</strong>
        <span className="text-sm text-zinc-400">
          Wallows, COIN, girl in red and more
        </span>
      </a>
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
      >
        <Image
          src="/album.jpg"
          className="w-full"
          width={120}
          height={120}
          alt="albumImg"
        />
        <strong className="font-semibold">Daily 1 Mix</strong>
        <span className="text-sm text-zinc-400">
          Wallows, COIN, girl in red and more
        </span>
      </a>
    </div>
  );
}

export default Recommended;
