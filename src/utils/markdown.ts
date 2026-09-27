import { Meeting } from '../types';

export function generateMarkdownSummary(meeting: Meeting): string {
  const dateFormatted = new Date(meeting.date + 'T' + meeting.startTime).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let md = `# 📝 Meeting Summary: ${meeting.title}\n\n`;
  md += `**Date:** ${dateFormatted} at ${meeting.startTime} (${meeting.durationMinutes} mins)\n`;
  md += `**Category:** ${meeting.category}\n`;
  if (meeting.location) md += `**Location:** ${meeting.location}\n`;
  if (meeting.meetLink) md += `**Meeting Link:** ${meeting.meetLink}\n`;

  md += `\n## 👥 Attendees\n`;
  if (meeting.attendees && meeting.attendees.length > 0) {
    meeting.attendees.forEach(a => {
      md += `- ${a.name} (${a.role || 'Participant'}${a.email ? ` - ${a.email}` : ''})\n`;
    });
  } else {
    md += `_No attendees recorded._\n`;
  }

  md += `\n## 💡 Executive Summary\n`;
  md += `${meeting.summary || 'No summary provided.'}\n`;

  if (meeting.keyTakeaways && meeting.keyTakeaways.length > 0) {
    md += `\n## 🔑 Key Takeaways\n`;
    meeting.keyTakeaways.forEach(k => {
      md += `- ${k}\n`;
    });
  }

  if (meeting.decisions && meeting.decisions.length > 0) {
    md += `\n## 🎯 Key Decisions\n`;
    meeting.decisions.forEach(d => {
      md += `- **[${d.topic}]**: ${d.decision} _(Decided by: ${d.decidedBy}${d.timestamp ? ` @ ${d.timestamp}` : ''})_\n`;
    });
  }

  if (meeting.actionItems && meeting.actionItems.length > 0) {
    md += `\n## ✅ Action Items\n`;
    meeting.actionItems.forEach(item => {
      const check = item.completed ? '[x]' : '[ ]';
      const due = item.dueDate ? ` (Due: ${item.dueDate})` : '';
      const priority = item.priority ? ` [${item.priority.toUpperCase()}]` : '';
      md += `- ${check} **${item.assignee}**: ${item.task}${due}${priority}\n`;
    });
  }

  if (meeting.agendaTopics && meeting.agendaTopics.length > 0) {
    md += `\n## 📋 Agenda & Discussion Notes\n`;
    meeting.agendaTopics.forEach((topic, idx) => {
      md += `### ${idx + 1}. ${topic.title}${topic.speaker ? ` (Speaker: ${topic.speaker})` : ''}\n`;
      if (topic.notes) {
        md += `${topic.notes}\n\n`;
      }
    });
  }

  if (meeting.tags && meeting.tags.length > 0) {
    md += `\n---\n**Tags:** ${meeting.tags.map(t => `#${t}`).join(' ')}\n`;
  }

  return md;
}

export function generateSlackSummary(meeting: Meeting): string {
  let text = `*📝 Meeting Summary: ${meeting.title}*\n`;
  text += `📅 *${meeting.date} at ${meeting.startTime}* (${meeting.durationMinutes}m)\n`;
  text += `*Summary:* ${meeting.summary}\n\n`;

  if (meeting.keyTakeaways && meeting.keyTakeaways.length > 0) {
    text += `*Key Takeaways:*\n`;
    meeting.keyTakeaways.forEach(k => {
      text += `• ${k}\n`;
    });
    text += `\n`;
  }

  if (meeting.actionItems && meeting.actionItems.length > 0) {
    text += `*Action Items:*\n`;
    meeting.actionItems.forEach(item => {
      const emoji = item.completed ? '✅' : '⏳';
      text += `${emoji} *${item.assignee}*: ${item.task} (Due: ${item.dueDate})\n`;
    });
  }

  return text;
}
