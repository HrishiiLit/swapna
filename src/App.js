import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bell,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Download,
  Globe,
  HeartHandshake,
  LineChart,
  LockKeyhole,
  Menu,
  PieChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
  X,
} from 'lucide-react';
import './App.css';

const navigation = [
  { label: 'Features', href: '#features' },
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const trustedBy = ['Northstar Capital', 'Ledger & Lane', 'Summit Grid', 'Cobalt House', 'Asterline'];

const featureCards = [
  {
    icon: CircleDollarSign,
    title: 'Instant Payments',
    copy: 'Move capital between accounts in minutes with automated routing, approvals, and bank-grade settlement visibility.',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    copy: 'Track revenue, burn, and margins in one command center with clear trends and exportable board-ready reporting.',
  },
  {
    icon: Sparkles,
    title: 'AI Financial Insights',
    copy: 'Spot anomalies, forecast runway, and surface working-capital opportunities before they become operational issues.',
  },
  {
    icon: CreditCard,
    title: 'Expense Tracking',
    copy: 'Issue cards, enforce policies, and reconcile spend with clean approval trails for every team and entity.',
  },
  {
    icon: LineChart,
    title: 'Investment Portfolio',
    copy: 'See treasury, venture positions, and liquidity together with practical context for every balance change.',
  },
  {
    icon: Building2,
    title: 'Multi-bank Integration',
    copy: 'Connect operating, reserve, and investment accounts through a single dashboard that stays accurate in real time.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Transactions',
    copy: 'Protect transfers with policy checks, device signals, and approval controls designed for serious finance teams.',
  },
  {
    icon: WalletCards,
    title: 'Budget Management',
    copy: 'Plan across departments and entities with clean guardrails that keep spending aligned to the month ahead.',
  },
];

const proofStats = [
  { label: 'Customer teams', value: '2,400+' },
  { label: 'Assets managed', value: '$18.4B' },
  { label: 'Annual transaction volume', value: '$92.7B' },
];

const dashboardCards = [
  { label: 'Revenue', value: '$12.4M', change: '+18.2%', tone: 'blue' },
  { label: 'Transactions', value: '48,972', change: '+7.6%', tone: 'emerald' },
  { label: 'Portfolio Value', value: '$84.1M', change: '+11.3%', tone: 'blue' },
  { label: 'Cash Flow', value: '$3.9M', change: '+5.8%', tone: 'emerald' },
  { label: 'Savings', value: '$640K', change: '+9.1%', tone: 'blue' },
  { label: 'Analytics', value: '94.8%', change: 'Healthy', tone: 'emerald' },
];

const spendingRows = [
  { name: 'Cloud infrastructure', amount: '$42,800', trend: '+4.1%' },
  { name: 'Customer acquisition', amount: '$128,400', trend: '+12.8%' },
  { name: 'Payroll', amount: '$214,900', trend: '+2.3%' },
  { name: 'Vendor operations', amount: '$31,600', trend: '-6.8%' },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    copy: 'Policy controls, audits, and monitoring that keep every transaction traceable and every account protected.',
  },
  {
    icon: ArrowUpRight,
    title: 'Lightning Fast Transfers',
    copy: 'Reduce waiting time with clean transfer flows and high-confidence execution across your banking stack.',
  },
  {
    icon: Sparkles,
    title: 'AI-powered Insights',
    copy: 'Translate noisy financial activity into practical actions your team can use before the next board meeting.',
  },
  {
    icon: HeartHandshake,
    title: '24/7 Support',
    copy: 'Dedicated support for finance, operations, and treasury teams whenever the pressure is highest.',
  },
  {
    icon: BadgeCheck,
    title: 'Regulatory Compliance',
    copy: 'Built for teams that need clear records, consistent approvals, and a clean operational audit trail.',
  },
  {
    icon: LockKeyhole,
    title: 'Bank-level Encryption',
    copy: 'Sensitive data stays protected in transit and at rest with modern access controls and safe defaults.',
  },
];

