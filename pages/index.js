import fs from "fs";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

const NAVIGATION_ACTIVE = false;
const DIVIDER_ACTIVE = false;
const LATEST_POST_ACTIVE = false;

const variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
  hoverEffect: { scale: 1.1 },
  tapEffect: { scale: 0.9 },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pedro Araujo</title>
        <meta name="description" content="Pedro Araujo - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between px-5 py-5 lg:px-28">
        <h1 className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-2xl font-bold text-transparent">
          PA
        </h1>
        {NAVIGATION_ACTIVE && (
          <nav className="flex w-full items-center justify-end ">
            <a
              href="#"
              className="mr-3 flex items-center justify-center border-b border-transparent px-3 py-1 font-light transition-colors hover:border-zinc-200 hover:text-zinc-400"
            >
              About
            </a>
            <a
              href="#"
              className="flex items-center justify-center border-b border-transparent px-3 py-1 font-light transition-colors hover:border-zinc-200 hover:text-zinc-400"
            >
              Blog
            </a>
          </nav>
        )}
      </header>
      {DIVIDER_ACTIVE && (
        <div className="h-[1px] w-full bg-gradient-to-r from-amber-500 to-red-600" />
      )}
      <main className="flex h-[90vh] flex-col justify-between px-5 lg:px-28">
        <div>
          <div className="mt-16 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover="hoverEffect"
              whileTap={{ scale: 0.8 }}
              variants={variants}
            >
              <Image
                className="cursor-pointer rounded-full"
                width={120}
                height={120}
                src="/me_cartoon.jpeg"
                alt="Pedro Araujo avatar"
              />
            </motion.div>
            <h1 className="m-auto w-fit bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text py-2 text-5xl font-bold leading-tight tracking-tight text-transparent md:text-6xl lg:text-6xl">
              Pedro Araujo
            </h1>
            <p className="mb-24 text-lg">
              I am a software engineer who works with <b>JavaScript</b> and this
              is a <b>decentralized</b> website.
            </p>
          </div>
          {LATEST_POST_ACTIVE && (
            <div>
              <h2 className="mb-4 text-2xl font-light">Latest posts</h2>
              <article className="border-b border-zinc-100 py-2">
                <a
                  href="#"
                  className="flex justify-between pb-1  font-light transition-colors hover:text-zinc-300"
                >
                  My first decentralized website
                  <time className="ml-5 text-sm" dateTime="2023-16-08">
                    August, 2023
                  </time>
                </a>
              </article>
              <article className="border-b border-zinc-100 py-2">
                <a
                  href="#"
                  className="flex justify-between pb-1  font-light transition-colors hover:text-zinc-300"
                >
                  Introduction to Github Projects
                  <time className="ml-5 text-sm" dateTime="2023-20-07">
                    July, 2023
                  </time>
                </a>
              </article>
              <article className="border-b border-zinc-100 py-2">
                <a
                  href="#"
                  className="flex justify-between pb-1  font-light transition-colors hover:text-zinc-300"
                >
                  Introduction to Github Projects
                  <time className="ml-5 text-sm" dateTime="2023-20-07">
                    July, 2023
                  </time>
                </a>
              </article>
            </div>
          )}
        </div>
        <footer className="flex justify-center px-5 py-3 lg:px-28">
          <a
            className="pr-4 font-light text-zinc-700 hover:text-zinc-500"
            href="https://www.linkedin.com/in/pedrotcaraujo/"
          >
            linkedin
          </a>
          <a
            className="pr-4 font-light text-zinc-700 hover:text-zinc-500"
            href="https://github.com/pedrotcaraujo"
          >
            github
          </a>
          <a
            className="pr-4 font-light text-zinc-700 hover:text-zinc-500"
            href="https://twitter.com/pedrotcaraujo"
          >
            twitter
          </a>
        </footer>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};
