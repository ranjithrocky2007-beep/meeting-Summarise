export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export interface Attendee {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: 'organizer' | 'speaker' | 'scribe' | 'participant';
}

export interface ActionItem {
  id: string;
  meetingId: string;
  task: string;
  assignee: string;
  dueDate: string;
  priority: Priority;
  completed: boolean;
}

export interface Decision {
  id: string;
  topic: string;
  decision: string;
  decidedBy: string;
  timestamp?: string;
}

export interface AgendaTopic {
  id: string;
  title: string;
  speaker?: string;
  notes: string;
  durationMinutes?: number;
}

export interface TranscriptSnippet {
  id: string;
  speaker: string;
  timestamp: string;
  text: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:MM
  durationMinutes: number;
  category: 'Engineering' | 'Product' | 'Leadership' | 'Sales' | 'Client' | '1-on-1' | 'Design' | 'General';
  location: string;
  meetLink?: string;
  summary: string;
  keyTakeaways: string[];
  attendees: Attendee[];
  decisions: Decision[];
  actionItems: ActionItem[];
  agendaTopics: AgendaTopic[];
  transcript?: TranscriptSnippet[];
  rawNotes?: string;
  tags: string[];
  updatedAt: string;
}

export interface MeetingTemplate {
  id: string;
  name: string;
  description: string;
  category: Meeting['category'];
  defaultDuration: number;
  agendaTopics: string[];
  suggestedTags: string[];
  defaultKeyTakeaways: string[];
}
