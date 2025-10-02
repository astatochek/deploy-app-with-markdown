import ReactMarkdown from 'react-markdown'

const md = `
This is **bold** and *italic* paragraph.


\`\`\`ts 
const greeting = "Hello, world!";
console.log(greeting);
\`\`\`


Visit [page](https://github.com)
`

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <div className="hidden items-center gap-8 md:flex">
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  Product
                </a>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  Solutions
                </a>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  Pricing
                </a>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  Docs
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden rounded-lg px-4 py-2 text-sm text-gray-600 transition-colors hover:text-gray-900 md:block">
                Sign In
              </button>
              <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-gray-600 md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="w-full rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700 sm:w-auto">
                Get Started
              </button>
              <button className="w-full rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:border-gray-400 sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl">Ut enim ad minim veniam</h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-gray-600">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Duis aute irure</h3>
                <p className="leading-relaxed text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Excepteur sint</h3>
                <p className="leading-relaxed text-gray-600">
                  Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Occaecat cupidatat</h3>
                <p className="leading-relaxed text-gray-600">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 px-8 py-16 text-center md:px-16">
              <h2 className="text-balance text-3xl font-bold md:text-4xl">Sed do eiusmod tempor incididunt</h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
              <button className="mt-8 rounded-lg bg-purple-600 px-8 py-3 font-medium text-white transition-colors hover:bg-purple-700">
                Start Free Trial
              </button>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 px-8 py-16 md:px-16">
              <h2 className="text-balance text-3xl font-bold md:text-4xl text-center ">Turns out, you can render markdown in React!</h2>
              <div className='p-5'>
                <ReactMarkdown>{md}</ReactMarkdown>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <p className="text-sm leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Product</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gray-900">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

