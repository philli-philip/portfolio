import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import type { Task } from ".";
import ChallengeInfo from "../../components/challengeInfo";

export const qrCode: Task = {
  id: 1,
  name: "QR Code",
  link: "code/qr-code",
  difficulty: "newbie",
  completed: new Date("04 Jun 2023"),
};

export default function Page() {
  return (
    <>
      <Head>
        <title>Code Challenges | QR-Code</title>
        <meta
          name="description"
          content="A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet."
        />
      </Head>
      <div className="flex h-screen w-screen place-content-center items-center bg-blue-100">
        <div
          role="main"
          className="flex w-[320px] flex-shrink flex-col items-center rounded-2xl bg-white p-4 drop-shadow-2xl "
        >
          <Link
            href="https://frontendmentor.io"
            aria-label="Visit the Frontendmentors site (opens in a new tab)"
            target="_blank"
            className="group"
          >
            <Image
              src={"/img/code-dojo/image-qr-code.png"}
              width={288}
              height={288}
              alt="qr code leading to Frontendmentor.io"
              className="rounded-lg duration-75 group-hover:scale-105"
            />
          </Link>
          <h1 className="mb-4 mt-8 px-4 text-center text-xl font-bold leading-6">
            Improve your front-end skills by building projects
          </h1>
          <p className="b-8 mb-4 px-4 text-center text-sm leading-5 text-gray-600">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level.
          </p>
        </div>
        <ChallengeInfo task={qrCode} />
      </div>
    </>
  );
}
