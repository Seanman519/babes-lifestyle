"use client";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="bg-body min-h-screen flex justify-center" id="home">
      <div className="flex">
        {/* TEXT and IMAGE */}
        <div className="flex ml-0 md:ml-8  items-center justify-center gap-16">
          {/* TEXT */}
          <div className="">
            <motion.h1
              className="text-white mb-7 lg:text-left text-center "
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              Taste the
              <br /> extra ordinary
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold text-center lg:text-left "
            >
              By : <span className="text-black">Sean</span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-8 text-center lg:text-left "
            >
              Welcome to Babes-LifeStyle ! Where every meal is a celebration!
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="flex justify-center lg:justify-start">
                <Button variant="default">
                  <a href="https://github.com/Seanman519/babes-lifestyle/releases/download/v1/babesapk.apk" download>
                    Download App
                  </a>
                  <p className="text-white uppercase"></p>
                </Button>
              </div>
            </motion.div>
          </div>
          {/* IMAGE */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden lg:flex"
          >
            <Image
              src="/hero/plates.jpg"
              width={756}
              className="rounded-full"
              height={602}
              quality={80}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
