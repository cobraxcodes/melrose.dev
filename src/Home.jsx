'use client'

export default function Home() {
  

  return (
    <div className="bg-white">
      <div className="isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w-2xl py-12 sm:py-12 lg:py-12">
          <div className="hidden sm:mb-2 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Hi, <br/> My name is <span className="text-lime-500"> Melrose </span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
             Backend engineer, potterhead, and karaoke-lover — building systems that protect, empower, and scale.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-lime-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Me
              </a>
              <p className=" hidden sm:inline text-sm/6 font-semibold text-lime-900">
                Scroll that way <span aria-hidden="true">→</span>
              </p>
            </div>
      </div>
      </div>
      </div>
      </div>
)
}

