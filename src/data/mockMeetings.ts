import { Meeting, MeetingTemplate } from '../types';

export const DEFAULT_TEMPLATES: MeetingTemplate[] = [
  {
    id: 'sprint-retro',
    name: 'Sprint Retrospective',
    description: 'Review the past sprint, what went well, what could be improved, and action items.',
    category: 'Engineering',
    defaultDuration: 45,
    agendaTopics: [
      'Sprint Metric Review & Velocity',
      'What went exceptionally well?',
      'Bottlenecks & What slowed us down',
      'Process experiments for next sprint'
    ],
    suggestedTags: ['Sprint', 'Retro', 'Agile', 'Engineering'],
    defaultKeyTakeaways: [
      'Delivered 88% of committed sprint story points.',
      'Deployment automation reduced release lead time by 30%.'
    ]
  },
  {
    id: 'product-sync',
    name: 'Product & Engineering Roadmap Sync',
    description: 'Align product specifications, delivery milestones, and technical trade-offs.',
    category: 'Product',
    defaultDuration: 30,
    agendaTopics: [
      'Q3 OKR Milestones & Velocity Check',
      'Feature deep dive: User Onboarding Flow',
      'Technical blockers & dependency risks'
    ],
    suggestedTags: ['Roadmap', 'Milestone', 'Product'],
    defaultKeyTakeaways: [
      'Agreed on scope freeze for v2.4 launch next Friday.'
    ]
  },
  {
    id: 'one-on-one',
    name: '1-on-1 Mentorship & Check-in',
    description: 'Bi-weekly manager and engineer feedback, career development, and blockers.',
    category: '1-on-1',
    defaultDuration: 30,
    agendaTopics: [
      'Personal energy & workload pulse check',
      'Key accomplishments since last sync',
      'Current blockers and escalation needs',
      'Career growth & skill target progress'
    ],
    suggestedTags: ['1-on-1', 'Career', 'Mentorship'],
    defaultKeyTakeaways: [
      'Targeting Q4 promotion packet submission.',
      'Cleared path on distributed cache architecture ownership.'
    ]
  },
  {
    id: 'client-kickoff',
    name: 'Client Project Kickoff & Discovery',
    description: 'Scope alignment, deliverables, success metrics, and communication channels.',
    category: 'Client',
    defaultDuration: 60,
    agendaTopics: [
      'Team introductions & stakeholder roles',
      'Project objectives & North Star metrics',
      'Architecture design & technical stack sign-off',
      'Timeline, milestones, and weekly sync cadence'
    ],
    suggestedTags: ['Client', 'Kickoff', 'Scope'],
    defaultKeyTakeaways: [
      'Client agreed to weekly Friday async summaries and bi-weekly demo calls.'
    ]
  },
  {
    id: 'executive-brief',
    name: 'Executive Leadership Briefing',
    description: 'High-level business updates, departmental metrics, and strategic approvals.',
    category: 'Leadership',
    defaultDuration: 45,
    agendaTopics: [
      'Revenue and runway overview',
      'Key hiring updates and headcount allocation',
      'Infrastructure budget expansion review'
    ],
    suggestedTags: ['Leadership', 'Strategy', 'Executive'],
    defaultKeyTakeaways: [
      'Approved additional budget allocation for cloud infrastructure scaling.'
    ]
  }
];

