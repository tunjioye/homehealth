const RISK_ASSESSMENT_LANGUAGES = {
  ENGLISH: {
    'title': 'Risk Assessment',
    'savebuttontext': 'Save and Continue',
    'completebuttontext': 'Save and Complete',
    'addcontactsbuttontext': 'Add to Contacts',
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
    // Recent Contacts
    '4': '4. Recent Contacts',
    '4subtitle': 'How many people have you come in contact with in the last 14 days?',
    '4a': 'Contact Name',
    '4aplaceholder': 'Enter Contact Name ...',
    '4b': 'Phone Number',
    '4c': 'Address',
    '4cplaceholder': 'Enter Address ...',
    '4d': 'Sex',
    '4dplaceholder': 'Select sex',
    '4notice': 'We will call the contacts you provide to check on their health.',
  },
  YORUBA: {
    'title': 'Igbelew???n Ewu',
    'savebuttontext': 'Fipam??? ki o T???siwaju',
    'completebuttontext': 'Fipam??? ki o Pari',
    'addcontactsbuttontext': 'Fi si Aw???n Olubas???r???',
    'resetbuttontext': 'Tun F??????mu K???',
    'returnbuttontext': 'Pada si Chatbot',
    // User Information
    '1': '1. Aw???n Ibeere Olumulo',
    '1a': '1a. Oruk??? r???',
    '1aplaceholder': 'Oruk??? mi ni ...',
    '1b': '1b. N???mba Foonu r???',
    '1c': '1c. Adir???si r???',
    '1cplaceholder': 'Mo n gbe ni ...',
    '1d': '1d. Imeli Adiresi r???',
    '1e': '1e. Ipinle r???',
    '1eplaceholder': 'Mu ipinle r???',
    '1f': '1f. Agbegbe Ijoba Ibile re',
    '1fplaceholder': 'Mu agbegbe ijoba ibile re',
    '1g': '1g. ???da r???',
    '1gplaceholder': 'Mu ???da r???',
    '1h': '1h. Ipo igbeyawo r???',
    '1hplaceholder': 'Mu ipo igbeyawo r???',
    '1i': '1i. Ojo Ibi r???',
    'sexoptions': [
      {
        key: 'MALE',
        label: '???KUNRIN',
      },
      {
        key: 'FEMALE',
        label: 'OBINRIN',
      },
    ],
    'maritalstatusoptions': [
      {
        key: 'SINGLE',
        label: 'MI O NI IYAWO TABI ???K???',
      },
      {
        key: 'MARRIED',
        label: 'MO NI IYAWO TABI ???K???',
      },
      {
        key: 'DIVORCED',
        label: 'MO TI K??? IYAWO TABI ???K??? MI SIL???',
      },
    ],
    // Travel Questions
    '2': '2. Aw???n Ibeere Irin-ajo',
    '2a': '2a. Nj??? o se alabapade ???nikeni ti o ti ajo de lati ilu China, Iran, UK, Italy, Spain, USA tabi eyikeyi oril???-ede ti a ti ri aisan coranavirus?',
    '2b': '2b. Nj??? o ni ibasepo p???lu ???niyan ti o ti ni arun coranavirus?',
    '2c': '2c. Nj??? o ti wa ni apej???po ti ati ri eniyan ti o ti ni arun coranavirus?',
    '2d': '2d. Nj??? iw??? tabi ???nik???ni ti o m???, ti farakanra tabi ti farahan si ile-i?????? ilera ni oril???-ede ti ati ri arun coranavirus?',
    'traveloptions1': [
      {
        key: 'Yes',
        label: 'B??????ni',
      },
      {
        key: 'No',
        label: 'B??????ko',
      },
    ],
    'traveloptions2': [
      {
        key: 'Yes',
        label: 'B??????ni',
      },
      {
        key: 'No',
        label: 'B??????ko',
      },
      {
        key: 'Maybe',
        label: 'Boya',
      },
    ],
    // Health Questions
    '3': '3. Aw???n Ibeere Ilera ara',
    '3a': '3a. Igba melo ni o ma n wu Ik???al????d??r???',
    '3b': '3b. ???e o ni aw???n i???oro eyikeyi nigbati o ba n mi?',
    '3c': '3c. ???e o ni iba, ti o ba je be, Igba melo?',
    '3d': '3d. Nj??? oju r??? n wa omi?',
    '3e': '3e. Igba melo ni o sin?',
    '3f': '3f. ???e o wa ninu irora?',
    '3g': '3g. ???e ???fun r??? dun o?',
    '3h': '3h. ???e o ma n r??? o?',
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
    // Recent Contacts
    '4': '4. Aw???n Olubas???r???',
    '4subtitle': 'Eniyan melo ni o ni ibatan p???lu ninu aw???n ???j??? 14 s???hin?',
    '4a': 'Oruk??? Olubas???r???',
    '4aplaceholder': 'T??? Oruk??? Olubas???r??? ...',
    '4b': 'N???mba Fonu',
    '4c': 'Adir???si',
    '4cplaceholder': 'T??? Adir???si ...',
    '4d': '???da',
    '4dplaceholder': 'Mu ???da',
    '4notice': 'A yoo pe aw???n olubas???r??? ti o pese lati ???ay???wo lori ilera w???n.',
  },
  HAUSA: {
    'title': 'Kiman Hadari',
    'savebuttontext': 'Ajiye kuma Ci gaba',
    'completebuttontext': 'Ajiye kuma Kammalawa',
    'addcontactsbuttontext': 'Toara zuwa Lambobi',
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
    '1eplaceholder': 'Za??i jihar ku',
    '1f': '1f. Karamar Hukumar Ku',
    '1fplaceholder': 'Za??i karamar hukumar',
    '1g': '1g. Jinsinka',
    '1gplaceholder': 'Za??i jinsi',
    '1h': '1h. Yanayin Aurenku',
    '1hplaceholder': 'Za??i halin rayuwar aure',
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
    '2a': '2a. Shin kwanan nan kun ta??a saduwa da wani wanda ya yi tafiya zuwa China, Iran, UK, Italiya, Spain, Amurka ko kowace ??asa da tabbatattun shari\'o\'i?',
    '2b': '2b. Shin kun sami kusanci da wani lamunin tabbatar da kamuwa da cutar NCoV (coronavirus)?',
    '2c': '2c. Shin kun halarci taron wanda daga baya ya tabbatar da hujjoji tabbatacce?',
    '2d': '2d. Shin ko kai da ka san sun ta??a tuntu??ar ko aka fallasa su ga cibiyar kula da lafiya a ??asar da aka sami cutar NCOV (coronavirus), an sami rahoton kamuwa da cuta?',
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
        label: 'Wata??ila',
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
        label: 'Ba zai ta??a yiwuwa ba',
      },
    ],
    // Recent Contacts
    '4': '4. Adiresoshi',
    '4subtitle': 'Mutane nawa kuka ha??o cikin kwanakin 14?',
    '4a': 'Sunan Adiresoshi',
    '4aplaceholder': 'Shigar da sunan layi ...',
    '4b': 'Lambar Tarho',
    '4c': 'Adireshi',
    '4cplaceholder': 'Shigarda adireshi ...',
    '4d': 'Jinsi',
    '4dplaceholder': 'Za??i jinsi',
    '4notice': 'Za mu kira lambobin sadarwar da ka bayar don duba lafiyarsu.',
  },
  IGBO: {
    'title': 'Nyocha Ihe Egwu',
    'savebuttontext': 'Chekwa ma gaba',
    'completebuttontext': 'Chekwaa ma zuo ezu',
    'addcontactsbuttontext': 'Tinye na Ndi Ana-akpo',
    'resetbuttontext': 'Mpempe Akw???kw???',
    'returnbuttontext': 'Laghachi na Chatbot',
    // User Information
    '1': '1. Ozi onye ???r???',
    '1a': '1a. Aha g???',
    '1aplaceholder': 'Aha m b??? ...',
    '1b': '1b. N???mba ekwent??? g???',
    '1c': '1c. Adrees??? g???',
    '1cplaceholder': 'M bi na ...',
    '1d': '1d. Adrees??? ozi ???ntanet??? g???',
    '1e': '1e. ???ch???ch??? g???',
    '1eplaceholder': 'H???r??? steeti g???',
    '1f': '1f. Mpaghara ???ch???ch??? g???',
    '1fplaceholder': 'H???r??? mpaghara ime obodo',
    '1g': '1g. Nwoke g???',
    '1gplaceholder': 'H???r??? okike g???',
    '1h': '1h. ???n???d??? Al???mdi na Nwunye g???',
    '1hplaceholder': 'H???r??? onodu di na nwunye',
    '1i': '1i. Ubochi omumu g???',
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
        label: 'AL???GH??? DI',
      },
      {
        key: 'MARRIED',
        label: 'DI',
      },
      {
        key: 'DIVORCED',
        label: 'ORGBA AL???KWAGH???M',
      },
    ],
    // Travel Questions
    '2': '2. Aj???j??? Njem',
    '2a': '2a. N\'oge na-ad???begh??? anya b???arutere na nso nso onye batara China, Iran, UK, Italy, Spain, USA ma ??? b??? obodo ??? b???la nke enwetara ikpe?',
    '2b': '2b. Nwere nweela mmek???r???ta nke enyochaa ???r???a nCoV (coronavirus) a nwap???tara?',
    '2c': '2c. Agh?????? bata nn???k??? nn???k??? nke mechara b???r??? eziokwu na ??? b??? eziokwu?',
    '2d': '2d. Gi nweela mgbe ??? d???la ma ??? b??? onye ??? maara b???ara n\'???l??? ???r??? nlek???ta ah???ike na mba ebe a na-ak???p???ta ???r???a nCOV (coronavirus)?',
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
    '3': '3. Aj???j??? Ah???ike',
    '3a': '3a. Ugboro ole ??? na-ata ???kwara?',
    '3b': '3b. You nwere nsogbu ??? b???la na iku ume?',
    '3c': '3c. A nwere ah??? ???k??? ma ??? b???r??? na ??? ga-enwe, Ugboro ole?',
    '3d': '3d. O na-enye gi anya mmiri?',
    '3e': '3e. Ugboro ole ka ??? na-am??? am????',
    '3f': '3f. ??? n??? na mgbu?',
    '3g': '3g. Aka g??? ??? na-af??? ???f????',
    '3h': '3h. ??? d??? g??? ike gw???r????',
    'healthoptions1': [
      {
        key: 'Frequent',
        label: 'Ugboro',
      },
      {
        key: 'Sometimes',
        label: 'Mgbe ???f???d???',
      },
      {
        key: 'Never',
        label: '??? d???gh??? mgbe',
      },
    ],
    // Recent Contacts
    '4': '4. Ndi Ana-akpo',
    '4subtitle': 'Ole ka otutu ndi mmadu siri zute gi na ubochi iri n???abuo?',
    '4a': 'Aha K???ntakt???',
    '4aplaceholder': 'Tinye aha k???ntakt??? ...',
    '4b': 'N???mba Ekwent???',
    '4c': 'Adrees???',
    '4cplaceholder': 'Tinye adrees??? ...',
    '4d': 'Nwoke',
    '4dplaceholder': 'H???r??? nwoke',
    '4notice': 'Any??? ga-akp??? nd??? k???ntakt??? ??? nyere iji lelee ah???ike ha.',
  },
}

export default RISK_ASSESSMENT_LANGUAGES
