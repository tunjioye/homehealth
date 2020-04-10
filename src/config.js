const CONFIG = {
  SITE_NAME: 'homehealth',
  SITE_NAME_HTML: `h<span class="text-dark">ome</span>h<span class="text-dark">ealth</span>`,
  MAIN_NAV: [
    {
      title: 'COVID-19 Resources',
      href: '/covid',
      pageTitle: 'COVID-19',
    },
    {
      title: 'Our Service Forms',
      href: '/#services',
      pageTitle: 'Service Forms',
    },
    // {
    //   title: 'Our Chatbot',
    //   href: '/chatbot',
    //   pageTitle: 'Chatbot',
    // },
  ],
  INFORMATION_LIST: [
    {
      title: 'COVID-19 Statistics',
      description: 'See our COVID-19 Dashboard for recent Statistics in Nigeria & The Whole World',
      href: '/covid',
      hash: 'statistics',
    },
    {
      title: 'What is COVID-19?',
      description: 'The coronavirus disease (COVID-19) is an infectious disease caused by a new virus',
      href: '/covid',
      hash: 'overview',
    },
    {
      title: 'COVID-19 Symptoms',
      description: 'Cough, Fever, Tiredness, Difficulty Breathing (in severe cases)',
      href: '/covid',
      hash: 'symptoms',
    },
    {
      title: 'COVID-19 Prevention',
      description: 'There’s currently no vaccine to prevent COVID-19. But, You can help prevent spreading of the virus to others if you:',
      href: '/covid',
      hash: 'prevention',
    },
    {
      title: 'COVID-19 Treatments',
      description: 'Medical Care and Self Care such as Resting & Sleeping, Drinking plenty of liquids etc.',
      href: '/covid',
      hash: 'treatments',
    },
    {
      title: 'COVID-19 FAQs',
      description: 'Frequently Asked Questions about COVID-19 and corresponding Expert Answers',
      href: '/covid',
      hash: 'faqs',
    },
    // {
    //   title: 'COVID-19 Tweets',
    //   description: 'Read the most recent tweets about the coronavirus disease (COVID-19)',
    //   href: '/covid',
    //   hash: 'tweets',
    // },
    {
      title: 'Handpicked COVID-19 Videos',
      description: 'Watch handpicked informative videos on COIVID-19 from YouTube',
      href: '/covid',
      hash: 'videos',
    },
    {
      title: 'Other Useful Resources',
      description: 'A List of other useful resources or news from sources like NCDC, WHO, CDC etc.',
      href: '/covid',
      hash: 'other-resources',
    },
  ],
  SERVICE_LIST: [
    {
      title: 'COVID-19 Risk Assessment',
      description: 'Take a quiz as our chatbot predicts your risk of having the coronavirus',
      href: '/forms/risk-assessment',
    },
    {
      title: 'Request a Call from a Doctor',
      description: 'Fill a form to request help or support from a Qualified Medical Doctor',
      href: '/#services',
    },
    {
      title: 'Purchase Medication & PPE',
      description: 'Purchase some medication drugs and personal protective gear (PPE)',
      href: '/#services',
    },
    {
      title: 'Request for Quarantine',
      description: 'Fill a form to request for Quarantine or a nearby Hotel for Self Isolation ',
      href: '/#services',
    },
    {
      title: 'Report a COVID-19 Suspect',
      description: 'Fill our form to report someone you suspect has COVID-19 and why?',
      href: '/#services',
    },
  ],
  FAQS: [
    {
      question: 'How long does the coronavirus last on surfaces?',
      answer: 'It is not certain how long the virus that causes COVID-19 survives on surfaces, but it seems to behave like other coronaviruses. Studies suggest that coronaviruses (including preliminary information on the COVID-19 virus) may persist on surfaces for a few hours or up to several days.',
    },
    {
      question: 'What is the recovery time for the coronavirus disease?',
      answer: 'Using available preliminary data, the median time from onset to clinical recovery for mild cases is approximately 2 weeks and is 3-6 weeks for patients with severe or critical disease.',
    },
    {
      question: 'Can the coronavirus disease spread through food?',
      answer: 'Current evidence on other coronavirus strains shows that while coronaviruses appear to be stable at low and freezing temperatures for a certain period, food hygiene and good food safety practices can prevent their transmission through food.',
    },
    {
      question: 'What should schools do during an outbreak of the coronavirus disease?',
      answer: 'UNICEF is urging schools – whether open or helping students through remote learning – to provide students with holistic support. Schools should provide children with vital information on handwashing and other measures to protect themselves and their families; facilitate mental health support; and help to prevent stigma and discrimination by encouraging students to be kind to each other and avoid stereotypes when talking about the virus.',
    },
    {
      question: 'Can babies get the coronavirus disease?',
      answer: 'We know it is possible for people of any age to be infected with the virus, but so far there are relatively few cases of COVID-19 reported among children.',
    },
    {
      question: 'How does the coronavirus disease spread?',
      answer: 'The new coronavirus is a respiratory virus which spreads primarily through droplets generated when an infected person coughs or sneezes, or through droplets of saliva or discharge from the nose. To protect yourself, clean your hands frequently with an alcohol-based hand rub or wash them with soap and water.',
    },
    {
      question: 'Is the coronavirus disease zoonotic?',
      answer: 'Coronaviruses are zoonotic, meaning they are transmitted between animals and people.',
    },
    {
      question: 'Is there a vaccine for the coronavirus disease?',
      answer: 'When a disease is new, there is no vaccine until one is developed. It can take a number of years for a new vaccine to be developed.',
    },
    // {
    //   question: '',
    //   answer: '',
    // },
  ],
  VIDEOS: [
    {
      title: 'The Coronavirus Explained & What You Should Do',
      videoId: 'BtN-goy9VOY',
    },
    {
      title: 'How wildlife trade is linked to coronavirus',
      videoId: 'TPpoJGYlW54',
    },
    {
      title: 'Coronavirus: "This is not a video game, it\'s real" - BBC News',
      videoId: 'ugs_aCBKs1g',
    },
    {
      title: 'Coronavirus USA: What is Donald Trump\'s strategy? | DW News',
      videoId: '5No7gDmzIvg',
    },
    {
      title: 'Covid-19 Nigeria; Expensive Shit. Frank Bello',
      videoId: 'U8H7nuO_c-o',
    },
    {
      title: 'CORONAVIRUS: 8 Big Personalities In Nigeria Who tested Positive To Covid-19',
      videoId: '5bB9t5JHbEE',
    },
    {
      title: 'Here’s how travellers are screened for coronavirus at Nigeria’s airports',
      videoId: 'b_fDi0R-Yqg',
    },
    {
      title: 'COVID-19 IN NIGERIA DAILY UPDATE [ 03/04/2020 ]',
      videoId: 'L-MRb12o05E',
    },
    {
      title: 'Coronavirus in nigeria',
      videoId: 'QBGQXIMvwQY',
    },
    {
      title: 'CORONAVIRUS VIOLENCE: Angry Warri Youths Attack State Task Force Team | Coronavirus In Nigeria',
      videoId: 'byXYBBXH7lE',
    },
    {
      title: 'Nigeria\'s Coronavirus twist and turns',
      videoId: 'euB7LS-DaEo',
    },
    // {
    //   title: '',
    //   videoId: '',
    // },
  ],
  OTHER_RESOURCES: [
    {
      title: 'NCDC',
      href: 'http://covid19.ncdc.gov.ng/',
    },
    {
      title: 'Lagos State Gov.',
      href: 'http://covid19.lagosstate.gov.ng/',
    },
    {
      title: 'CDC',
      href: 'https://www.cdc.gov/coronavirus/2019-ncov/',
    },
    {
      title: 'WHO',
      href: 'https://www.who.int/health-topics/coronavirus',
    },
    {
      title: 'Google',
      href: 'https://www.google.com/covid19/',
    },
    {
      title: 'Microsoft Bing',
      href: 'https://www.bing.com/covid/local/nigeria',
    },
    {
      title: 'Worldometers',
      href: 'https://worldometers.info/coronavirus',
    },
    {
      title: 'Corona Scanner',
      href: 'https://corona-scanner.com/',
    },
    // {
    //   title: '',
    //   href: '',
    // },
  ],
}

export default CONFIG