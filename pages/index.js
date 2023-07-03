import fs from "fs";
import Head from "next/head";
import { motion } from "framer-motion";

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
      <main className="flex justify-center flex-col h-[90vh] px-5 lg:px-28">
        <div className="flex">
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hoverEffect"
            whileTap={{ scale: 0.8 }}
            variants={variants}
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl tracking-tight from-amber-500 to-red-600 font-bold bg-gradient-to-r bg-clip-text text-transparent py-2 leading-tight cursor-pointer">
              Pedro Araujo
            </h1>
          </motion.div>
        </div>
        <p className="mb-16">
          I am a software engineer who works with <b>JavaScript</b> and this is
          a <b>decentralized</b> website.
        </p>
        <footer>
          <a
            className="text-blue-700 hover:text-blue-500 pr-4"
            href="https://www.linkedin.com/in/pedrotcaraujo/"
          >
            linkedin
          </a>
          <a
            className="text-blue-700 hover:text-blue-500 pr-4"
            href="https://github.com/pedrotcaraujo"
          >
            github
          </a>
          <a
            className="text-blue-700 hover:text-blue-500 pr-4"
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
