export type Doctor = {
  id: string;
  name: string;
  credentials?: string;
  type: 'rostering' | 'walk-in' | 'specialist' | 'non-rostering';
  locations: ('carling' | 'richmond')[];
  bio?: string;
  photo?: string;
  languages?: string[];
};

export const DOCTORS: Doctor[] = [
  // Carling - Rostering
  { id: 'dr-shegun-momodu', name: 'Dr. Shegun Momodu', type: 'rostering', locations: ['carling'] },
  { id: 'dr-ini-ife', name: 'Dr. Ini Ife', type: 'rostering', locations: ['carling'] },
  // Carling - Non-Rostering
  { id: 'dr-i-ata', name: 'Dr. I. Ata', type: 'non-rostering', locations: ['carling'] },
  // Carling - Specialist
  { id: 'dr-keiko-chan', name: 'Dr. Keiko Chan', credentials: 'Focused Practice in Gynaecology', type: 'specialist', locations: ['carling'], bio: '// TODO: pull verbatim from current site' },
  { id: 'rm-summer-oneill', name: 'RM Summer O\'Neill', credentials: 'RM', type: 'specialist', locations: ['carling'], bio: '// TODO: pull verbatim from current site' },
  // Richmond - Rostering
  { id: 'dr-sydney-chinagorom', name: 'Dr. Sydney Chinagorom', type: 'rostering', locations: ['richmond'] },
  { id: 'dr-kashif-iqbal', name: 'Dr. Kashif Iqbal', type: 'rostering', locations: ['richmond'] },
  { id: 'dr-nsikak-usoroh', name: 'Dr. Nsikak Usoroh', type: 'rostering', locations: ['richmond'] },
  { id: 'dr-alex-carrington', name: 'Dr. Alex Carrington', type: 'rostering', locations: ['richmond'] },
  // Richmond - Walk-in
  { id: 'dr-chesda-bun', name: 'Dr. Chesda Bun', type: 'walk-in', locations: ['richmond'] },
  { id: 'dr-siyong-lee', name: 'Dr. Siyong Lee', type: 'walk-in', locations: ['richmond'] },
  { id: 'dr-saha-nirob', name: 'Dr. Saha Nirob', type: 'walk-in', locations: ['richmond'] },
];
