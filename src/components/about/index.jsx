import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          Full Stack Software Engineer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Expertise JavaScript ,C,C++, Python focus on As a MERN stack developer also nextJS with Prisma Developer, I am committed to building high-quality web applications that meet the needs of my clients. With years of experience in full-stack web development, I specialize in using React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to create scalable and robust web applications. My passion for solving complex problems and creating innovative solutions drives me to stay up-to-date with the latest technologies and trends in the industry.

          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto  round-full"
            src={'https://mustafaofficial.netlify.app/MdSay.png'}
            alt="MUSTAFA"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          Founder & Director of MR IT Software solution Ltd.
          </h2>
     
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          As a MERN stack also Nextjs With Prisma developer, I am committed to building high-quality web applications software that meet the needs of my clients. With years of experience in full-stack web development, I specialize in using React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to create scalable and robust web applications. 

          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="MUSTAFA"
            loading="lazy"
          />
        </ItemLayout>

       

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://mustafaportfolio.vercel.app/"
            target="_blank"
            className="w-full p-4"
          >
           Offical 
          </Link>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://mustafasir.vercel.app/"
            target="_blank"
            className="w-full p-4"
          >
           Know more...
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
