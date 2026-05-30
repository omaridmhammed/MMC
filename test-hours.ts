import { getHoursStatus } from './components/HoursStatus';

function runTests() {
  let passed = 0;
  let failed = 0;

  function strictEqual(actual: any, expected: any, msg: string) {
    if (typeof actual === 'object') {
       if (actual.isOpen === expected.isOpen && actual.text === expected.text) {
           console.log(`✅ ${msg}`);
           passed++;
           return;
       }
    }
    console.error(`❌ ${msg}\nExpected:`, expected, '\nGot:', actual);
    failed++;
  }

  // To properly mock ISO strings globally without picking up local offset, we just use absolute UTC times and we know Toronto offsets.
  // Summer (EDT) is UTC-4. Winter (EST) is UTC-5.
  // Let's test using EDT (e.g. August 2026) -> Offset -04:00
  
  // Monday 2026-08-03T08:00:00-04:00 (8 AM Monday Toronto time)
  strictEqual(
    getHoursStatus(new Date('2026-08-03T08:00:00-04:00')), 
    { isOpen: false, text: 'Closed — opens today 9 AM' }, 
    'Monday 8 AM'
  );

  // Monday 10 AM Toronto time
  strictEqual(
    getHoursStatus(new Date('2026-08-03T10:00:00-04:00')), 
    { isOpen: true, text: 'Open now until 5 PM' }, 
    'Monday 10 AM'
  );

  // Friday 6 PM Toronto time
  strictEqual(
    getHoursStatus(new Date('2026-08-07T18:00:00-04:00')), 
    { isOpen: false, text: 'Closed — opens Saturday 9 AM' }, 
    'Friday 6 PM'
  );

  // Saturday 1 PM Toronto time (closing time)
  strictEqual(
    getHoursStatus(new Date('2026-08-08T13:00:00-04:00')), 
    { isOpen: false, text: 'Closed — opens Monday 9 AM' }, 
    'Saturday 1 PM'
  );

  // Sunday 11 AM Toronto time
  strictEqual(
    getHoursStatus(new Date('2026-08-09T11:00:00-04:00')), 
    { isOpen: false, text: 'Closed — opens Monday 9 AM' }, 
    'Sunday 11 AM'
  );

  console.log(`\nTests: ${passed} passed, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

runTests();
