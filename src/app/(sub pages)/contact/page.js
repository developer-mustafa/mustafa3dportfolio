import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact Here
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Are you ready to elevate your team to new heights? Join us in shaping the future of our organization by bringing your unique talents and perspectives on board. Together, let's build a stronger, more innovative team that drives success and inspires greatness. Don't wait – seize this opportunity to make a meaningful impact and grow with us. Apply now and let's embark on this journey together towards excellence!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
