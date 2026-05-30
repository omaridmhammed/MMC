export type Service = {
  slug: string;
  name: string;
  description: string;
  comingSoon?: boolean;
};

export const SERVICES: Service[] = [
  { slug: 'walk-in', name: 'Walk-In Clinic', description: 'Convenient care for non-emergency medical needs without an appointment.' },
  { slug: 'family-doctor', name: 'Family Doctor', description: 'Comprehensive primary care for every member of your family.' },
  { slug: 'psychotherapy', name: 'Psychotherapy', description: 'Professional mental health support to improve emotional well-being.' },
  { slug: 'addiction-counselling', name: 'Addiction Counselling', description: 'Specialized support for individuals struggling with substance use and addiction.' },
  { slug: 'mental-health-workshops', name: 'Mental Health Workshops', description: 'Educational sessions on mental health topics to empower and support our community.', comingSoon: true },
  { slug: 'iron-infusion', name: 'Iron Infusion Clinic', description: 'Safe, supervised iron infusion therapy for iron-deficiency anemia. Book a consult to learn more.' },
];
