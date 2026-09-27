import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  Trash2, 
  Users,
  Target
} from 'lucide-react';
import { Meeting } from '../types';
import { generateMarkdownSummary } from '../utils/markdown';

interface MeetingCardProps {
  meeting: Meeting;
  onSelect: (meeting: Meeting) => void;
  onDelete: (id: string, e: React.MouseEvent) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  Engineering: 'bg-blue-50 text-blue-700 border-blue-200',
  Product: 'bg-purple-50 text-purple-700 border-purple-200',
  Leadership: 'bg-amber-50 text-amber-700 border-amber-200',
  Sales: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Client: 'bg-rose-50 text-rose-700 border-rose-200',
  '1-on-1': 'bg-teal-50 text-teal-700 border-teal-200',
  Design: 'bg-pink-50 text-pink-700 border-pink-200',
  General: 'bg-slate-50 text-slate-700 border-slate-200'
};

export const MeetingCard: React.FC<MeetingCardProps> = ({
  meeting,
  onSelect,
  onDelete
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyMarkdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    const md = generateMarkdownSummary(meeting);
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalActions = meeting.actionItems ? meeting.actionItems.length : 0;
  const completedActions = meeting.actionItems
    ? meeting.actionItems.filter(a => a.completed).length
    : 0;
  const actionPct = totalActions > 0 ? Math.round((completedActions / totalActions) * 100) : 0;

  const categoryStyle = CATEGORY_COLORS[meeting.category] || CATEGORY_COLORS.General;

  return (
    <div
      onClick={() => onSelect(meeting)}
      className="group relative bg-white border border-slate-200 hover:border-indigo-400 rounded-xl p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Top meta row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${categoryStyle}`}>
            {meeting.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {meeting.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {meeting.startTime} ({meeting.durationMinutes}m)
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 mb-2">
          {meeting.title}
        </h3>

        {/* Location or meet link */}
        {meeting.location && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
            <span className="truncate">{meeting.location}</span>
            {meeting.meetLink && (
              <a
                href={meeting.meetLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-indigo-600 hover:text-indigo-800 ml-1 inline-flex items-center gap-0.5"
                title="Open meeting link"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}

        {/* Summary snippet */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {meeting.summary || 'No summary available for this meeting.'}
        </p>

        {/* Key Takeaways snippet if available */}
        {meeting.keyTakeaways && meeting.keyTakeaways.length > 0 && (
          <div className="mb-4 bg-slate-50 border border-slate-100 rounded-lg p-2.5">
            <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Target className="w-3 h-3 text-indigo-600" />
              Takeaways ({meeting.keyTakeaways.length})
            </div>
            <p className="text-xs text-slate-700 italic line-clamp-1">
              "{meeting.keyTakeaways[0]}"
            </p>
          </div>
        )}

        {/* Tags */}
        {meeting.tags && meeting.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {meeting.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                #{tag}
              </span>
            ))}
            {meeting.tags.length > 3 && (
              <span className="text-[11px] px-1.5 py-0.5 text-slate-400">
                +{meeting.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer Info & Actions */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
        {/* Attendees & Actions Progress */}
        <div className="flex items-center gap-3">
          {meeting.attendees && meeting.attendees.length > 0 && (
            <div className="flex items-center gap-1 text-slate-500 font-medium">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>{meeting.attendees.length}</span>
            </div>
          )}

          {totalActions > 0 ? (
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className={`w-3.5 h-3.5 ${completedActions === totalActions ? 'text-emerald-500' : 'text-slate-400'}`} />
              <span className="text-slate-600 font-medium">
                {completedActions}/{totalActions} tasks
              </span>
              <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    completedActions === totalActions ? 'bg-emerald-500' : 'bg-indigo-600'
                  }`}
                  style={{ width: `${actionPct}%` }}
                />
              </div>
            </div>
          ) : (
            <span className="text-slate-400">No action items</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleCopyMarkdown}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            title="Copy Markdown Summary"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={(e) => onDelete(meeting.id, e)}
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
            title="Delete Meeting"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
