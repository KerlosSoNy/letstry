"use client"
import Image from "next/image";
import Blogs from "./blogs/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" >
      <div
        onClick={() => navigate.push('/blogs')}
        className="z-10 justify-center w-full max-w-5xl items-center font-mono text-sm lg:flex">
        <Image src='https://images.pexels.com/photos/15740861/pexels-photo-15740861/free-photo-of-couple-at-scenic-viewpoint-overlooking-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image' width={500} height={500} />
      </div>
    </main >
  );
}