export const INITIAL_MEETINGS: Meeting[] = [
  {
    id: 'meet-1',
    title: 'Sprint 42 Retrospective & Next Sprint Planning',
    date: '2026-09-25',
    startTime: '10:00',
    durationMinutes: 45,
    category: 'Engineering',
    location: 'Meeting Room Aurora & Google Meet',
    meetLink: 'https://meet.google.com/xyz-abcd-qrs',
    summary: 'Team reviewed Sprint 42 accomplishments. Shipped real-time sync engine ahead of schedule. Resolved 14 customer-reported bugs. Identified flakiness in end-to-end Cypress test suites causing CI delays. Team committed to dedicated test refactoring spike in Sprint 43.',
    keyTakeaways: [
      'Sprint velocity increased by 15% following automated migration tools rollout.',
      'CI pipeline bottleneck identified: E2E tests run sequentially rather than parallelized.',
      'Dev team agreed on zero new major features in Sprint 43 until test suite stability hits 99.5%.'
    ],
    attendees: [
      { id: 'att-1', name: 'Ranjith Kumar', email: 'ranjith@acme.corp', role: 'organizer' },
      { id: 'att-2', name: 'Sarah Lin', email: 'sarah.lin@acme.corp', role: 'speaker' },
      { id: 'att-3', name: 'Marcus Vance', email: 'marcus.v@acme.corp', role: 'scribe' },
      { id: 'att-4', name: 'Elena Rostova', email: 'elena.r@acme.corp', role: 'participant' }
    ],
    decisions: [
      {
        id: 'dec-1',
        topic: 'CI/CD Pipeline',
        decision: 'Split CI matrix into parallel jobs on GitHub Actions to cut build time from 22 mins to 7 mins.',
        decidedBy: 'Marcus Vance',
        timestamp: '10:22'
      },
      {
        id: 'dec-2',
        topic: 'Sprint 43 Focus',
        decision: 'Allocate 30% of engineering bandwidth to resolving flaky E2E integration tests.',
        decidedBy: 'Ranjith Kumar',
        timestamp: '10:35'
      }
    ],
    actionItems: [
      {
        id: 'act-1',
        meetingId: 'meet-1',
        task: 'Configure GitHub Actions test sharding and matrix caching',
        assignee: 'Marcus Vance',
        dueDate: '2026-09-29',
        priority: 'high',
        completed: false
      },
      {
        id: 'act-2',
        meetingId: 'meet-1',
        task: 'Quarantine top 5 flaky Cypress test suites and create tickets',
        assignee: 'Sarah Lin',
        dueDate: '2026-09-28',
        priority: 'medium',
        completed: true
      },
      {
        id: 'act-3',
        meetingId: 'meet-1',
        task: 'Draft Sprint 43 backlog refinement board in Jira',
        assignee: 'Elena Rostova',
        dueDate: '2026-09-30',
        priority: 'low',
        completed: false
      }
    ],
    agendaTopics: [
      {
        id: 'top-1',
        title: 'Review Sprint 42 Velocity & Burndown',
        speaker: 'Ranjith Kumar',
        notes: 'Burn-down curve stayed linear until day 8. Weekend deployment went smooth without rolling restarts.',
        durationMinutes: 15
      },
      {
        id: 'top-2',
        title: 'CI Stability & Developer Velocity Discussion',
        speaker: 'Marcus Vance',
        notes: 'Average developer wait time on PR checks reached 28 minutes this week. Sharding is top priority.',
        durationMinutes: 20
      },
      {
        id: 'top-3',
        title: 'Action Item Wrap-up & Owner Assignment',
        speaker: 'All',
        notes: 'Assigned Marcus to CI, Sarah to quarantine list, Elena to backlog prep.',
        durationMinutes: 10
      }
    ],
    transcript: [
      { id: 'tr-1', speaker: 'Ranjith Kumar', timestamp: '10:02', text: 'Good morning everyone! Let us review how Sprint 42 went. The sync engine is officially in staging.' },
      { id: 'tr-2', speaker: 'Sarah Lin', timestamp: '10:05', text: 'Great work! The latency tests show sub-100ms response time globally.' },
      { id: 'tr-3', speaker: 'Marcus Vance', timestamp: '10:14', text: 'The main hurdle this week was waiting on our CI test suite. Multiple PRs had to be re-run twice due to timeout failures.' },
      { id: 'tr-4', speaker: 'Ranjith Kumar', timestamp: '10:20', text: 'Agreed. Let us commit to fixing the test pipeline in Sprint 43 as a priority item.' }
    ],
    tags: ['Engineering', 'Sprint-42', 'CI-CD', 'Retrospective'],
    updatedAt: '2026-09-25T11:00:00Z'
  },
  {
    id: 'meet-2',
    title: 'Enterprise Client Architecture Review (Apex Global)',
    date: '2026-09-26',
    startTime: '14:00',
    durationMinutes: 60,
    category: 'Client',
    location: 'Zoom Conference ID 892-120-432',
    meetLink: 'https://zoom.us/j/892120432',
    summary: 'Architecture walkthrough with the Apex Global VP of Engineering and security auditors. Reviewed multi-tenant data isolation, SOC2 compliance posture, data residency in EU/US regions, and API rate limits for their ERP integration.',
    keyTakeaways: [
      'Apex approved our single-tenant database encryption scheme with AWS KMS custom keys.',
      'Rate limit for incoming webhook endpoints agreed at 2,500 requests/sec with burst buffers.',
      'Final contract signing scheduled for next Tuesday pending legal addendum.'
    ],
    attendees: [
      { id: 'att-5', name: 'Ranjith Kumar', email: 'ranjith@acme.corp', role: 'organizer' },
      { id: 'att-6', name: 'David Croft', email: 'dcroft@apexglobal.io', role: 'speaker' },
      { id: 'att-7', name: 'Priya Patel', email: 'priya.p@acme.corp', role: 'scribe' }
    ],
    decisions: [
      {
        id: 'dec-3',
        topic: 'Data Sovereignty',
        decision: 'Deploy isolated worker pods in Frankfurt (eu-central-1) for Apex EU users.',
        decidedBy: 'Ranjith Kumar & David Croft',
        timestamp: '14:32'
      }
    ],
    actionItems: [
      {
        id: 'act-4',
        meetingId: 'meet-2',
        task: 'Send completed SOC2 Type II audit PDF and compliance sheet to Apex Security team',
        assignee: 'Priya Patel',
        dueDate: '2026-09-28',
        priority: 'urgent',
        completed: false
      },
      {
        id: 'act-5',
        meetingId: 'meet-2',
        task: 'Provision Terraform staging environment in eu-central-1 region',
        assignee: 'Ranjith Kumar',
        dueDate: '2026-10-02',
        priority: 'high',
        completed: false
      }
    ],
    agendaTopics: [
      {
        id: 'top-4',
        title: 'Security Architecture Overview',
        speaker: 'Ranjith Kumar',
        notes: 'Walked through envelope encryption, TLS 1.3 enforcement, and zero-trust perimeter network.',
        durationMinutes: 25
      },
      {
        id: 'top-5',
        title: 'EU Data Residency Requirements',
        speaker: 'David Croft',
        notes: 'Apex German banking subsidiary requires all PII to remain strictly within EU borders.',
        durationMinutes: 20
      },
      {
        id: 'top-6',
        title: 'Integration Timeline & Pilot Scope',
        speaker: 'Priya Patel',
        notes: 'Target pilot start date: October 15th with 500 internal test accounts.',
        durationMinutes: 15
      }
    ],
    tags: ['Client', 'Apex', 'Security', 'Enterprise', 'Architecture'],
    updatedAt: '2026-09-26T15:15:00Z'
  },
  {
    id: 'meet-3',
    title: 'Product Design & Mobile Experience Review',
    date: '2026-09-27',
    startTime: '09:30',
    durationMinutes: 30,
    category: 'Design',
    location: 'Design Studio Lab & Meet',
    meetLink: 'https://meet.google.com/abc-uiop-xyz',
    summary: 'Reviewed mobile navigation overhaul and quick-action menu for iOS/Android apps. Approved bottom-sheet quick summary generator and audio playback scrubbing bar.',
    keyTakeaways: [
      'Bottom navigation bar simplified to 3 primary tabs: Summaries, Action Items, and Analytics.',
      'User testing feedback showed 92% preference for instant markdown copy button in header.'
    ],
    attendees: [
      { id: 'att-8', name: 'Ranjith Kumar', email: 'ranjith@acme.corp', role: 'participant' },
      { id: 'att-9', name: 'Aaliyah Jones', email: 'aaliyah.j@acme.corp', role: 'organizer' }
    ],
    decisions: [
      {
        id: 'dec-4',
        topic: 'Mobile Navigation Pattern',
        decision: 'Adopt floating action button for "Quick Capture Meeting" with haptic feedback.',
        decidedBy: 'Aaliyah Jones',
        timestamp: '09:48'
      }
    ],
    actionItems: [
      {
        id: 'act-6',
        meetingId: 'meet-3',
        task: 'Deliver Figma tokens and icon assets to mobile engineering',
        assignee: 'Aaliyah Jones',
        dueDate: '2026-09-29',
        priority: 'medium',
        completed: false
      }
    ],
    agendaTopics: [
      {
        id: 'top-7',
        title: 'Usability Test Results Review',
        speaker: 'Aaliyah Jones',
        notes: 'Participants completed summary export in under 4 seconds on mobile browsers.',
        durationMinutes: 15
      }
    ],
    tags: ['Design', 'UX', 'Mobile', 'Figma'],
    updatedAt: '2026-09-27T10:00:00Z'
  }
];
