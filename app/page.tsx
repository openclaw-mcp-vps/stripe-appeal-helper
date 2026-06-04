export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Fintech Recovery Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Get Your Stripe Account <span className="text-[#58a6ff]">Reinstated Fast</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Step-by-step appeal wizards, proven document templates, and vetted alternative processor recommendations — everything you need when Stripe suspends your account.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Your Appeal — $99/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: '🧭', title: 'Guided Appeal Wizard', desc: 'Answer a few questions and get a tailored appeal strategy with exact next steps.' },
          { icon: '📄', title: 'Document Templates', desc: 'Pre-written appeal letters, compliance docs, and evidence checklists accepted by Stripe.' },
          { icon: '🔄', title: 'Processor Alternatives', desc: 'Curated list of Stripe alternatives with onboarding guides so you never miss a sale.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$99</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Full appeal wizard (all suspension types)',
              '20+ document & letter templates',
              'Alternative processor directory',
              'Priority email support',
              'New templates added monthly',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Instant Access
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How quickly can I access the templates after subscribing?',
              a: 'Immediately. After payment you receive a link to the full dashboard with all templates and the appeal wizard.',
            },
            {
              q: 'Does this guarantee my Stripe account will be reinstated?',
              a: 'No tool can guarantee reinstatement — that decision is Stripe\'s. We give you the best-practice framework and templates that have the highest success rate based on real cases.',
            },
            {
              q: 'What if my business is permanently banned from Stripe?',
              a: 'The alternative processor directory covers 15+ vetted processors across different risk categories so you can keep accepting payments regardless of the Stripe outcome.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Stripe Appeal Helper. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
