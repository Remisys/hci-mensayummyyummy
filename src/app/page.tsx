import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-semibold w-full text-center">
        MensaYummyYummy
      </h1>
      <div className="w-full grow items-center flex">
        <div className=" grid text-center w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-[5%]">
          <MealButton description="desc1" text="text1" href="meal/meal1">
            <Image
              alt=""
              className="w-[300px] h-[300px] "
              height={2080}
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2080}
            />
          </MealButton>

          <MealButton description="desc2" text="text2" href="meal/meal2">
            <Image
              alt=""
              className="w-[300px] h-[300px] "
              height={2319}
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1920}
            />
          </MealButton>

          <MealButton description="desc3" text="text3" href="meal/meal3">
            <Image
              alt=""
              className="w-[300px] h-[300px] "
              height={2399}
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1920}
            />
          </MealButton>
        </div>
      </div>
    </>
  );
}

const MealButton: React.FC<{
  text: string;
  description: string;
  children: React.ReactNode;
  href: string;
}> = ({ text, description, children, href }) => (
  <Link
    className="w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    href={href}
  >
    <h2 className="mb-3 text-2xl font-semibold">
      {`${text}`}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    {children}
    <p className="m-0 mt-2 max-w-[30ch] text-sm opacity-50">
      {`${description}`}
    </p>
  </Link>
);
