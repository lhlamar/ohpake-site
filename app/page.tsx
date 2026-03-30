import Image from "next/image";
import localFont from 'next/font/local'

const jersey10 = localFont({ src: '../public/Jersey10-Regular.ttf' })

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className={`${jersey10.className} text-8xl`}>OH.PAKE!</h1>
      <p className="text-zinc-600 dark:text-zinc-400">site coming soon test</p>
    </div>
  );
}
