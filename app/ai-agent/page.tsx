'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const WHATSAPP_URL =
  'https://wa.me/+94781760086?text=Hi%20BIZmaster%2C%20I%20would%20like%20a%20demo%20of%20the%20AI%20Call%20Agent.'

const heroStats = [
  { value: '100%', label: 'Answer rate' },
  { value: '24/7', label: 'Nights, weekends, holidays' },
  { value: '100+', label: 'Simultaneous calls' },
  { value: '100+', label: 'Languages incl. Sinhala & Tamil' },
]

const losses = [
  { area: 'Missed Calls', text: 'Customers call competitors' },
  { area: 'Missed Messages', text: 'WhatsApp leads go cold' },
  { area: 'After-Hours', text: '60%+ of inquiries arrive outside office hours' },
  { area: 'Peak Overflow', text: 'Customers hang up and never return' },
  { area: 'Follow-Up', text: 'Deals die in silence' },
  { area: 'Scale', text: 'Cannot grow without hiring more callers' },
]

const gains = [
  { area: '100% Answer Rate', text: 'Every call answered, every message replied' },
  { area: '24/7 Coverage', text: 'Nights, weekends, holidays' },
  { area: 'Scale', text: '100+ simultaneous calls, thousands of WhatsApp chats' },
  { area: 'Speed', text: 'Instant response, instant follow-up' },
  { area: 'Compliance', text: 'Consent, recording, and DNC enforced automatically' },
  { area: 'Revenue', text: 'More leads captured, more deals closed, more repeat sales' },
]

