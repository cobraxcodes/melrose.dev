

export default function GetInTouch() {
  return (
    <>
      <section id="contact" className="bg-white dark:bg-black">
        <div className="py-3 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-lime-400 dark:text-lime-400">
            Send A Message
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-800 dark:text-gray-200">
            {/* social icons */}
            <a
              href="https://linkedin.com/in/melrose-ceballos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-lime-600 text-3xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/cobraxcodes?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-lime-600 text-3xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://threads.net/@yourthreads"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="hover:text-lime-600 text-3xl"
            >
              <i className="fas fa-link"></i>
            </a>
            <a
              href="https://medium.com/@cobraxcodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="hover:text-lime-600 text-3xl"
            >
              <i className="fab fa-medium"></i>
            </a>
          </div>

          <form
            action="https://formsubmit.co/cobraxcodes@gmail.com"
            method="POST"
            className="space-y-8 mt-6 sm:mt-10"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="name@gmail.com"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light max-w-full"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                placeholder="Let me know how I can help"
                required
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light max-w-full"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Leave a message..."
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 max-w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-lime-700 w-full sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
