import fs from "fs";
import Head from "next/head";
import { Container, Row, Text, Link, Spacer } from "@nextui-org/react";
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
      <Container
        as="main"
        fluid
        display="flex"
        justify="center"
        direction="column"
        css={{
          height: "90vh",
        }}
      >
        <Row>
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hoverEffect"
            whileTap={{ scale: 0.8 }}
            variants={variants}
          >
            <Text
              h1
              size="clamp(3rem, 5vw, 6rem)"
              css={{
                letterSpacing: "-1.5px",
                textGradient: "45deg, $yellow500 -20%, $red500 100%",
              }}
            >
              Pedro Araujo
            </Text>
          </motion.div>
        </Row>
        <Row>
          <Text>
            I am a software engineer who works with <Text b>JavaScript</Text>{" "}
            and this is a <Text b>decentralized</Text> website.
          </Text>
        </Row>
        <Spacer y={3} />
        <Row as="footer">
          <Link href="https://www.linkedin.com/in/pedrotcaraujo/">
            linkedin
          </Link>
          <Spacer x={1} />
          <Link href="https://github.com/pedrotcaraujo">github</Link>
          <Spacer x={1} />
          <Link href="https://twitter.com/pedrotcaraujo">twitter</Link>
          <Spacer x={1} />
        </Row>
      </Container>
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
