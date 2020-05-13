const RISK_ASSESSMENT_LANGUAGES = {
  ENGLISH: {
    'title': 'Risk Assessment',
    'savebuttontext': 'Save and Continue',
    'completebuttontext': 'Save and Complete',
    'resetbuttontext': 'Reset Form',
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
    '1f': '1f. Your Local Government Area',
    '1fplaceholder': 'Select local government area',
    '1g': '1g. Your Sex',
    '1gplaceholder': 'Select your sex',
    '1h': '1h. Your Marital Status',
    '1hplaceholder': 'Select your marital status',
    '1i': '1i. Your Date of Birth',
    'sexoptions': [
      {
        key: 'MALE',
        label: 'MALE',
      },
      {
        key: 'FEMALE',
        label: 'FEMALE',
      },
    ],
    'maritalstatusoptions': [
      {
        key: 'SINGLE',
        label: 'SINGLE',
      },
      {
        key: 'MARRIED',
        label: 'MARRIED',
      },
      {
        key: 'DIVORCED',
        label: 'DIVORCED',
      },
    ],
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
    'resetbuttontext': 'Tun Fọọmu Kọ',
    'returnbuttontext': 'Pada si Chatbot',
    // User Information
    '1': '1. Awọn Ibeere Olumulo',
    '1a': '1a. Orukọ rẹ',
    '1aplaceholder': 'Orukọ mi ni ...',
    '1b': '1b. Nọmba Foonu rẹ',
    '1c': '1c. Adirẹsi rẹ',
    '1cplaceholder': 'Mo n gbe ni ...',
    '1d': '1d. Imeli Adiresi rẹ',
    '1e': '1e. Ipinle rẹ',
    '1eplaceholder': 'Mu ipinle rẹ',
    '1f': '1f. Agbegbe Ijoba Ibile re',
    '1fplaceholder': 'Mu agbegbe ijoba ibile re',
    '1g': '1g. Ẹda rẹ',
    '1gplaceholder': 'Mu ẹda rẹ',
    '1h': '1h. Ipo igbeyawo rẹ',
    '1hplaceholder': 'Mu ipo igbeyawo rẹ',
    '1i': '1i. Ojo Ibi rẹ',
    'sexoptions': [
      {
        key: 'MALE',
        label: 'ỌKUNRIN',
      },
      {
        key: 'FEMALE',
        label: 'OBINRIN',
      },
    ],
    'maritalstatusoptions': [
      {
        key: 'SINGLE',
        label: 'MI O NI IYAWO TABI ỌKỌ',
      },
      {
        key: 'MARRIED',
        label: 'MO NI IYAWO TABI ỌKỌ',
      },
      {
        key: 'DIVORCED',
        label: 'MO TI KỌ IYAWO TABI ỌKỌ MI SILẸ',
      },
    ],
    // Travel Questions
    '2': '2. Awọn Ibeere Irin-ajo',
    '2a': '2a. Njẹ o se alabapade ẹnikeni ti o ti ajo de lati ilu China, Iran, UK, Italy, Spain, USA tabi eyikeyi orilẹ-ede ti a ti ri aisan coranavirus?',
    '2b': '2b. Njẹ o ni ibasepo pẹlu ẹniyan ti o ti ni arun coranavirus?',
    '2c': '2c. Njẹ o ti wa ni apejọpo ti ati ri eniyan ti o ti ni arun coranavirus?',
    '2d': '2d. Njẹ iwọ tabi ẹnikẹni ti o mọ, ti farakanra tabi ti farahan si ile-iṣẹ ilera ni orilẹ-ede ti ati ri arun coranavirus?',
    'traveloptions1': [
      {
        key: 'Yes',
        label: 'Bẹẹni',
      },
      {
        key: 'No',
        label: 'Bẹẹko',
      },
    ],
    'traveloptions2': [
      {
        key: 'Yes',
        label: 'Bẹẹni',
      },
      {
        key: 'No',
        label: 'Bẹẹko',
      },
      {
        key: 'Maybe',
        label: 'Boya',
      },
    ],
    // Health Questions
    '3': '3. Awọn Ibeere Ilera ara',
    '3a': '3a. Igba melo ni o ma n wu Ikọaláìdúró?',
    '3b': '3b. Ṣe o ni awọn iṣoro eyikeyi nigbati o ba n mi?',
    '3c': '3c. Ṣe o ni iba, ti o ba je be, Igba melo?',
    '3d': '3d. Njẹ oju rẹ n wa omi?',
    '3e': '3e. Igba melo ni o sin?',
    '3f': '3f. Ṣe o wa ninu irora?',
    '3g': '3g. Ṣe ọfun rẹ dun o?',
    '3h': '3h. Ṣe o ma n rẹ o?',
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
    'title': 'Kiman Hadari',
    'savebuttontext': 'Ajiye kuma Ci gaba',
    'completebuttontext': 'Ajiye kuma Kammalawa',
    'resetbuttontext': 'Maimaita Form',
    'returnbuttontext': 'Komawa zuwa Chatbot',
    // User Information
    '1': '1. Bayanin Mai Amfani',
    '1a': '1a. Sunanka',
    '1aplaceholder': 'Sunana shi ne ...',
    '1b': '1b. Lambar Waya',
    '1c': '1c. Adireshinku',
    '1cplaceholder': 'Ina zaune a ...',
    '1d': '1d. Adireshin i-mel dinka',
    '1e': '1e. Jiharku',
    '1eplaceholder': 'Zaɓi jihar ku',
    '1f': '1f. Karamar Hukumar Ku',
    '1fplaceholder': 'Zaɓi karamar hukumar',
    '1g': '1g. Jinsinka',
    '1gplaceholder': 'Zaɓi jinsi',
    '1h': '1h. Yanayin Aurenku',
    '1hplaceholder': 'Zaɓi halin rayuwar aure',
    '1i': '1i. Ranar Haihuwar ku',
    'sexoptions': [
      {
        key: 'MALE',
        label: 'NAMIJI',
      },
      {
        key: 'FEMALE',
        label: 'MACE',
      },
    ],
    'maritalstatusoptions': [
      {
        key: 'SINGLE',
        label: 'BA AURE',
      },
      {
        key: 'MARRIED',
        label: 'AURE',
      },
      {
        key: 'DIVORCED',
        label: 'SAKI',
      },
    ],
    // Travel Questions
    '2': '2. Tambayoyin Tafiya',
    '2a': '2a. Shin kwanan nan kun taɓa saduwa da wani wanda ya yi tafiya zuwa China, Iran, UK, Italiya, Spain, Amurka ko kowace ƙasa da tabbatattun shari\'o\'i?',
    '2b': '2b. Shin kun sami kusanci da wani lamunin tabbatar da kamuwa da cutar NCoV (coronavirus)?',
    '2c': '2c. Shin kun halarci taron wanda daga baya ya tabbatar da hujjoji tabbatacce?',
    '2d': '2d. Shin ko kai da ka san sun taɓa tuntuɓar ko aka fallasa su ga cibiyar kula da lafiya a ƙasar da aka sami cutar NCOV (coronavirus), an sami rahoton kamuwa da cuta?',
    'traveloptions1': [
      {
        key: 'Yes',
        label: 'Haka ne',
      },
      {
        key: 'No',
        label: 'A\'a',
      },
    ],
    'traveloptions2': [
      {
        key: 'Yes',
        label: 'Haka ne',
      },
      {
        key: 'No',
        label: 'A\'a',
      },
      {
        key: 'Maybe',
        label: 'Wataƙila',
      },
    ],
    // Health Questions
    '3': '3. Tambayoyi Lafiya',
    '3a': '3a. Sau nawa kuke tari?',
    '3b': '3b. Shin kuna fuskantar wasu matsaloli a cikin numfashi?',
    '3c': '3c. Shin kana da zazzabi kuma idan kayi, Sau nawa?',
    '3d': '3d. Anya ana shayar da idanunka?',
    '3e': '3e. Sau nawa kuke hurawa?',
    '3f': '3f. Kuna jin zafi?',
    '3g': '3g. Shin makogwaron ku ji ciwo?',
    '3h': '3h. Kuna jin gajiya?',
    'healthoptions1': [
      {
        key: 'Frequent',
        label: 'Akai-akai',
      },
      {
        key: 'Sometimes',
        label: 'Wasu lokuta',
      },
      {
        key: 'Never',
        label: 'Ba zai taɓa yiwuwa ba',
      },
    ],
  },
  IGBO: {
    'title': 'Nyocha Ihe Egwu',
    'savebuttontext': 'Chekwa ma gaba',
    'completebuttontext': 'Chekwaa ma zuo ezu',
    'resetbuttontext': 'Mpempe Akwụkwọ',
    'returnbuttontext': 'Laghachi na Chatbot',
    // User Information
    '1': '1. Ozi onye ọrụ',
    '1a': '1a. Aha gị',
    '1aplaceholder': 'Aha m bụ ...',
    '1b': '1b. Nọmba ekwentị gị',
    '1c': '1c. Adreesị gị',
    '1cplaceholder': 'M bi na ...',
    '1d': '1d. Adreesị ozi ịntanetị gị',
    '1e': '1e. Ọchịchị gị',
    '1eplaceholder': 'Họrọ steeti gị',
    '1f': '1f. Mpaghara Ọchịchị gị',
    '1fplaceholder': 'Họrọ mpaghara ime obodo',
    '1g': '1g. Nwoke gi',
    '1gplaceholder': 'Họrọ okike gi',
    '1h': '1h. Ọnọdụ Alụmdi na Nwunye gị',
    '1hplaceholder': 'Họrọ onodu di na nwunye',
    '1i': '1i. Ubochi omumu gi',
    'sexoptions': [
      {
        key: 'MALE',
        label: 'NWOKE',
      },
      {
        key: 'FEMALE',
        label: 'NWANYI',
      },
    ],
    'maritalstatusoptions': [
      {
        key: 'SINGLE',
        label: 'ALỤGHỊ DI',
      },
      {
        key: 'MARRIED',
        label: 'DI',
      },
      {
        key: 'DIVORCED',
        label: 'ORGBA ALỤKWAGHỊM',
      },
    ],
    // Travel Questions
    '2': '2. Ajụjụ Njem',
    '2a': '2a. N\'oge na-adịbeghị anya bịarutere na nso nso onye batara China, Iran, UK, Italy, Spain, USA ma ọ bụ obodo ọ bụla nke enwetara ikpe?',
    '2b': '2b. Nwere nweela mmekọrịta nke enyochaa ọrịa nCoV (coronavirus) a nwapụtara?',
    '2c': '2c. Aghọọ bata nnọkọ nnọkọ nke mechara bụrụ eziokwu na ọ bụ eziokwu?',
    '2d': '2d. Gi nweela mgbe ọ dịla ma ọ bụ onye ị maara bịara n\'ụlọ ọrụ nlekọta ahụike na mba ebe a na-akọpụta ọrịa nCOV (coronavirus)?',
    'traveloptions1': [
      {
        key: 'Yes',
        label: 'Ee',
      },
      {
        key: 'No',
        label: 'Mba',
      },
    ],
    'traveloptions2': [
      {
        key: 'Yes',
        label: 'Ee',
      },
      {
        key: 'No',
        label: 'Mba',
      },
      {
        key: 'Maybe',
        label: 'Enwere ike',
      },
    ],
    // Health Questions
    '3': '3. Ajụjụ Ahụike',
    '3a': '3a. Ugboro ole ị na-ata ụkwara?',
    '3b': '3b. You nwere nsogbu ọ bụla na iku ume?',
    '3c': '3c. A nwere ahụ ọkụ ma ọ bụrụ na ị ga-enwe, Ugboro ole?',
    '3d': '3d. O na-enye gi anya mmiri?',
    '3e': '3e. Ugboro ole ka ị na-amị amị?',
    '3f': '3f. Ị nọ na mgbu?',
    '3g': '3g. Aka gị ọ na-afụ ụfụ?',
    '3h': '3h. Ọ dị gị ike gwụrụ?',
    'healthoptions1': [
      {
        key: 'Frequent',
        label: 'Ugboro',
      },
      {
        key: 'Sometimes',
        label: 'Mgbe ụfọdụ',
      },
      {
        key: 'Never',
        label: 'Ọ dịghị mgbe',
      },
    ],
  },
}

export default RISK_ASSESSMENT_LANGUAGES
