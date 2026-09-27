import React from 'react';
import { 
  FileText, 
  Plus, 
  CheckSquare, 
  Sparkles, 
  Search,
  Calendar,
  Layers
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'meetings' | 'actions' | 'templates';
  setActiveTab: (tab: 'meetings' | 'actions' | 'templates') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onNewMeeting: () => void;
  totalMeetings: number;
  openActionItemsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onNewMeeting,
  totalMeetings,
  openActionItemsCount,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-100">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight">Meeting Summaries</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Pro
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Capture, summarize, and track action items seamlessly
              </p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-2 sm:mx-6">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search meetings, attendees, decisions, tags..."
                className="w-full pl-10 pr-4 py-1.5 text-sm bg-slate-100 hover:bg-slate-100/80 focus:bg-white border border-transparent focus:border-indigo-400 rounded-lg outline-none transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onNewMeeting}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-sm shadow-indigo-200 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Meeting</span>
            </button>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="flex items-center gap-2 border-t border-slate-100 py-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('meetings')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'meetings'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>All Meetings</span>
            <span className="px-1.5 py-0.2 rounded-full text-xs bg-slate-200 text-slate-700">
              {totalMeetings}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('actions')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'actions'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Action Items</span>
            {openActionItemsCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-xs bg-amber-100 text-amber-800 font-semibold">
                {openActionItemsCount} open
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('templates')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'templates'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Templates</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-violet-100 text-violet-700 rounded-md font-medium">
              <Sparkles className="w-3 h-3" /> Ready
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