const testimonials = [
  {
    name: 'Maya Ellison',
    role: 'VP Finance',
    company: 'Northstar Capital',
    quote: 'We cut reporting time from days to hours. The visibility is sharp, and our team trusts every number on the screen.',
    rating: 5,
  },
  {
    name: 'Tariq Bhandari',
    role: 'Founder',
    company: 'Cinder Rail',
    quote: 'It feels designed for how a modern finance team actually works. Clean approvals, clean dashboards, no clutter.',
    rating: 5,
  },
  {
    name: 'Leonie Hart',
    role: 'Treasury Lead',
    company: 'Asterline',
    quote: 'Our bank balances, treasury activity, and spend controls finally live in one place with the confidence we need.',
    rating: 5,
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'For founders who need a clean financial operating layer from day one.',
    features: ['Payments dashboard', 'Expense tracking', 'Monthly reporting'],
  },
  {
    name: 'Growth',
    price: '$99',
    description: 'For scaling teams that want stronger controls, automation, and analytics.',
    features: ['All Starter features', 'AI insights', 'Multi-bank views', 'Priority support'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For regulated organizations that need tailored controls and deployment support.',
    features: ['Advanced governance', 'Dedicated onboarding', 'Custom reporting'],
  },
];

const faqs = [
  {
    question: 'How quickly can we get started?',
    answer: 'Most teams can launch the workspace in a single afternoon, then connect accounts and policies as they go.',
  },
  {
    question: 'Does this work for multi-entity businesses?',
    answer: 'Yes. The dashboard is structured for multi-bank and multi-entity operations with separate reporting views.',
  },
  {
    question: 'What security controls are included?',
    answer: 'You get role-based access, approvals, monitoring, encrypted data handling, and full audit visibility.',
  },
  {
    question: 'Can we export reports for the board?',
    answer: 'Yes. Reports, spending summaries, and performance charts are designed for clean export and review.',
  },
];

const activityRows = [
  { name: 'Atlas Trading', detail: 'Invoice paid', amount: '$18,420', time: '2 min ago' },
  { name: 'Reed Collective', detail: 'Card spend approved', amount: '$2,960', time: '14 min ago' },
  { name: 'Finch Studio', detail: 'Treasury sweep', amount: '$48,000', time: '32 min ago' },
  { name: 'Monarch Ops', detail: 'Vendor transfer', amount: '$7,840', time: '1 hr ago' },
];

const growthPoints = [18, 24, 22, 35, 42, 38, 49, 57, 61, 66, 73, 81];

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * progress));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(rafId);
  }, [target, duration]);

  return value;
}

function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

