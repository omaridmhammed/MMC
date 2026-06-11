import { NextRequest, NextResponse } from 'next/server';
import { LOCATIONS } from '@/content/locations';
import { SERVICES } from '@/content/services';
import { DOCTORS } from '@/content/doctors';
import { LINKS } from '@/content/links';

// Compile a comprehensive local knowledge base for the AI
const SYSTEM_INSTRUCTION = `You are a helpful, professional, and empathetic AI front-desk assistant for My Medical Centers (MMC), a premium medical clinic network in Ottawa with locations on Carling Avenue and Richmond Road.

Your goal is to assist patients and website visitors with administrative questions, using ONLY the official clinic information provided below. Do not make up facts.

--- CLINIC INFORMATION ---

1. CLINIC LOCATIONS:
${JSON.stringify(LOCATIONS, null, 2)}

2. SERVICES OFFERED:
${JSON.stringify(SERVICES, null, 2)}

3. PHYSICIANS & SPECIALISTS (Rostering status, locations, types):
${JSON.stringify(DOCTORS, null, 2)}

4. DIRECT LINKS & CONTACT INFO:
${JSON.stringify(LINKS, null, 2)}

--- RESPONSE GUIDELINES ---
- Be polite, warm, clear, and professional.
- Refer to website sections where appropriate (e.g., "visit our booking page at /book" or "go to our services section").
- For new patient registration, direct them to the New Patient Registration link: ${LINKS.oceanRegistration}.
- For doctor bookings or specialist referrals, direct them to /book or the booking link: ${LINKS.oceanBooking}.
- If you don't know the answer or if it's not in the clinic information above, politely explain that you don't have that detail and suggest calling the clinic at ${LINKS.carlingPhone} or emailing admin@mymedicalcenters.ca.

--- CRITICAL SAFETY RULES ---
- You are an administrative assistant, NOT a medical professional. You CANNOT diagnose symptoms, recommend treatments, or give medical advice.
- If the user describes ANY medical symptoms (e.g., chest pain, shortness of breath, bleeding, pain, fever, sudden weakness) or asks for medical help, you MUST immediately respond with this safety disclaimer as the very first sentence:
"If you are experiencing a medical emergency, please call 911 or go to the nearest emergency room immediately. I am an AI assistant and cannot provide medical advice, evaluate symptoms, or diagnose conditions."
After that disclaimer, guide them to contact the clinic by phone to book an appointment with a doctor.
`;

// Simple rule-based chatbot fallback for local testing when no API key is present
function getLocalFallbackResponse(messages: { role: string; content: string }[]): string {
  const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';

  // 1. Emergency check
  if (
    lastMessage.includes('pain') ||
    lastMessage.includes('chest') ||
    lastMessage.includes('breath') ||
    lastMessage.includes('bleed') ||
    lastMessage.includes('hurt') ||
    lastMessage.includes('sick') ||
    lastMessage.includes('emergency') ||
    lastMessage.includes('fever') ||
    lastMessage.includes('symptom') ||
    lastMessage.includes('headache')
  ) {
    return 'If you are experiencing a medical emergency, please call 911 or go to the nearest emergency room immediately. I am an AI assistant and cannot provide medical advice, evaluate symptoms, or diagnose conditions. For non-urgent matters, you can book an appointment with our family doctors or walk in during our normal clinic hours.';
  }

  // 2. Booking / Referral
  if (
    lastMessage.includes('book') ||
    lastMessage.includes('appointment') ||
    lastMessage.includes('schedule') ||
    lastMessage.includes('refer') ||
    lastMessage.includes('see a doctor')
  ) {
    return `You can book an appointment online or request a referral. Visit our Booking page on the website at /book, or register directly if you are a new patient. For referrals, your specialist can refer you using our referral link: ${LINKS.oceanReferral}.`;
  }

  // 3. Locations
  if (
    lastMessage.includes('location') ||
    lastMessage.includes('address') ||
    lastMessage.includes('where') ||
    lastMessage.includes('carling') ||
    lastMessage.includes('richmond') ||
    lastMessage.includes('find you')
  ) {
    return `We have two convenient locations in Ottawa:\n\n1. **Carling Clinic**: 1081 Carling Avenue, Unit 507, Ottawa, ON. (Phone: ${LOCATIONS[0].phone})\n2. **Richmond Clinic**: 190 Richmond Rd (inside Superstore, second level), Ottawa, ON. (Phone: ${LOCATIONS[1].phone})\n\nBoth locations are open to serve you. You can get driving directions on Google Maps directly from our Locations page!`;
  }

  // 4. Hours
  if (
    lastMessage.includes('hour') ||
    lastMessage.includes('open') ||
    lastMessage.includes('when') ||
    lastMessage.includes('saturday') ||
    lastMessage.includes('sunday') ||
    lastMessage.includes('time')
  ) {
    return 'Our clinics are open Monday to Saturday. Walk-ins are welcome during regular clinic hours. Please note that hours may vary slightly between our Carling and Richmond locations. You can check the current live opening status at the top of our homepage, or visit the Locations page for detailed operating hours.';
  }

  // 5. Accepting new patients / Registration
  if (
    lastMessage.includes('register') ||
    lastMessage.includes('new patient') ||
    lastMessage.includes('accepting') ||
    lastMessage.includes('roster') ||
    lastMessage.includes('family doctor') ||
    lastMessage.includes('family physician')
  ) {
    const doctorsList = DOCTORS.filter(d => d.type === 'rostering').map(d => d.name).join(', ');
    return `Yes! We are currently accepting new patients. Our rostering family physicians include: ${doctorsList}.\n\nYou can submit a registration request online by clicking "New patient registration" on our homepage or using the Ocean Registration Link: ${LINKS.oceanRegistration}.`;
  }

  // 6. Services
  if (
    lastMessage.includes('service') ||
    lastMessage.includes('walk-in') ||
    lastMessage.includes('offer') ||
    lastMessage.includes('psychotherapy') ||
    lastMessage.includes('therapy') ||
    lastMessage.includes('counselling') ||
    lastMessage.includes('iron') ||
    lastMessage.includes('infusion')
  ) {
    const servicesList = SERVICES.map(s => `• **${s.name}**: ${s.description}`).join('\n');
    return `We offer a wide range of services under one roof:\n\n${servicesList}\n\nLearn more on our Services page!`;
  }

  // Default welcome response
  return `Hello! I'm the MMC Virtual Assistant. I can help answer questions about our clinic locations, services, hours, list of doctors, and how to register as a new patient. What can I help you with today?\n\n*(Note: I am currently running in offline preview mode as GEMINI_API_KEY is not configured in the environment. Set it in .env.local to activate the live AI).*`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Fall back to local rules-based engine if no API Key is provided
    if (!apiKey) {
      const reply = getLocalFallbackResponse(messages);
      // Artificially delay slightly for realistic chatbot typing experience
      await new Promise((resolve) => setTimeout(resolve, 800));
      return NextResponse.json({ reply });
    }

    // Prepare contents array for Gemini Developer API
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    // Call Google Gemini API
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 1000,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error Response:', errorText);
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText) {
      throw new Error('Invalid response format from Gemini API.');
    }

    return NextResponse.json({ reply: replyText });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
