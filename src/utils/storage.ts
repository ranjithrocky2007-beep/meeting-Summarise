import { Meeting } from '../types';
import { INITIAL_MEETINGS } from '../data/mockMeetings';

const STORAGE_KEY = 'meeting_summaries_data_v1';

export function loadMeetings(): Meeting[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MEETINGS));
      return INITIAL_MEETINGS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_MEETINGS;
  } catch (e) {
    console.warn('Failed to load meetings from localStorage', e);
    return INITIAL_MEETINGS;
  }
}

export function saveMeetings(meetings: Meeting[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(meetings));
  } catch (e) {
    console.error('Failed to save meetings to localStorage', e);
  }
}
