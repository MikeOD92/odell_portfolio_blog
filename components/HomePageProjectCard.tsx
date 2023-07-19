import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

function HomePageProjectCard(props: any) {
  return (
    <Link href="/portfolio" className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "easeIn", duration: 1.3 }}
      >
        <Image
          src={props.img.location}
          width="2000"
          height="500"
          alt="portfolio screenshot of website"
          className="w-full mb-5"
        />
      </motion.div>
    </Link>
  );
}

export default HomePageProjectCard;
