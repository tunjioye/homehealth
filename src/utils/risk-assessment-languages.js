const RISK_ASSESSMENT_LANGUAGES = {
  ENGLISH: {
    'title': 'Risk Assessment',
    'savebuttontext': 'Save and Continue',
    'completebuttontext': 'Save and Complete',
    'returnbuttontext': 'Return to Chatbot',
    // User Information
    '1': '1. User Information',
    '1a': '1a. Your Name',
    '1aplaceholder': 'My name is ...',
    '1b': '1b. Your Phone Number',
    '1c': '1c. Your Address',
    '1cplaceholder': 'I live at ...',
    '1d': '1d. Your Email Address',
    '1e': '1e. Your State',
    '1eplaceholder': 'Select your state',
    // Travel Questions
    '2': '2. Travel Questions',
    '2a': '2a. Did you recently come in contact with someone that has travelled to China, Iran, UK, Italy, Spain, USA or any country with confirmed cases?',
    '2b': '2b. Have you had a close contact with a confirmed case of nCoV (coronavirus) infection?',
    '2c': '2c. Have you been to a gathering that later had a confirmed positive case?',
    '2d': '2d. Have you or anyone you know have come in contact with or got exposed to a healthcare facility in a country where hospital associated nCOV (coronavirus), infections have been reported?',
    'traveloptions1': [
      {
        key: 'Yes',
        label: 'Yes',
      },
      {
        key: 'No',
        label: 'No',
      },
    ],
    'traveloptions2': [
      {
        key: 'Yes',
        label: 'Yes',
      },
      {
        key: 'No',
        label: 'No',
      },
      {
        key: 'Maybe',
        label: 'Maybe',
      },
    ],
    // Health Questions
    '3': '3. Health Quesions',
    '3a': '3a. How often do you cough?',
    '3b': '3b. Do you experience any difficulties in breathing?',
    '3c': '3c. Do you have a fever and if you do, How Often?',
    '3d': '3d. Are your eyes watered?',
    '3e': '3e. How often do you sneeze?',
    '3f': '3f. Are you in pain?',
    '3g': '3g. Does your throat hurt?',
    '3h': '3h. Do you feel tired?',
    'healthoptions1': [
      {
        key: 'Frequent',
        label: 'Frequent',
      },
      {
        key: 'Sometimes',
        label: 'Sometimes',
      },
      {
        key: 'Never',
        label: 'Never',
      },
    ],
  },
  YORUBA: {
    'title': 'Igbelewọn Ewu',
    'savebuttontext': 'Fipamọ ki o Tẹsiwaju',
    'completebuttontext': 'Fipamọ ki o Pari',
    'returnbuttontext': 'Pada si Chatbot',
    // User Information
    '1': '1. Alaye Olumulo',
    '1a': '1a. Kini Orukọ rẹ',
    '1aplaceholder': 'Orukọ rẹ ...',
    '1b': '1b. Kini Nọmba foonu rẹ',
    '1c': '1c. Kini Adirẹsi rẹ',
    '1cplaceholder': 'Adirẹsi rẹ ...',
    '1d': '1d. Kini imeli adiresi rẹ',
    '1e': '1e. Kini Ipinle rẹ',
    '1eplaceholder': 'Mu ipinle rẹ',
    // Travel Questions
    '2': '2. Awọn Ibeere Irin-ajo',
    '2a': '2a. Njẹ laipe o wa ni ibatan pẹlu ẹnikan ti o ti ajo si China, Iran, UK, Italy, Spain, USA tabi eyikeyi orilẹ-ede pẹlu awọn ọran ti a fọwọsi?',
    '2b': '2b. Njẹ o ti ni ibatan sunmọ pẹlu ọran timo ti nCoV (coronavirus) ikolu?',
    '2c': '2c. Njẹ o ti wa si apejọ kan ti o ni ẹjọ idaniloju abayọri nigbamii?',
    '2d': '2d. Njẹ iwọ tabi ẹnikẹni ti o mọ pe o ti farakanra tabi ti farahan si ile-iṣẹ ilera ni orilẹ-ede nibiti a ti sọ ijabọ awọn àkóràn ti nCOV (coronavirus)?',
    'traveloptions1': [
      {
        key: 'Yes',
        label: 'Bẹẹni',
      },
      {
        key: 'No',
        label: 'Rara',
      },
    ],
    'traveloptions2': [
      {
        key: 'Bẹẹni',
        label: 'Yes',
      },
      {
        key: 'Rara',
        label: 'No',
      },
      {
        key: 'Boya',
        label: 'Maybe',
      },
    ],
    // Health Questions
    '3': '3. Awọn Ibeere Ilera',
    '3a': '3a. Bawo ni igbagbogbo ni o Ikọaláìdúró?',
    '3b': '3b. Ṣe o ni awọn iṣoro eyikeyi ninu mimi?',
    '3c': '3c. Ṣe o ni iba ati ti o ba ṣe, Igba melo?',
    '3d': '3d. Njẹ oju rẹ mbomirin?',
    '3e': '3e. Igba melo ni o sinmi?',
    '3f': '3f. Ṣe o wa ninu irora?',
    '3g': '3g. Ṣe ọfun rẹ farapa?',
    '3h': '3h. Ṣe o rẹmi?',
    'healthoptions1': [
      {
        key: 'Frequent',
        label: 'Loorekoore',
      },
      {
        key: 'Sometimes',
        label: 'Nigba miiran',
      },
      {
        key: 'Never',
        label: 'Rara',
      },
    ],
  },
  HAUSA: {
    'title': 'Risk Assessment',
    'savebuttontext': 'Save and Continue',
    'completebuttontext': 'Save and Complete',
    'returnbuttontext': 'Return to Chatbot',
    // User Information
    '1': '1. User Information',
    '1a': '1a. Your Name',
    '1aplaceholder': 'My name is ...',
    '1b': '1b. Your Phone Number',
    '1c': '1c. Your Address',
    '1cplaceholder': 'I live at ...',
    '1d': '1d. Your Email Address',
    '1e': '1e. Your State',
    '1eplaceholder': 'Select your state',
    // Travel Questions
    '2': '2. Travel Questions',
    '2a': '2a. Did you recently come in contact with someone that has travelled to China, Iran, UK, Italy, Spain, USA or any country with confirmed cases?',
    '2b': '2b. Have you had a close contact with a confirmed case of nCoV (coronavirus) infection?',
    '2c': '2c. Have you been to a gathering that later had a confirmed positive case?',
    '2d': '2d. Have you or anyone you know have come in contact with or got exposed to a healthcare facility in a country where hospital associated nCOV (coronavirus), infections have been reported?',
    'traveloptions1': [
      {
        key: 'Yes',
        label: 'Yes',
      },
      {
        key: 'No',
        label: 'No',
      },
    ],
    'traveloptions2': [
      {
        key: 'Yes',
        label: 'Yes',
      },
      {
        key: 'No',
        label: 'No',
      },
      {
        key: 'Maybe',
        label: 'Maybe',
      },
    ],
    // Health Questions
    '3': '3. Health Quesions',
    '3a': '3a. How often do you cough?',
    '3b': '3b. Do you experience any difficulties in breathing?',
    '3c': '3c. Do you have a fever and if you do, How Often?',
    '3d': '3d. Are your eyes watered?',
    '3e': '3e. How often do you sneeze?',
    '3f': '3f. Are you in pain?',
    '3g': '3g. Does your throat hurt?',
    '3h': '3h. Do you feel tired?',
    'healthoptions1': [
      {
        key: 'Frequent',
        label: 'Frequent',
      },
      {
        key: 'Sometimes',
        label: 'Sometimes',
      },
      {
        key: 'Never',
        label: 'Never',
      },
    ],
  },
  IGBO: {
    'title': 'Risk Assessment',
    'savebuttontext': 'Save and Continue',
    'completebuttontext': 'Save and Complete',
    'returnbuttontext': 'Return to Chatbot',
    // User Information
    '1': '1. User Information',
    '1a': '1a. Your Name',
    '1aplaceholder': 'My name is ...',
    '1b': '1b. Your Phone Number',
    '1c': '1c. Your Address',
    '1cplaceholder': 'I live at ...',
    '1d': '1d. Your Email Address',
    '1e': '1e. Your State',
    '1eplaceholder': 'Select your state',
    // Travel Questions
    '2': '2. Travel Questions',
    '2a': '2a. Did you recently come in contact with someone that has travelled to China, Iran, UK, Italy, Spain, USA or any country with confirmed cases?',
    '2b': '2b. Have you had a close contact with a confirmed case of nCoV (coronavirus) infection?',
    '2c': '2c. Have you been to a gathering that later had a confirmed positive case?',
    '2d': '2d. Have you or anyone you know have come in contact with or got exposed to a healthcare facility in a country where hospital associated nCOV (coronavirus), infections have been reported?',
    'traveloptions1': [
      {
        key: 'Yes',
        label: 'Yes',
      },
      {
        key: 'No',
        label: 'No',
      },
    ],
    'traveloptions2': [
      {
        key: 'Yes',
        label: 'Yes',
      },
      {
        key: 'No',
        label: 'No',
      },
      {
        key: 'Maybe',
        label: 'Maybe',
      },
    ],
    // Health Questions
    '3': '3. Health Quesions',
    '3a': '3a. How often do you cough?',
    '3b': '3b. Do you experience any difficulties in breathing?',
    '3c': '3c. Do you have a fever and if you do, How Often?',
    '3d': '3d. Are your eyes watered?',
    '3e': '3e. How often do you sneeze?',
    '3f': '3f. Are you in pain?',
    '3g': '3g. Does your throat hurt?',
    '3h': '3h. Do you feel tired?',
    'healthoptions1': [
      {
        key: 'Frequent',
        label: 'Frequent',
      },
      {
        key: 'Sometimes',
        label: 'Sometimes',
      },
      {
        key: 'Never',
        label: 'Never',
      },
    ],
  },
}

export default RISK_ASSESSMENT_LANGUAGES
