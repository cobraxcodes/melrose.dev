export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-black h-screen">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 h-full">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://media1.tenor.com/m/Z_Ah8rkdZ4YAAAAC/walking-code.gif"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://media1.tenor.com/m/Z_Ah8rkdZ4YAAAAC/walking-code.gif"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
