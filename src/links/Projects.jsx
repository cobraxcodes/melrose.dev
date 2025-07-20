import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    id: 'tier-hobby',
    href: '#',
    priceMonthly: 'Hawaiian Homes Tracker',
    description: "A fullstack project meant to service native hawaiians",
    features: ['I am a placeholder text', 'I am a placeholder text', 'I am a placeholder text', 'I am a placeholder text'],
    featured: false,
  },
  {
    
    id: 'tier-startup',
    href: '#',
    priceMonthly: 'Hawaiian Homes Tracker REST API',
    description: 'Transforms 40,000+ misaligned DHHL PDF records into clean, structured data. First of its kind, it is meant to service natives to retrieve application updates eliminating searching through 200+ pages of PDF',
    features: ['RESTful CRUD API Endpoints', 'MongoDB Atlas Integration', 'Application Search and Filitering',],
    featured: false,
  },
  {
    
    id: 'tier-pro',
    href: '#',
    priceMonthly: 'The Bridge Protocol',
    description: 'I am a placeholder text',
    features: ['I am a placeholder text', 'I am a placeholder text', 'I am a placeholder text', 'I am a placeholder text'],
    featured: false,
  },
  {
    
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: 'Another project here',
    description: 'I am a placeholder text',
    features: [
      'I am a placeholder text',
      'I am a placeholder text',
      'I am a placeholder text',
      'I am a placeholder text',
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
        <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Projects</p>
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
                  <CheckIcon className="h-5 w-5 text-indigo-500 flex-none mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                  : 'text-indigo-600 border border-indigo-200 hover:border-indigo-400',
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
