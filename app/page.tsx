import Image from 'next/image'
import Link from 'next/link'
import Particles from './components/particles'
import Space from './components/Space';


const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
  // { name: "Hire Me", href: "/contact" },
  { name: "Freelance", href: "/freelance" },
];

export default function Home() {


  return (
    <>
      <div className="bg-black h-screen">
        <div className="relative isolate px-6 pt-20 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7cc9fc] to-[#99a8ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
            />
          </div>
          {/* nav */}
          <nav className="my-16 animate-fade-in">
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm duration-500 text-zinc-300 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>

          <Particles
            className="absolute  inset-0 -z-10 animate-fade-in"
            quantity={100}
          />

          <div className="mx-auto   ">
            <h1 className="z-10 text-center text-2xl animate-fade-in pt-8   text-zinc-200  font-display sm:text-6xl md:text-8xl mt-2  font-bold tracking-tight  md:text-center  ">
              FullStack BlockChain <br></br>Developer
            </h1>

            <div className="my-16 text-center animate-fade-in">
              <h2 className="text-sm text-zinc-500 ">
                Hi, my name is Nikhil Pn, I'm building an Ecommerce Application where you can buy Web/Blockchain Apps at {""}
                <Link
                  target="_blank"
                  href="https://upstash.com"
                  className="underline duration-500 hover:text-zinc-300"
                >
                  H3lios.in
                </Link>

                <br />
                and Contributing to openSource{" "}
                {/* <Link
                  target="_blank"
                  href="https://unkey.dev"
                  className="underline duration-500 hover:text-zinc-300"
                >
                  unkey.dev
                </Link>{" "} */}
                at night.



              </h2>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-30rem)]" aria-hidden="true">
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fc6dc8] to-[#fc6d76] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
            />
          </div>
        </div>
      </div>


    </>
  )
}
