
import { Mood, Persona } from './types';

export const PRESET_PERSONAS: Persona[] = [
  { name: 'Sarah', role: 'Executive Recruiter', mood: 'Formal', gender: 'Female', language: 'English' },
  { name: 'David', role: 'Angel Investor', mood: 'Challenging', gender: 'Male', language: 'English' },
  { name: 'Alex', role: 'Supportive Coworker', mood: 'Friendly', gender: 'Male', language: 'English' },
  { name: 'Dr. Miller', role: 'Strict Academic Supervisor', mood: 'Strict', gender: 'Female', language: 'English' },
  { name: 'The Audience', role: 'Keynote Presentation Crowd', mood: 'Encouraging', gender: 'Female', language: 'English' },
];

export const MOODS: Mood[] = ['Formal', 'Friendly', 'Strict', 'Encouraging', 'Challenging'];

export const VOICE_MAP = {
  Male: 'Fenrir',
  Female: 'Kore',
};

export const COMMON_LANGUAGES = [
  'English',
  'Spanish',
  'French',
  'German',
  'Mandarin',
  'Japanese',
  'Korean',
  'Hindi',
  'Arabic',
  'Portuguese',
  'Russian',
  'Italian'
];