function FloatingMetric({ label, value, change, tone, delay }) {
  return (
    <div
      className={`floating-metric tone-${tone}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span>{label}</span>
      <strong>{value}</strong>
      <em>{change}</em>
    </div>
  );
}

function Sparkline() {
  const points = growthPoints.map((point, index) => `${(index / (growthPoints.length - 1)) * 100},${100 - point}`).join(' ');

  return (
    <svg viewBox="0 0 100 100" className="sparkline" aria-hidden="true">
      <defs>
        <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <polyline points={points} fill="none" stroke="url(#revenueGradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={points} fill="none" stroke="rgba(37, 99, 235, 0.12)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashboardPreview() {
  const revenue = useCountUp(12400000, 1600);
  const transactions = useCountUp(48972, 1600);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className="dashboard-shell"
    >
      <div className="dashboard-header">
        <div>
          <p className="dashboard-kicker">Treasury command center</p>
          <h3>Balanced liquidity, spend, and growth in one view</h3>
        </div>
        <div className="dashboard-status">
          <span className="status-dot" />
          Live sync
        </div>
      </div>

      <div className="dashboard-grid-top">
        <div className="chart-panel panel-wide">
          <div className="panel-header">
            <div>
              <p>Revenue trend</p>
              <strong>${(revenue / 1000000).toFixed(1)}M</strong>
            </div>
            <div className="panel-chip">
              <TrendingUp size={14} />
              +18.2% MoM
            </div>
          </div>
          <Sparkline />
          <div className="sparkline-caption">
            <span>Jan</span>
            <span>Apr</span>
            <span>Jul</span>
            <span>Oct</span>
          </div>
        </div>

        <div className="panel card-stack">
          <div className="panel-header compact">
            <p>Liquidity</p>
            <strong>$6.8M</strong>
          </div>
          <div className="liquidity-ring" aria-hidden="true">
            <div className="liquidity-ring-fill" />
            <div className="liquidity-ring-center">
              <span>72%</span>
              <small>Available</small>
            </div>
          </div>
          <div className="mini-note">
            <ArrowUpRight size={14} />
            11-day operating runway covered
          </div>
        </div>
      </div>

      <div className="floating-metrics">
        {dashboardCards.map((card, index) => (
          <FloatingMetric key={card.label} {...card} delay={index * 0.2} />
        ))}
      </div>

      <div className="dashboard-grid-bottom">
        <div className="panel transactions-panel">
          <div className="panel-header">
            <div>
              <p>Recent transactions</p>
              <strong>{transactions.toLocaleString()}</strong>
            </div>
            <button type="button" className="ghost-button">
              Export <Download size={14} />
            </button>
          </div>
          <div className="transaction-list" role="list">
            {activityRows.map((row) => (
              <div className="transaction-row" key={row.name} role="listitem">
                <div>
                  <strong>{row.name}</strong>
                  <span>{row.detail}</span>
                </div>
                <div>
                  <strong>{row.amount}</strong>
                  <span>{row.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel spending-panel">
          <div className="panel-header compact">
            <p>Spend profile</p>
            <div className="panel-chip">
              <PieChart size={14} />
              This month
            </div>
          </div>
          <div className="spending-bars" aria-hidden="true">
            {spendingRows.map((row, index) => (
              <div className="spending-bar" key={row.name}>
                <span style={{ width: `${72 - index * 9}%` }} />
              </div>
            ))}
          </div>
          <div className="spending-table">
            {spendingRows.map((row) => (
              <div className="spending-row" key={row.name}>
                <span>{row.name}</span>
                <strong>{row.amount}</strong>
                <em>{row.trend}</em>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!loaded ? (
        <div className="dashboard-loading" aria-hidden="true">
          <div className="loading-line loading-line-lg" />
          <div className="loading-grid">
            <div className="loading-card" />
            <div className="loading-card" />
            <div className="loading-card" />
            <div className="loading-card" />
          </div>
        </div>
      ) : null}

      <div className="toast-card">
        <Bell size={16} />
        <div>
          <strong>Board report ready</strong>
          <span>Monthly liquidity summary synced in 2.4 seconds.</span>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-trigger" type="button" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <ChevronDown className={isOpen ? 'chevron open' : 'chevron'} size={18} />
      </button>
      <div className={isOpen ? 'faq-answer is-open' : 'faq-answer'}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const heroStats = useMemo(
    () => [
      { value: '$128M', label: 'Processed this quarter' },
      { value: '99.97%', label: 'Platform uptime' },
      { value: '14 min', label: 'Average onboarding' },
    ],
    [],
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container nav-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">A</span>
            Arbor Ledger
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button type="button" className="nav-secondary">
              Sign in
            </button>
            <a className="nav-primary" href="#cta">
              Get Started <ArrowRight size={16} />
            </a>
            <button
              type="button"
              className="mobile-toggle"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((current) => !current)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
            <div className="mobile-drawer">
              {navigation.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                Book a Demo
              </a>
            </div>
          ) : null}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div
              className="hero-copy"
            >
              <p className="eyebrow">Modern finance infrastructure</p>
              <h1>Premium treasury, spend, and growth tooling for serious financial teams.</h1>
              <p className="hero-text">
                Arbor Ledger gives operators a clear command center for cash, cards, investments, and reporting. Built for teams that want
                Stripe-level polish with the control of a finance system of record.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#cta">
                  Get Started <ArrowRight size={18} />
                </a>
                <a className="secondary-button" href="#pricing">
                  Book a Demo
                </a>
              </div>

              <div className="hero-points">
                <div>
                  <Check size={16} />
                  Real-time visibility across banks and entities
                </div>
                <div>
                  <Check size={16} />
                  Approval workflows built for finance and operations
                </div>
                <div>
                  <Check size={16} />
                  Audit-friendly reporting with board-ready exports
                </div>
              </div>

              <div className="hero-stats">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="hero-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hero-visual"
            >
              <div className="hero-orb hero-orb-blue" />
              <div className="hero-orb hero-orb-emerald" />
              <DashboardPreview />
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div className="trusted-logos">
              <span>Trusted by</span>
              <div>
                {trustedBy.map((name) => (
                  <strong key={name}>{name}</strong>
                ))}
              </div>
            </div>
            {proofStats.map((item) => (
              <div className="trust-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="features">
          <div className="container">
            <SectionHeading
              eyebrow="Features"
              title="Every system finance teams rely on, designed with visible calm."
              copy="Built to reduce operational noise, increase confidence, and keep every decision in a clean, trustworthy interface."
            />

            <div className="feature-grid">
              {featureCards.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    className="feature-card"
                    key={feature.title}
                  >
                    <div className="feature-icon">
                      <Icon size={18} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="content-section product-section" id="product">
          <div className="container product-grid">
            <div>
              <SectionHeading
                eyebrow="Product showcase"
                title="A dashboard that makes cash, spend, and growth feel immediate."
                copy="The view is built to help finance leaders scan, act, and share updates without switching tools or losing context."
              />

              <div className="product-panel">
                <div className="product-panel-header">
                  <div>
                    <span>Monthly reporting</span>
                    <strong>$8.4M net cash position</strong>
                  </div>
                  <div className="panel-chip">
                    <Globe size={14} />
                    Global entities synced
                  </div>
                </div>

                <div className="report-chart">
                  {growthPoints.map((point, index) => (
                    <div className="report-column" key={`${point}-${index}`}>
                      <span style={{ height: `${point}%` }} />
                    </div>
                  ))}
                </div>

                <div className="timeline">
                  <div>
                    <strong>Revenue acceleration</strong>
                    <span>12.8% higher than the previous quarter</span>
                  </div>
                  <div>
                    <strong>Portfolio growth</strong>
                    <span>Balanced against reserve requirements and runway</span>
                  </div>
                  <div>
                    <strong>Credit utilization</strong>
                    <span>31% average across operating cards and facilities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-card">
              <div className="table-header">
                <div>
                  <p>Operational ledger</p>
                  <strong>Recent actions</strong>
                </div>
                <button type="button" className="ghost-button">
                  Open report <ArrowUpRight size={14} />
                </button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {activityRows.map((row) => (
                    <tr key={row.name}>
                      <td>{row.name}</td>
                      <td>{row.detail}</td>
                      <td>{row.amount}</td>
                      <td>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="toast-list">
                <div>
                  <strong>Security review passed</strong>
                  <span>Encryption and device policies remain fully in place.</span>
                </div>
                <div>
                  <strong>Forecast updated</strong>
                  <span>Cash runway now reflects the latest collections and spend.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <SectionHeading
              eyebrow="Why choose us"
              title="A calmer operating system for capital, compliance, and decisions."
              copy="Designed to remove friction across the financial workflow while keeping the product sharp enough for boardroom use."
            />

            <div className="benefit-grid">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="benefit-card" key={item.title}>
                    <Icon size={20} />
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="content-section testimonials-section">
          <div className="container">
            <SectionHeading
              eyebrow="Testimonials"
              title="Operators trust it because it feels precise, not loud."
              copy="Real finance teams need confidence more than hype. These accounts reflect the product’s clarity and operational discipline."
            />

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.name}>
                  <div className="testimonial-top">
                    <div className="avatar">{item.name.slice(0, 1)}</div>
                    <div>
                      <strong>{item.name}</strong>
                      <span>
                        {item.role} · {item.company}
                      </span>
                    </div>
                  </div>
                  <div className="rating" aria-label={`${item.rating} out of 5 stars`}>
                    {'★★★★★'.slice(0, item.rating)}
                  </div>
                  <p>{item.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="pricing">
          <div className="container">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple plans that map to the way modern finance teams grow."
              copy="Choose a starting point that fits your current operating needs and expand when the workflow becomes more complex."
            />

            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <article className={plan.recommended ? 'pricing-card pricing-card-featured' : 'pricing-card'} key={plan.name}>
                  {plan.recommended ? <span className="recommended-badge">Recommended</span> : null}
                  <p className="pricing-name">{plan.name}</p>
                  <div className="pricing-price">{plan.price}</div>
                  <span className="pricing-copy">{plan.description}</span>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a className={plan.recommended ? 'primary-button' : 'secondary-button'} href="#cta">
                    {plan.recommended ? 'Start with Growth' : 'Choose plan'}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="faq">
          <div className="container faq-grid">
            <SectionHeading
              eyebrow="FAQ"
              title="Straight answers for teams evaluating a serious finance platform."
              copy="We keep the common questions short, practical, and easy to scan so decision makers can move quickly."
            />

            <div className="faq-list">
              {faqs.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="cta">
          <div className="container cta-card">
            <div>
              <p className="eyebrow">Ready to move faster</p>
              <h2>Bring your treasury, spend, and reporting into one premium operating layer.</h2>
              <p>
                Get a finance workspace that your team can trust immediately, with the clarity, structure, and polish expected from a top-tier
                fintech platform.
              </p>
            </div>

            <form className="signup-form">
              <label>
                Work email
                <input type="email" placeholder="finance@company.com" aria-label="Work email" />
              </label>
              <label>
                Company name
                <input type="text" placeholder="Arbor Capital Partners" aria-label="Company name" />
              </label>
              <button type="submit" className="primary-button">
                Get Started <ArrowRight size={18} />
              </button>
              <span className="form-note">We’ll respond with a tailored walkthrough within one business day.</span>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark">A</span>
              Arbor Ledger
            </a>
            <p>
              Modern financial infrastructure for teams that need clean control over capital, spend, and reporting.
            </p>
            <div className="social-links">
              <a href="/">LinkedIn</a>
              <a href="/">X</a>
              <a href="/">YouTube</a>
            </div>
          </div>

          <div>
            <h3>Product</h3>
            <a href="#features">Features</a>
            <a href="#product">Dashboard</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div>
            <h3>Company</h3>
            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">Contact</a>
          </div>

          <div>
            <h3>Legal</h3>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Security</a>
          </div>

          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Monthly notes on treasury, growth, and operational finance.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email address" aria-label="Newsletter email" />
              <button type="button" className="primary-button">
                Join
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