const faces = [
  {
    title: 'Call Center Agent',
    text: 'Answers, routes, books, escalates, records, and reports.',
    icon: 'M18 10.5V6a2 2 0 00-2-2H8a2 2 0 00-2 2v4.5M3 13.5a2.5 2.5 0 012.5-2.5H6v6h-.5A2.5 2.5 0 013 14.5v-1zm18 0a2.5 2.5 0 00-2.5-2.5H18v6h.5a2.5 2.5 0 002.5-2.5v-1zM18 17v1a3 3 0 01-3 3h-3',
  },
  {
    title: 'Sales Agent',
    text: 'Calls, qualifies, pitches, handles objections, closes, and follows up.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    title: 'Personal Call Assistant',
    text: 'Screens calls, takes messages, reminds, schedules, and filters spam.',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
]

type Module = {
  id: string
  name: string
  purpose: string
  groups: { title: string; items: string[] }[]
  values: string[]
}

const modules: Module[] = [
  {
    id: 'inbound',
    name: 'Inbound Calls',
    purpose: 'Answer every call, identify the caller, understand intent, and resolve, route, or escalate with zero wait time.',
    groups: [
      { title: 'Instant Answering', items: ['Branded greeting per business or department', 'Zero wait time, no IVR unless required', '100+ concurrent calls', 'After-hours coverage'] },
      { title: 'Caller Identification', items: ['Automatic caller ID and real-time CRM lookup', 'Past interaction history', 'VIP recognition and priority routing', 'Unknown callers: name, purpose, contact captured'] },
      { title: 'Smart Routing & FAQs', items: ['Routing by intent, skill, time, or location', 'Answers trained on your documents and catalogue', 'Pricing, availability, hours, and directions', 'Fallback to a human operator'] },
      { title: 'Booking, Tickets & Transfers', items: ['Calendar booking, rescheduling, and cancellations', 'Automatic tickets with priority and SLA tracking', 'Detailed message taking with urgency tags', 'Warm transfer with full context summary'] },
    ],
    values: ['Zero missed calls, even at 3 AM', 'Same professional greeting every time', 'Every call transcribed and searchable', 'Serve customers in their language'],
  },
  {
    id: 'outbound',
    name: 'Outbound Calls',
    purpose: 'Make calls at scale for sales, reminders, follow-ups, surveys, notifications, verification, and promotions.',
    groups: [
      { title: 'Sales & Promotion Calls', items: ['Auto-dial from CRM, Excel, or lead lists', 'Natural, human-like voice in multiple languages', 'Objection handling and offer presentation', 'Payment links via SMS, WhatsApp, or email'] },
      { title: 'Reminder & Notification Calls', items: ['Appointment, payment, and renewal reminders', 'Delivery and event notifications', 'Verification calls', 'Survey and feedback calls'] },
      { title: 'Follow-Up Sequences', items: ['Cadence: day 1, 3, 7, and 14', 'Personalized to the previous conversation', 'Stop-on-reply logic', 'Win-back campaigns for lost customers'] },
      { title: 'Outcome Tracking', items: ['Every outcome tagged and logged', 'Automatic CRM and pipeline updates', 'Retry scheduling for unanswered calls', 'DNC scrubbing before dialing'] },
    ],
    values: ['1,000+ calls per day without hiring', 'Every call follows a best-practice script', 'Instant follow-up within seconds', 'DNC and consent rules enforced automatically'],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp AI',
    purpose: 'Turn WhatsApp into a 24/7 sales and service channel that never misses a message.',
    groups: [
      { title: 'Auto-Reply Messaging', items: ['Instant reply to every inbound message', 'Context-aware responses with conversation memory', 'Multi-language support', 'Fallback to a human agent'] },
      { title: 'Message Types', items: ['Text, images, video, and documents', 'Voice notes, transcribed and answered', 'Location sharing and contact cards', 'Interactive buttons and lists'] },
      { title: 'Conversational Commerce', items: ['Order placement and order status', 'Product info, price, and availability', 'Appointment booking and complaints', 'Payment link delivery'] },
      { title: 'Broadcast Campaigns', items: ['Segmented, personalized offers', 'Abandoned cart recovery', 'Festival, seasonal, and launch campaigns', 'Opt-in, opt-out, and Meta quality protection'] },
    ],
    values: ['Meet customers where they already are', 'Sell without human intervention', 'Recover abandoned carts automatically', 'Thousands of simultaneous conversations'],
  },
  {
    id: 'whatsapp-voice',
    name: 'WhatsApp Voice',
    purpose: "Extend the AI Call Agent into WhatsApp's voice channel, the fastest-growing business communication channel.",
    groups: [
      { title: 'Inbound Voice Calls', items: ['Instant answer with branded greeting', 'Caller identification and CRM lookup', 'Full conversational AI capability', 'Escalation to a human when needed'] },
      { title: 'Outbound Voice Calls', items: ['Outbound calling from WhatsApp Business', 'Human-like voice conversation', 'Script adherence and objection handling', 'Call outcome tagging'] },
      { title: 'Recording & Transcription', items: ['Consent-based recording', 'Real-time transcription', 'AI-generated call summaries', 'Searchable archive'] },
      { title: 'Voice Order Capture', items: ['Spoken orders turned into structured data', 'Confirmation read-back', 'Automatic CRM and order system update', 'Callback scheduling'] },
    ],
    values: ['Voice + messaging on one WhatsApp number', 'No phone number needed to call', 'Lower cost than traditional telephony', 'Consent-based recording built in'],
  },
  {
    id: 'follow-ups',
    name: 'Follow-Ups',
    purpose: 'Every call and message that needs a follow-up gets one, automatically.',
    groups: [
      { title: 'Call Follow-Ups', items: ['Automatic multi-attempt follow-up', 'Personalized to previous conversations', 'Re-engagement of dormant leads', 'Every attempt logged'] },
      { title: 'Message Follow-Ups', items: ['WhatsApp, SMS, email, and call', 'Personalized by history', 'Stop-on-reply logic', 'Escalation if no response'] },
      { title: 'Cross-Channel', items: ['Start on WhatsApp, follow up by call', 'Start on a call, follow up on WhatsApp', 'One unified conversation thread', 'Full history visible to your team'] },
      { title: 'Cadence Rules', items: ['Configurable by industry and deal stage', 'Time-zone and business-hours aware', 'Weekend and holiday aware', 'Frequency caps to avoid spamming'] },
    ],
    values: ['Every lead followed up until resolution', 'Best-practice cadence enforced', 'Complete follow-up history', 'Higher conversion from existing leads'],
  },
  {
    id: 'reminders',
    name: 'Reminders & Scheduling',
    purpose: 'Every appointment, payment, renewal, and commitment is reminded, automatically and on time.',
    groups: [
      { title: 'Reminder Types', items: ['Appointments and meetings', 'Payments, bills, and renewals', 'Treatment and service-due reminders', 'Birthdays, anniversaries, and deadlines'] },
      { title: 'Delivery Methods', items: ['Outbound call', 'WhatsApp, SMS, or email', 'Multi-channel cascade', 'Voice + message combined'] },
      { title: 'Scheduling', items: ['Google and Microsoft calendar integration', 'Recurring and one-time reminders', 'Time-zone and business-hours aware', 'Escalation on non-response'] },
      { title: 'Confirmation Handling', items: ['Yes/No response capture', 'Rescheduling and cancellations', 'No-show follow-up', 'Automatic rebooking'] },
    ],
    values: ['Fewer no-shows', 'Fewer late payments', 'Proactive service builds loyalty', 'No manual reminder effort'],
  },
  {
    id: 'filtering',
    name: 'Call Filtering',
    purpose: 'Block unwanted calls while making sure genuine customers always get through.',
    groups: [
      { title: 'Inbound Filtering', items: ['Known customers prioritized', 'Unknown callers screened for name and purpose', 'Blocklists and allowlists', 'Caller reputation scoring'] },
      { title: 'Spam Blocking', items: ['Real-time spam and robocall detection', 'Telemarketer identification', 'Automatic blocklist updates', 'False-positive review queue'] },
      { title: 'Executive Screening', items: ['"Who\'s calling and what about?"', 'VIP caller priority', 'Emergency escalation bypass', 'Callbacks for non-urgent calls'] },
      { title: 'Outbound Filtering', items: ['DNC scrubbing before dialing', 'Consent verification', 'Time-zone compliance', 'Frequency caps'] },
    ],
    values: ['Staff not interrupted by spam', 'Genuine customers always get through', 'Defence against fraud and phishing calls', 'More focused, productive hours'],
  },
  {
    id: 'segmentation',
    name: 'Customer Segmentation',
    purpose: 'Know who your customers are, and treat each segment appropriately, automatically.',
    groups: [
      { title: 'Segment By', items: ['Value and loyalty tier', 'Geography and language', 'Product interest and purchase history', 'Engagement level and churn risk'] },
      { title: 'Dynamic Rules', items: ['Filter calls and messages by segment', 'Filter outbound campaigns by segment', 'Priority routing by segment', 'VIP vs standard handling'] },
      { title: 'Customer Profiling', items: ['Automatic enrichment from every interaction', 'Conversation and purchase history', 'Sentiment trend', 'Lifetime value and churn risk score'] },
      { title: 'Automated Actions', items: ['VIPs: priority routing and special greeting', 'High-value prospects: senior reps', 'Churn risk: retention offers', 'New customers: onboarding sequence'] },
    ],
    values: ['Every segment treated appropriately', 'Higher conversion on high-value segments', 'Churn risk detected early', 'Right customer, right agent'],
  },
  {
    id: 'recording',
    name: 'Recording & Compliance',
    purpose: 'Capture every call legally, securely, and usefully.',
    groups: [
      { title: 'Recording', items: ['Consent announced at call start', 'Configurable per department and region', 'AES-256 at rest, TLS 1.2/1.3 in transit', 'Retention and automatic deletion by policy'] },
      { title: 'Transcription', items: ['Real-time speech-to-text', 'Multi-language, speaker separation', 'Timestamps and confidence scoring', 'Searchable archive'] },
      { title: 'AI Analysis', items: ['Call summaries', 'Sentiment and topic classification', 'Keyword and outcome tagging', 'Quality scoring for QA'] },
      { title: 'Compliance', items: ['Consent capture and storage', 'Audit trail of every access', 'GDPR/CCPA-ready data controls', 'Region-specific data residency'] },
    ],
    values: ['Consent and retention enforced', 'Search, review, and improve quality', 'Real examples for team training', 'Verifiable record for disputes'],
  },
  {
    id: 'promotions',
    name: 'Promotions & Campaigns',
    purpose: 'Turn every call and message into a chance to promote your business, politely and within the rules.',
    groups: [
      { title: 'Campaign Channels', items: ['Outbound promotion calls', 'WhatsApp broadcasts', 'SMS and email campaigns', 'Coordinated multi-channel campaigns'] },
      { title: 'Offer Management', items: ['Discount rules and promo codes', 'Time-limited offers', 'Loyalty rewards and referrals', 'Upsell and cross-sell offers'] },
      { title: 'Targeting & Execution', items: ['Segment, history, and behavior targeting', 'Scheduled and trigger-based campaigns', 'A/B testing', 'Opt-out handling and frequency caps'] },
      { title: 'Analytics', items: ['Sent, delivered, opened, responded', 'Conversion and revenue attributed', 'ROI per campaign', 'Best time and best channel insights'] },
    ],
    values: ['Incremental sales from existing customers', 'Dormant customers re-engaged', 'Rewards and referral programs', 'Automated execution at scale'],
  },
  {
    id: 'sales',
    name: 'AI Sales Agent',
    purpose: 'Use the AI Call Agent as a full sales agent, from cold outreach to closed deal.',
    groups: [
      { title: 'Lead Qualification', items: ['BANT questioning: Budget, Authority, Need, Timeline', 'Lead scoring: hot, warm, cold', 'Qualification summary to your sales manager', 'Duplicate detection and merge'] },
      { title: 'Pitch Delivery', items: ['Product knowledge from your catalogue', 'Personalized pitch by segment and industry', 'Objection handling with trained rebuttals', 'Competitor differentiation'] },
      { title: 'Quotation & Closing', items: ['Dynamic quotations with discount and tax', 'Payment gateway integration', 'Payment links and receipt confirmation', 'Follow-up cadence until close'] },
      { title: 'Pipeline Management', items: ['Every call and message logged', 'Automatic pipeline stage movement', 'Tasks created for your reps', 'Dashboards and forecast support'] },
    ],
    values: ['1,000+ calls per day without hiring', 'Consistent best-practice pitch', '24/7/365 operation', 'Every interaction logged and analyzable'],
  },
  {
    id: 'call-center',
    name: 'AI Call Center',
    purpose: 'Run a complete call center on the AI Call Agent, even without a traditional call center.',
    groups: [
      { title: 'Queue Management', items: ['Queues by department, language, and skill', 'VIP priority queues', 'Overflow and after-hours queues', 'Queue status announcements'] },
      { title: 'Natural Language IVR', items: ['No keypad needed', 'Dynamic IVR by intent', 'Skip IVR for known callers', 'Multi-language IVR'] },
      { title: 'Workforce & Quality', items: ['Real-time and historical dashboards', 'Volume forecasting and SLA monitoring', 'Automatic call scoring', 'Coaching recommendations'] },
      { title: 'Multi-Site & White-Label', items: ['Multiple locations and brands', 'White-label for BPOs', 'Tenant isolation', 'Central administration'] },
    ],
    values: ['Tier 1 support fully automated', 'Handle peaks without hiring', 'No shift gaps', 'Full visibility into operations'],
  },
  {
    id: 'personal',
    name: 'Personal Call Assistant',
    purpose: 'A chief-of-staff for executives, founders, and professionals: screening calls, taking messages, making calls, and managing follow-ups.',
    groups: [
      { title: 'Call Screening & Messages', items: ['Secretary-style screening', 'VIP recognition and priority', 'Silent rejection of spam', 'Messages delivered to your preferred channel'] },
      { title: 'Calls on Your Behalf', items: ['Follow-up and booking calls', 'Reminder and confirmation calls', 'Callback scheduling', 'Approval-based actions'] },
      { title: 'Calendar Management', items: ['Scheduling and rescheduling', 'Invites and conflict avoidance', 'Time zone handling', 'Meeting agendas and travel time'] },
      { title: 'Just Ask', items: ['"Call this lead"', '"Answer my calls"', '"Send the catalogue and take the order"', '"Remind me, email him, book the meeting"'] },
    ],
    values: ['Save 10–20 hours per week', 'Never miss a reminder or follow-up', 'A fraction of a human assistant’s cost', 'Your data stays yours'],
  },
]

const bizMasterCapabilities = [
  { title: '24/7 Coverage', text: 'Answers every chat, call, and voice note while you sleep.' },
  { title: '100+ Languages', text: 'English, Sinhala, Tamil, Arabic, and many more, in chat and voice.' },
  { title: 'Sub-200ms Voice Latency', text: 'Natural AI voice replies with no queue, no voicemail, no lost deal.' },
  { title: 'Conversation Memory', text: 'Remembers prior chats and calls, so every session picks up where it left off.' },
  { title: 'Official Meta API', text: 'Built on the official WhatsApp Business Platform (Cloud API). Your number stays safe.' },
  { title: 'No-Code Setup', text: 'Connect WhatsApp, upload your knowledge base, and go live in minutes.' },
]

const bizMasterFeatures = [
  'Lead scoring from conversation signals',
  'Automated multi-step lead follow-ups',
  'Meta-approved template campaigns',
  'Multiple WhatsApp numbers, one dashboard',
  'Knowledge base per phone number',
  'Full searchable message history',
  'Usage analytics per phone',
  'SIP PBX and desk phone integration',
  'Live handoff to your team mid-call',
  'Voice note understanding',
  'CRM sync for captured leads',
  'Instant updates with zero downtime',
]

const messagePlans = [
  { name: 'Free Trial', price: 'Rs. 0', period: '2 weeks', chats: 'Up to 100', features: ['AI-powered chat responses', 'Starter knowledge base', 'WhatsApp Business connect'] },
  { name: 'Basic', price: 'Rs. 8,000', period: 'month', chats: 'Up to 2,000', features: ['AI-powered chat responses', 'Knowledge base integration', 'Lead capture & scoring', 'Analytics dashboard'] },
  { name: 'Plus', price: 'Rs. 20,000', period: 'month', chats: 'Up to 4,000', features: ['Everything in Basic'], popular: true },
  { name: 'Pro', price: 'Rs. 40,000', period: 'month', chats: 'Up to 8,000', features: ['Everything in Basic'] },
]

const voicePlans = [
  { name: 'Basic Voice', price: 'Rs. 25,000', period: 'month', chats: '2,000 chats', minutes: '500 call minutes', features: ['AI voice & chat responses', 'Knowledge base integration', 'Lead capture & scoring'] },
  { name: 'Plus Voice', price: 'Rs. 45,000', period: 'month', chats: '4,000 chats', minutes: '1,000 call minutes', features: ['Everything in Basic Voice'], popular: true },
  { name: 'Pro Voice', price: 'Rs. 100,000', period: 'month', chats: '8,000 chats', minutes: '2,000 call minutes', features: ['Everything in Basic Voice'] },
]

const escalationTriggers = [
  'High-value deals above your threshold',
  'Negative sentiment detected',
  'Keywords like "manager", "cancel", "legal", "urgent"',
  'Repeated failure to resolve',
  'Customer asks for a human',
  'Sensitive medical, legal, or financial topics',
]

const handoffTypes = [
  { title: 'Live Transfer', text: 'Warm handoff with a context summary.' },
  { title: 'Warm Transfer', text: 'AI stays on the line during the transition.' },
  { title: 'Callback Scheduling', text: 'A human calls back at an agreed time.' },
  { title: 'Ticket Escalation', text: 'Routed to a priority queue.' },
  { title: 'Supervisor Override', text: 'A senior team member takes over.' },
  { title: 'Approval-Based Actions', text: 'A human approves before the AI proceeds.' },
]

const integrations = [
  { type: 'Telephony', systems: 'SIP trunks, DID, toll-free & local numbers' },
  { type: 'WhatsApp', systems: 'Business API, WhatsApp Voice (Cloud API)' },
  { type: 'CRM', systems: 'Salesforce, HubSpot, Zoho CRM, custom' },
  { type: 'ERP', systems: 'SAP, Oracle, Dynamics, Odoo, custom' },
  { type: 'Calendar', systems: 'Google Calendar, Microsoft 365' },
  { type: 'Email', systems: 'Gmail, Outlook, SMTP/IMAP' },
  { type: 'Accounting', systems: 'QuickBooks, Xero, Tally, Zoho Books' },
  { type: 'Payments', systems: 'Stripe, PayPal, local providers' },
  { type: 'E-commerce', systems: 'Shopify, WooCommerce, Magento' },
  { type: 'Logistics', systems: 'Major couriers, 3PL providers' },
  { type: 'HR', systems: 'BambooHR, Workday, custom' },
  { type: 'Websites & Apps', systems: 'Web chat, Flutter, React Native, iOS/Android' },
]

const securityControls = [
  { title: 'Encryption in Transit', text: 'TLS 1.2 / 1.3' },
  { title: 'Encryption at Rest', text: 'AES-256 via AWS KMS' },
  { title: 'Tenant Isolation', text: 'Your data logically isolated' },
  { title: 'Access Control', text: 'Role-based, MFA, least privilege' },
  { title: 'Audit Logging', text: 'Every access fully logged' },
  { title: 'No AI Training', text: 'Your data never trains public models' },
  { title: 'Data Residency', text: 'Choose your preferred region' },
  { title: 'Enterprise Deployment', text: 'Dedicated VPC, private link, or on-prem' },
]

const tiers = [
  { name: 'Starter', target: 'SMEs & solo professionals', includes: 'Inbound calls + WhatsApp auto-reply, basic CRM, 1 number' },
  { name: 'Growth', target: 'Growing SMEs', includes: 'Outbound, follow-ups, reminders, recording, and campaigns' },
  { name: 'Professional', target: 'Multi-team businesses', includes: 'Call center features, skill routing, QA, and analytics' },
  { name: 'Enterprise', target: 'Large organizations', includes: 'Multi-tenant, custom integrations, dedicated VPC, SLA' },
  { name: 'White-Label', target: 'BPOs, resellers & agencies', includes: 'The full platform under your brand' },
]

const industries = [
  { name: 'Clinics & Hospitals', uses: ['Appointment booking', 'Patient inquiries', 'Treatment follow-up'] },
  { name: 'Hotels', uses: ['Reservations', 'Room service & concierge', 'Post-stay follow-up'] },
  { name: 'Restaurants', uses: ['Table reservations', 'Order taking', 'Promotion broadcasts'] },
  { name: 'Real Estate', uses: ['Instant inquiry response', 'Site visit booking', 'Foreign buyer support'] },
  { name: 'Education', uses: ['Student lead qualification', 'Admission follow-up', 'Fee reminders'] },
  { name: 'Insurance', uses: ['Policy renewals', 'Lead qualification', 'Claim follow-up'] },
  { name: 'Retail & E-commerce', uses: ['Order status', 'Cart recovery', 'Loyalty programs'] },
  { name: 'Service Companies', uses: ['Job booking', 'Technician dispatch', 'Service reminders'] },
  { name: 'Support Teams', uses: ['Tier 1 automation', 'Ticket deflection', 'CSAT surveys'] },
  { name: 'BPOs', uses: ['White-label resale', 'Overflow & after-hours', 'Multilingual expansion'] },
  { name: 'Institutions', uses: ['Admission inquiries', 'Event registration', 'Parent communication'] },
  { name: 'Executives', uses: ['Call screening', 'Message taking', 'Personal scheduling'] },
]

const commitments = [
  'AI disclosure: the agent never pretends to be human',
  'Consent required for every call recording',
  'Humans approve payments, contracts, and sensitive actions',
  'DNC lists and opt-out requests always respected',
  'No regulated legal, medical, or financial advice without licensed partners',
  'You control data access, retention, and deletion',
]

function CheckIcon({ small = false }: { small?: boolean }) {
  return (
    <span className={`${small ? 'w-5 h-5' : 'w-6 h-6'} bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
      <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
  )
}

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#5D0E8B' }}>
        {title}
      </h2>
      {text && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{text}</p>}
    </div>
  )
}

export default function AIAgentPage() {
  const [activeModule, setActiveModule] = useState(modules[0].id)
  const current = modules.find((m) => m.id === activeModule) ?? modules[0]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              BizMaster Tech Hub Division
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: '#5D0E8B' }}>
              BizMaster AI Agent
            </h1>
            <p className="text-2xl lg:text-3xl font-semibold text-foreground leading-snug mb-6">
              One AI Call Agent. Every call. Every message. Every follow-up.
            </p>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">
              A single platform that answers calls, makes calls, replies on WhatsApp, follows up, reminds, filters, records, and sells, 24/7 and in your customers&apos; language. AI handles the repetitive calls and messages. Your team handles the relationships, negotiations, and exceptions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                Book a Demo
              </Link>
              <a href="#pricing" className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Pricing
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {heroStats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-background border border-primary/15">
                <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Why AI Call Agent"
            title="Every Missed Call Is a Lost Customer"
            text="Most businesses don't lose money because they are bad at their job. They lose it because they miss calls, miss messages, and miss follow-ups."
          />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-background border border-primary/15 rounded-2xl p-7">
              <h3 className="text-2xl font-bold text-foreground mb-5">Without Call Automation</h3>
              <div className="space-y-4">
                {losses.map((row) => (
                  <div key={row.area} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-muted-foreground/15 text-muted-foreground flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                      ×
                    </span>
                    <p className="text-foreground">
                      <span className="font-semibold">{row.area}:</span> <span className="text-muted-foreground">{row.text}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background border border-primary/30 rounded-2xl p-7 shadow-lg shadow-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-5">With BizMaster AI Agent</h3>
              <div className="space-y-4">
                {gains.map((row) => (
                  <div key={row.area} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-foreground">
                      <span className="font-semibold">{row.area}:</span> <span className="text-muted-foreground">{row.text}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three faces */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="One Platform. Three Roles." text="Switch seamlessly between the roles your business needs, all sharing one brain, one CRM, and one admin console." />
          <div className="grid md:grid-cols-3 gap-6">
            {faces.map((face) => (
              <div key={face.title} className="group p-8 bg-background border border-primary/15 hover:border-primary/40 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <svg className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={face.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{face.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{face.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="13 Core Modules" title="Everything Your Phones and WhatsApp Need" text="Pick a module to see what it does." />

          <div className="flex gap-2 overflow-x-auto pb-3 mb-8 [scrollbar-width:thin] lg:flex-wrap lg:justify-center lg:overflow-visible">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-300 ${
                  m.id === current.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-primary/20 hover:border-primary/50'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          <div className="bg-background border border-primary/20 rounded-3xl p-7 lg:p-10">
            <h3 className="text-3xl font-bold text-foreground mb-3">{current.name}</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">{current.purpose}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {current.groups.map((group) => (
                <div key={group.title} className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <h4 className="font-bold text-foreground mb-3">{group.title}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-background border border-primary/20">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">The Value</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {current.values.map((value) => (
                  <div key={value} className="flex items-start gap-3">
                    <CheckIcon small />
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent BIZ MASTER */}
      <section id="agent-biz-master" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="No-Code WhatsApp AI"
            title="Agent BIZ MASTER"
            text="Connect AI to your WhatsApp Business number. It handles conversations, live voice calls, and lead follow-ups around the clock. No setup fees, no hidden charges, no credit card required. Live in under 5 minutes."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {bizMasterCapabilities.map((cap) => (
              <div key={cap.title} className="p-6 bg-background border border-primary/15 rounded-2xl">
                <h3 className="text-lg font-bold text-foreground mb-2">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-background border border-primary/15 rounded-2xl p-7">
            <h3 className="text-2xl font-bold text-foreground mb-5">Business Features</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bizMasterFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <CheckIcon />
                  <p className="text-sm font-medium text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Agent BIZ MASTER Pricing (LKR)" title="Simple Monthly Plans" text="Start free for two weeks. Upgrade as your chat volume and voice minutes grow." />

          <h3 className="text-2xl font-bold text-foreground mb-6">WhatsApp Chat AI</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {messagePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-7 rounded-2xl border ${plan.popular ? 'border-primary shadow-xl shadow-primary/15' : 'border-primary/15'} bg-background`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-7 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Popular</span>
                )}
                <p className="font-bold text-foreground mb-3">{plan.name}</p>
                <p className="text-3xl font-bold text-primary">{plan.price}</p>
                <p className="text-sm text-muted-foreground mb-4">per {plan.period}</p>
                <p className="text-sm font-semibold text-foreground mb-4">{plan.chats} AI-managed chats</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckIcon small />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-auto text-center bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-5 py-3 rounded-xl font-semibold transition-colors duration-300">
                  {plan.price === 'Rs. 0' ? 'Start Free Trial' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-6">WhatsApp Voice AI</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {voicePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-7 rounded-2xl border ${plan.popular ? 'border-primary shadow-xl shadow-primary/15' : 'border-primary/15'} bg-background`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-7 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Popular</span>
                )}
                <p className="font-bold text-foreground mb-3">{plan.name}</p>
                <p className="text-3xl font-bold text-primary">{plan.price}</p>
                <p className="text-sm text-muted-foreground mb-4">per {plan.period}</p>
                <p className="text-sm font-semibold text-foreground">{plan.chats}</p>
                <p className="text-sm font-semibold text-foreground mb-4">{plan.minutes}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckIcon small />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-auto text-center bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-5 py-3 rounded-xl font-semibold transition-colors duration-300">
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-8 max-w-4xl">
            Agent BIZ MASTER runs on the official WhatsApp Business Platform, so messaging follows Meta&apos;s policies: we only message customers who opted in, use approved templates outside the 24-hour service window, and honor opt-outs. WhatsApp Business Calling is available where Meta supports it.
          </p>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-2">Full AI Call Agent Packages</h3>
            <p className="text-muted-foreground mb-6">For phone lines, call centers, and larger teams. Priced by seats, usage, and integrations. Contact us for a quote.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tiers.map((tier) => (
                <div key={tier.name} className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="font-bold text-foreground">{tier.name}</p>
                  <p className="text-xs font-semibold text-primary mb-3">{tier.target}</p>
                  <p className="text-sm text-muted-foreground">{tier.includes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Human handoff */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Human Handoff" title="Humans Stay in Control" text="When a conversation needs a person, the AI hands over with the full transcript, customer history, sentiment, and a recommended next step." />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-background border border-primary/15 rounded-2xl p-7">
              <h3 className="text-2xl font-bold text-foreground mb-5">When It Escalates</h3>
              <div className="space-y-3">
                {escalationTriggers.map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <CheckIcon small />
                    <p className="text-sm text-foreground">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background border border-primary/15 rounded-2xl p-7">
              <h3 className="text-2xl font-bold text-foreground mb-5">How It Hands Over</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {handoffTypes.map((h) => (
                  <div key={h.title} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="font-semibold text-foreground text-sm mb-1">{h.title}</p>
                    <p className="text-sm text-muted-foreground">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Integrations" title="Works With the Systems You Already Use" text="Your website and apps stay where customers find you. The AI makes them faster, smarter, and more personal." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrations.map((i) => (
              <div key={i.type} className="p-5 rounded-2xl bg-background border border-primary/15 hover:border-primary/40 transition-colors duration-300">
                <p className="font-bold text-foreground mb-1">{i.type}</p>
                <p className="text-sm text-muted-foreground">{i.systems}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Security & Data Protection"
            title="Your Data Stays Yours"
            text="Hosted on AWS with encryption everywhere. Our staff can't access your data unless you authorise support. We never sell, share, or use your data to train public AI models, and we can sign an NDA and DPA."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {securityControls.map((c) => (
              <div key={c.title} className="p-5 rounded-2xl bg-background border border-primary/15">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="font-bold text-foreground mb-1">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-background border border-primary/15 rounded-2xl p-7">
            <h3 className="text-2xl font-bold text-foreground mb-5">Our Responsible AI Commitments</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {commitments.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <CheckIcon small />
                  <p className="text-sm text-foreground">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Use Cases" title="Built for Every Business That Lives on the Phone" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <div key={ind.name} className="group p-6 rounded-2xl bg-background border border-primary/15 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{ind.name}</h3>
                <ul className="space-y-1.5">
                  {ind.uses.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Every Call Answered. Every Message Replied.</h2>
          <p className="text-xl text-muted-foreground mb-8">See the AI Call Agent handle your real calls and WhatsApp chats in a live demo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
              Book a Free Demo
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 border border-primary/30 text-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
