import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    id: 'tier-hobby',
    href: 'https://github.com/cobraxcodes/Frontend-Hawaiian-Homes-Tracker',
    priceMonthly: 'Hawaiian Homes Tracker',
    description: "The frontend companion to the backend-designed Hawaiian Homes Tracker (HHT) database, built with a focus on user interaction and accessibility",
    features: ['Responsive Design', 'Lazy Loading ', 'Secure CRUD Operations', 'Advanced API Search And Query'],
    featured: false,
  },
  {
    
    id: 'tier-startup',
    href: 'https://github.com/cobraxcodes/Hawaiian-Homes-Tracker',
    priceMonthly: 'Hawaiian Homes Tracker REST API',
    description: 'Transforms 40,000+ misaligned DHHL PDF records into clean, structured data. First of its kind, it is meant to service natives to retrieve application updates eliminating searching through 200+ pages of PDF',
    features: ['RESTful CRUD API Endpoints', 'MongoDB Atlas Integration', 'JWT Authorization',],
    featured: false,
  },
  {
    
    id: 'tier-pro',
    href: '#',
    priceMonthly: 'The Bridge Protocol',
    description: 'AI-powered digital oracle that delivers unpredictable, emotionally-aware decisions by blending logic, randomness, and user prompts to simulate human-like responses',
    features: ['Simulated Emotion Engine', 'Unpredictable Decision Endpoint', 'Reasoning Response Format', 'Memory-Influenced Behavior'],
    featured: false,
  },
  {
    
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: 'Aegis Sentinel',
    description: 'A backend system that monitors and protects APIs by detecting abnormal request behavior in real time. It combines user behavior analytics, machine learning, and automated threat response to flag intrusions before they become breaches.',
    features: [
      'AI-Powered Anomaly Detection',
      'Real-Time Threat Response',
      'Behavior Logging Engine ',
      'Auto-Adaptive Security Layer',
    ],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  return (
    <div id="projects" className="relative isolate bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-4xl font-semibold tracking-tight text-lime-400 sm:text-5xl">Projects</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'bg-white-900 text-white shadow-lg' : 'bg-white text-gray-900 border',
              'rounded-2xl p-6 ring-1 ring-gray-200 flex flex-col justify-between'
            )}
          >
            <div>
              <h3 className="text-base font-semibold text-indigo-600">{tier.name}</h3>
              <p className="mt-2 text-3xl font-bold">{tier.priceMonthly}</p>
              <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
            </div>

            <ul className="mt-6 space-y-2 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-2 items-start">
                  <CheckIcon className="h-5 w-5 text-lime-500 flex-none mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
             target='_blank'
             rel="noopener noreferrer"
              href={tier.href}
             className={classNames(
                      tier.featured
                        ? 'bg-emerald-500 text-black hover:bg-indigo-400'
                        : 'border border-lime-400 hover:bg-lime-600 text-black',
                      'mt-6 block rounded-md px-4 py-2.5 text-center text-sm font-semibold'
                    )}
            >
             Explore
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
