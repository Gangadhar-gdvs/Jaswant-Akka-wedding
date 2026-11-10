// Single bilingual source of truth.
// Every string the site renders lives here. Content is drawn strictly from
// KARE_Wedding_Invitation_Details_Corrected.md — nothing is invented.
// Unconfirmed items (noted in that file) are surfaced honestly, not guessed.

export const WEDDING_ISO = '2026-11-18T09:00:00+05:30'; // Muhurtham, IST (printed card)

export const content = {
  en: {
    dir: 'ltr',
    meta: {
      title: 'K. Bhargavi & K. Ramesh — Wedding Invitation',
      description:
        'With the blessings of our elders, we invite you to the wedding of K. Bhargavi and K. Ramesh on 18 November 2026 at Sri Amara Narayana Swamy Sannidhi, Basampalli.',
    },
    nav: {
      home: 'Home',
      couple: 'The Couple',
      invitation: 'Invitation',
      events: 'Events',
      countdown: 'Countdown',
      family: 'Family',
      venue: 'Venue',
      contact: 'Contact',
    },
    langLabel: 'తెలుగు',
    langName: 'English',
    hero: {
      family: 'KARE Family Wedding',
      invite: 'Together with their families',
      and: '&',
      bride: 'K. Bhargavi',
      groom: 'K. Ramesh',
      line: 'request the honour of your presence',
      date: 'Wednesday, 18 November 2026',
      place: 'Sri Amara Narayana Swamy Sannidhi, Basampalli',
      scroll: 'Scroll to begin',
      cta: 'View Invitation',
    },
    couple: {
      eyebrow: 'The Bride & Groom',
      title: 'Two families, one celebration',
      bride: {
        role: 'The Bride',
        name: 'K. Bhargavi',
        relation: 'Elder daughter of',
        parents: 'Smt. K. Muthyalamma & Sri K. Ramanjineyulu',
        place: 'Akuthotapalli Village, Anantapuramu Rural, Andhra Pradesh',
      },
      groom: {
        role: 'The Groom',
        name: 'K. Ramesh',
        relation: 'Elder son of',
        parents: 'Smt. K. Savitramma & Sri K. Nagaraju',
        place: 'Gowrajupalli Village, Roddam Mandal, Sri Sathya Sai District, Andhra Pradesh',
      },
    },
    invitation: {
      eyebrow: 'Invitation',
      title: 'With the blessings of our elders',
      body: 'Smt. K. Muthyalamma and Sri K. Ramanjineyulu cordially invite you, along with your family and friends, to the auspicious wedding of their elder daughter, K. Bhargavi, with K. Ramesh, elder son of Smt. K. Savitramma and Sri K. Nagaraju.',
      closing: 'Your gracious presence and blessings will make this occasion even more special.',
    },
    events: {
      eyebrow: 'Celebrations',
      title: 'Events & Schedule',
      note: 'Dhanur Lagnam',
      addToCalendar: 'Add to Calendar',
      list: [
        {
          name: 'Reception',
          day: 'Tuesday',
          date: '17 November 2026',
          time: 'From 8:00 PM onwards',
        },
        {
          name: 'Wedding Muhurtham',
          day: 'Wednesday',
          date: '18 November 2026',
          time: '9:00 AM to 10:00 AM',
        },
      ],
    },
    countdown: {
      eyebrow: 'The Moment Approaches',
      title: 'Counting down to the Muhurtham',
      labels: { days: 'Days', hours: 'Hours', mins: 'Minutes', secs: 'Seconds' },
      done: 'With the blessings of all, the celebrations have begun.',
      sub: '18 November 2026 · 9:00 AM · Dhanur Lagnam',
    },
    family: {
      eyebrow: 'With Gratitude',
      title: 'Blessings of our Elders',
      blessed: 'With the blessings of',
      elders: [
        'Late Smt. K. Gangamma',
        'Late Sri K. Gurappa',
        'Smt. K. Narayanamma',
        'Sri K. Babaiah',
      ],
    },
    venue: {
      eyebrow: 'Where We Gather',
      title: 'The Venue',
      name: 'Sri Amara Narayana Swamy Sannidhi',
      lines: ['Basampalli Village', 'Chennekothapalli Mandal', 'Sri Sathya Sai District, Andhra Pradesh'],
      directions: 'Get Directions',
    },
    contact: {
      eyebrow: 'For Any Assistance',
      title: 'Contact the Family',
      intro: 'For further details, please contact',
      call: 'Call',
    },
    closing: {
      line: 'We look forward to celebrating with you',
      names: 'Bhargavi & Ramesh',
      compliments: 'With best compliments from friends and relatives',
    },
    footer: {
      madeWith: 'Made with love for the KARE family wedding',
      family: 'KARE Family Wedding · 2026',
    },
  },

  te: {
    dir: 'ltr',
    meta: {
      title: 'కే. భార్గవి & కే. రమేష్ — వివాహ ఆహ్వానం',
      description:
        'పెద్దల ఆశీస్సులతో, 18 నవంబర్ 2026న శ్రీ అమర నారాయణ స్వామి సన్నిధి, బసంపల్లిలో జరుగు కే. భార్గవి మరియు కే. రమేష్ వివాహానికి మిమ్మల్ని ఆహ్వానిస్తున్నాము.',
    },
    nav: {
      home: 'ముఖపేజీ',
      couple: 'వధూవరులు',
      invitation: 'ఆహ్వానం',
      events: 'కార్యక్రమాలు',
      countdown: 'ముహూర్తం',
      family: 'కుటుంబం',
      venue: 'వేదిక',
      contact: 'సంప్రదింపు',
    },
    langLabel: 'English',
    langName: 'తెలుగు',
    hero: {
      family: 'కరే వారి వివాహ ఆహ్వానం',
      invite: 'తమ కుటుంబ సమేతంగా',
      and: '＆',
      bride: 'కే. భార్గవి',
      groom: 'కే. రమేష్',
      line: 'మీ రాకకై ఎదురుచూస్తున్నాము',
      date: 'బుధవారం, 18 నవంబర్ 2026',
      place: 'శ్రీ అమర నారాయణ స్వామి సన్నిధి, బసంపల్లి',
      scroll: 'క్రిందికి జరుపండి',
      cta: 'ఆహ్వానం చూడండి',
    },
    couple: {
      eyebrow: 'వధూవరులు',
      title: 'రెండు కుటుంబాలు, ఒకే శుభకార్యం',
      bride: {
        role: 'వధువు',
        name: 'కే. భార్గవి',
        relation: 'పెద్ద కుమార్తె',
        parents: 'శ్రీమతి కరే ముత్యాలమ్మ & శ్రీ కరే రామాంజినేయులు',
        place: 'ఆకుతోటపల్లి గ్రామం, అనంతపురము రూరల్, ఆంధ్రప్రదేశ్',
      },
      groom: {
        role: 'వరుడు',
        name: 'కే. రమేష్',
        relation: 'పెద్ద కుమారుడు',
        parents: 'శ్రీమతి కే. సావిత్రమ్మ & శ్రీ కే. నాగరాజు',
        place: 'గౌరాజుపల్లి గ్రామం, రొద్దం మండలం, శ్రీ సత్యసాయి జిల్లా, ఆంధ్రప్రదేశ్',
      },
    },
    invitation: {
      eyebrow: 'ఆహ్వానం',
      title: 'పెద్దల ఆశీస్సులతో',
      body: 'శ్రీమతి కరే ముత్యాలమ్మ మరియు శ్రీ కరే రామాంజినేయులు తమ పెద్ద కుమార్తె కే. భార్గవి వివాహాన్ని, శ్రీమతి కే. సావిత్రమ్మ మరియు శ్రీ కే. నాగరాజు దంపతుల పెద్ద కుమారుడు కే. రమేష్‌తో జరిపించుచున్నారు.',
      closing: 'ఈ శుభకార్యానికి కుటుంబ సమేతంగా విచ్చేసి వధూవరులను ఆశీర్వదించి, మీ అమూల్యమైన శుభాకాంక్షలు అందించవలసిందిగా మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.',
    },
    events: {
      eyebrow: 'శుభ కార్యక్రమాలు',
      title: 'కార్యక్రమాలు మరియు సమయాలు',
      note: 'ధనుర్ లగ్నం',
      addToCalendar: 'క్యాలెండర్‌కు జోడించండి',
      list: [
        {
          name: 'రిసెప్షన్',
          day: 'మంగళవారం',
          date: '17 నవంబర్ 2026',
          time: 'రాత్రి 8:00 గంటల నుండి',
        },
        {
          name: 'వివాహ ముహూర్తం',
          day: 'బుధవారం',
          date: '18 నవంబర్ 2026',
          time: 'ఉదయం 9:00 నుండి 10:00 గంటల వరకు',
        },
      ],
    },
    countdown: {
      eyebrow: 'శుభ ఘడియలు సమీపిస్తున్నాయి',
      title: 'ముహూర్తానికి మిగిలిన సమయం',
      labels: { days: 'రోజులు', hours: 'గంటలు', mins: 'నిమిషాలు', secs: 'సెకన్లు' },
      done: 'అందరి ఆశీస్సులతో శుభకార్యం మొదలైంది.',
      sub: '18 నవంబర్ 2026 · ఉదయం 9:00 · ధనుర్ లగ్నం',
    },
    family: {
      eyebrow: 'కృతజ్ఞతలతో',
      title: 'పెద్దల ఆశీస్సులు',
      blessed: 'ఆశీస్సులతో',
      elders: [
        'స్వర్గీయ శ్రీమతి కరే గంగమ్మ',
        'స్వర్గీయ శ్రీ కరే గురప్ప',
        'శ్రీమతి కే. నారాయణమ్మ',
        'శ్రీ కే. బాబయ్య',
      ],
    },
    venue: {
      eyebrow: 'మనం కలిసే చోటు',
      title: 'వేదిక',
      name: 'శ్రీ అమర నారాయణ స్వామి సన్నిధి',
      lines: ['బసంపల్లి గ్రామం', 'చెన్నేకొత్తపల్లి మండలం', 'శ్రీ సత్యసాయి జిల్లా, ఆంధ్రప్రదేశ్'],
      directions: 'దారి చూపించు',
    },
    contact: {
      eyebrow: 'ఏదైనా సహాయం కోసం',
      title: 'కుటుంబాన్ని సంప్రదించండి',
      intro: 'వివరాల కోసం సంప్రదించండి',
      call: 'కాల్ చేయండి',
    },
    closing: {
      line: 'మీతో కలిసి ఈ శుభకార్యాన్ని జరుపుకోవాలని ఎదురుచూస్తున్నాము',
      names: 'భార్గవి & రమేష్',
      compliments: 'మిత్రులు మరియు బంధుమిత్రుల శుభాకాంక్షలతో',
    },
    footer: {
      madeWith: 'కరే కుటుంబ వివాహం కోసం ప్రేమతో రూపొందించబడింది',
      family: 'కరే వారి వివాహం · 2026',
    },
  },
};

// Shared (language-neutral) data
export const PHONE_NUMBERS = ['9502560551', '9908554814', '9701770997', '7075086098'];

// Venue Google Maps link
export const MAP_URL = 'https://maps.app.goo.gl/2VhpUvV3niUJFvBT6';

// "Add to Google Calendar" for the wedding muhurtham (18 Nov 2026, 9:00–10:00 AM IST).
// Times in UTC: 03:30–04:30Z. Venue appended as location.
const CAL_TITLE = encodeURIComponent('Wedding of K. Bhargavi & K. Ramesh');
const CAL_DETAILS = encodeURIComponent('Wedding Muhurtham · Dhanur Lagnam');
const CAL_LOCATION = encodeURIComponent(
  'Sri Amara Narayana Swamy Sannidhi, Basampalli, Chennekothapalli Mandal, Sri Sathya Sai District, Andhra Pradesh'
);
export const CALENDAR_URL =
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${CAL_TITLE}` +
  `&dates=20261118T033000Z/20261118T043000Z&details=${CAL_DETAILS}&location=${CAL_LOCATION}`;
