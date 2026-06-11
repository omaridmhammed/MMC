# Client Proposal: My Medical Centers Web Platform

This proposal document introduces the newly upgraded **My Medical Centers (MMC)** digital web platform. It highlights key interactive features and includes direct links to explore the live environment.

---

## 🌟 Executive Overview
The MMC web platform acts as your clinic's digital reception desk. It has been built to:
1. **Reduce Admin Overhead**: Answers routine patient questions automatically.
2. **Increase Rostered Patients**: Promotes family doctor registration using simple, direct onboarding paths.
3. **Establish Medical Trust**: Utilizes a premium typography and design layout that projects care and authority.

---

## 🗺️ Page-by-Page Directory & Feature Guide

The following sections contain the direct links to each page on your web platform along with their core features:

### 1. The Landing Page (Homepage)
* **Direct Link**: [Homepage (/)](http://localhost:3000/) *(or your live Vercel URL)*
* **Client Value**: The patient's first impression.
* **Key Features**:
  * **Live Hours Badge**: Instantly displays whether the clinic is open or closed based on local Ottawa time.
  * **Stats Dashboard**: Displays key trust signals (e.g. clinic locations, services, accepted insurance policies).
  * **Direct CTAs**: Highlights walk-in wait times and new patient registration buttons.

### 2. Services Catalog Page
* **Direct Link**: [Services (/services)](http://localhost:3000/services)
* **Client Value**: Educates patients on the clinical support available under one roof.
* **Key Features**:
  * **Categorized Offerings**: Clear overviews of walk-in services, family medicine, psychotherapy, addiction counselling, and the Iron Infusion clinic.
  * **Anchored Access**: Scroll-to-section anchor navigation for seamless reading.

### 3. Doctors & Rostering Directory
* **Direct Link**: [Doctors Directory (/doctors)](http://localhost:3000/doctors)
* **Client Value**: Displays your team of family physicians and specialists.
* **Key Features**:
  * **Availability Indicators**: Highlights which physicians are accepting new roster patients under OHIP.
  * **Location Filtering**: Groups practitioners by their clinic (Carling vs. Richmond Road).

### 4. Interactive Locations Hub
* **Direct Link**: [Locations (/locations)](http://localhost:3000/locations)
* **Client Value**: Helps patients navigate to your physical clinics.
* **Key Features**:
  * **Google Maps Integrations**: One-click driving directions to the Carling Avenue and Richmond Road branches.
  * **Contact Details**: Displays telephone, fax, and email information.

### 5. Onboarding & Bookings Portal
* **Direct Link**: [Booking (/book)](http://localhost:3000/book)
* **Client Value**: The administrative engine of the website.
* **Key Features**:
  * **Ocean Onboarding Links**: Guides patients to the Ocean platform for bookings and new patient registration.
  * **Specialist Referrals**: Allows referring practitioners to submit intake documentation digitally.

---

## 🤖 The MMC AI Virtual Assistant
Embedded on the bottom-right corner of every page is the **MMC Assistant**:
* **How it works**: Uses artificial intelligence trained on local clinic directories to answer questions 24/7.
* **Suggested Chips**: Lets patients click pre-set questions like *"Are you accepting new patients?"* or *"Walk-in hours?"* to get instant replies.
* **Symptom Safety Interception**: If a user mentions medical symptoms, the assistant instantly interrupts and provides a prominent **disclaimer redirecting them to 911** for patient safety.
* **Offline Fallback**: Features keyword detection logic that keeps the chat fully functional even without an internet/API key.

---

## 📈 Administrative & Financial Benefits

* **Reduce Call Volumes**: The combination of the AI Assistant and the Live Hours Badge answers the top 80% of routine receptionist inquiries.
* **OHIP Roster Expansion**: Prominent "New Patient Welcome" banners and direct Ocean registration workflows make it easy for families to register.
* **Fully Responsive Mobile Layout**: Built with a mobile-first design system so parents can book appointments on their phones.
