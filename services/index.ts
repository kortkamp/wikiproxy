import axios from "axios";

interface FirstSectionData {
  httpStatus: number;
  htmlData: string;
  sectionsData: string;
}
export async function GetFirstSection(language: string, article:string){
  const url = `https://${language}.wikipedia.org/w/api.php?action=parse&page=${encodeURI(article)}&mobileformat=&prop=text&section=0&format=json&effectivelanglinks=&redirects=`
  const sectionsUrl = `https://${language}.wikipedia.org/w/api.php?action=parse&page=${encodeURI(article)}&prop=sections&format=json`

  try{
    const { data:sectionsData } = await axios.get(sectionsUrl);
    const  { data } = await axios.get(url);

    const htmlData = data.parse.text['*'].replace(/\/wiki\//g, `/${language}/`);
    
    return {
        httpStatus: 200,
        htmlData,
        sectionsData
    }
  }
  catch (err){
    return {
      httpStatus: 404,
    }
  }
}


export async function GetFeatured(){

  return (
    {
      "tfa": {
        "type": "standard",
        "title": "British_logistics_in_the_Falklands_War",
        "displaytitle": "British logistics in the Falklands War",
        "namespace": {
          "id": 0,
          "text": ""
        },
        "wikibase_item": "Q4971392",
        "titles": {
          "canonical": "British_logistics_in_the_Falklands_War",
          "normalized": "British logistics in the Falklands War",
          "display": "British logistics in the Falklands War"
        },
        "pageid": 14514637,
        "thumbnail": {
          "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Wessex_1982.JPG/640px-Wessex_1982.JPG",
          "width": 640,
          "height": 427
        },
        "originalimage": {
          "source": "https://upload.wikimedia.org/wikipedia/commons/6/62/Wessex_1982.JPG",
          "width": 1522,
          "height": 1016
        },
        "lang": "en",
        "dir": "ltr",
        "revision": "1057578399",
        "tid": "7ead2080-504a-11ec-912b-25c3af03fe33",
        "timestamp": "2021-11-28T12:55:32Z",
        "description": "Military supplies, 1982",
        "description_source": "local",
        "content_urls": {
          "desktop": {
            "page": "https://en.wikipedia.org/wiki/British_logistics_in_the_Falklands_War",
            "revisions": "https://en.wikipedia.org/wiki/British_logistics_in_the_Falklands_War?action=history",
            "edit": "https://en.wikipedia.org/wiki/British_logistics_in_the_Falklands_War?action=edit",
            "talk": "https://en.wikipedia.org/wiki/Talk:British_logistics_in_the_Falklands_War"
          },
          "mobile": {
            "page": "https://en.m.wikipedia.org/wiki/British_logistics_in_the_Falklands_War",
            "revisions": "https://en.m.wikipedia.org/wiki/Special:History/British_logistics_in_the_Falklands_War",
            "edit": "https://en.m.wikipedia.org/wiki/British_logistics_in_the_Falklands_War?action=edit",
            "talk": "https://en.m.wikipedia.org/wiki/Talk:British_logistics_in_the_Falklands_War"
          }
        },
        "extract": "The 1982 British military campaign to recapture the Falkland Islands depended on complex logistical arrangements. The logistical difficulties of operating 7,000 nautical miles from home were formidable. The Argentine invasion of the Falkland Islands came at a time when the Royal Navy's amphibious capability was being run down; but it still possessed the aircraft carriers HMS Hermes and Invincible, the landing platform dock (LPD) ships HMS Fearless and Intrepid, and six landing ship logistics (LSL) ships. To provide the necessary logistic support, the Royal Navy's ships were augmented by ships taken up from trade (STUFT).",
        "extract_html": "<p>The 1982 British military campaign to recapture the Falkland Islands depended on complex logistical arrangements. The logistical difficulties of operating 7,000 nautical miles from home were formidable. The Argentine invasion of the Falkland Islands came at a time when the Royal Navy's amphibious capability was being run down; but it still possessed the aircraft carriers <span>HMS <i>Hermes</i></span> and <span><i>Invincible</i></span>, the landing platform dock (LPD) ships <span>HMS <i>Fearless</i></span> and <span><i>Intrepid</i></span>, and six landing ship logistics (LSL) ships. To provide the necessary logistic support, the Royal Navy's ships were augmented by ships taken up from trade (STUFT).</p>",
        "normalizedtitle": "British logistics in the Falklands War"
      },
      "mostread": {
        "date": "2021-11-27Z",
        "articles": [
          {
            "views": 713415,
            "rank": 3,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 11094
              },
              {
                "date": "2021-11-24Z",
                "views": 10851
              },
              {
                "date": "2021-11-25Z",
                "views": 10095
              },
              {
                "date": "2021-11-26Z",
                "views": 208423
              },
              {
                "date": "2021-11-27Z",
                "views": 713415
              }
            ],
            "type": "standard",
            "title": "Stephen_Sondheim",
            "displaytitle": "Stephen Sondheim",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q153579",
            "titles": {
              "canonical": "Stephen_Sondheim",
              "normalized": "Stephen Sondheim",
              "display": "Stephen Sondheim"
            },
            "pageid": 29268,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Stephen_Sondheim_-_smoking.JPG/255px-Stephen_Sondheim_-_smoking.JPG",
              "width": 255,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/Stephen_Sondheim_-_smoking.JPG",
              "width": 464,
              "height": 582
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057574273",
            "tid": "e96ac6d0-5044-11ec-b9a6-e70e04800e50",
            "timestamp": "2021-11-28T12:15:30Z",
            "description": "American composer and lyricist (1930–2021)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Stephen_Sondheim",
                "revisions": "https://en.wikipedia.org/wiki/Stephen_Sondheim?action=history",
                "edit": "https://en.wikipedia.org/wiki/Stephen_Sondheim?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Stephen_Sondheim"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Stephen_Sondheim",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Stephen_Sondheim",
                "edit": "https://en.m.wikipedia.org/wiki/Stephen_Sondheim?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Stephen_Sondheim"
              }
            },
            "extract": "Stephen Joshua Sondheim was an American composer and lyricist. One of the most important figures in 20th-century musical theater, Sondheim was praised for having \"reinvented the American musical\" with shows that tackled \"unexpected themes that range far beyond the [genre's] traditional subjects\" with \"music and lyrics of unprecedented complexity and sophistication\". His shows addressed \"darker, more harrowing elements of the human experience\", with songs often tinged with \"ambivalence\" about various aspects of life.",
            "extract_html": "<p><b>Stephen Joshua Sondheim</b> was an American composer and lyricist. One of the most important figures in 20th-century musical theater, Sondheim was praised for having \"reinvented the American musical\" with shows that tackled \"unexpected themes that range far beyond the [genre's] traditional subjects\" with \"music and lyrics of unprecedented complexity and sophistication\". His shows addressed \"darker, more harrowing elements of the human experience\", with songs often tinged with \"ambivalence\" about various aspects of life.</p>",
            "normalizedtitle": "Stephen Sondheim"
          },
          {
            "views": 296042,
            "rank": 4,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 191
              },
              {
                "date": "2021-11-24Z",
                "views": 180
              },
              {
                "date": "2021-11-25Z",
                "views": 163
              },
              {
                "date": "2021-11-26Z",
                "views": 139618
              },
              {
                "date": "2021-11-27Z",
                "views": 296042
              }
            ],
            "type": "standard",
            "title": "Omicron",
            "displaytitle": "Omicron",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q14408",
            "titles": {
              "canonical": "Omicron",
              "normalized": "Omicron",
              "display": "Omicron"
            },
            "pageid": 166738,
            "lang": "en",
            "dir": "ltr",
            "revision": "1057545423",
            "tid": "2d9a2340-501e-11ec-8aa8-99c249a400ec",
            "timestamp": "2021-11-28T07:38:25Z",
            "description": "Letter in the Greek alphabet",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Omicron",
                "revisions": "https://en.wikipedia.org/wiki/Omicron?action=history",
                "edit": "https://en.wikipedia.org/wiki/Omicron?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Omicron"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Omicron",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Omicron",
                "edit": "https://en.m.wikipedia.org/wiki/Omicron?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Omicron"
              }
            },
            "extract": "Omicron is the 15th letter of the Greek alphabet. In the system of Greek numerals it has a value of 70. This letter is derived from the Phoenician letter ayin: . In classical Greek, omicron represented the sound in contrast to omega and ου. In modern Greek, omicron represents the mid back rounded vowel, the same sound as omega. Letters that arose from omicron include Roman O and Cyrillic O.",
            "extract_html": "<p><b>Omicron</b> is the 15th letter of the Greek alphabet. In the system of Greek numerals it has a value of 70. This letter is derived from the Phoenician letter ayin: <span><span><img src=\"//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Phoenician_ayin.svg/20px-Phoenician_ayin.svg.png\" decoding=\"async\" height=\"20\" width=\"20\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Phoenician_ayin.svg/30px-Phoenician_ayin.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Phoenician_ayin.svg/40px-Phoenician_ayin.svg.png 2x\" /></span></span>. In classical Greek, omicron represented the sound in contrast to <i>omega</i> and <i>ου</i>. In modern Greek, omicron represents the mid back rounded vowel, the same sound as omega. Letters that arose from omicron include Roman O and Cyrillic O.</p>",
            "normalizedtitle": "Omicron"
          },
          {
            "views": 189171,
            "rank": 5,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 8983
              },
              {
                "date": "2021-11-24Z",
                "views": 8828
              },
              {
                "date": "2021-11-25Z",
                "views": 12443
              },
              {
                "date": "2021-11-26Z",
                "views": 97221
              },
              {
                "date": "2021-11-27Z",
                "views": 189171
              }
            ],
            "type": "standard",
            "title": "Greek_alphabet",
            "displaytitle": "Greek alphabet",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q8216",
            "titles": {
              "canonical": "Greek_alphabet",
              "normalized": "Greek alphabet",
              "display": "Greek alphabet"
            },
            "pageid": 715909,
            "lang": "en",
            "dir": "ltr",
            "revision": "1057572305",
            "tid": "29e74a10-5042-11ec-b6f4-c59179463a37",
            "timestamp": "2021-11-28T11:55:54Z",
            "description": "Script used to write the Greek language",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Greek_alphabet",
                "revisions": "https://en.wikipedia.org/wiki/Greek_alphabet?action=history",
                "edit": "https://en.wikipedia.org/wiki/Greek_alphabet?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Greek_alphabet"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Greek_alphabet",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Greek_alphabet",
                "edit": "https://en.m.wikipedia.org/wiki/Greek_alphabet?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Greek_alphabet"
              }
            },
            "extract": "The Greek alphabet has been used to write the Greek language since the late ninth or early eighth century BC. It is derived from the earlier Phoenician alphabet, and was the first alphabetic script in history to have distinct letters for vowels as well as consonants. In Archaic and early Classical times, the Greek alphabet existed in many local variants, but, by the end of the fourth century BC, the Euclidean alphabet, with twenty-four letters, ordered from alpha to omega, had become standard and it is this version that is still used to write Greek today.The uppercase and lowercase forms of the twenty-four letters are:",
            "extract_html": "<p>The <b>Greek alphabet</b> has been used to write the Greek language since the late ninth or early eighth century BC. It is derived from the earlier Phoenician alphabet, and was the first alphabetic script in history to have distinct letters for vowels as well as consonants. In Archaic and early Classical times, the Greek alphabet existed in many local variants, but, by the end of the fourth century BC, the Euclidean alphabet, with twenty-four letters, ordered from alpha to omega, had become standard and it is this version that is still used to write Greek today.</p><dl><dd>The uppercase and lowercase forms of the twenty-four letters are:</dd></dl>",
            "normalizedtitle": "Greek alphabet"
          },
          {
            "views": 163076,
            "rank": 6,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 10184
              },
              {
                "date": "2021-11-24Z",
                "views": 23957
              },
              {
                "date": "2021-11-25Z",
                "views": 959235
              },
              {
                "date": "2021-11-26Z",
                "views": 464786
              },
              {
                "date": "2021-11-27Z",
                "views": 163076
              }
            ],
            "type": "standard",
            "title": "Ralf_Rangnick",
            "displaytitle": "Ralf Rangnick",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q57902",
            "titles": {
              "canonical": "Ralf_Rangnick",
              "normalized": "Ralf Rangnick",
              "display": "Ralf Rangnick"
            },
            "pageid": 12513745,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2019-03-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_1._Bundesliga%2C_RB_Leipzig_-_Hertha_BSC_StP_3705_LR10_by_Stepro_%28cropped%29.jpg/218px-2019-03-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_1._Bundesliga%2C_RB_Leipzig_-_Hertha_BSC_StP_3705_LR10_by_Stepro_%28cropped%29.jpg",
              "width": 218,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/5/52/2019-03-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_1._Bundesliga%2C_RB_Leipzig_-_Hertha_BSC_StP_3705_LR10_by_Stepro_%28cropped%29.jpg",
              "width": 1809,
              "height": 2657
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057555789",
            "tid": "fb5fad10-502b-11ec-b37f-b5286488382c",
            "timestamp": "2021-11-28T09:17:07Z",
            "description": "German professional football manager",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Ralf_Rangnick",
                "revisions": "https://en.wikipedia.org/wiki/Ralf_Rangnick?action=history",
                "edit": "https://en.wikipedia.org/wiki/Ralf_Rangnick?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Ralf_Rangnick"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Ralf_Rangnick",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Ralf_Rangnick",
                "edit": "https://en.m.wikipedia.org/wiki/Ralf_Rangnick?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Ralf_Rangnick"
              }
            },
            "extract": "Ralf Rangnick is a German professional football manager, sports executive, and former player who is currently manager of sports and development at Lokomotiv Moscow.",
            "extract_html": "<p><b>Ralf Rangnick</b> is a German professional football manager, sports executive, and former player who is currently manager of sports and development at Lokomotiv Moscow.</p>",
            "normalizedtitle": "Ralf Rangnick"
          },
          {
            "views": 159250,
            "rank": 7,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 134275
              },
              {
                "date": "2021-11-24Z",
                "views": 125949
              },
              {
                "date": "2021-11-25Z",
                "views": 131436
              },
              {
                "date": "2021-11-26Z",
                "views": 137437
              },
              {
                "date": "2021-11-27Z",
                "views": 159250
              }
            ],
            "type": "standard",
            "title": "Bible",
            "displaytitle": "Bible",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q1845",
            "titles": {
              "canonical": "Bible",
              "normalized": "Bible",
              "display": "Bible"
            },
            "pageid": 3390,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/320px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
              "width": 320,
              "height": 200
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
              "width": 1920,
              "height": 1200
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057573195",
            "tid": "68d0fb80-5043-11ec-9a9b-f97b9728a62d",
            "timestamp": "2021-11-28T12:04:44Z",
            "description": "Collection of religious texts in Christianity, Judaism and other faiths",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Bible",
                "revisions": "https://en.wikipedia.org/wiki/Bible?action=history",
                "edit": "https://en.wikipedia.org/wiki/Bible?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Bible"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Bible",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Bible",
                "edit": "https://en.m.wikipedia.org/wiki/Bible?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Bible"
              }
            },
            "extract": "The Bible is a collection of religious texts, writings, or scriptures sacred in Christianity, Judaism, Samaritanism, Islam, Rastafari, and many other faiths. It appears in the form of an anthology, a compilation of texts of a variety of forms that are all linked by the belief that they are collectively revelations of God. These texts include theologically-focused historical accounts, hymns, prayers, proverbs, parables, didactic letters, admonitions, essays, poetry, and prophecies. Believers also generally consider the Bible to be a product of divine inspiration.",
            "extract_html": "<p>The <b>Bible</b> is a collection of religious texts, writings, or scriptures sacred in Christianity, Judaism, Samaritanism, Islam, Rastafari, and many other faiths. It appears in the form of an anthology, a compilation of texts of a variety of forms that are all linked by the belief that they are collectively revelations of God. These texts include theologically-focused historical accounts, hymns, prayers, proverbs, parables, didactic letters, admonitions, essays, poetry, and prophecies. Believers also generally consider the Bible to be a product of divine inspiration.</p>",
            "normalizedtitle": "Bible"
          },
          {
            "views": 153342,
            "rank": 8,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 147405
              },
              {
                "date": "2021-11-24Z",
                "views": 148707
              },
              {
                "date": "2021-11-25Z",
                "views": 151651
              },
              {
                "date": "2021-11-26Z",
                "views": 151491
              },
              {
                "date": "2021-11-27Z",
                "views": 153342
              }
            ],
            "type": "standard",
            "title": "Cleopatra",
            "displaytitle": "Cleopatra",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q635",
            "titles": {
              "canonical": "Cleopatra",
              "normalized": "Cleopatra",
              "display": "Cleopatra"
            },
            "pageid": 60827,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg/241px-Kleopatra-VII.-Altes-Museum-Berlin1.jpg",
              "width": 241,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg",
              "width": 1149,
              "height": 1523
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057050791",
            "tid": "c16549e0-4fad-11ec-b41b-e38ddb6df19d",
            "timestamp": "2021-11-25T04:13:53Z",
            "description": "Last active pharaoh of Ptolemaic Egypt",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Cleopatra",
                "revisions": "https://en.wikipedia.org/wiki/Cleopatra?action=history",
                "edit": "https://en.wikipedia.org/wiki/Cleopatra?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Cleopatra"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Cleopatra",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Cleopatra",
                "edit": "https://en.m.wikipedia.org/wiki/Cleopatra?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Cleopatra"
              }
            },
            "extract": "Cleopatra VII Philopator was Queen of the Ptolemaic Kingdom of Egypt, and its last active ruler. A member of the Ptolemaic dynasty, she was a descendant of its founder Ptolemy I Soter, a Macedonian Greek general and companion of Alexander the Great. After the death of Cleopatra, Egypt became a province of the Roman Empire, marking the end of the second to last Hellenistic state and the age that had lasted since the reign of Alexander. Her native language was Koine Greek, and she was the only Ptolemaic ruler to learn the Egyptian language.",
            "extract_html": "<p><b>Cleopatra VII Philopator</b> was Queen of the Ptolemaic Kingdom of Egypt, and its last active ruler. A member of the Ptolemaic dynasty, she was a descendant of its founder Ptolemy I Soter, a Macedonian Greek general and companion of Alexander the Great. After the death of Cleopatra, Egypt became a province of the Roman Empire, marking the end of the second to last Hellenistic state and the age that had lasted since the reign of Alexander. Her native language was Koine Greek, and she was the only Ptolemaic ruler to learn the Egyptian language.</p>",
            "normalizedtitle": "Cleopatra"
          },
          {
            "views": 150862,
            "rank": 9,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 74280
              },
              {
                "date": "2021-11-24Z",
                "views": 91266
              },
              {
                "date": "2021-11-25Z",
                "views": 100350
              },
              {
                "date": "2021-11-26Z",
                "views": 120361
              },
              {
                "date": "2021-11-27Z",
                "views": 150862
              }
            ],
            "type": "standard",
            "title": "Patrizia_Reggiani",
            "displaytitle": "Patrizia Reggiani",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q7148087",
            "titles": {
              "canonical": "Patrizia_Reggiani",
              "normalized": "Patrizia Reggiani",
              "display": "Patrizia Reggiani"
            },
            "pageid": 33489285,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Patrizia_Reggiani.jpg/249px-Patrizia_Reggiani.jpg",
              "width": 249,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Patrizia_Reggiani.jpg",
              "width": 883,
              "height": 1133
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057554250",
            "tid": "c56d2b30-5029-11ec-b5a2-359b23a38d5e",
            "timestamp": "2021-11-28T09:01:24Z",
            "description": "Italian socialite and criminal (born 1948)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Patrizia_Reggiani",
                "revisions": "https://en.wikipedia.org/wiki/Patrizia_Reggiani?action=history",
                "edit": "https://en.wikipedia.org/wiki/Patrizia_Reggiani?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Patrizia_Reggiani"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Patrizia_Reggiani",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Patrizia_Reggiani",
                "edit": "https://en.m.wikipedia.org/wiki/Patrizia_Reggiani?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Patrizia_Reggiani"
              }
            },
            "extract": "Patrizia Reggiani is an Italian socialite who was convicted in a highly publicized trial of hiring a hitman to kill her ex-husband Maurizio Gucci. She was dubbed \"The Black Widow\" by the Italian press for plotting the murder of her husband.",
            "extract_html": "<p><b>Patrizia Reggiani</b> is an Italian socialite who was convicted in a highly publicized trial of hiring a hitman to kill her ex-husband Maurizio Gucci. She was dubbed \"<b>The Black Widow</b>\" by the Italian press for plotting the murder of her husband.</p>",
            "normalizedtitle": "Patrizia Reggiani"
          },
          {
            "views": 150427,
            "rank": 10,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 11737
              },
              {
                "date": "2021-11-24Z",
                "views": 14115
              },
              {
                "date": "2021-11-25Z",
                "views": 13768
              },
              {
                "date": "2021-11-26Z",
                "views": 16672
              },
              {
                "date": "2021-11-27Z",
                "views": 150427
              }
            ],
            "type": "standard",
            "title": "Michigan–Ohio_State_football_rivalry",
            "displaytitle": "Michigan–Ohio State football rivalry",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q6837857",
            "titles": {
              "canonical": "Michigan–Ohio_State_football_rivalry",
              "normalized": "Michigan–Ohio State football rivalry",
              "display": "Michigan–Ohio State football rivalry"
            },
            "pageid": 3280664,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/320px-Michigan_Wolverines_logo.svg.png",
              "width": 320,
              "height": 231
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/294px-Michigan_Wolverines_logo.svg.png",
              "width": 294,
              "height": 212
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057551955",
            "tid": "606f29c0-5026-11ec-a79e-334d56f27fc2",
            "timestamp": "2021-11-28T08:37:04Z",
            "description": "College football rivalry in the United States",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Michigan%E2%80%93Ohio_State_football_rivalry",
                "revisions": "https://en.wikipedia.org/wiki/Michigan%E2%80%93Ohio_State_football_rivalry?action=history",
                "edit": "https://en.wikipedia.org/wiki/Michigan%E2%80%93Ohio_State_football_rivalry?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Michigan%E2%80%93Ohio_State_football_rivalry"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Michigan%E2%80%93Ohio_State_football_rivalry",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Michigan%E2%80%93Ohio_State_football_rivalry",
                "edit": "https://en.m.wikipedia.org/wiki/Michigan%E2%80%93Ohio_State_football_rivalry?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Michigan%E2%80%93Ohio_State_football_rivalry"
              }
            },
            "extract": "The Michigan–Ohio State football rivalry, referred to as The Game by some followers, is an American college football rivalry game played annually between the University of Michigan Wolverines and the Ohio State University Buckeyes. Both teams are considered to be amongst the most successful in NCAA division football. It has gathered profound national interest as many of the games determined the Big Ten Conference title and the resulting Rose Bowl Game match ups, as well the outcome of the NCAA division I college football championship. In 2000, the game was ranked by ESPN as the greatest North American sports rivalry ever.",
            "extract_html": "<p>The <b>Michigan–Ohio State football rivalry,</b> referred to as <b>The Game</b> by some followers, is an American college football rivalry game played annually between the University of Michigan Wolverines and the Ohio State University Buckeyes. Both teams are considered to be amongst the most successful in NCAA division football. It has gathered profound national interest as many of the games determined the Big Ten Conference title and the resulting Rose Bowl Game match ups, as well the outcome of the NCAA division I college football championship. In 2000, the game was ranked by ESPN as the greatest North American sports rivalry ever.</p>",
            "normalizedtitle": "Michigan–Ohio State football rivalry"
          },
          {
            "views": 141051,
            "rank": 11,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 134539
              },
              {
                "date": "2021-11-24Z",
                "views": 121790
              },
              {
                "date": "2021-11-25Z",
                "views": 94774
              },
              {
                "date": "2021-11-26Z",
                "views": 101043
              },
              {
                "date": "2021-11-27Z",
                "views": 141051
              }
            ],
            "type": "standard",
            "title": "Jonathan_Larson",
            "displaytitle": "Jonathan Larson",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q449002",
            "titles": {
              "canonical": "Jonathan_Larson",
              "normalized": "Jonathan Larson",
              "display": "Jonathan Larson"
            },
            "pageid": 296337,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/7/70/Jonathan_Larson.jpg",
              "width": 220,
              "height": 300
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/7/70/Jonathan_Larson.jpg",
              "width": 220,
              "height": 300
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057393905",
            "tid": "af570cb0-4f6d-11ec-a7ae-350c6cbacdbb",
            "timestamp": "2021-11-27T10:34:57Z",
            "description": "American composer and playwright (1960–1996)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Jonathan_Larson",
                "revisions": "https://en.wikipedia.org/wiki/Jonathan_Larson?action=history",
                "edit": "https://en.wikipedia.org/wiki/Jonathan_Larson?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Jonathan_Larson"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Jonathan_Larson",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Jonathan_Larson",
                "edit": "https://en.m.wikipedia.org/wiki/Jonathan_Larson?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Jonathan_Larson"
              }
            },
            "extract": "Jonathan David Larson was an American composer, lyricist, and playwright noted for exploring the social issues of multiculturalism, addiction, and homophobia in his work. Typical examples of his use of these themes are found in his musicals Rent and Tick, Tick... Boom! He received three posthumous Tony Awards and a posthumous Pulitzer Prize for Drama for the rock musical Rent.",
            "extract_html": "<p><b>Jonathan David Larson</b> was an American composer, lyricist, and playwright noted for exploring the social issues of multiculturalism, addiction, and homophobia in his work. Typical examples of his use of these themes are found in his musicals <i>Rent</i> and <i>Tick, Tick... Boom!</i> He received three posthumous Tony Awards and a posthumous Pulitzer Prize for Drama for the rock musical <i>Rent</i>.</p>",
            "normalizedtitle": "Jonathan Larson"
          },
          {
            "views": 141023,
            "rank": 12,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 61860
              },
              {
                "date": "2021-11-24Z",
                "views": 81790
              },
              {
                "date": "2021-11-25Z",
                "views": 90840
              },
              {
                "date": "2021-11-26Z",
                "views": 108758
              },
              {
                "date": "2021-11-27Z",
                "views": 141023
              }
            ],
            "type": "standard",
            "title": "Maurizio_Gucci",
            "displaytitle": "Maurizio Gucci",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q3852623",
            "titles": {
              "canonical": "Maurizio_Gucci",
              "normalized": "Maurizio Gucci",
              "display": "Maurizio Gucci"
            },
            "pageid": 2084316,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Maurizio_Gucci.jpg/260px-Maurizio_Gucci.jpg",
              "width": 260,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Maurizio_Gucci.jpg",
              "width": 600,
              "height": 738
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057583841",
            "tid": "cad0d720-5051-11ec-b79d-7f37bf1266b4",
            "timestamp": "2021-11-28T13:47:50Z",
            "description": "Italian businessman (1948–1995)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Maurizio_Gucci",
                "revisions": "https://en.wikipedia.org/wiki/Maurizio_Gucci?action=history",
                "edit": "https://en.wikipedia.org/wiki/Maurizio_Gucci?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Maurizio_Gucci"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Maurizio_Gucci",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Maurizio_Gucci",
                "edit": "https://en.m.wikipedia.org/wiki/Maurizio_Gucci?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Maurizio_Gucci"
              }
            },
            "extract": " Maurizio Gucci (26 September 1948 – 27 March 1995) was an Italian businessman and the one-time head of the Gucci fashion house. He was the son of actor Rodolfo Gucci, and grandson of the company's founder Guccio Gucci. On 27 March 1995, he was shot dead at age 46 by a hitman hired by his ex-wife Patrizia Reggiani.",
            "extract_html": "<p><b> Maurizio Gucci </b>(26 September 1948 – 27 March 1995) was an Italian businessman and the one-time head of the Gucci fashion house. He was the son of actor Rodolfo Gucci, and grandson of the company's founder Guccio Gucci. On 27 March 1995, he was shot dead at age 46 by a hitman hired by his ex-wife Patrizia Reggiani.</p>",
            "normalizedtitle": "Maurizio Gucci"
          },
          {
            "views": 124467,
            "rank": 13,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 768
              },
              {
                "date": "2021-11-24Z",
                "views": 772
              },
              {
                "date": "2021-11-25Z",
                "views": 904
              },
              {
                "date": "2021-11-26Z",
                "views": 39545
              },
              {
                "date": "2021-11-27Z",
                "views": 124467
              }
            ],
            "type": "standard",
            "title": "Gary_Speed",
            "displaytitle": "Gary Speed",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q202153",
            "titles": {
              "canonical": "Gary_Speed",
              "normalized": "Gary Speed",
              "display": "Gary Speed"
            },
            "pageid": 1311995,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gary_Speed_2011.jpg/213px-Gary_Speed_2011.jpg",
              "width": 213,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gary_Speed_2011.jpg/3168px-Gary_Speed_2011.jpg",
              "width": 3168,
              "height": 4752
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057556618",
            "tid": "d6cdfe10-502c-11ec-9d34-a1972940d20e",
            "timestamp": "2021-11-28T09:23:18Z",
            "description": "Welsh footballer and manager (1969-2011)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Gary_Speed",
                "revisions": "https://en.wikipedia.org/wiki/Gary_Speed?action=history",
                "edit": "https://en.wikipedia.org/wiki/Gary_Speed?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Gary_Speed"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Gary_Speed",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Gary_Speed",
                "edit": "https://en.m.wikipedia.org/wiki/Gary_Speed?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Gary_Speed"
              }
            },
            "extract": "Gary Andrew Speed, MBE was a Welsh professional footballer and manager.",
            "extract_html": "<p><b>Gary Andrew Speed</b>, MBE was a Welsh professional footballer and manager.</p>",
            "normalizedtitle": "Gary Speed"
          },
          {
            "views": 116221,
            "rank": 14,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 37830
              },
              {
                "date": "2021-11-24Z",
                "views": 248193
              },
              {
                "date": "2021-11-25Z",
                "views": 215154
              },
              {
                "date": "2021-11-26Z",
                "views": 144304
              },
              {
                "date": "2021-11-27Z",
                "views": 116221
              }
            ],
            "type": "standard",
            "title": "Hawkeye_(2021_TV_series)",
            "displaytitle": "<i>Hawkeye</i> (2021 TV series)",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q65980843",
            "titles": {
              "canonical": "Hawkeye_(2021_TV_series)",
              "normalized": "Hawkeye (2021 TV series)",
              "display": "<i>Hawkeye</i> (2021 TV series)"
            },
            "pageid": 60463374,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Hawkeye_%282021_TV_series%29_logo.png/320px-Hawkeye_%282021_TV_series%29_logo.png",
              "width": 320,
              "height": 180
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/2/23/Hawkeye_%282021_TV_series%29_logo.png",
              "width": 422,
              "height": 237
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057538369",
            "tid": "b1c839e0-5014-11ec-b8d4-21b3ddc0b59b",
            "timestamp": "2021-11-28T06:30:26Z",
            "description": "American streaming television miniseries",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Hawkeye_(2021_TV_series)",
                "revisions": "https://en.wikipedia.org/wiki/Hawkeye_(2021_TV_series)?action=history",
                "edit": "https://en.wikipedia.org/wiki/Hawkeye_(2021_TV_series)?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Hawkeye_(2021_TV_series)"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Hawkeye_(2021_TV_series)",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Hawkeye_(2021_TV_series)",
                "edit": "https://en.m.wikipedia.org/wiki/Hawkeye_(2021_TV_series)?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Hawkeye_(2021_TV_series)"
              }
            },
            "extract": "Hawkeye is an American television miniseries created by Jonathan Igla for the streaming service Disney+, based on Marvel Comics featuring the characters Clint Barton / Hawkeye and Kate Bishop / Hawkeye. It is the fifth television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise and taking place after the events of the film Avengers: Endgame (2019). Igla serves as head writer with Rhys Thomas leading the directing team.",
            "extract_html": "<p><i><b>Hawkeye</b></i> is an American television miniseries created by Jonathan Igla for the streaming service Disney+, based on Marvel Comics featuring the characters Clint Barton / Hawkeye and Kate Bishop / Hawkeye. It is the fifth television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise and taking place after the events of the film <i>Avengers: Endgame</i> (2019). Igla serves as head writer with Rhys Thomas leading the directing team.</p>",
            "normalizedtitle": "Hawkeye (2021 TV series)"
          },
          {
            "views": 113174,
            "rank": 15,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 86129
              },
              {
                "date": "2021-11-24Z",
                "views": 91556
              },
              {
                "date": "2021-11-25Z",
                "views": 97488
              },
              {
                "date": "2021-11-26Z",
                "views": 102470
              },
              {
                "date": "2021-11-27Z",
                "views": 113174
              }
            ],
            "type": "standard",
            "title": "House_of_Gucci",
            "displaytitle": "<i>House of Gucci</i>",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q105549749",
            "titles": {
              "canonical": "House_of_Gucci",
              "normalized": "House of Gucci",
              "display": "<i>House of Gucci</i>"
            },
            "pageid": 62218574,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/House.of.Gucci.film.jpeg/216px-House.of.Gucci.film.jpeg",
              "width": 216,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/f/fe/House.of.Gucci.film.jpeg",
              "width": 259,
              "height": 384
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057537322",
            "tid": "3c622b30-5013-11ec-9795-33c5714a5e21",
            "timestamp": "2021-11-28T06:20:03Z",
            "description": "2021 American film by Ridley Scott",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/House_of_Gucci",
                "revisions": "https://en.wikipedia.org/wiki/House_of_Gucci?action=history",
                "edit": "https://en.wikipedia.org/wiki/House_of_Gucci?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:House_of_Gucci"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/House_of_Gucci",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/House_of_Gucci",
                "edit": "https://en.m.wikipedia.org/wiki/House_of_Gucci?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:House_of_Gucci"
              }
            },
            "extract": "House of Gucci is a 2021 American biographical crime drama film directed by Ridley Scott, based on the 2001 book The House of Gucci: A Sensational Story of Murder, Madness, Glamour, and Greed by Sara Gay Forden. The film follows Patrizia Reggiani and Maurizio Gucci, as their romance transforms into a fight for control of the Italian fashion brand Gucci. Jared Leto, Jeremy Irons, Salma Hayek, and Al Pacino also star.",
            "extract_html": "<p><i><b>House of Gucci</b></i> is a 2021 American biographical crime drama film directed by Ridley Scott, based on the 2001 book <i>The House of Gucci: A Sensational Story of Murder, Madness, Glamour, and Greed</i> by Sara Gay Forden. The film follows Patrizia Reggiani and Maurizio Gucci, as their romance transforms into a fight for control of the Italian fashion brand Gucci. Jared Leto, Jeremy Irons, Salma Hayek, and Al Pacino also star.</p>",
            "normalizedtitle": "House of Gucci"
          },
          {
            "views": 111951,
            "rank": 16,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 119480
              },
              {
                "date": "2021-11-24Z",
                "views": 113757
              },
              {
                "date": "2021-11-25Z",
                "views": 104947
              },
              {
                "date": "2021-11-26Z",
                "views": 108754
              },
              {
                "date": "2021-11-27Z",
                "views": 111951
              }
            ],
            "type": "standard",
            "title": "Deaths_in_2021",
            "displaytitle": "Deaths in 2021",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q104214723",
            "titles": {
              "canonical": "Deaths_in_2021",
              "normalized": "Deaths in 2021",
              "display": "Deaths in 2021"
            },
            "pageid": 65984422,
            "lang": "en",
            "dir": "ltr",
            "revision": "1057584880",
            "tid": "081e8bd0-5053-11ec-8f43-610aa7005680",
            "timestamp": "2021-11-28T13:56:37Z",
            "description": "List of notable deaths in a year",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Deaths_in_2021",
                "revisions": "https://en.wikipedia.org/wiki/Deaths_in_2021?action=history",
                "edit": "https://en.wikipedia.org/wiki/Deaths_in_2021?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Deaths_in_2021"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Deaths_in_2021",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Deaths_in_2021",
                "edit": "https://en.m.wikipedia.org/wiki/Deaths_in_2021?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Deaths_in_2021"
              }
            },
            "extract": "\n\nThe following notable deaths occurred in 2021. Names are reported under the date of death, in alphabetical order as set out in WP:NAMESORT. A typical entry reports information in the following sequence:Name, age, country of citizenship at birth, subsequent nationality, what subject was noted for, cause of death, and reference.",
            "extract_html": "<p>\n\nThe following notable deaths occurred in 2021. Names are reported under the date of death, in alphabetical order as set out in WP:NAMESORT. A typical entry reports information in the following sequence:</p><ul><li>Name, age, country of citizenship at birth, subsequent nationality, what subject was noted for, cause of death, and reference.</li></ul>",
            "normalizedtitle": "Deaths in 2021"
          },
          {
            "views": 107563,
            "rank": 17,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 13935
              },
              {
                "date": "2021-11-24Z",
                "views": 18574
              },
              {
                "date": "2021-11-25Z",
                "views": 30726
              },
              {
                "date": "2021-11-26Z",
                "views": 93363
              },
              {
                "date": "2021-11-27Z",
                "views": 107563
              }
            ],
            "type": "standard",
            "title": "Antim:_The_Final_Truth",
            "displaytitle": "<i>Antim: The Final Truth</i>",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q105077561",
            "titles": {
              "canonical": "Antim:_The_Final_Truth",
              "normalized": "Antim: The Final Truth",
              "display": "<i>Antim: The Final Truth</i>"
            },
            "pageid": 66496783,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Antim-_The_Final_Truth.jpg/258px-Antim-_The_Final_Truth.jpg",
              "width": 258,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/b/bd/Antim-_The_Final_Truth.jpg",
              "width": 284,
              "height": 352
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057558547",
            "tid": "6ac4a540-502f-11ec-9e84-874ee411b2ee",
            "timestamp": "2021-11-28T09:41:48Z",
            "description": "2021 film directed by Mahesh Manjrekar",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Antim%3A_The_Final_Truth",
                "revisions": "https://en.wikipedia.org/wiki/Antim%3A_The_Final_Truth?action=history",
                "edit": "https://en.wikipedia.org/wiki/Antim%3A_The_Final_Truth?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Antim%3A_The_Final_Truth"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Antim%3A_The_Final_Truth",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Antim%3A_The_Final_Truth",
                "edit": "https://en.m.wikipedia.org/wiki/Antim%3A_The_Final_Truth?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Antim%3A_The_Final_Truth"
              }
            },
            "extract": "Antim: The Final Truth is a 2021 Indian Hindi-language action thriller film directed by Mahesh Manjrekar and produced by Salman Khan Films. Distributed by Zee Studios, it is an adaptation of the Marathi film Mulshi Pattern, and stars Salman Khan, Aayush Sharma and Mahima Makwana.",
            "extract_html": "<p><i><b>Antim: The Final Truth</b></i> is a 2021 Indian Hindi-language action thriller film directed by Mahesh Manjrekar and produced by Salman Khan Films. Distributed by Zee Studios, it is an adaptation of the Marathi film <i>Mulshi Pattern</i>, and stars Salman Khan, Aayush Sharma and Mahima Makwana.</p>",
            "normalizedtitle": "Antim: The Final Truth"
          },
          {
            "views": 106584,
            "rank": 18,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 4463
              },
              {
                "date": "2021-11-24Z",
                "views": 5347
              },
              {
                "date": "2021-11-25Z",
                "views": 32414
              },
              {
                "date": "2021-11-26Z",
                "views": 87933
              },
              {
                "date": "2021-11-27Z",
                "views": 106584
              }
            ],
            "type": "standard",
            "title": "Let_It_Be_(Beatles_album)",
            "displaytitle": "<i>Let It Be</i> (Beatles album)",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q199585",
            "titles": {
              "canonical": "Let_It_Be_(Beatles_album)",
              "normalized": "Let It Be (Beatles album)",
              "display": "<i>Let It Be</i> (Beatles album)"
            },
            "pageid": 140537,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg",
              "width": 300,
              "height": 300
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg",
              "width": 300,
              "height": 300
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057497411",
            "tid": "42314090-4fe2-11ec-94b9-85854433ced4",
            "timestamp": "2021-11-28T00:29:19Z",
            "description": "1970 studio album by the Beatles",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Let_It_Be_(Beatles_album)",
                "revisions": "https://en.wikipedia.org/wiki/Let_It_Be_(Beatles_album)?action=history",
                "edit": "https://en.wikipedia.org/wiki/Let_It_Be_(Beatles_album)?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Let_It_Be_(Beatles_album)"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Let_It_Be_(Beatles_album)",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Let_It_Be_(Beatles_album)",
                "edit": "https://en.m.wikipedia.org/wiki/Let_It_Be_(Beatles_album)?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Let_It_Be_(Beatles_album)"
              }
            },
            "extract": "Let It Be is the twelfth and final studio album by the English rock band the Beatles. It was released on 8 May 1970, almost a month after the group's break-up, in tandem with the motion picture of the same name. Like most of the band's previous releases, the album topped record charts in many countries, including both the US and the UK. However, the critical response was generally unfavourable, and Let It Be came to be regarded as one of the most controversial rock albums in history.",
            "extract_html": "<p><i><b>Let It Be</b></i> is the twelfth and final studio album by the English rock band the Beatles. It was released on 8 May 1970, almost a month after the group's break-up, in tandem with the motion picture of the same name. Like most of the band's previous releases, the album topped record charts in many countries, including both the US and the UK. However, the critical response was generally unfavourable, and <i>Let It Be</i> came to be regarded as one of the most controversial rock albums in history.</p>",
            "normalizedtitle": "Let It Be (Beatles album)"
          },
          {
            "views": 104834,
            "rank": 19,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 27787
              },
              {
                "date": "2021-11-24Z",
                "views": 74292
              },
              {
                "date": "2021-11-25Z",
                "views": 50030
              },
              {
                "date": "2021-11-26Z",
                "views": 55818
              },
              {
                "date": "2021-11-27Z",
                "views": 104834
              }
            ],
            "type": "standard",
            "title": "Freddie_Mercury",
            "displaytitle": "Freddie Mercury",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q15869",
            "titles": {
              "canonical": "Freddie_Mercury",
              "normalized": "Freddie Mercury",
              "display": "Freddie Mercury"
            },
            "pageid": 42068,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/215px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg",
              "width": 215,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg",
              "width": 3534,
              "height": 5244
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057149079",
            "tid": "6e714770-500c-11ec-a347-2b67286182fc",
            "timestamp": "2021-11-25T19:17:40Z",
            "description": "British entertainer, lead singer of Queen (1946–1991)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Freddie_Mercury",
                "revisions": "https://en.wikipedia.org/wiki/Freddie_Mercury?action=history",
                "edit": "https://en.wikipedia.org/wiki/Freddie_Mercury?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Freddie_Mercury"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Freddie_Mercury",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Freddie_Mercury",
                "edit": "https://en.m.wikipedia.org/wiki/Freddie_Mercury?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Freddie_Mercury"
              }
            },
            "extract": "Freddie Mercury was a British singer, songwriter, record producer, and lead vocalist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he was known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman, with his highly theatrical style influencing the artistic direction of Queen.",
            "extract_html": "<p><b>Freddie Mercury</b> was a British singer, songwriter, record producer, and lead vocalist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he was known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman, with his highly theatrical style influencing the artistic direction of Queen.</p>",
            "normalizedtitle": "Freddie Mercury"
          },
          {
            "views": 98746,
            "rank": 20,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 132044
              },
              {
                "date": "2021-11-24Z",
                "views": 89507
              },
              {
                "date": "2021-11-25Z",
                "views": 68775
              },
              {
                "date": "2021-11-26Z",
                "views": 65083
              },
              {
                "date": "2021-11-27Z",
                "views": 98746
              }
            ],
            "type": "standard",
            "title": "Adele",
            "displaytitle": "Adele",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q23215",
            "titles": {
              "canonical": "Adele",
              "normalized": "Adele",
              "display": "Adele"
            },
            "pageid": 13041163,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Adele_for_Vogue_in_2021.png/235px-Adele_for_Vogue_in_2021.png",
              "width": 235,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/5/52/Adele_for_Vogue_in_2021.png",
              "width": 413,
              "height": 562
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057276801",
            "tid": "3e47ad90-4f22-11ec-ba71-695d47dd9017",
            "timestamp": "2021-11-26T16:17:14Z",
            "description": "English singer and songwriter (born 1988)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Adele",
                "revisions": "https://en.wikipedia.org/wiki/Adele?action=history",
                "edit": "https://en.wikipedia.org/wiki/Adele?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Adele"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Adele",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Adele",
                "edit": "https://en.m.wikipedia.org/wiki/Adele?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Adele"
              }
            },
            "extract": "Adele Laurie Blue Adkins is an English songwriter and singer. She is one of the world's best-selling music artists, with sales of over 120 million records. After graduating in arts from the BRIT School in 2006, Adele signed a record deal with XL Recordings. Her debut album, 19, was released in 2008 and spawned the UK top-five singles \"Chasing Pavements\" and \"Make You Feel My Love\". The album was certified 8× platinum in the UK and triple platinum in the US. Adele was honored with the Brit Award for Rising Star as well as the Grammy Award for Best New Artist.",
            "extract_html": "<p><b>Adele Laurie Blue Adkins</b> is an English songwriter and singer. She is one of the world's best-selling music artists, with sales of over 120 million records. After graduating in arts from the BRIT School in 2006, Adele signed a record deal with XL Recordings. Her debut album, <i>19</i>, was released in 2008 and spawned the UK top-five singles \"Chasing Pavements\" and \"Make You Feel My Love\". The album was certified 8× platinum in the UK and triple platinum in the US. Adele was honored with the Brit Award for Rising Star as well as the Grammy Award for Best New Artist.</p>",
            "normalizedtitle": "Adele"
          },
          {
            "views": 95373,
            "rank": 21,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 66609
              },
              {
                "date": "2021-11-24Z",
                "views": 63487
              },
              {
                "date": "2021-11-25Z",
                "views": 71219
              },
              {
                "date": "2021-11-26Z",
                "views": 90658
              },
              {
                "date": "2021-11-27Z",
                "views": 95373
              }
            ],
            "type": "standard",
            "title": "Venus_Williams",
            "displaytitle": "Venus Williams",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q11578",
            "titles": {
              "canonical": "Venus_Williams",
              "normalized": "Venus Williams",
              "display": "Venus Williams"
            },
            "pageid": 167378,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Venus_Williams_2012_%28cropped%29.jpg/232px-Venus_Williams_2012_%28cropped%29.jpg",
              "width": 232,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Venus_Williams_2012_%28cropped%29.jpg",
              "width": 470,
              "height": 647
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057532118",
            "tid": "1a663be0-500c-11ec-8caa-ab8a3180eee8",
            "timestamp": "2021-11-28T05:28:41Z",
            "description": "American professional tennis player (born 1980)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Venus_Williams",
                "revisions": "https://en.wikipedia.org/wiki/Venus_Williams?action=history",
                "edit": "https://en.wikipedia.org/wiki/Venus_Williams?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Venus_Williams"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Venus_Williams",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Venus_Williams",
                "edit": "https://en.m.wikipedia.org/wiki/Venus_Williams?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Venus_Williams"
              }
            },
            "extract": "Venus Ebony Starr Williams is an American professional tennis player. A former world No. 1 in both singles and doubles, Williams is widely regarded as one of the all-time greats of the sport of tennis. Along with younger sister Serena Williams, she is credited with ushering in a new era of power and athleticism on the women's professional tennis tour.",
            "extract_html": "<p><b>Venus Ebony Starr Williams</b> is an American professional tennis player. A former world No. 1 in both singles and doubles, Williams is widely regarded as one of the all-time greats of the sport of tennis. Along with younger sister Serena Williams, she is credited with ushering in a new era of power and athleticism on the women's professional tennis tour.</p>",
            "normalizedtitle": "Venus Williams"
          },
          {
            "views": 95131,
            "rank": 22,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 82070
              },
              {
                "date": "2021-11-24Z",
                "views": 71812
              },
              {
                "date": "2021-11-25Z",
                "views": 64876
              },
              {
                "date": "2021-11-26Z",
                "views": 97882
              },
              {
                "date": "2021-11-27Z",
                "views": 95131
              }
            ],
            "type": "standard",
            "title": "The_Wheel_of_Time_(TV_series)",
            "displaytitle": "<i>The Wheel of Time</i> (TV series)",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q60746841",
            "titles": {
              "canonical": "The_Wheel_of_Time_(TV_series)",
              "normalized": "The Wheel of Time (TV series)",
              "display": "<i>The Wheel of Time</i> (TV series)"
            },
            "pageid": 58636426,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/The_Wheel_of_Time_Prime_Logo.jpg/320px-The_Wheel_of_Time_Prime_Logo.jpg",
              "width": 320,
              "height": 180
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/c/cd/The_Wheel_of_Time_Prime_Logo.jpg",
              "width": 421,
              "height": 237
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057575489",
            "tid": "6bcc32c0-5046-11ec-95fc-5503d98e5518",
            "timestamp": "2021-11-28T12:26:27Z",
            "description": "2021 American fantasy television series",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/The_Wheel_of_Time_(TV_series)",
                "revisions": "https://en.wikipedia.org/wiki/The_Wheel_of_Time_(TV_series)?action=history",
                "edit": "https://en.wikipedia.org/wiki/The_Wheel_of_Time_(TV_series)?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:The_Wheel_of_Time_(TV_series)"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/The_Wheel_of_Time_(TV_series)",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/The_Wheel_of_Time_(TV_series)",
                "edit": "https://en.m.wikipedia.org/wiki/The_Wheel_of_Time_(TV_series)?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:The_Wheel_of_Time_(TV_series)"
              }
            },
            "extract": "The Wheel of Time is an American epic fantasy television series released through Amazon Prime Video. The series is based on Robert Jordan's novel series of the same name and is produced by Sony Pictures Television and Amazon Studios, with Rafe Judkins serving as showrunner. The first season, consisting of eight episodes, premiered on Prime Video on November 19, 2021, with the release of the first three episodes. The remaining five are set to air on a weekly basis. A second season was announced in May 2021.",
            "extract_html": "<p><i><b>The Wheel of Time</b></i> is an American epic fantasy television series released through Amazon Prime Video. The series is based on Robert Jordan's novel series of the same name and is produced by Sony Pictures Television and Amazon Studios, with Rafe Judkins serving as showrunner. The first season, consisting of eight episodes, premiered on Prime Video on November 19, 2021, with the release of the first three episodes. The remaining five are set to air on a weekly basis. A second season was announced in May 2021.</p>",
            "normalizedtitle": "The Wheel of Time (TV series)"
          },
          {
            "views": 93516,
            "rank": 23,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 64013
              },
              {
                "date": "2021-11-24Z",
                "views": 63765
              },
              {
                "date": "2021-11-25Z",
                "views": 72545
              },
              {
                "date": "2021-11-26Z",
                "views": 92793
              },
              {
                "date": "2021-11-27Z",
                "views": 93516
              }
            ],
            "type": "standard",
            "title": "Richard_Williams_(tennis_coach)",
            "displaytitle": "Richard Williams (tennis coach)",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q1959913",
            "titles": {
              "canonical": "Richard_Williams_(tennis_coach)",
              "normalized": "Richard Williams (tennis coach)",
              "display": "Richard Williams (tennis coach)"
            },
            "pageid": 1941523,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Richard_Williams_at_Acura_Classic.jpg/245px-Richard_Williams_at_Acura_Classic.jpg",
              "width": 245,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Richard_Williams_at_Acura_Classic.jpg",
              "width": 1100,
              "height": 1437
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057548552",
            "tid": "50247740-5022-11ec-89f3-35fa9ee776b3",
            "timestamp": "2021-11-28T08:08:01Z",
            "description": "American tennis coach (born 1942)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Richard_Williams_(tennis_coach)",
                "revisions": "https://en.wikipedia.org/wiki/Richard_Williams_(tennis_coach)?action=history",
                "edit": "https://en.wikipedia.org/wiki/Richard_Williams_(tennis_coach)?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Richard_Williams_(tennis_coach)"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Richard_Williams_(tennis_coach)",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Richard_Williams_(tennis_coach)",
                "edit": "https://en.m.wikipedia.org/wiki/Richard_Williams_(tennis_coach)?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Richard_Williams_(tennis_coach)"
              }
            },
            "extract": "Richard Dove Williams Jr. is an American tennis coach and the father of Venus and Serena Williams.",
            "extract_html": "<p><b>Richard Dove Williams Jr.</b> is an American tennis coach and the father of Venus and Serena Williams.</p>",
            "normalizedtitle": "Richard Williams (tennis coach)"
          },
          {
            "views": 93324,
            "rank": 24,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 3233
              },
              {
                "date": "2021-11-24Z",
                "views": 3806
              },
              {
                "date": "2021-11-25Z",
                "views": 4117
              },
              {
                "date": "2021-11-26Z",
                "views": 5313
              },
              {
                "date": "2021-11-27Z",
                "views": 93324
              }
            ],
            "type": "standard",
            "title": "Jim_Harbaugh",
            "displaytitle": "Jim Harbaugh",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q2631300",
            "titles": {
              "canonical": "Jim_Harbaugh",
              "normalized": "Jim Harbaugh",
              "display": "Jim Harbaugh"
            },
            "pageid": 1306936,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/IX8A4236_%2844120171045%29_%28cropped%29.jpg/216px-IX8A4236_%2844120171045%29_%28cropped%29.jpg",
              "width": 216,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/7/77/IX8A4236_%2844120171045%29_%28cropped%29.jpg",
              "width": 2074,
              "height": 3072
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057586060",
            "tid": "86a77880-5054-11ec-9b0e-fd9eeae60cf1",
            "timestamp": "2021-11-28T14:07:22Z",
            "description": "American football player and coach (born 1963)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Jim_Harbaugh",
                "revisions": "https://en.wikipedia.org/wiki/Jim_Harbaugh?action=history",
                "edit": "https://en.wikipedia.org/wiki/Jim_Harbaugh?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Jim_Harbaugh"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Jim_Harbaugh",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Jim_Harbaugh",
                "edit": "https://en.m.wikipedia.org/wiki/Jim_Harbaugh?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Jim_Harbaugh"
              }
            },
            "extract": "James Joseph Harbaugh is an American football coach and former quarterback, who is the current head football coach of the Michigan Wolverines. He played college football at Michigan from 1983 to 1986 and played in the National Football League (NFL) for 14 seasons from 1987 to 2000. He then served as the head coach of the San Diego Toreros (2004–2006), the Stanford Cardinal (2007–2010), and the NFL's San Francisco 49ers (2011–2014). In 2015, Harbaugh returned to his alma mater, Michigan.",
            "extract_html": "<p><b>James Joseph Harbaugh</b> is an American football coach and former quarterback, who is the current head football coach of the Michigan Wolverines. He played college football at Michigan from 1983 to 1986 and played in the National Football League (NFL) for 14 seasons from 1987 to 2000. He then served as the head coach of the San Diego Toreros (2004–2006), the Stanford Cardinal (2007–2010), and the NFL's San Francisco 49ers (2011–2014). In 2015, Harbaugh returned to his alma mater, Michigan.</p>",
            "normalizedtitle": "Jim Harbaugh"
          },
          {
            "views": 88021,
            "rank": 25,
            "view_history": [
              {
                "date": "2021-11-26Z",
                "views": 21359
              },
              {
                "date": "2021-11-27Z",
                "views": 88021
              }
            ],
            "type": "standard",
            "title": "SARS-CoV-2_Omicron_variant",
            "displaytitle": "SARS-CoV-2 Omicron variant",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q109739412",
            "titles": {
              "canonical": "SARS-CoV-2_Omicron_variant",
              "normalized": "SARS-CoV-2 Omicron variant",
              "display": "SARS-CoV-2 Omicron variant"
            },
            "pageid": 69363482,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Coronavirus._SARS-CoV-2.png/320px-Coronavirus._SARS-CoV-2.png",
              "width": 320,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/9/94/Coronavirus._SARS-CoV-2.png",
              "width": 2048,
              "height": 2048
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057586049",
            "tid": "83b3b3f0-5054-11ec-8c2a-f7641043f0ad",
            "timestamp": "2021-11-28T14:07:18Z",
            "description": "November 2021 variant of COVID-19 virus",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/SARS-CoV-2_Omicron_variant",
                "revisions": "https://en.wikipedia.org/wiki/SARS-CoV-2_Omicron_variant?action=history",
                "edit": "https://en.wikipedia.org/wiki/SARS-CoV-2_Omicron_variant?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:SARS-CoV-2_Omicron_variant"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/SARS-CoV-2_Omicron_variant",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/SARS-CoV-2_Omicron_variant",
                "edit": "https://en.m.wikipedia.org/wiki/SARS-CoV-2_Omicron_variant?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:SARS-CoV-2_Omicron_variant"
              }
            },
            "extract": "The Omicron variant, also known by the PANGO lineage identifier B.1.1.529, GISAID clade identifier GR/484A, and Nextstrain clade identifier 21K, is a variant of SARS-CoV-2, the virus that causes COVID-19. The variant was first reported to the World Health Organization (WHO) from South Africa on 24 November 2021. On 26 November 2021, the WHO designated it as a variant of concern and named it after the Greek letter omicron.",
            "extract_html": "<p>The <b>Omicron variant</b>, also known by the PANGO lineage identifier <b>B.1.1.529</b>, GISAID clade identifier <b>GR/484A</b>, and Nextstrain clade identifier <b>21K</b>, is a variant of SARS-CoV-2, the virus that causes COVID-19. The variant was first reported to the World Health Organization (WHO) from South Africa on 24 November 2021. On 26 November 2021, the WHO designated it as a variant of concern and named it after the Greek letter omicron.</p>",
            "normalizedtitle": "SARS-CoV-2 Omicron variant"
          },
          {
            "views": 86000,
            "rank": 26,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 75533
              },
              {
                "date": "2021-11-24Z",
                "views": 66204
              },
              {
                "date": "2021-11-25Z",
                "views": 56971
              },
              {
                "date": "2021-11-26Z",
                "views": 78633
              },
              {
                "date": "2021-11-27Z",
                "views": 86000
              }
            ],
            "type": "standard",
            "title": "The_Wheel_of_Time",
            "displaytitle": "<i>The Wheel of Time</i>",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q4470",
            "titles": {
              "canonical": "The_Wheel_of_Time",
              "normalized": "The Wheel of Time",
              "display": "<i>The Wheel of Time</i>"
            },
            "pageid": 42571,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/WoT01_TheEyeOfTheWorld.jpg/209px-WoT01_TheEyeOfTheWorld.jpg",
              "width": 209,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/0/00/WoT01_TheEyeOfTheWorld.jpg",
              "width": 255,
              "height": 391
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057009574",
            "tid": "e85e6290-4f15-11ec-8064-d91967ea0e2e",
            "timestamp": "2021-11-24T21:50:46Z",
            "description": "Series of fantasy novels by Robert Jordan",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/The_Wheel_of_Time",
                "revisions": "https://en.wikipedia.org/wiki/The_Wheel_of_Time?action=history",
                "edit": "https://en.wikipedia.org/wiki/The_Wheel_of_Time?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:The_Wheel_of_Time"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/The_Wheel_of_Time",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/The_Wheel_of_Time",
                "edit": "https://en.m.wikipedia.org/wiki/The_Wheel_of_Time?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:The_Wheel_of_Time"
              }
            },
            "extract": "The Wheel of Time is a series of high fantasy novels by American author Robert Jordan, with Brandon Sanderson as a co-author for the final three novels. Originally planned as a six-book series, The Wheel of Time spanned 14 volumes, in addition to a prequel novel and two companion books. Jordan began writing the first volume, The Eye of the World, in 1984, and it was published in January 1990.",
            "extract_html": "<p><i><b>The Wheel of Time</b></i> is a series of high fantasy novels by American author Robert Jordan, with Brandon Sanderson as a co-author for the final three novels. Originally planned as a six-book series, <i>The Wheel of Time</i> spanned 14 volumes, in addition to a prequel novel and two companion books. Jordan began writing the first volume, <i>The Eye of the World</i>, in 1984, and it was published in January 1990.</p>",
            "normalizedtitle": "The Wheel of Time"
          },
          {
            "views": 85546,
            "rank": 27,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 61020
              },
              {
                "date": "2021-11-24Z",
                "views": 58535
              },
              {
                "date": "2021-11-25Z",
                "views": 65869
              },
              {
                "date": "2021-11-26Z",
                "views": 82168
              },
              {
                "date": "2021-11-27Z",
                "views": 85546
              }
            ],
            "type": "standard",
            "title": "Serena_Williams",
            "displaytitle": "Serena Williams",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q11459",
            "titles": {
              "canonical": "Serena_Williams",
              "normalized": "Serena Williams",
              "display": "Serena Williams"
            },
            "pageid": 164910,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Serena_Williams_at_2013_US_Open.jpg/243px-Serena_Williams_at_2013_US_Open.jpg",
              "width": 243,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Serena_Williams_at_2013_US_Open.jpg",
              "width": 932,
              "height": 1228
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057336197",
            "tid": "5fb22590-4f19-11ec-8aa8-99c249a400ec",
            "timestamp": "2021-11-27T00:30:51Z",
            "description": "American professional tennis player (born 1981)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Serena_Williams",
                "revisions": "https://en.wikipedia.org/wiki/Serena_Williams?action=history",
                "edit": "https://en.wikipedia.org/wiki/Serena_Williams?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Serena_Williams"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Serena_Williams",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Serena_Williams",
                "edit": "https://en.m.wikipedia.org/wiki/Serena_Williams?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Serena_Williams"
              }
            },
            "extract": "Serena Jameka Williams is an American professional tennis player, fashion designer, philanthropist, and movie producer. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court (24). The Women's Tennis Association (WTA) ranked her singles world No. 1 on eight separate occasions between 2002 and 2017. On her sixth occasion, she held the ranking for 186 consecutive weeks, tying the record set by Steffi Graf. In total, she has been WTA No. 1 for 319 weeks, which ranks third in the Open Era behind Graf and Martina Navratilova. She is the only American player, male or female, to win more than 20 slams.",
            "extract_html": "<p><b>Serena Jameka Williams</b> is an American professional tennis player, fashion designer, philanthropist, and movie producer. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court (24). The Women's Tennis Association (WTA) ranked her singles world No. 1 on eight separate occasions between 2002 and 2017. On her sixth occasion, she held the ranking for 186 consecutive weeks, tying the record set by Steffi Graf. In total, she has been WTA No. 1 for 319 weeks, which ranks third in the Open Era behind Graf and Martina Navratilova. She is the only American player, male or female, to win more than 20 slams.</p>",
            "normalizedtitle": "Serena Williams"
          },
          {
            "views": 84309,
            "rank": 28,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 57239
              },
              {
                "date": "2021-11-24Z",
                "views": 54497
              },
              {
                "date": "2021-11-25Z",
                "views": 57281
              },
              {
                "date": "2021-11-26Z",
                "views": 69985
              },
              {
                "date": "2021-11-27Z",
                "views": 84309
              }
            ],
            "type": "standard",
            "title": "No_Time_to_Die",
            "displaytitle": "<i>No Time to Die</i>",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q21534241",
            "titles": {
              "canonical": "No_Time_to_Die",
              "normalized": "No Time to Die",
              "display": "<i>No Time to Die</i>"
            },
            "pageid": 38042908,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/No_Time_to_Die_poster.jpg/320px-No_Time_to_Die_poster.jpg",
              "width": 320,
              "height": 236
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg",
              "width": 368,
              "height": 271
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057567583",
            "tid": "89451020-503b-11ec-9416-29afaec32010",
            "timestamp": "2021-11-28T11:08:28Z",
            "description": "2021 spy film and the 25th in the James Bond series",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/No_Time_to_Die",
                "revisions": "https://en.wikipedia.org/wiki/No_Time_to_Die?action=history",
                "edit": "https://en.wikipedia.org/wiki/No_Time_to_Die?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:No_Time_to_Die"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/No_Time_to_Die",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/No_Time_to_Die",
                "edit": "https://en.m.wikipedia.org/wiki/No_Time_to_Die?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:No_Time_to_Die"
              }
            },
            "extract": "No Time to Die is a 2021 spy film and the twenty-fifth in the James Bond series produced by Eon Productions. It stars Daniel Craig in his fifth and final outing as the fictional British MI6 agent James Bond. It is directed by Cary Joji Fukunaga from a screenplay by Neal Purvis, Robert Wade, Fukunaga and Phoebe Waller-Bridge. Léa Seydoux, Ben Whishaw, Naomie Harris, Jeffrey Wright, Christoph Waltz, Rory Kinnear and Ralph Fiennes reprise their roles from previous films, with Rami Malek, Lashana Lynch, Billy Magnussen, Ana de Armas, David Dencik and Dali Benssalah also starring. In this film, Bond, who has left active service with MI6, is recruited by the CIA to find a kidnapped scientist, which leads to a showdown with a powerful adversary.",
            "extract_html": "<p><i><b>No Time to Die</b></i> is a 2021 spy film and the twenty-fifth in the <span><i>James Bond</i> series</span> produced by Eon Productions. It stars Daniel Craig in his fifth and final outing as the fictional British MI6 agent James Bond. It is directed by Cary Joji Fukunaga from a screenplay by Neal Purvis, Robert Wade, Fukunaga and Phoebe Waller-Bridge. Léa Seydoux, Ben Whishaw, Naomie Harris, Jeffrey Wright, Christoph Waltz, Rory Kinnear and Ralph Fiennes reprise their roles from previous films, with Rami Malek, Lashana Lynch, Billy Magnussen, Ana de Armas, David Dencik and Dali Benssalah also starring. In this film, Bond, who has left active service with MI6, is recruited by the CIA to find a kidnapped scientist, which leads to a showdown with a powerful adversary.</p>",
            "normalizedtitle": "No Time to Die"
          },
          {
            "views": 83445,
            "rank": 29,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 16890
              },
              {
                "date": "2021-11-24Z",
                "views": 17857
              },
              {
                "date": "2021-11-25Z",
                "views": 36038
              },
              {
                "date": "2021-11-26Z",
                "views": 69303
              },
              {
                "date": "2021-11-27Z",
                "views": 83445
              }
            ],
            "type": "standard",
            "title": "The_Beatles",
            "displaytitle": "The Beatles",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q1299",
            "titles": {
              "canonical": "The_Beatles",
              "normalized": "The Beatles",
              "display": "The Beatles"
            },
            "pageid": 29812,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Fabs.JPG/320px-The_Fabs.JPG",
              "width": 320,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/d/df/The_Fabs.JPG",
              "width": 1110,
              "height": 1110
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057486063",
            "tid": "6fdf2f50-500c-11ec-b735-61218ecf3523",
            "timestamp": "2021-11-27T23:03:10Z",
            "description": "English rock band",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/The_Beatles",
                "revisions": "https://en.wikipedia.org/wiki/The_Beatles?action=history",
                "edit": "https://en.wikipedia.org/wiki/The_Beatles?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:The_Beatles"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/The_Beatles",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/The_Beatles",
                "edit": "https://en.m.wikipedia.org/wiki/The_Beatles?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:The_Beatles"
              }
            },
            "extract": "The Beatles were an English rock band, formed in Liverpool in 1960, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements.",
            "extract_html": "<p><b>The Beatles</b> were an English rock band, formed in Liverpool in 1960, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements.</p>",
            "normalizedtitle": "The Beatles"
          },
          {
            "views": 79104,
            "rank": 30,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 16111
              },
              {
                "date": "2021-11-24Z",
                "views": 13809
              },
              {
                "date": "2021-11-25Z",
                "views": 26276
              },
              {
                "date": "2021-11-26Z",
                "views": 58836
              },
              {
                "date": "2021-11-27Z",
                "views": 79104
              }
            ],
            "type": "standard",
            "title": "Paul_McCartney",
            "displaytitle": "Paul McCartney",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q2599",
            "titles": {
              "canonical": "Paul_McCartney",
              "normalized": "Paul McCartney",
              "display": "Paul McCartney"
            },
            "pageid": 13736167,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/238px-Paul_McCartney_in_October_2018.jpg",
              "width": 238,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Paul_McCartney_in_October_2018.jpg",
              "width": 1110,
              "height": 1492
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057585171",
            "tid": "73975d10-5053-11ec-bc44-5fbb8e4ab413",
            "timestamp": "2021-11-28T13:59:17Z",
            "description": "English musician, member of the Beatles",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Paul_McCartney",
                "revisions": "https://en.wikipedia.org/wiki/Paul_McCartney?action=history",
                "edit": "https://en.wikipedia.org/wiki/Paul_McCartney?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Paul_McCartney"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Paul_McCartney",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Paul_McCartney",
                "edit": "https://en.m.wikipedia.org/wiki/Paul_McCartney?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Paul_McCartney"
              }
            },
            "extract": "Sir James Paul McCartney is an English singer, songwriter, musician, and record and film producer who gained worldwide fame as co-lead vocalist, co-songwriter, and bassist for the Beatles. One of the most successful composers and performers of all time, he is known for his melodic approach to bass-playing, his versatile and wide tenor vocal range, and his musical eclecticism, exploring styles ranging from pre-rock 'n' roll pop to classical and electronica. His songwriting partnership with John Lennon remains the most successful in history.",
            "extract_html": "<p><b>Sir James Paul McCartney</b> is an English singer, songwriter, musician, and record and film producer who gained worldwide fame as co-lead vocalist, co-songwriter, and bassist for the Beatles. One of the most successful composers and performers of all time, he is known for his melodic approach to bass-playing, his versatile and wide tenor vocal range, and his musical eclecticism, exploring styles ranging from pre-rock 'n' roll pop to classical and electronica. His songwriting partnership with John Lennon remains the most successful in history.</p>",
            "normalizedtitle": "Paul McCartney"
          },
          {
            "views": 78855,
            "rank": 31,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 12788
              },
              {
                "date": "2021-11-24Z",
                "views": 17792
              },
              {
                "date": "2021-11-25Z",
                "views": 57400
              },
              {
                "date": "2021-11-26Z",
                "views": 80639
              },
              {
                "date": "2021-11-27Z",
                "views": 78855
              }
            ],
            "type": "standard",
            "title": "The_Beatles:_Get_Back",
            "displaytitle": "<i>The Beatles: Get Back</i>",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q88532913",
            "titles": {
              "canonical": "The_Beatles:_Get_Back",
              "normalized": "The Beatles: Get Back",
              "display": "<i>The Beatles: Get Back</i>"
            },
            "pageid": 63355277,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/The_Beatles%2C_Get_Back_poster.jpeg/256px-The_Beatles%2C_Get_Back_poster.jpeg",
              "width": 256,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Beatles%2C_Get_Back_poster.jpeg",
              "width": 282,
              "height": 353
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057536225",
            "tid": "b81a4c00-5011-11ec-9e84-874ee411b2ee",
            "timestamp": "2021-11-28T06:09:14Z",
            "description": "Documentary series directed by Peter Jackson",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/The_Beatles%3A_Get_Back",
                "revisions": "https://en.wikipedia.org/wiki/The_Beatles%3A_Get_Back?action=history",
                "edit": "https://en.wikipedia.org/wiki/The_Beatles%3A_Get_Back?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:The_Beatles%3A_Get_Back"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/The_Beatles%3A_Get_Back",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/The_Beatles%3A_Get_Back",
                "edit": "https://en.m.wikipedia.org/wiki/The_Beatles%3A_Get_Back?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:The_Beatles%3A_Get_Back"
              }
            },
            "extract": "The Beatles: Get Back is a 2021 documentary series directed and produced by Peter Jackson. It covers the making of the Beatles' 1970 album Let It Be, which had the working title of Get Back, and draws from material originally captured for Michael Lindsay-Hogg's 1970 documentary of the album. Originally conceived as a feature film, The Beatles: Get Back consists of three episodes with runtimes between two and three hours each, resulting in a total runtime of nearly eight hours of material. The series is presented by The Walt Disney Studios in association with Apple Corps and Wingnut Films.",
            "extract_html": "<p><i><b>The Beatles: Get Back</b></i> is a 2021 documentary series directed and produced by Peter Jackson. It covers the making of the Beatles' 1970 album <i>Let It Be</i>, which had the working title of <i>Get Back</i>, and draws from material originally captured for Michael Lindsay-Hogg's 1970 documentary of the album. Originally conceived as a feature film, <i>The Beatles: Get Back</i> consists of three episodes with runtimes between two and three hours each, resulting in a total runtime of nearly eight hours of material. The series is presented by The Walt Disney Studios in association with Apple Corps and Wingnut Films.</p>",
            "normalizedtitle": "The Beatles: Get Back"
          },
          {
            "views": 78491,
            "rank": 32,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 82863
              },
              {
                "date": "2021-11-24Z",
                "views": 80512
              },
              {
                "date": "2021-11-25Z",
                "views": 78159
              },
              {
                "date": "2021-11-26Z",
                "views": 78297
              },
              {
                "date": "2021-11-27Z",
                "views": 78491
              }
            ],
            "type": "standard",
            "title": "YouTube",
            "displaytitle": "YouTube",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q866",
            "titles": {
              "canonical": "YouTube",
              "normalized": "YouTube",
              "display": "YouTube"
            },
            "pageid": 3524766,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/YouTube_homepage.png/320px-YouTube_homepage.png",
              "width": 320,
              "height": 154
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/1/1c/YouTube_homepage.png",
              "width": 500,
              "height": 241
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057404949",
            "tid": "04d74360-4f7f-11ec-bb87-593e5f594c8e",
            "timestamp": "2021-11-27T12:38:17Z",
            "description": "Online video platform owned by Google",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/YouTube",
                "revisions": "https://en.wikipedia.org/wiki/YouTube?action=history",
                "edit": "https://en.wikipedia.org/wiki/YouTube?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:YouTube"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/YouTube",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/YouTube",
                "edit": "https://en.m.wikipedia.org/wiki/YouTube?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:YouTube"
              }
            },
            "extract": "YouTube is an American online video sharing and social media platform owned by Google. It was launched on February 14, 2005 by Steve Chen, Chad Hurley, and Jawed Karim. It is the second most visited website, with more than one billion monthly users who collectively watch more than one billion hours of videos each day. As of May 2019, videos were being uploaded at a rate of more than 500 hours of content per minute.",
            "extract_html": "<p><b>YouTube</b> is an American online video sharing and social media platform owned by Google. It was launched on February 14, 2005 by Steve Chen, Chad Hurley, and Jawed Karim. It is the second most visited website, with more than one billion monthly users who collectively watch more than one billion hours of videos each day. As of May 2019, videos were being uploaded at a rate of more than 500 hours of content per minute.</p>",
            "normalizedtitle": "YouTube"
          },
          {
            "views": 78327,
            "rank": 33,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 10307
              },
              {
                "date": "2021-11-24Z",
                "views": 10915
              },
              {
                "date": "2021-11-25Z",
                "views": 25865
              },
              {
                "date": "2021-11-26Z",
                "views": 60955
              },
              {
                "date": "2021-11-27Z",
                "views": 78327
              }
            ],
            "type": "standard",
            "title": "George_Harrison",
            "displaytitle": "George Harrison",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q2643",
            "titles": {
              "canonical": "George_Harrison",
              "normalized": "George Harrison",
              "display": "George Harrison"
            },
            "pageid": 12731,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/George_Harrison_1974.jpg/246px-George_Harrison_1974.jpg",
              "width": 246,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/George_Harrison_1974.jpg",
              "width": 2088,
              "height": 2720
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057576826",
            "tid": "38a99cf0-5048-11ec-b627-0543a4912f8c",
            "timestamp": "2021-11-28T12:39:09Z",
            "description": "English musician, lead guitarist of the Beatles (1943–2001)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/George_Harrison",
                "revisions": "https://en.wikipedia.org/wiki/George_Harrison?action=history",
                "edit": "https://en.wikipedia.org/wiki/George_Harrison?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:George_Harrison"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/George_Harrison",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/George_Harrison",
                "edit": "https://en.m.wikipedia.org/wiki/George_Harrison?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:George_Harrison"
              }
            },
            "extract": "George Harrison was an English musician, singer-songwriter, and music and film producer who achieved international fame as the lead guitarist of the Beatles. Sometimes called \"the quiet Beatle\", Harrison embraced Indian culture and helped broaden the scope of popular music through his incorporation of Indian instrumentation and Hindu-aligned spirituality in the Beatles' work. Although the majority of the band's songs were written by John Lennon and Paul McCartney, most Beatles albums from 1965 onwards contained at least two Harrison compositions. His songs for the group include \"Taxman\", \"Within You Without You\", \"While My Guitar Gently Weeps\", \"Here Comes the Sun\" and \"Something\".",
            "extract_html": "<p><b>George Harrison</b> was an English musician, singer-songwriter, and music and film producer who achieved international fame as the lead guitarist of the Beatles. Sometimes called \"the quiet Beatle\", Harrison embraced Indian culture and helped broaden the scope of popular music through his incorporation of Indian instrumentation and Hindu-aligned spirituality in the Beatles' work. Although the majority of the band's songs were written by John Lennon and Paul McCartney, most Beatles albums from 1965 onwards contained at least two Harrison compositions. His songs for the group include \"Taxman\", \"Within You Without You\", \"While My Guitar Gently Weeps\", \"Here Comes the Sun\" and \"Something\".</p>",
            "normalizedtitle": "George Harrison"
          },
          {
            "views": 73900,
            "rank": 34,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 43795
              },
              {
                "date": "2021-11-24Z",
                "views": 54727
              },
              {
                "date": "2021-11-25Z",
                "views": 98002
              },
              {
                "date": "2021-11-26Z",
                "views": 168991
              },
              {
                "date": "2021-11-27Z",
                "views": 73900
              }
            ],
            "type": "standard",
            "title": "Black_Friday_(shopping)",
            "displaytitle": "Black Friday (shopping)",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q86483",
            "titles": {
              "canonical": "Black_Friday_(shopping)",
              "normalized": "Black Friday (shopping)",
              "display": "Black Friday (shopping)"
            },
            "pageid": 366477,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/DCUSA.Gallery11.BB%26BBlackFriday.Wikipedia.jpg/320px-DCUSA.Gallery11.BB%26BBlackFriday.Wikipedia.jpg",
              "width": 320,
              "height": 240
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/7/7d/DCUSA.Gallery11.BB%26BBlackFriday.Wikipedia.jpg",
              "width": 800,
              "height": 600
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057542777",
            "tid": "b92ae290-501a-11ec-ba41-478a5a666d6e",
            "timestamp": "2021-11-28T07:13:36Z",
            "description": "Term for the Friday following Thanksgiving in the United States",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Black_Friday_(shopping)",
                "revisions": "https://en.wikipedia.org/wiki/Black_Friday_(shopping)?action=history",
                "edit": "https://en.wikipedia.org/wiki/Black_Friday_(shopping)?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Black_Friday_(shopping)"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Black_Friday_(shopping)",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Black_Friday_(shopping)",
                "edit": "https://en.m.wikipedia.org/wiki/Black_Friday_(shopping)?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Black_Friday_(shopping)"
              }
            },
            "extract": "Black Friday is a colloquial term for the Friday following Thanksgiving in the United States. It traditionally marks the start of the Christmas shopping season in the United States. Many stores \noffer highly promoted sales at discounted prices and often open early, sometimes as early as midnight or even on Thanksgiving. Some stores' sales continue to Monday or for a week.",
            "extract_html": "<p><b>Black Friday</b> is a colloquial term for the Friday following Thanksgiving in the United States. It traditionally marks the start of the Christmas shopping season in the United States. Many stores \noffer highly promoted sales at discounted prices and often open early, sometimes as early as midnight or even on Thanksgiving. Some stores' sales continue to Monday or for a week.</p>",
            "normalizedtitle": "Black Friday (shopping)"
          },
          {
            "views": 71305,
            "rank": 35,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 35155
              },
              {
                "date": "2021-11-24Z",
                "views": 41048
              },
              {
                "date": "2021-11-25Z",
                "views": 47542
              },
              {
                "date": "2021-11-26Z",
                "views": 54722
              },
              {
                "date": "2021-11-27Z",
                "views": 71305
              }
            ],
            "type": "standard",
            "title": "Gucci",
            "displaytitle": "Gucci",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q178516",
            "titles": {
              "canonical": "Gucci",
              "normalized": "Gucci",
              "display": "Gucci"
            },
            "pageid": 844136,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/311px-Gucci_logo.svg.png",
              "width": 311,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/512px-Gucci_logo.svg.png",
              "width": 512,
              "height": 526
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057537372",
            "tid": "517203b0-5013-11ec-a647-0d62fc90a786",
            "timestamp": "2021-11-28T06:20:37Z",
            "description": "Italian luxury fashion house based in Florence, Italy",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Gucci",
                "revisions": "https://en.wikipedia.org/wiki/Gucci?action=history",
                "edit": "https://en.wikipedia.org/wiki/Gucci?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Gucci"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Gucci",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Gucci",
                "edit": "https://en.m.wikipedia.org/wiki/Gucci?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Gucci"
              }
            },
            "extract": "Gucci is an Italian luxury fashion house based in Florence, Italy. Its product lines include handbags, ready-to-wear, footwear, and accessories, makeup, fragrances, and home decoration.",
            "extract_html": "<p><b>Gucci</b> is an Italian luxury fashion house based in Florence, Italy. Its product lines include handbags, ready-to-wear, footwear, and accessories, makeup, fragrances, and home decoration.</p>",
            "normalizedtitle": "Gucci"
          },
          {
            "views": 70094,
            "rank": 36,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 6371
              },
              {
                "date": "2021-11-24Z",
                "views": 22855
              },
              {
                "date": "2021-11-25Z",
                "views": 87182
              },
              {
                "date": "2021-11-26Z",
                "views": 72976
              },
              {
                "date": "2021-11-27Z",
                "views": 70094
              }
            ],
            "type": "standard",
            "title": "Maanaadu",
            "displaytitle": "<i>Maanaadu</i>",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q65091042",
            "titles": {
              "canonical": "Maanaadu",
              "normalized": "Maanaadu",
              "display": "<i>Maanaadu</i>"
            },
            "pageid": 58345696,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Maanaadu_poster.jpg/213px-Maanaadu_poster.jpg",
              "width": 213,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/c/c4/Maanaadu_poster.jpg",
              "width": 220,
              "height": 330
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057572328",
            "tid": "2eb10720-5042-11ec-9b0e-fd9eeae60cf1",
            "timestamp": "2021-11-28T11:56:04Z",
            "description": "2021 film directed by Venkat Prabhu",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Maanaadu",
                "revisions": "https://en.wikipedia.org/wiki/Maanaadu?action=history",
                "edit": "https://en.wikipedia.org/wiki/Maanaadu?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Maanaadu"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Maanaadu",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Maanaadu",
                "edit": "https://en.m.wikipedia.org/wiki/Maanaadu?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Maanaadu"
              }
            },
            "extract": "Maanaadu (transl. Conference) is a 2021 Indian Tamil-language science fiction action thriller film written and directed by Venkat Prabhu and produced by Suresh Kamatchi. The film stars Silambarasan, Kalyani Priyadarshan and S. J. Suryah alongside S. A. Chandrasekhar, Y. G. Mahendran, Karunakaran and Premgi Amaren in supporting roles. The film's music and score is composed by Yuvan Shankar Raja, with cinematography handled by Richard M. Nathan and editing done by Praveen K. L. It revolves around a common man and a police officer, who is trapped in a time loop, at the day of a public conference of the chief minister and forced to live the same day over and over again.",
            "extract_html": "<p><i><b>Maanaadu</b></i> (<abbr>transl.</abbr> Conference) is a 2021 Indian Tamil-language science fiction action thriller film written and directed by Venkat Prabhu and produced by Suresh Kamatchi. The film stars Silambarasan, Kalyani Priyadarshan and S. J. Suryah alongside S. A. Chandrasekhar, Y. G. Mahendran, Karunakaran and Premgi Amaren in supporting roles. The film's music and score is composed by Yuvan Shankar Raja, with cinematography handled by Richard M. Nathan and editing done by Praveen K. L. It revolves around a common man and a police officer, who is trapped in a time loop, at the day of a public conference of the chief minister and forced to live the same day over and over again.</p>",
            "normalizedtitle": "Maanaadu"
          },
          {
            "views": 69440,
            "rank": 37,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 26190
              },
              {
                "date": "2021-11-24Z",
                "views": 92281
              },
              {
                "date": "2021-11-25Z",
                "views": 102068
              },
              {
                "date": "2021-11-26Z",
                "views": 75779
              },
              {
                "date": "2021-11-27Z",
                "views": 69440
              }
            ],
            "type": "standard",
            "title": "Hailee_Steinfeld",
            "displaytitle": "Hailee Steinfeld",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q231726",
            "titles": {
              "canonical": "Hailee_Steinfeld",
              "normalized": "Hailee Steinfeld",
              "display": "Hailee Steinfeld"
            },
            "pageid": 26260043,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hailee_Steinfeld_by_Gage_Skidmore.jpg/221px-Hailee_Steinfeld_by_Gage_Skidmore.jpg",
              "width": 221,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Hailee_Steinfeld_by_Gage_Skidmore.jpg",
              "width": 2309,
              "height": 3346
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057490959",
            "tid": "d2b2d450-4fdb-11ec-a07d-6d1f7137dfeb",
            "timestamp": "2021-11-27T23:43:22Z",
            "description": "American actress and singer (born 1996)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Hailee_Steinfeld",
                "revisions": "https://en.wikipedia.org/wiki/Hailee_Steinfeld?action=history",
                "edit": "https://en.wikipedia.org/wiki/Hailee_Steinfeld?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Hailee_Steinfeld"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Hailee_Steinfeld",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Hailee_Steinfeld",
                "edit": "https://en.m.wikipedia.org/wiki/Hailee_Steinfeld?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Hailee_Steinfeld"
              }
            },
            "extract": "Hailee Steinfeld is an American actress and singer. She had her breakthrough with the western drama film True Grit (2010), which earned her nominations for the Academy Award, BAFTA Award and the SAG Award for Best Supporting Actress.",
            "extract_html": "<p><b>Hailee Steinfeld</b> is an American actress and singer. She had her breakthrough with the western drama film <i>True Grit</i> (2010), which earned her nominations for the Academy Award, BAFTA Award and the SAG Award for Best Supporting Actress.</p>",
            "normalizedtitle": "Hailee Steinfeld"
          },
          {
            "views": 68711,
            "rank": 38,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 27640
              },
              {
                "date": "2021-11-24Z",
                "views": 62563
              },
              {
                "date": "2021-11-25Z",
                "views": 65033
              },
              {
                "date": "2021-11-26Z",
                "views": 65346
              },
              {
                "date": "2021-11-27Z",
                "views": 68711
              }
            ],
            "type": "standard",
            "title": "Encanto_(film)",
            "displaytitle": "<i>Encanto</i> (film)",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q103372692",
            "titles": {
              "canonical": "Encanto_(film)",
              "normalized": "Encanto (film)",
              "display": "<i>Encanto</i> (film)"
            },
            "pageid": 62975109,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Encanto_poster.jpg/216px-Encanto_poster.jpg",
              "width": 216,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg",
              "width": 260,
              "height": 385
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057549987",
            "tid": "71d95a30-5023-11ec-acb2-2bb621864263",
            "timestamp": "2021-11-28T08:16:05Z",
            "description": "2021 American film by Byron Howard & Jared Bush",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Encanto_(film)",
                "revisions": "https://en.wikipedia.org/wiki/Encanto_(film)?action=history",
                "edit": "https://en.wikipedia.org/wiki/Encanto_(film)?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Encanto_(film)"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Encanto_(film)",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Encanto_(film)",
                "edit": "https://en.m.wikipedia.org/wiki/Encanto_(film)?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Encanto_(film)"
              }
            },
            "extract": "Encanto is a 2021 American computer-animated musical fantasy comedy film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures. The 60th film produced by the studio, being directed by Jared Bush and Byron Howard, co-directed by writer Charise Castro Smith, and produced by Yvett Merino and Clark Spencer, with original songs written by Lin-Manuel Miranda. The film stars the voices of Stephanie Beatriz, María Cecilia Botero, John Leguizamo, Diane Guerrero, Jessica Darrow, Angie Cepeda, and Wilmer Valderrama. It premiered at the El Capitan Theatre in Los Angeles on November 3, 2021, and was theatrically released in the United States on November 24. The film received positive reviews from critics who praised its voice acting, songs, representation of Colombia and the emotional depth. It has grossed $24.3 million worldwide.",
            "extract_html": "<p><i><b>Encanto</b></i> is a 2021 American computer-animated musical fantasy comedy film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures. The 60th film produced by the studio, being directed by Jared Bush and Byron Howard, co-directed by writer Charise Castro Smith, and produced by Yvett Merino and Clark Spencer, with original songs written by Lin-Manuel Miranda. The film stars the voices of Stephanie Beatriz, María Cecilia Botero, John Leguizamo, Diane Guerrero, Jessica Darrow, Angie Cepeda, and Wilmer Valderrama. It premiered at the El Capitan Theatre in Los Angeles on November 3, 2021, and was theatrically released in the United States on November 24. The film received positive reviews from critics who praised its voice acting, songs, representation of Colombia and the emotional depth. It has grossed $24.3 million worldwide.</p>",
            "normalizedtitle": "Encanto (film)"
          },
          {
            "views": 68167,
            "rank": 39,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 13663
              },
              {
                "date": "2021-11-24Z",
                "views": 14034
              },
              {
                "date": "2021-11-25Z",
                "views": 25532
              },
              {
                "date": "2021-11-26Z",
                "views": 52552
              },
              {
                "date": "2021-11-27Z",
                "views": 68167
              }
            ],
            "type": "standard",
            "title": "John_Lennon",
            "displaytitle": "John Lennon",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q1203",
            "titles": {
              "canonical": "John_Lennon",
              "normalized": "John Lennon",
              "display": "John Lennon"
            },
            "pageid": 15852,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/222px-John_Lennon_1969_%28cropped%29.jpg",
              "width": 222,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg",
              "width": 612,
              "height": 883
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057337198",
            "tid": "684fc290-500c-11ec-a596-0b50aafe8687",
            "timestamp": "2021-11-27T00:39:43Z",
            "description": "English singer-songwriter; founding member of the Beatles (1940–1980)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/John_Lennon",
                "revisions": "https://en.wikipedia.org/wiki/John_Lennon?action=history",
                "edit": "https://en.wikipedia.org/wiki/John_Lennon?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:John_Lennon"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/John_Lennon",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/John_Lennon",
                "edit": "https://en.m.wikipedia.org/wiki/John_Lennon?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:John_Lennon"
              }
            },
            "extract": "John Winston Ono Lennon was an English singer, songwriter, musician and peace activist who achieved worldwide fame as the founder, co-songwriter, co-lead vocalist and rhythm guitarist of the Beatles. Lennon was characterised for the rebellious nature and acerbic wit in his music, writing, drawings, on film and in interviews. His songwriting partnership with Paul McCartney remains the most successful in history.",
            "extract_html": "<p><b>John Winston Ono Lennon</b> was an English singer, songwriter, musician and peace activist who achieved worldwide fame as the founder, co-songwriter, co-lead vocalist and rhythm guitarist of the Beatles. Lennon was characterised for the rebellious nature and acerbic wit in his music, writing, drawings, on film and in interviews. His songwriting partnership with Paul McCartney remains the most successful in history.</p>",
            "normalizedtitle": "John Lennon"
          },
          {
            "views": 67628,
            "rank": 40,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 44337
              },
              {
                "date": "2021-11-24Z",
                "views": 44164
              },
              {
                "date": "2021-11-25Z",
                "views": 33899
              },
              {
                "date": "2021-11-26Z",
                "views": 61051
              },
              {
                "date": "2021-11-27Z",
                "views": 67628
              }
            ],
            "type": "standard",
            "title": "Ansel_Adams",
            "displaytitle": "Ansel Adams",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q60809",
            "titles": {
              "canonical": "Ansel_Adams",
              "normalized": "Ansel Adams",
              "display": "Ansel Adams"
            },
            "pageid": 84317,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ansel_Adams_and_camera.jpg/253px-Ansel_Adams_and_camera.jpg",
              "width": 253,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/0/05/Ansel_Adams_and_camera.jpg",
              "width": 3003,
              "height": 3799
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057337394",
            "tid": "c27f0110-4f1a-11ec-b629-01573b57a900",
            "timestamp": "2021-11-27T00:41:19Z",
            "description": "American photographer and environmentalist (1902–1984)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Ansel_Adams",
                "revisions": "https://en.wikipedia.org/wiki/Ansel_Adams?action=history",
                "edit": "https://en.wikipedia.org/wiki/Ansel_Adams?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Ansel_Adams"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Ansel_Adams",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Ansel_Adams",
                "edit": "https://en.m.wikipedia.org/wiki/Ansel_Adams?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Ansel_Adams"
              }
            },
            "extract": "Ansel Easton Adams was an American landscape photographer and environmentalist known for his black-and-white images of the American West. He helped found Group f/64, an association of photographers advocating \"pure\" photography which favored sharp focus and the use of the full tonal range of a photograph. He and Fred Archer developed an exacting system of image-making called the Zone System, a method of achieving a desired final print through a deeply technical understanding of how tonal range is recorded and developed during exposure, negative development, and printing. The resulting clarity and depth of such images characterized his photography.",
            "extract_html": "<p><b>Ansel Easton Adams</b> was an American landscape photographer and environmentalist known for his black-and-white images of the American West. He helped found Group f/64, an association of photographers advocating \"pure\" photography which favored sharp focus and the use of the full tonal range of a photograph. He and Fred Archer developed an exacting system of image-making called the Zone System, a method of achieving a desired final print through a deeply technical understanding of how tonal range is recorded and developed during exposure, negative development, and printing. The resulting clarity and depth of such images characterized his photography.</p>",
            "normalizedtitle": "Ansel Adams"
          },
          {
            "views": 66415,
            "rank": 41,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 52064
              },
              {
                "date": "2021-11-24Z",
                "views": 49424
              },
              {
                "date": "2021-11-25Z",
                "views": 53214
              },
              {
                "date": "2021-11-26Z",
                "views": 60081
              },
              {
                "date": "2021-11-27Z",
                "views": 66415
              }
            ],
            "type": "standard",
            "title": "Shang-Chi_and_the_Legend_of_the_Ten_Rings",
            "displaytitle": "<i>Shang-Chi and the Legend of the Ten Rings</i>",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q65768589",
            "titles": {
              "canonical": "Shang-Chi_and_the_Legend_of_the_Ten_Rings",
              "normalized": "Shang-Chi and the Legend of the Ten Rings",
              "display": "<i>Shang-Chi and the Legend of the Ten Rings</i>"
            },
            "pageid": 59233722,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg/216px-Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
              "width": 216,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
              "width": 259,
              "height": 384
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057537754",
            "tid": "da29b590-5013-11ec-9d19-2b2ea2a04018",
            "timestamp": "2021-11-28T06:24:21Z",
            "description": "2021 American superhero film produced by Marvel Studios",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Shang-Chi_and_the_Legend_of_the_Ten_Rings",
                "revisions": "https://en.wikipedia.org/wiki/Shang-Chi_and_the_Legend_of_the_Ten_Rings?action=history",
                "edit": "https://en.wikipedia.org/wiki/Shang-Chi_and_the_Legend_of_the_Ten_Rings?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Shang-Chi_and_the_Legend_of_the_Ten_Rings"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Shang-Chi_and_the_Legend_of_the_Ten_Rings",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Shang-Chi_and_the_Legend_of_the_Ten_Rings",
                "edit": "https://en.m.wikipedia.org/wiki/Shang-Chi_and_the_Legend_of_the_Ten_Rings?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Shang-Chi_and_the_Legend_of_the_Ten_Rings"
              }
            },
            "extract": "Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 25th film in the Marvel Cinematic Universe (MCU). The film was directed by Destin Daniel Cretton, from a screenplay he wrote with Dave Callaham and Andrew Lanham, and stars Simu Liu as Shang-Chi alongside Awkwafina, Meng'er Zhang, Fala Chen, Florian Munteanu, Benedict Wong, Michelle Yeoh, Ben Kingsley, and Tony Leung. In the film, Shang-Chi is forced to confront his past when his father Wenwu (Leung), the leader of the Ten Rings organization, draws Shang-Chi and his sister Xialing (Zhang) into a search for a mythical village.",
            "extract_html": "<p><i><b>Shang-Chi and the Legend of the Ten Rings</b></i> is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 25th film in the Marvel Cinematic Universe (MCU). The film was directed by Destin Daniel Cretton, from a screenplay he wrote with Dave Callaham and Andrew Lanham, and stars Simu Liu as Shang-Chi alongside Awkwafina, Meng'er Zhang, Fala Chen, Florian Munteanu, Benedict Wong, Michelle Yeoh, Ben Kingsley, and Tony Leung. In the film, Shang-Chi is forced to confront his past when his father Wenwu (Leung), the leader of the Ten Rings organization, draws Shang-Chi and his sister Xialing (Zhang) into a search for a mythical village.</p>",
            "normalizedtitle": "Shang-Chi and the Legend of the Ten Rings"
          },
          {
            "views": 65227,
            "rank": 42,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 25202
              },
              {
                "date": "2021-11-24Z",
                "views": 35784
              },
              {
                "date": "2021-11-25Z",
                "views": 39475
              },
              {
                "date": "2021-11-26Z",
                "views": 48032
              },
              {
                "date": "2021-11-27Z",
                "views": 65227
              }
            ],
            "type": "standard",
            "title": "Paola_Franchi",
            "displaytitle": "Paola Franchi",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q107987250",
            "titles": {
              "canonical": "Paola_Franchi",
              "normalized": "Paola Franchi",
              "display": "Paola Franchi"
            },
            "pageid": 68380536,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Paola_Franchi.png/239px-Paola_Franchi.png",
              "width": 239,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Paola_Franchi.png",
              "width": 400,
              "height": 535
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057537703",
            "tid": "c4762300-5013-11ec-b49f-1328132749c2",
            "timestamp": "2021-11-28T06:23:53Z",
            "description": "Italian interior designer (born 1953)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Paola_Franchi",
                "revisions": "https://en.wikipedia.org/wiki/Paola_Franchi?action=history",
                "edit": "https://en.wikipedia.org/wiki/Paola_Franchi?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Paola_Franchi"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Paola_Franchi",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Paola_Franchi",
                "edit": "https://en.m.wikipedia.org/wiki/Paola_Franchi?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Paola_Franchi"
              }
            },
            "extract": "Paola Franchi is an Italian interior designer, artist, author and former model. Her 2010 autobiography L'amore strappato details her relationship with Italian businessman Maurizio Gucci, who was murdered in 1995 while they were a couple.",
            "extract_html": "<p><b>Paola Franchi</b> is an Italian interior designer, artist, author and former model. Her 2010 autobiography <i>L'amore strappato</i> details her relationship with Italian businessman Maurizio Gucci, who was murdered in 1995 while they were a couple.</p>",
            "normalizedtitle": "Paola Franchi"
          },
          {
            "views": 65026,
            "rank": 43,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 89351
              },
              {
                "date": "2021-11-24Z",
                "views": 87096
              },
              {
                "date": "2021-11-25Z",
                "views": 76276
              },
              {
                "date": "2021-11-26Z",
                "views": 65238
              },
              {
                "date": "2021-11-27Z",
                "views": 65026
              }
            ],
            "type": "standard",
            "title": "Hellbound_(TV_series)",
            "displaytitle": "<i>Hellbound</i> (TV series)",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q100934044",
            "titles": {
              "canonical": "Hellbound_(TV_series)",
              "normalized": "Hellbound (TV series)",
              "display": "<i>Hellbound</i> (TV series)"
            },
            "pageid": 65690872,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Hellbound_TV_series.jpg/216px-Hellbound_TV_series.jpg",
              "width": 216,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/a/a0/Hellbound_TV_series.jpg",
              "width": 260,
              "height": 385
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057581683",
            "tid": "01931e60-504f-11ec-a2a0-97b152d118e5",
            "timestamp": "2021-11-28T13:27:56Z",
            "description": "South Korean dark fantasy TV series",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Hellbound_(TV_series)",
                "revisions": "https://en.wikipedia.org/wiki/Hellbound_(TV_series)?action=history",
                "edit": "https://en.wikipedia.org/wiki/Hellbound_(TV_series)?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Hellbound_(TV_series)"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Hellbound_(TV_series)",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Hellbound_(TV_series)",
                "edit": "https://en.m.wikipedia.org/wiki/Hellbound_(TV_series)?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Hellbound_(TV_series)"
              }
            },
            "extract": "Hellbound is a South Korean dark fantasy streaming television series directed by Yeon Sang-ho, based on his own webtoon of the same name. The series is an original Netflix release about supernatural beings appearing out of nowhere to condemn people to Hell, starring Yoo Ah-in, Kim Hyun-joo, Park Jeong-min, Won Jin-ah and Yang Ik-june.",
            "extract_html": "<p><i><b>Hellbound</b></i> is a South Korean dark fantasy streaming television series directed by Yeon Sang-ho, based on his own webtoon of the same name. The series is an original Netflix release about supernatural beings appearing out of nowhere to condemn people to Hell, starring Yoo Ah-in, Kim Hyun-joo, Park Jeong-min, Won Jin-ah and Yang Ik-june.</p>",
            "normalizedtitle": "Hellbound (TV series)"
          },
          {
            "views": 64409,
            "rank": 44,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 6621
              },
              {
                "date": "2021-11-24Z",
                "views": 5579
              },
              {
                "date": "2021-11-25Z",
                "views": 5150
              },
              {
                "date": "2021-11-26Z",
                "views": 31212
              },
              {
                "date": "2021-11-27Z",
                "views": 64409
              }
            ],
            "type": "standard",
            "title": "Brooke_Shields",
            "displaytitle": "Brooke Shields",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q189400",
            "titles": {
              "canonical": "Brooke_Shields",
              "normalized": "Brooke Shields",
              "display": "Brooke Shields"
            },
            "pageid": 18984642,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Brooke_Shields_%282018%29_%28cropped%29.jpg/246px-Brooke_Shields_%282018%29_%28cropped%29.jpg",
              "width": 246,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/2/21/Brooke_Shields_%282018%29_%28cropped%29.jpg",
              "width": 1853,
              "height": 2410
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057583785",
            "tid": "b5975690-5051-11ec-8815-4b2943cf1abb",
            "timestamp": "2021-11-28T13:47:15Z",
            "description": "American actress and model (born 1965)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Brooke_Shields",
                "revisions": "https://en.wikipedia.org/wiki/Brooke_Shields?action=history",
                "edit": "https://en.wikipedia.org/wiki/Brooke_Shields?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Brooke_Shields"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Brooke_Shields",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Brooke_Shields",
                "edit": "https://en.m.wikipedia.org/wiki/Brooke_Shields?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Brooke_Shields"
              }
            },
            "extract": "Brooke Christa Shields is an American actress and model. She was initially a child model and gained critical acclaim at age 12 for her leading role in Louis Malle's film Pretty Baby (1978). She continued to model into her late teenage years and starred in several dramas in the 1980s, including The Blue Lagoon (1980), and Franco Zeffirelli's Endless Love (1981).",
            "extract_html": "<p><b>Brooke Christa Shields</b> is an American actress and model. She was initially a child model and gained critical acclaim at age 12 for her leading role in Louis Malle's film <i>Pretty Baby</i> (1978). She continued to model into her late teenage years and starred in several dramas in the 1980s, including <i>The Blue Lagoon</i> (1980), and Franco Zeffirelli's <i>Endless Love</i> (1981).</p>",
            "normalizedtitle": "Brooke Shields"
          },
          {
            "views": 63719,
            "rank": 45,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 72737
              },
              {
                "date": "2021-11-24Z",
                "views": 67571
              },
              {
                "date": "2021-11-25Z",
                "views": 55860
              },
              {
                "date": "2021-11-26Z",
                "views": 53572
              },
              {
                "date": "2021-11-27Z",
                "views": 63719
              }
            ],
            "type": "standard",
            "title": "Catherine_the_Great",
            "displaytitle": "Catherine the Great",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q36450",
            "titles": {
              "canonical": "Catherine_the_Great",
              "normalized": "Catherine the Great",
              "display": "Catherine the Great"
            },
            "pageid": 44240,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Catherine_II_by_J.B.Lampi_%281780s%2C_Kunsthistorisches_Museum%29.jpg/268px-Catherine_II_by_J.B.Lampi_%281780s%2C_Kunsthistorisches_Museum%29.jpg",
              "width": 268,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Catherine_II_by_J.B.Lampi_%281780s%2C_Kunsthistorisches_Museum%29.jpg",
              "width": 1132,
              "height": 1350
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057367504",
            "tid": "6ca97fc0-500c-11ec-b627-0543a4912f8c",
            "timestamp": "2021-11-27T05:34:14Z",
            "description": "Empress of Russia (1762 to 1796)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Catherine_the_Great",
                "revisions": "https://en.wikipedia.org/wiki/Catherine_the_Great?action=history",
                "edit": "https://en.wikipedia.org/wiki/Catherine_the_Great?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Catherine_the_Great"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Catherine_the_Great",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Catherine_the_Great",
                "edit": "https://en.m.wikipedia.org/wiki/Catherine_the_Great?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Catherine_the_Great"
              }
            },
            "extract": "Catherine II, most commonly known as Catherine the Great, was the last reigning Empress Regnant of Russia from 1762 until 1796—the country's longest-ruling female leader. She came to power following the overthrow of her husband and second cousin, Peter III. Under her reign, Russia grew larger, its culture was revitalised, and it was recognised as one of the great powers of Europe.",
            "extract_html": "<p><b>Catherine II</b>, most commonly known as <b>Catherine the Great</b>, was the last reigning Empress Regnant of Russia from 1762 until 1796—the country's longest-ruling female leader. She came to power following the overthrow of her husband and second cousin, Peter III. Under her reign, Russia grew larger, its culture was revitalised, and it was recognised as one of the great powers of Europe.</p>",
            "normalizedtitle": "Catherine the Great"
          },
          {
            "views": 62859,
            "rank": 46,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 63933
              },
              {
                "date": "2021-11-24Z",
                "views": 77471
              },
              {
                "date": "2021-11-25Z",
                "views": 70074
              },
              {
                "date": "2021-11-26Z",
                "views": 51894
              },
              {
                "date": "2021-11-27Z",
                "views": 62859
              }
            ],
            "type": "disambiguation",
            "title": "XXXX",
            "displaytitle": "XXXX",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q8042634",
            "titles": {
              "canonical": "XXXX",
              "normalized": "XXXX",
              "display": "XXXX"
            },
            "pageid": 1384520,
            "lang": "en",
            "dir": "ltr",
            "revision": "1038409036",
            "tid": "b8b6b610-17c9-11ec-97b8-2dab0a038110",
            "timestamp": "2021-08-12T10:52:15Z",
            "description": "Topics referred to by the same term",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/XXXX",
                "revisions": "https://en.wikipedia.org/wiki/XXXX?action=history",
                "edit": "https://en.wikipedia.org/wiki/XXXX?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:XXXX"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/XXXX",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/XXXX",
                "edit": "https://en.m.wikipedia.org/wiki/XXXX?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:XXXX"
              }
            },
            "extract": "XXXX may refer to:",
            "extract_html": "<p><b>XXXX</b> may refer to:</p>",
            "normalizedtitle": "XXXX"
          },
          {
            "views": 62611,
            "rank": 47,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 12123
              },
              {
                "date": "2021-11-24Z",
                "views": 16381
              },
              {
                "date": "2021-11-25Z",
                "views": 15672
              },
              {
                "date": "2021-11-26Z",
                "views": 16840
              },
              {
                "date": "2021-11-27Z",
                "views": 62611
              }
            ],
            "type": "standard",
            "title": "George_Michael",
            "displaytitle": "George Michael",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q130311",
            "titles": {
              "canonical": "George_Michael",
              "normalized": "George Michael",
              "display": "George Michael"
            },
            "pageid": 45985,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/George_Michael.jpeg/225px-George_Michael.jpeg",
              "width": 225,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/commons/f/f2/George_Michael.jpeg",
              "width": 3888,
              "height": 5518
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057478031",
            "tid": "6dd02570-500c-11ec-977f-6b8a09e46b2f",
            "timestamp": "2021-11-27T22:01:20Z",
            "description": "British pop singer and songwriter (1963–2016)",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/George_Michael",
                "revisions": "https://en.wikipedia.org/wiki/George_Michael?action=history",
                "edit": "https://en.wikipedia.org/wiki/George_Michael?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:George_Michael"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/George_Michael",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/George_Michael",
                "edit": "https://en.m.wikipedia.org/wiki/George_Michael?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:George_Michael"
              }
            },
            "extract": "George Michael was a British singer, songwriter and record producer. Known as a leading creative force in music production, songwriting, vocal performance and visual presentation, he is regarded as one of the most significant cultural figures of the MTV era.",
            "extract_html": "<p><b>George Michael</b> was a British singer, songwriter and record producer. Known as a leading creative force in music production, songwriting, vocal performance and visual presentation, he is regarded as one of the most significant cultural figures of the MTV era.</p>",
            "normalizedtitle": "George Michael"
          },
          {
            "views": 62306,
            "rank": 48,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 58233
              },
              {
                "date": "2021-11-24Z",
                "views": 68070
              },
              {
                "date": "2021-11-25Z",
                "views": 57623
              },
              {
                "date": "2021-11-26Z",
                "views": 57348
              },
              {
                "date": "2021-11-27Z",
                "views": 62306
              }
            ],
            "type": "standard",
            "title": "Venom:_Let_There_Be_Carnage",
            "displaytitle": "<i>Venom: Let There Be Carnage</i>",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q60498064",
            "titles": {
              "canonical": "Venom:_Let_There_Be_Carnage",
              "normalized": "Venom: Let There Be Carnage",
              "display": "<i>Venom: Let There Be Carnage</i>"
            },
            "pageid": 59135372,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Venom_Let_There_Be_Carnage_poster.jpg/216px-Venom_Let_There_Be_Carnage_poster.jpg",
              "width": 216,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/a/a7/Venom_Let_There_Be_Carnage_poster.jpg",
              "width": 259,
              "height": 384
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057450270",
            "tid": "fa496d70-4faf-11ec-9f93-255045cf45ce",
            "timestamp": "2021-11-27T18:29:29Z",
            "description": "2021 superhero film",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Venom%3A_Let_There_Be_Carnage",
                "revisions": "https://en.wikipedia.org/wiki/Venom%3A_Let_There_Be_Carnage?action=history",
                "edit": "https://en.wikipedia.org/wiki/Venom%3A_Let_There_Be_Carnage?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Venom%3A_Let_There_Be_Carnage"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Venom%3A_Let_There_Be_Carnage",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Venom%3A_Let_There_Be_Carnage",
                "edit": "https://en.m.wikipedia.org/wiki/Venom%3A_Let_There_Be_Carnage?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Venom%3A_Let_There_Be_Carnage"
              }
            },
            "extract": "Venom: Let There Be Carnage is a 2021 American superhero film featuring the Marvel Comics character Venom, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is the second film in Sony's Spider-Man Universe and the sequel to Venom (2018). The film is directed by Andy Serkis from a screenplay by Kelly Marcel, based on a story she wrote with Tom Hardy who stars as Eddie Brock / Venom alongside Michelle Williams, Naomie Harris, Reid Scott, Stephen Graham, and Woody Harrelson. In the film, Brock struggles to adjust to life as the host of the alien symbiote Venom, while serial killer Cletus Kasady (Harrelson) escapes from prison after becoming the host of Carnage, a chaotic spawn of Venom.",
            "extract_html": "<p><i><b>Venom: Let There Be Carnage</b></i> is a 2021 American superhero film featuring the Marvel Comics character Venom, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is the second film in Sony's Spider-Man Universe and the sequel to <i>Venom</i> (2018). The film is directed by Andy Serkis from a screenplay by Kelly Marcel, based on a story she wrote with Tom Hardy who stars as Eddie Brock / Venom alongside Michelle Williams, Naomie Harris, Reid Scott, Stephen Graham, and Woody Harrelson. In the film, Brock struggles to adjust to life as the host of the alien symbiote Venom, while serial killer Cletus Kasady (Harrelson) escapes from prison after becoming the host of Carnage, a chaotic spawn of Venom.</p>",
            "normalizedtitle": "Venom: Let There Be Carnage"
          },
          {
            "views": 62226,
            "rank": 49,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 81966
              },
              {
                "date": "2021-11-24Z",
                "views": 71098
              },
              {
                "date": "2021-11-25Z",
                "views": 62071
              },
              {
                "date": "2021-11-26Z",
                "views": 57759
              },
              {
                "date": "2021-11-27Z",
                "views": 62226
              }
            ],
            "type": "standard",
            "title": "Arcane_(TV_series)",
            "displaytitle": "<i>Arcane</i> (TV series)",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q85518571",
            "titles": {
              "canonical": "Arcane_(TV_series)",
              "normalized": "Arcane (TV series)",
              "display": "<i>Arcane</i> (TV series)"
            },
            "pageid": 63376140,
            "lang": "en",
            "dir": "ltr",
            "revision": "1057540464",
            "tid": "5002d7f0-5042-11ec-a2f7-9fb6f100b7cb",
            "timestamp": "2021-11-28T06:51:23Z",
            "description": "2021 animated fantasy series",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Arcane_(TV_series)",
                "revisions": "https://en.wikipedia.org/wiki/Arcane_(TV_series)?action=history",
                "edit": "https://en.wikipedia.org/wiki/Arcane_(TV_series)?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Arcane_(TV_series)"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Arcane_(TV_series)",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Arcane_(TV_series)",
                "edit": "https://en.m.wikipedia.org/wiki/Arcane_(TV_series)?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Arcane_(TV_series)"
              }
            },
            "extract": "Arcane is a 2021 animated streaming television series. It is set in the League of Legends universe. The series was announced at the League of Legends tenth anniversary celebration. It was produced by Riot Games and Fortiche, a French animation studio based in Paris. Set in the past relative to the League of Legends universe, Arcane serves as a prequel to the game and retells the origin stories of several characters from Piltover and Zaun. Like the game which it is based on, Arcane is aimed at a \"16+\" audience. Many news outlets have also noted that the show appeals to both casual viewers who have never played League and to longtime fans of the game.",
            "extract_html": "<p><i><b>Arcane</b></i> is a 2021 animated streaming television series. It is set in the <i>League of Legends</i> universe. The series was announced at the <i>League of Legends</i> tenth anniversary celebration. It was produced by Riot Games and Fortiche, a French animation studio based in Paris. Set in the past relative to the <i>League of Legends</i> universe, <i>Arcane</i> serves as a prequel to the game and retells the origin stories of several characters from Piltover and Zaun. Like the game which it is based on, <i>Arcane</i> is aimed at a \"16+\" audience. Many news outlets have also noted that the show appeals to both casual viewers who have never played <i>League</i> and to longtime fans of the game.</p>",
            "normalizedtitle": "Arcane (TV series)"
          },
          {
            "views": 61699,
            "rank": 50,
            "view_history": [
              {
                "date": "2021-11-23Z",
                "views": 56009
              },
              {
                "date": "2021-11-24Z",
                "views": 53991
              },
              {
                "date": "2021-11-25Z",
                "views": 49598
              },
              {
                "date": "2021-11-26Z",
                "views": 51587
              },
              {
                "date": "2021-11-27Z",
                "views": 61699
              }
            ],
            "type": "standard",
            "title": "Eternals_(film)",
            "displaytitle": "<i>Eternals</i> (film)",
            "namespace": {
              "id": 0,
              "text": ""
            },
            "wikibase_item": "Q23894629",
            "titles": {
              "canonical": "Eternals_(film)",
              "normalized": "Eternals (film)",
              "display": "<i>Eternals</i> (film)"
            },
            "pageid": 61329320,
            "thumbnail": {
              "source": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Eternals_%28film%29_poster.jpeg/216px-Eternals_%28film%29_poster.jpeg",
              "width": 216,
              "height": 320
            },
            "originalimage": {
              "source": "https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg",
              "width": 250,
              "height": 370
            },
            "lang": "en",
            "dir": "ltr",
            "revision": "1057537588",
            "tid": "9ee08e00-5013-11ec-b7c3-db4aba7cfdd1",
            "timestamp": "2021-11-28T06:22:42Z",
            "description": "2021 American superhero film produced by Marvel Studios",
            "description_source": "local",
            "content_urls": {
              "desktop": {
                "page": "https://en.wikipedia.org/wiki/Eternals_(film)",
                "revisions": "https://en.wikipedia.org/wiki/Eternals_(film)?action=history",
                "edit": "https://en.wikipedia.org/wiki/Eternals_(film)?action=edit",
                "talk": "https://en.wikipedia.org/wiki/Talk:Eternals_(film)"
              },
              "mobile": {
                "page": "https://en.m.wikipedia.org/wiki/Eternals_(film)",
                "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Eternals_(film)",
                "edit": "https://en.m.wikipedia.org/wiki/Eternals_(film)?action=edit",
                "talk": "https://en.m.wikipedia.org/wiki/Talk:Eternals_(film)"
              }
            },
            "extract": "Eternals is a 2021 American superhero film based on the Marvel Comics race of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 26th film in the Marvel Cinematic Universe (MCU). The film is directed by Chloé Zhao, who wrote the screenplay with Patrick Burleigh, Ryan Firpo, and Kaz Firpo. It stars an ensemble cast including Gemma Chan, Richard Madden, Kumail Nanjiani, Lia McHugh, Brian Tyree Henry, Lauren Ridloff, Barry Keoghan, Don Lee, Harish Patel, Kit Harington, Salma Hayek, and Angelina Jolie. In the film, the Eternals, an immortal alien race, emerge from hiding after thousands of years to protect Earth from their ancient counterparts, the Deviants.",
            "extract_html": "<p><i><b>Eternals</b></i> is a 2021 American superhero film based on the Marvel Comics race of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 26th film in the Marvel Cinematic Universe (MCU). The film is directed by Chloé Zhao, who wrote the screenplay with Patrick Burleigh, Ryan Firpo, and Kaz Firpo. It stars an ensemble cast including Gemma Chan, Richard Madden, Kumail Nanjiani, Lia McHugh, Brian Tyree Henry, Lauren Ridloff, Barry Keoghan, Don Lee, Harish Patel, Kit Harington, Salma Hayek, and Angelina Jolie. In the film, the Eternals, an immortal alien race, emerge from hiding after thousands of years to protect Earth from their ancient counterparts, the Deviants.</p>",
            "normalizedtitle": "Eternals (film)"
          }
        ]
      },
      "image": {
        "title": "File:Potsdam 50 Pfennig 1921 Mehlsäcke.jpg",
        "thumbnail": {
          "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Potsdam_50_Pfennig_1921_Mehls%C3%A4cke.jpg/640px-Potsdam_50_Pfennig_1921_Mehls%C3%A4cke.jpg",
          "width": 640,
          "height": 473
        },
        "image": {
          "source": "https://upload.wikimedia.org/wikipedia/commons/1/18/Potsdam_50_Pfennig_1921_Mehls%C3%A4cke.jpg",
          "width": 3095,
          "height": 2286
        },
        "file_page": "https://commons.wikimedia.org/wiki/File:Potsdam_50_Pfennig_1921_Mehls%C3%A4cke.jpg",
        "artist": {
          "html": "Designed by <a href=\"https://de.wikipedia.org/wiki/Walter_Bullert\" class=\"extiw\" title=\"de:Walter Bullert\">Walter Bullert</a>, issued by the town of Potsdam, reproduced by <a href=\"//commons.wikimedia.org/wiki/User:Palauenc05\" title=\"User:Palauenc05\">Palauenc05</a>",
          "text": "Designed by Walter Bullert, issued by the town of Potsdam, reproduced by Palauenc05"
        },
        "credit": {
          "html": "Private archive",
          "text": "Private archive"
        },
        "license": {
          "type": "Public domain",
          "code": "pd"
        },
        "description": {
          "html": "Issued 100 years ago: 50 Pfennig <a rel=\"mw:WikiLink/Interwiki\" href=\"https://en.wikipedia.org/wiki/Notgeld\" title=\"en:Notgeld\" class=\"extiw\">Notgeld</a> banknote issued by the town of <a rel=\"mw:WikiLink/Interwiki\" href=\"https://en.wikipedia.org/wiki/Potsdam\" title=\"en:Potsdam\" class=\"extiw\">Potsdam</a>, Nov. 28, 1921, RV: A  <a rel=\"mw:WikiLink/Interwiki\" href=\"https://en.wikipedia.org/wiki/cavalry\" title=\"en:cavalry\" class=\"extiw\">cavalry officer</a> of the <a rel=\"mw:WikiLink/Interwiki\" href=\"https://en.wikipedia.org/wiki/8th%20(Rhenish)%20Cuirassiers%20&quot;Count%20Geßler&quot;\" title=\"en:8th (Rhenish) Cuirassiers &quot;Count Geßler&quot;\" class=\"extiw\">8<sup>th</sup> (Rhenish) Cuirassiers Regiment</a>. The banknote has to be considered as a mockery of the militarism in the <a rel=\"mw:WikiLink/Interwiki\" href=\"https://en.wikipedia.org/wiki/German%20Empire\" title=\"en:German Empire\" class=\"extiw\">German Empire</a>, as the regiment is titled with its derogatory nickname \"Mehlsäcke\" <a rel=\"mw:WikiLink/Interwiki\" href=\"https://en.wikipedia.org/wiki/Flour%20sack\" title=\"en:Flour sack\" class=\"extiw\">(flour sacks)</a>.",
          "text": "Issued 100 years ago: 50 Pfennig Notgeld banknote issued by the town of Potsdam, Nov. 28, 1921, RV: A  cavalry officer of the 8th (Rhenish) Cuirassiers Regiment. The banknote has to be considered as a mockery of the militarism in the German Empire, as the regiment is titled with its derogatory nickname \"Mehlsäcke\" (flour sacks).",
          "lang": "en"
        },
        "wb_entity_id": "M85470339",
        "structured": {
          "captions": {}
        }
      },
      "news": [
        {
          "links": [
            {
              "type": "standard",
              "title": "Nicolae_Ciucă",
              "displaytitle": "Nicolae Ciucă",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q28950289",
              "titles": {
                "canonical": "Nicolae_Ciucă",
                "normalized": "Nicolae Ciucă",
                "display": "Nicolae Ciucă"
              },
              "pageid": 65258264,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Nicolae_Ciuca_2019_%28cropped%29.jpg/240px-Nicolae_Ciuca_2019_%28cropped%29.jpg",
                "width": 240,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/a/af/Nicolae_Ciuca_2019_%28cropped%29.jpg",
                "width": 2123,
                "height": 2831
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057558568",
              "tid": "82f801e0-5050-11ec-9b0e-fd9eeae60cf1",
              "timestamp": "2021-11-28T09:41:59Z",
              "description": "70th Prime Minister of Romania",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Nicolae_Ciuc%C4%83",
                  "revisions": "https://en.wikipedia.org/wiki/Nicolae_Ciuc%C4%83?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Nicolae_Ciuc%C4%83?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Nicolae_Ciuc%C4%83"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Nicolae_Ciuc%C4%83",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Nicolae_Ciuc%C4%83",
                  "edit": "https://en.m.wikipedia.org/wiki/Nicolae_Ciuc%C4%83?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Nicolae_Ciuc%C4%83"
                }
              },
              "extract": "Nicolae Ionel Ciucă is a Romanian politician and retired general of the Romanian Land Forces. He is currently serving as Prime Minister of Romania since 25 November 2021 after receiving widespread parliamentary support.",
              "extract_html": "<p><b>Nicolae Ionel Ciucă</b> is a Romanian politician and retired general of the Romanian Land Forces. He is currently serving as Prime Minister of Romania since 25 November 2021 after receiving widespread parliamentary support.</p>",
              "normalizedtitle": "Nicolae Ciucă"
            },
            {
              "type": "standard",
              "title": "Ciucă_Cabinet",
              "displaytitle": "Ciucă Cabinet",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q109680585",
              "titles": {
                "canonical": "Ciucă_Cabinet",
                "normalized": "Ciucă Cabinet",
                "display": "Ciucă Cabinet"
              },
              "pageid": 69333612,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/NicolaeCiuca_2019.jpg/240px-NicolaeCiuca_2019.jpg",
                "width": 240,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/1/1e/NicolaeCiuca_2019.jpg",
                "width": 2654,
                "height": 3539
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057523062",
              "tid": "830a0340-5050-11ec-932f-2baea75a3841",
              "timestamp": "2021-11-28T04:03:31Z",
              "description": "Incumbent government of Romania",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Ciuc%C4%83_Cabinet",
                  "revisions": "https://en.wikipedia.org/wiki/Ciuc%C4%83_Cabinet?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Ciuc%C4%83_Cabinet?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Ciuc%C4%83_Cabinet"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Ciuc%C4%83_Cabinet",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Ciuc%C4%83_Cabinet",
                  "edit": "https://en.m.wikipedia.org/wiki/Ciuc%C4%83_Cabinet?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Ciuc%C4%83_Cabinet"
                }
              },
              "extract": "The Ciucă Cabinet is the 132nd and current government of Romania led by Nicolae Ciucă, succeeding the Cîțu Cabinet.",
              "extract_html": "<p>The <b>Ciucă Cabinet</b> is the 132nd and current government of Romania led by Nicolae Ciucă, succeeding the Cîțu Cabinet.</p>",
              "normalizedtitle": "Ciucă Cabinet"
            },
            {
              "type": "standard",
              "title": "Prime_Minister_of_Romania",
              "displaytitle": "Prime Minister of Romania",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q15304810",
              "titles": {
                "canonical": "Prime_Minister_of_Romania",
                "normalized": "Prime Minister of Romania",
                "display": "Prime Minister of Romania"
              },
              "pageid": 266262,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flag_of_the_Prime_Minister_of_Romania.svg/320px-Flag_of_the_Prime_Minister_of_Romania.svg.png",
                "width": 320,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flag_of_the_Prime_Minister_of_Romania.svg/700px-Flag_of_the_Prime_Minister_of_Romania.svg.png",
                "width": 700,
                "height": 700
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057427506",
              "tid": "cc2a5640-4f99-11ec-834b-9be95ac278f5",
              "timestamp": "2021-11-27T15:50:44Z",
              "description": "Head of the Government of Romania",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Prime_Minister_of_Romania",
                  "revisions": "https://en.wikipedia.org/wiki/Prime_Minister_of_Romania?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Prime_Minister_of_Romania?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Prime_Minister_of_Romania"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Prime_Minister_of_Romania",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Prime_Minister_of_Romania",
                  "edit": "https://en.m.wikipedia.org/wiki/Prime_Minister_of_Romania?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Prime_Minister_of_Romania"
                }
              },
              "extract": "The prime minister of the Government of Romania is the head of the Government of Romania. Initially, the office was styled President of the Council of Ministers, when the term \"Government\" included more than the Cabinet, and the Cabinet was called The Council of Ministers. The title was officially changed to Prime Minister by the 1965 Constitution of Romania during the communist regime.",
              "extract_html": "<p>The <b>prime minister of the Government of Romania</b> is the head of the Government of Romania. Initially, the office was styled <i>President of the Council of Ministers</i>, when the term \"Government\" included more than the Cabinet, and the Cabinet was called <i>The Council of Ministers</i>. The title was officially changed to <i>Prime Minister</i> by the 1965 Constitution of Romania during the communist regime.</p>",
              "normalizedtitle": "Prime Minister of Romania"
            },
            {
              "type": "standard",
              "title": "2021_Romanian_political_crisis",
              "displaytitle": "2021 Romanian political crisis",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q108513833",
              "titles": {
                "canonical": "2021_Romanian_political_crisis",
                "normalized": "2021 Romanian political crisis",
                "display": "2021 Romanian political crisis"
              },
              "pageid": 68686364,
              "lang": "en",
              "dir": "ltr",
              "revision": "1057555819",
              "tid": "852d3160-5050-11ec-b2d3-09952713a612",
              "timestamp": "2021-11-28T09:17:28Z",
              "description": "Political crisis in Romania in 2021",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/2021_Romanian_political_crisis",
                  "revisions": "https://en.wikipedia.org/wiki/2021_Romanian_political_crisis?action=history",
                  "edit": "https://en.wikipedia.org/wiki/2021_Romanian_political_crisis?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:2021_Romanian_political_crisis"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/2021_Romanian_political_crisis",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/2021_Romanian_political_crisis",
                  "edit": "https://en.m.wikipedia.org/wiki/2021_Romanian_political_crisis?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:2021_Romanian_political_crisis"
                }
              },
              "extract": "A political crisis in Romania began on 1 September 2021 engulfing both major coalition partners of the Cîțu Cabinet, namely the conservative-liberal National Liberal Party (PNL) and the progressive-liberal Save Romania Union (USR). The crisis also involved former Prime Minister Ludovic Orban (PNL), who was set to face Prime Minister Florin Cîțu (PNL) in a leadership election during the party congress on 25 September, with the latter eventually replacing the former. Orban would eventually resign from his position as President of the Chamber of Deputies and subsequently be expelled from the PNL.",
              "extract_html": "<p>A political crisis in Romania began on 1 September 2021 engulfing both major coalition partners of the Cîțu Cabinet, namely the conservative-liberal National Liberal Party (PNL) and the progressive-liberal Save Romania Union (USR). The crisis also involved former Prime Minister Ludovic Orban (PNL), who was set to face Prime Minister Florin Cîțu (PNL) in a leadership election during the party congress on 25 September, with the latter eventually replacing the former. Orban would eventually resign from his position as President of the Chamber of Deputies and subsequently be expelled from the PNL.</p>",
              "normalizedtitle": "2021 Romanian political crisis"
            }
          ],
          "story": "<!--Nov 25--><a rel=\"mw:WikiLink\" href=\"./Ciucă_Cabinet\" title=\"Ciucă Cabinet\" id=\"mwBg\">A coalition government</a>, led by <a rel=\"mw:WikiLink\" href=\"./Prime_Minister_of_Romania\" title=\"Prime Minister of Romania\" id=\"mwBw\">Prime Minister</a> <b id=\"mwCA\"><a rel=\"mw:WikiLink\" href=\"./Nicolae_Ciucă\" title=\"Nicolae Ciucă\" id=\"mwCQ\">Nicolae Ciucă</a></b> <i id=\"mwCg\">(pictured)</i>, takes office in Romania, ending a <a rel=\"mw:WikiLink\" href=\"./2021_Romanian_political_crisis\" title=\"2021 Romanian political crisis\" id=\"mwCw\">nearly three-month-long political crisis</a>."
        },
        {
          "links": [
            {
              "type": "standard",
              "title": "Listvyazhnaya_mine_disaster",
              "displaytitle": "Listvyazhnaya mine disaster",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q109735242",
              "titles": {
                "canonical": "Listvyazhnaya_mine_disaster",
                "normalized": "Listvyazhnaya mine disaster",
                "display": "Listvyazhnaya mine disaster"
              },
              "pageid": 69363229,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/%D0%9F%D0%BE%D0%B6%D0%B0%D1%80_%D0%BD%D0%B0_%D1%88%D0%B0%D1%85%D1%82%D0%B5_%D0%9B%D0%B8%D1%81%D1%82%D0%B2%D1%8F%D0%B6%D0%BD%D0%B0%D1%8F.jpg/320px-%D0%9F%D0%BE%D0%B6%D0%B0%D1%80_%D0%BD%D0%B0_%D1%88%D0%B0%D1%85%D1%82%D0%B5_%D0%9B%D0%B8%D1%81%D1%82%D0%B2%D1%8F%D0%B6%D0%BD%D0%B0%D1%8F.jpg",
                "width": 320,
                "height": 213
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/9/92/%D0%9F%D0%BE%D0%B6%D0%B0%D1%80_%D0%BD%D0%B0_%D1%88%D0%B0%D1%85%D1%82%D0%B5_%D0%9B%D0%B8%D1%81%D1%82%D0%B2%D1%8F%D0%B6%D0%BD%D0%B0%D1%8F.jpg",
                "width": 2000,
                "height": 1333
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057583986",
              "tid": "f117bac0-5051-11ec-a34b-d38f3d62f65a",
              "timestamp": "2021-11-28T13:48:57Z",
              "description": "2021 mining disaster in Kemerovo Oblast, Russia",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Listvyazhnaya_mine_disaster",
                  "revisions": "https://en.wikipedia.org/wiki/Listvyazhnaya_mine_disaster?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Listvyazhnaya_mine_disaster?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Listvyazhnaya_mine_disaster"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Listvyazhnaya_mine_disaster",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Listvyazhnaya_mine_disaster",
                  "edit": "https://en.m.wikipedia.org/wiki/Listvyazhnaya_mine_disaster?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Listvyazhnaya_mine_disaster"
                }
              },
              "extract": "The Listvyazhnaya mine disaster was a mining accident that occurred on 25 November 2021 in a coal mine in Kemerovo Oblast, Russia. Smoke from a fire in a ventilation shaft caused the suffocation of over 40 miners. A failed attempt to rescue the trapped miners killed at least five rescuers when the mine exploded. It is the deadliest mine accident in Russia since the 2010 Raspadskaya mine explosion in the same region.",
              "extract_html": "<p>The <b>Listvyazhnaya mine disaster</b> was a mining accident that occurred on 25 November 2021 in a coal mine in Kemerovo Oblast, Russia. Smoke from a fire in a ventilation shaft caused the suffocation of over 40 miners. A failed attempt to rescue the trapped miners killed at least five rescuers when the mine exploded. It is the deadliest mine accident in Russia since the 2010 Raspadskaya mine explosion in the same region.</p>",
              "normalizedtitle": "Listvyazhnaya mine disaster"
            },
            {
              "type": "standard",
              "title": "Kemerovo_Oblast",
              "displaytitle": "Kemerovo Oblast",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q6076",
              "titles": {
                "canonical": "Kemerovo_Oblast",
                "normalized": "Kemerovo Oblast",
                "display": "Kemerovo Oblast"
              },
              "pageid": 87620,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Map_of_Russia_-_Kemerovo_Oblast.svg/320px-Map_of_Russia_-_Kemerovo_Oblast.svg.png",
                "width": 320,
                "height": 176
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Map_of_Russia_-_Kemerovo_Oblast.svg/1541px-Map_of_Russia_-_Kemerovo_Oblast.svg.png",
                "width": 1541,
                "height": 847
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1055893177",
              "tid": "27362f20-4f16-11ec-aad9-3b674dc4e1b9",
              "timestamp": "2021-11-18T13:06:31Z",
              "description": "First-level administrative division of Russia",
              "description_source": "local",
              "coordinates": {
                "lat": 54.93333333,
                "lon": 87.23333333
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Kemerovo_Oblast",
                  "revisions": "https://en.wikipedia.org/wiki/Kemerovo_Oblast?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Kemerovo_Oblast?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Kemerovo_Oblast"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Kemerovo_Oblast",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Kemerovo_Oblast",
                  "edit": "https://en.m.wikipedia.org/wiki/Kemerovo_Oblast?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Kemerovo_Oblast"
                }
              },
              "extract": "Kemerovo Oblast–Kuzbass, also known by its short names as Kemerovo Oblast and Kuzbass (Кузба́сс) after the Kuznetsk Basin, is a federal subject of Russia, located in southwestern Siberia, where the West Siberian Plain meets the South Siberian Mountains. The oblast, which covers an area of 95,500 square kilometers (36,900 sq mi), shares a border with Tomsk Oblast in the north, Krasnoyarsk Krai and the Republic of Khakassia in the east, the Altai Republic in the south, and with Novosibirsk Oblast and Altai Krai in the west. Kemerovo is the administrative center of the oblast, though Novokuznetsk is the largest city in the oblast, in terms of size. Kemerovo Oblast is one of Russia's most urbanized regions, with over 70% of the population living in its nine principal cities. Its ethnic composition is predominantly Russian, but Ukrainians, Tatars, and Chuvash also live in the oblast. The population recorded during the 2010 Census was 2,763,135.",
              "extract_html": "<p><b>Kemerovo Oblast–Kuzbass</b>, also known by its short names as <b>Kemerovo Oblast</b> and <b>Kuzbass</b> (Кузба́сс) after the Kuznetsk Basin, is a federal subject of Russia, located in southwestern Siberia, where the West Siberian Plain meets the South Siberian Mountains. The oblast, which covers an area of 95,500 square kilometers (36,900 sq mi), shares a border with Tomsk Oblast in the north, Krasnoyarsk Krai and the Republic of Khakassia in the east, the Altai Republic in the south, and with Novosibirsk Oblast and Altai Krai in the west. Kemerovo is the administrative center of the oblast, though Novokuznetsk is the largest city in the oblast, in terms of size. Kemerovo Oblast is one of Russia's most urbanized regions, with over 70% of the population living in its nine principal cities. Its ethnic composition is predominantly Russian, but Ukrainians, Tatars, and Chuvash also live in the oblast. The population recorded during the 2010 Census was 2,763,135.</p>",
              "normalizedtitle": "Kemerovo Oblast"
            }
          ],
          "story": "<!--Nov 25-->At least fifty people are killed in <b id=\"mwDQ\"><a rel=\"mw:WikiLink\" href=\"./Listvyazhnaya_mine_disaster\" title=\"Listvyazhnaya mine disaster\" id=\"mwDg\">a mining accident</a></b> in <a rel=\"mw:WikiLink\" href=\"./Kemerovo_Oblast\" title=\"Kemerovo Oblast\" id=\"mwDw\">Kemerovo Oblast</a>, Russia."
        },
        {
          "links": [
            {
              "type": "standard",
              "title": "Double_Asteroid_Redirection_Test",
              "displaytitle": "Double Asteroid Redirection Test",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q47482008",
              "titles": {
                "canonical": "Double_Asteroid_Redirection_Test",
                "normalized": "Double Asteroid Redirection Test",
                "display": "Double Asteroid Redirection Test"
              },
              "pageid": 54431373,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Dart_header_2_%281%29.jpg/320px-Dart_header_2_%281%29.jpg",
                "width": 320,
                "height": 180
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Dart_header_2_%281%29.jpg",
                "width": 4800,
                "height": 2700
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057572034",
              "tid": "bf19acf0-5041-11ec-8399-c9edfe5a5bb7",
              "timestamp": "2021-11-28T11:53:00Z",
              "description": "First mission in the Solar System Exploration program; the impact of Dimorphos",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Double_Asteroid_Redirection_Test",
                  "revisions": "https://en.wikipedia.org/wiki/Double_Asteroid_Redirection_Test?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Double_Asteroid_Redirection_Test?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Double_Asteroid_Redirection_Test"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Double_Asteroid_Redirection_Test",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Double_Asteroid_Redirection_Test",
                  "edit": "https://en.m.wikipedia.org/wiki/Double_Asteroid_Redirection_Test?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Double_Asteroid_Redirection_Test"
                }
              },
              "extract": "The Double Asteroid Redirection Test (DART) is a NASA space mission aimed at testing a method of planetary defense against near-Earth objects (NEOs). In September 2022, a space probe is set to deliberately crash into the minor-planet moon Dimorphos of the double asteroid Didymos to assess the future potential of a spacecraft impact to deflect an asteroid on a collision course with Earth through a transference of momentum.",
              "extract_html": "<p>The <b>Double Asteroid Redirection Test</b> (<b>DART</b>) is a NASA space mission aimed at testing a method of planetary defense against near-Earth objects (NEOs). In September 2022, a space probe is set to deliberately crash into the minor-planet moon Dimorphos of the double asteroid Didymos to assess the future potential of a spacecraft impact to deflect an asteroid on a collision course with Earth through a transference of momentum.</p>",
              "normalizedtitle": "Double Asteroid Redirection Test"
            },
            {
              "type": "standard",
              "title": "Dimorphos",
              "displaytitle": "Dimorphos",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q25387442",
              "titles": {
                "canonical": "Dimorphos",
                "normalized": "Dimorphos",
                "display": "Dimorphos"
              },
              "pageid": 64430067,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Didymos-Arecibo-radar-images.png/320px-Didymos-Arecibo-radar-images.png",
                "width": 320,
                "height": 266
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Didymos-Arecibo-radar-images.png",
                "width": 827,
                "height": 687
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057500829",
              "tid": "ce673c60-4fe5-11ec-bf78-6fc25a291926",
              "timestamp": "2021-11-28T00:54:54Z",
              "description": "Asteroid satellite",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Dimorphos",
                  "revisions": "https://en.wikipedia.org/wiki/Dimorphos?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Dimorphos?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Dimorphos"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Dimorphos",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Dimorphos",
                  "edit": "https://en.m.wikipedia.org/wiki/Dimorphos?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Dimorphos"
                }
              },
              "extract": "Dimorphos is a small asteroid satellite that was discovered in 2003. It is the minor-planet moon of a synchronous binary system with 65803 Didymos as the primary asteroid. After being provisionally designated as S/2003 (65803) 1 with informal nicknames such as \"Didymos B\" and \"Didymoon\", the Working Group Small Body Nomenclature (WGSBN) of the International Astronomical Union gave the satellite its official name on 23 June 2020. At a diameter of 170 metres (560 ft), it is one of the smallest astronomical objects that has been given a permanent name.",
              "extract_html": "<p><b>Dimorphos</b> is a small asteroid satellite that was discovered in 2003. It is the minor-planet moon of a synchronous binary system with 65803 Didymos as the primary asteroid. After being provisionally designated as S/2003 (65803) 1 with informal nicknames such as \"Didymos B\" and \"Didymoon\", the Working Group Small Body Nomenclature (WGSBN) of the International Astronomical Union gave the satellite its official name on 23 June 2020. At a diameter of 170 metres (560 ft), it is one of the smallest astronomical objects that has been given a permanent name.</p>",
              "normalizedtitle": "Dimorphos"
            }
          ],
          "story": "<!--Nov 24-->The <b id=\"mwEQ\"><a rel=\"mw:WikiLink\" href=\"./Double_Asteroid_Redirection_Test\" title=\"Double Asteroid Redirection Test\" id=\"mwEg\">Double Asteroid Redirection Test</a></b> (DART) mission is launched to attempt to change the orbit of the asteroid moon <a rel=\"mw:WikiLink\" href=\"./Dimorphos\" title=\"Dimorphos\" id=\"mwEw\">Dimorphos</a>."
        },
        {
          "links": [
            {
              "type": "standard",
              "title": "Magdalena_Andersson",
              "displaytitle": "Magdalena Andersson",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q4935873",
              "titles": {
                "canonical": "Magdalena_Andersson",
                "normalized": "Magdalena Andersson",
                "display": "Magdalena Andersson"
              },
              "pageid": 41178429,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Budgetpropositionen_f%C3%B6r_2022_%281_av_8%29_%28cropped%29_%281%29.jpg/196px-Budgetpropositionen_f%C3%B6r_2022_%281_av_8%29_%28cropped%29_%281%29.jpg",
                "width": 196,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/b/be/Budgetpropositionen_f%C3%B6r_2022_%281_av_8%29_%28cropped%29_%281%29.jpg",
                "width": 935,
                "height": 1525
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057529768",
              "tid": "45ae6eb0-5009-11ec-90d6-21daa1d74619",
              "timestamp": "2021-11-28T05:08:42Z",
              "description": "Swedish Social Democratic politician (born 1967)",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Magdalena_Andersson",
                  "revisions": "https://en.wikipedia.org/wiki/Magdalena_Andersson?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Magdalena_Andersson?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Magdalena_Andersson"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Magdalena_Andersson",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Magdalena_Andersson",
                  "edit": "https://en.m.wikipedia.org/wiki/Magdalena_Andersson?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Magdalena_Andersson"
                }
              },
              "extract": "Eva Magdalena Andersson is a Swedish politician and economist who has been serving as the leader of the Swedish Social Democratic Party since 4 November 2021.",
              "extract_html": "<p><b>Eva Magdalena Andersson</b> is a Swedish politician and economist who has been serving as the leader of the Swedish Social Democratic Party since 4 November 2021.</p>",
              "normalizedtitle": "Magdalena Andersson"
            },
            {
              "type": "standard",
              "title": "Prime_Minister_of_Sweden",
              "displaytitle": "Prime Minister of Sweden",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q687075",
              "titles": {
                "canonical": "Prime_Minister_of_Sweden",
                "normalized": "Prime Minister of Sweden",
                "display": "Prime Minister of Sweden"
              },
              "pageid": 195846,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/320px-Flag_of_Sweden.svg.png",
                "width": 320,
                "height": 200
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.svg.png",
                "width": 1600,
                "height": 1000
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057572727",
              "tid": "cc0e36f0-5042-11ec-88d5-3902c2f10cf4",
              "timestamp": "2021-11-28T12:00:24Z",
              "description": "Head of government of Sweden",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Prime_Minister_of_Sweden",
                  "revisions": "https://en.wikipedia.org/wiki/Prime_Minister_of_Sweden?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Prime_Minister_of_Sweden?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Prime_Minister_of_Sweden"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Prime_Minister_of_Sweden",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Prime_Minister_of_Sweden",
                  "edit": "https://en.m.wikipedia.org/wiki/Prime_Minister_of_Sweden?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Prime_Minister_of_Sweden"
                }
              },
              "extract": "The prime minister is the head of government in Sweden. Before the creation of the office of a prime minister in 1876, Sweden did not have a head of government separate from its head of state, namely the king, in whom the executive authority was vested. Louis Gerhard De Geer, the architect behind the new bicameral Riksdag of 1866 that replaced the centuries-old Riksdag of the Estates, became the first officeholder in 1876.",
              "extract_html": "<p>The <b>prime minister</b> is the head of government in Sweden. Before the creation of the office of a prime minister in 1876, Sweden did not have a head of government separate from its head of state, namely the king, in whom the executive authority was vested. Louis Gerhard De Geer, the architect behind the new bicameral Riksdag of 1866 that replaced the centuries-old Riksdag of the Estates, became the first officeholder in 1876.</p>",
              "normalizedtitle": "Prime Minister of Sweden"
            }
          ],
          "story": "<!--Nov 24--><b id=\"mwFQ\"><a rel=\"mw:WikiLink\" href=\"./Magdalena_Andersson\" title=\"Magdalena Andersson\" id=\"mwFg\">Magdalena Andersson</a></b> resigns shortly after being elected as the first female <a rel=\"mw:WikiLink\" href=\"./Prime_Minister_of_Sweden\" title=\"Prime Minister of Sweden\" id=\"mwFw\"> prime minister of Sweden</a>."
        }
      ],
      "onthisday": [
        {
          "text": "LaMia Flight 2933 crashed near Medellín, Colombia, killing 71 people, many of whom were players from Chapecoense Football Club.",
          "pages": [
            {
              "type": "standard",
              "title": "LaMia_Flight_2933",
              "displaytitle": "LaMia Flight 2933",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q27925924",
              "titles": {
                "canonical": "LaMia_Flight_2933",
                "normalized": "LaMia Flight 2933",
                "display": "LaMia Flight 2933"
              },
              "pageid": 52417480,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LaMia_P4-LOR_at_EGPF%2C_Oct_2013.jpg/320px-LaMia_P4-LOR_at_EGPF%2C_Oct_2013.jpg",
                "width": 320,
                "height": 213
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/1/1f/LaMia_P4-LOR_at_EGPF%2C_Oct_2013.jpg",
                "width": 4111,
                "height": 2730
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1053720347",
              "tid": "60c80180-500d-11ec-8323-d77b3e50adb8",
              "timestamp": "2021-11-05T16:31:22Z",
              "description": "Fatal Colombian air crash involving Chapecoense football team",
              "description_source": "local",
              "coordinates": {
                "lat": 5.97861111,
                "lon": -75.41833333
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/LaMia_Flight_2933",
                  "revisions": "https://en.wikipedia.org/wiki/LaMia_Flight_2933?action=history",
                  "edit": "https://en.wikipedia.org/wiki/LaMia_Flight_2933?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:LaMia_Flight_2933"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/LaMia_Flight_2933",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/LaMia_Flight_2933",
                  "edit": "https://en.m.wikipedia.org/wiki/LaMia_Flight_2933?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:LaMia_Flight_2933"
                }
              },
              "extract": "LaMia Flight 2933 was a charter flight of an Avro RJ85, operated by LaMia, that on 28 November 2016 crashed near Medellín, Colombia, killing 71 of the 77 people on board. The aircraft was transporting the Brazilian Chapecoense football squad and their entourage from Santa Cruz de la Sierra, Bolivia, to Medellín, where the team was scheduled to play at the 2016 Copa Sudamericana Finals. One of the four crew members, three of the players, and two other passengers survived with injuries.",
              "extract_html": "<p><b>LaMia Flight 2933</b> was a charter flight of an Avro RJ85, operated by LaMia, that on 28 November 2016 crashed near Medellín, Colombia, killing 71 of the 77 people on board. The aircraft was transporting the Brazilian Chapecoense football squad and their entourage from Santa Cruz de la Sierra, Bolivia, to Medellín, where the team was scheduled to play at the 2016 Copa Sudamericana Finals. One of the four crew members, three of the players, and two other passengers survived with injuries.</p>",
              "normalizedtitle": "LaMia Flight 2933"
            },
            {
              "type": "standard",
              "title": "Medellín",
              "displaytitle": "Medellín",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q48278",
              "titles": {
                "canonical": "Medellín",
                "normalized": "Medellín",
                "display": "Medellín"
              },
              "pageid": 340197,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Metro_de_Medell%C3%ADn%2C_Colombia.jpg/320px-Metro_de_Medell%C3%ADn%2C_Colombia.jpg",
                "width": 320,
                "height": 213
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Metro_de_Medell%C3%ADn%2C_Colombia.jpg",
                "width": 6144,
                "height": 4096
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1055659590",
              "tid": "86849bf0-500c-11ec-b14c-3f9780df4ad3",
              "timestamp": "2021-11-17T03:05:04Z",
              "description": "Municipality in Aburrá Valley, Colombia",
              "description_source": "local",
              "coordinates": {
                "lat": 6.23083333,
                "lon": -75.59055556
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Medell%C3%ADn",
                  "revisions": "https://en.wikipedia.org/wiki/Medell%C3%ADn?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Medell%C3%ADn?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Medell%C3%ADn"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Medell%C3%ADn",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Medell%C3%ADn",
                  "edit": "https://en.m.wikipedia.org/wiki/Medell%C3%ADn?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Medell%C3%ADn"
                }
              },
              "extract": "Medellín, officially the Municipality of Medellín, is the second-largest city in Colombia, after Bogotá, and the capital of the department of Antioquia. It is located in the Aburrá Valley, a central region of the Andes Mountains in South America. According to the National Administrative Department of Statistics, the city had an estimated population of 2,508,452 according to the 2018 census. With its surrounding area that includes nine other cities, the metropolitan area of Medellín is the second-largest urban agglomeration in Colombia in terms of population and economy, with more than 3.7 million people.",
              "extract_html": "<p><b>Medellín</b>, officially the <b>Municipality of Medellín</b>, is the second-largest city in Colombia, after Bogotá, and the capital of the department of Antioquia. It is located in the Aburrá Valley, a central region of the Andes Mountains in South America. According to the National Administrative Department of Statistics, the city had an estimated population of 2,508,452 according to the 2018 census. With its surrounding area that includes nine other cities, the metropolitan area of Medellín is the second-largest urban agglomeration in Colombia in terms of population and economy, with more than 3.7 million people.</p>",
              "normalizedtitle": "Medellín"
            },
            {
              "type": "standard",
              "title": "Associação_Chapecoense_de_Futebol",
              "displaytitle": "Associação Chapecoense de Futebol",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q2536715",
              "titles": {
                "canonical": "Associação_Chapecoense_de_Futebol",
                "normalized": "Associação Chapecoense de Futebol",
                "display": "Associação Chapecoense de Futebol"
              },
              "pageid": 12198849,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol_logo.svg/280px-Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol_logo.svg.png",
                "width": 280,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol_logo.svg/175px-Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol_logo.svg.png",
                "width": 175,
                "height": 200
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1052069676",
              "tid": "94b5f2f0-4f21-11ec-8370-b59e2ebe87d2",
              "timestamp": "2021-10-27T06:02:29Z",
              "description": "Brazilian football club based in Chapecó",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol",
                  "revisions": "https://en.wikipedia.org/wiki/Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol",
                  "edit": "https://en.m.wikipedia.org/wiki/Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol"
                }
              },
              "extract": "Associação Chapecoense de Futebol, commonly known as Chapecoense and whose acronym is ACF, is a Brazilian football club, based in the city of Chapecó in the state of Santa Catarina.",
              "extract_html": "<p><b>Associação Chapecoense de Futebol</b>, commonly known as <b>Chapecoense</b> and whose acronym is <b>ACF</b>, is a Brazilian football club, based in the city of Chapecó in the state of Santa Catarina.</p>",
              "normalizedtitle": "Associação Chapecoense de Futebol"
            }
          ],
          "year": 2016
        },
        {
          "text": "Suicide bombers blew up an Israeli-owned hotel in Mombasa, Kenya, but their colleagues failed in their attempt to bring down an Arkia Israel Airlines charter flight with surface-to-air-missiles.",
          "pages": [
            {
              "type": "standard",
              "title": "2002_Mombasa_attacks",
              "displaytitle": "2002 Mombasa attacks",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q2896313",
              "titles": {
                "canonical": "2002_Mombasa_attacks",
                "normalized": "2002 Mombasa attacks",
                "display": "2002 Mombasa attacks"
              },
              "pageid": 153226,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Arkia_B753_4X-BAW.jpg/320px-Arkia_B753_4X-BAW.jpg",
                "width": 320,
                "height": 213
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Arkia_B753_4X-BAW.jpg",
                "width": 800,
                "height": 533
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1043751564",
              "tid": "29f1f5b0-4fc4-11ec-8dea-3b0148a60f51",
              "timestamp": "2021-09-11T19:47:32Z",
              "description": "Terrorist attacks in Kenya",
              "description_source": "local",
              "coordinates": {
                "lat": -4.05,
                "lon": 39.666
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/2002_Mombasa_attacks",
                  "revisions": "https://en.wikipedia.org/wiki/2002_Mombasa_attacks?action=history",
                  "edit": "https://en.wikipedia.org/wiki/2002_Mombasa_attacks?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:2002_Mombasa_attacks"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/2002_Mombasa_attacks",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/2002_Mombasa_attacks",
                  "edit": "https://en.m.wikipedia.org/wiki/2002_Mombasa_attacks?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:2002_Mombasa_attacks"
                }
              },
              "extract": "The 2002 Mombasa attacks was a two-pronged terrorist attack on 28 November 2002 in Mombasa, Kenya against an Israeli-owned hotel and a plane belonging to Arkia Airlines. An all-terrain vehicle crashed through a barrier outside the Paradise Hotel and blew up, killing 13 and injuring 80. At the same time, attackers fired two surface-to-air missiles at an Israeli charter plane. The Paradise Hotel was the only Israeli-owned hotel in the Mombasa area. The attacks were believed to be orchestrated by al-Qaeda operatives in Somalia in an attempt to disrupt the Israeli tourist industry on the African continent. Much speculation has occurred as to who the perpetrators are, but no complete list of suspects has been defined. The attack was the second al-Qaeda terrorist operation in Kenya, following the bombing of the U.S. embassy in Nairobi in 1998. Following the attack, the UN Security Council and other nations condemned the bombing.",
              "extract_html": "<p>The <b>2002 Mombasa attacks</b> was a two-pronged terrorist attack on 28 November 2002 in Mombasa, Kenya against an Israeli-owned hotel and a plane belonging to Arkia Airlines. An all-terrain vehicle crashed through a barrier outside the <b>Paradise Hotel</b> and blew up, killing 13 and injuring 80. At the same time, attackers fired two surface-to-air missiles at an Israeli charter plane. The Paradise Hotel was the only Israeli-owned hotel in the Mombasa area. The attacks were believed to be orchestrated by al-Qaeda operatives in Somalia in an attempt to disrupt the Israeli tourist industry on the African continent. Much speculation has occurred as to who the perpetrators are, but no complete list of suspects has been defined. The attack was the second al-Qaeda terrorist operation in Kenya, following the bombing of the U.S. embassy in Nairobi in 1998. Following the attack, the UN Security Council and other nations condemned the bombing.</p>",
              "normalizedtitle": "2002 Mombasa attacks"
            },
            {
              "type": "standard",
              "title": "Mombasa",
              "displaytitle": "Mombasa",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q225641",
              "titles": {
                "canonical": "Mombasa",
                "normalized": "Mombasa",
                "display": "Mombasa"
              },
              "pageid": 200152,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mombasa_montage.png/291px-Mombasa_montage.png",
                "width": 291,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mombasa_montage.png",
                "width": 1022,
                "height": 1125
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057205765",
              "tid": "dbe0cb60-4f16-11ec-9a9b-f97b9728a62d",
              "timestamp": "2021-11-26T04:16:58Z",
              "description": "Consolidated city-county in Mombasa County, Kenya",
              "description_source": "local",
              "coordinates": {
                "lat": -4.05,
                "lon": 39.66666667
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Mombasa",
                  "revisions": "https://en.wikipedia.org/wiki/Mombasa?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Mombasa?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Mombasa"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Mombasa",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Mombasa",
                  "edit": "https://en.m.wikipedia.org/wiki/Mombasa?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Mombasa"
                }
              },
              "extract": "Mombasa is a coastal city in southeastern Kenya along the Indian Ocean. The city is known as the white and blue city in Kenya. It is the country's oldest and second-largest city, with a population of about 1,208,333 people according to the 2019 census. Its metropolitan region is the second-largest in the country, and has a population of 3,528,940 people.",
              "extract_html": "<p><b>Mombasa</b> is a coastal city in southeastern Kenya along the Indian Ocean. The city is known as the white and blue city in Kenya. It is the country's oldest and second-largest city, with a population of about 1,208,333 people according to the 2019 census. Its metropolitan region is the second-largest in the country, and has a population of 3,528,940 people.</p>",
              "normalizedtitle": "Mombasa"
            },
            {
              "type": "standard",
              "title": "Arkia",
              "displaytitle": "Arkia",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q553915",
              "titles": {
                "canonical": "Arkia",
                "normalized": "Arkia",
                "display": "Arkia"
              },
              "pageid": 509885,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Arkia_logo.svg/320px-Arkia_logo.svg.png",
                "width": 320,
                "height": 154
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Arkia_logo.svg/261px-Arkia_logo.svg.png",
                "width": 261,
                "height": 126
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1056317780",
              "tid": "8b9b8ea0-500c-11ec-b637-df9e51cf44ea",
              "timestamp": "2021-11-21T02:25:49Z",
              "description": "Israeli airline",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Arkia",
                  "revisions": "https://en.wikipedia.org/wiki/Arkia?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Arkia?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Arkia"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Arkia",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Arkia",
                  "edit": "https://en.m.wikipedia.org/wiki/Arkia?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Arkia"
                }
              },
              "extract": "Arkia, legally incorporated as Arkia Israeli Airlines Ltd, is an Israeli airline. Its head office is on the grounds of Sde Dov Airport in Tel Aviv, Israel. It is Israel's second-largest airline, operating scheduled domestic and international services, as well as charter flights to destinations in Western Europe and across the Mediterranean. Its main base is Ben Gurion Airport, with hub at Ramon Airport.",
              "extract_html": "<p><b>Arkia</b>, legally incorporated as <b>Arkia Israeli Airlines Ltd</b>, is an Israeli airline. Its head office is on the grounds of Sde Dov Airport in Tel Aviv, Israel. It is Israel's second-largest airline, operating scheduled domestic and international services, as well as charter flights to destinations in Western Europe and across the Mediterranean. Its main base is Ben Gurion Airport, with hub at Ramon Airport.</p>",
              "normalizedtitle": "Arkia"
            }
          ],
          "year": 2002
        },
        {
          "text": "South African Airways Flight 295 suffered a catastrophic in-flight fire and crashed into the Indian Ocean east of Mauritius, killing all 159 on board.",
          "pages": [
            {
              "type": "standard",
              "title": "South_African_Airways_Flight_295",
              "displaytitle": "South African Airways Flight 295",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q715683",
              "titles": {
                "canonical": "South_African_Airways_Flight_295",
                "normalized": "South African Airways Flight 295",
                "display": "South African Airways Flight 295"
              },
              "pageid": 773863,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/South_African_Airways_Boeing_747-200_Aragao-1.jpg/320px-South_African_Airways_Boeing_747-200_Aragao-1.jpg",
                "width": 320,
                "height": 215
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/5/5d/South_African_Airways_Boeing_747-200_Aragao-1.jpg",
                "width": 1050,
                "height": 705
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057578335",
              "tid": "60443ed0-504a-11ec-ad78-09a87b8a2f1b",
              "timestamp": "2021-11-28T12:54:44Z",
              "description": "Flight that crashed in the Indian Ocean in 1987",
              "description_source": "local",
              "coordinates": {
                "lat": -19.175,
                "lon": 59.63333333
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/South_African_Airways_Flight_295",
                  "revisions": "https://en.wikipedia.org/wiki/South_African_Airways_Flight_295?action=history",
                  "edit": "https://en.wikipedia.org/wiki/South_African_Airways_Flight_295?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:South_African_Airways_Flight_295"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/South_African_Airways_Flight_295",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/South_African_Airways_Flight_295",
                  "edit": "https://en.m.wikipedia.org/wiki/South_African_Airways_Flight_295?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:South_African_Airways_Flight_295"
                }
              },
              "extract": "South African Airways Flight 295 was a scheduled international passenger flight from Taoyuan International Airport, Taipei, Taiwan to Jan Smuts International Airport, Johannesburg, South Africa, with a stopover in Plaisance Airport, Plaine Magnien, Mauritius. On 28 November 1987, the aircraft serving the flight, a Boeing 747 Combi named Helderberg, experienced a catastrophic in-flight fire in the cargo area, broke up in mid-air, and crashed into the Indian Ocean east of Mauritius, killing all 159 people on board. An extensive salvage operation was mounted to try to recover the aircraft's flight recorders, one of which was recovered from a depth of 4,900 metres (16,100 ft).",
              "extract_html": "<p><b>South African Airways Flight 295</b> was a scheduled international passenger flight from Taoyuan International Airport, Taipei, Taiwan to Jan Smuts International Airport, Johannesburg, South Africa, with a stopover in Plaisance Airport, Plaine Magnien, Mauritius. On 28 November 1987, the aircraft serving the flight, a Boeing 747 Combi named <i><b>Helderberg</b></i>, experienced a catastrophic in-flight fire in the cargo area, broke up in mid-air, and crashed into the Indian Ocean east of Mauritius, killing all 159 people on board. An extensive salvage operation was mounted to try to recover the aircraft's flight recorders, one of which was recovered from a depth of 4,900 metres (16,100 ft).</p>",
              "normalizedtitle": "South African Airways Flight 295"
            }
          ],
          "year": 1987
        },
        {
          "text": "Air New Zealand Flight 901 crashed into Antarctica's Mount Erebus, killing all 257 people on board.",
          "pages": [
            {
              "type": "standard",
              "title": "Mount_Erebus_disaster",
              "displaytitle": "Mount Erebus disaster",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q406599",
              "titles": {
                "canonical": "Mount_Erebus_disaster",
                "normalized": "Mount Erebus disaster",
                "display": "Mount Erebus disaster"
              },
              "pageid": 1158000,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Air_New_Zealand_Flight_901.jpg",
                "width": 210,
                "height": 243
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Air_New_Zealand_Flight_901.jpg",
                "width": 210,
                "height": 243
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057528604",
              "tid": "9b3d2cb0-500c-11ec-9c42-892e0dbde4bb",
              "timestamp": "2021-11-28T04:58:33Z",
              "description": "November 1979 aviation accident in Antarctica",
              "description_source": "local",
              "coordinates": {
                "lat": -77.425,
                "lon": 167.45833333
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Mount_Erebus_disaster",
                  "revisions": "https://en.wikipedia.org/wiki/Mount_Erebus_disaster?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Mount_Erebus_disaster?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Mount_Erebus_disaster"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Mount_Erebus_disaster",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Mount_Erebus_disaster",
                  "edit": "https://en.m.wikipedia.org/wiki/Mount_Erebus_disaster?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Mount_Erebus_disaster"
                }
              },
              "extract": "The Mount Erebus disaster occurred on 28 November 1979 when Air New Zealand Flight 901 (TE-901) flew into Mount Erebus on Ross Island, Antarctica, killing all 237 passengers and 20 crew on board. Air New Zealand had been operating scheduled Antarctic sightseeing flights since 1977. This flight was supposed to leave Auckland Airport in the morning and spend a few hours flying over the Antarctic continent, before returning to Auckland in the evening via Christchurch.",
              "extract_html": "<p>The <b>Mount Erebus disaster</b> occurred on 28 November 1979 when <b>Air New Zealand Flight 901</b> (TE-901) flew into Mount Erebus on Ross Island, Antarctica, killing all 237 passengers and 20 crew on board. Air New Zealand had been operating scheduled Antarctic sightseeing flights since 1977. This flight was supposed to leave Auckland Airport in the morning and spend a few hours flying over the Antarctic continent, before returning to Auckland in the evening via Christchurch.</p>",
              "normalizedtitle": "Mount Erebus disaster"
            },
            {
              "type": "standard",
              "title": "Mount_Erebus",
              "displaytitle": "Mount Erebus",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q188982",
              "titles": {
                "canonical": "Mount_Erebus",
                "normalized": "Mount Erebus",
                "display": "Mount Erebus"
              },
              "pageid": 161704,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mt_erebus.jpg/320px-Mt_erebus.jpg",
                "width": 320,
                "height": 213
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mt_erebus.jpg",
                "width": 640,
                "height": 425
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057580098",
              "tid": "e0dab950-504c-11ec-8328-b37853e5e1ee",
              "timestamp": "2021-11-28T13:12:42Z",
              "description": "Volcano on Ross Island, Antarctica",
              "description_source": "local",
              "coordinates": {
                "lat": -77.52972222,
                "lon": 167.15333333
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Mount_Erebus",
                  "revisions": "https://en.wikipedia.org/wiki/Mount_Erebus?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Mount_Erebus?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Mount_Erebus"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Mount_Erebus",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Mount_Erebus",
                  "edit": "https://en.m.wikipedia.org/wiki/Mount_Erebus?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Mount_Erebus"
                }
              },
              "extract": "Mount Erebus is an active volcano, the second-highest in Antarctica and the southernmost active volcano on Earth. It is the sixth-highest ultra mountain on the continent. With a summit elevation of 3,794 metres (12,448 ft), it is located in the Ross Dependency on Ross Island, which is also home to three inactive volcanoes: Mount Terror, Mount Bird, and Mount Terra Nova.",
              "extract_html": "<p><b>Mount Erebus</b> is an active volcano, the second-highest in Antarctica and the southernmost active volcano on Earth. It is the sixth-highest ultra mountain on the continent. With a summit elevation of 3,794 metres (12,448 ft), it is located in the Ross Dependency on Ross Island, which is also home to three inactive volcanoes: Mount Terror, Mount Bird, and Mount Terra Nova.</p>",
              "normalizedtitle": "Mount Erebus"
            }
          ],
          "year": 1979
        },
        {
          "text": "Jocelyn Bell Burnell noticed a \"bit of scruff\" in data from a radio telescope, which turned out to be from PSR B1919+21, the first discovered pulsar.",
          "pages": [
            {
              "type": "standard",
              "title": "Jocelyn_Bell_Burnell",
              "displaytitle": "Jocelyn Bell Burnell",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q233974",
              "titles": {
                "canonical": "Jocelyn_Bell_Burnell",
                "normalized": "Jocelyn Bell Burnell",
                "display": "Jocelyn Bell Burnell"
              },
              "pageid": 543432,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Launch_of_IYA_2009%2C_Paris_-_Grygar%2C_Bell_Burnell_cropped.jpg/229px-Launch_of_IYA_2009%2C_Paris_-_Grygar%2C_Bell_Burnell_cropped.jpg",
                "width": 229,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Launch_of_IYA_2009%2C_Paris_-_Grygar%2C_Bell_Burnell_cropped.jpg",
                "width": 723,
                "height": 1010
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1050259489",
              "tid": "8e441960-500c-11ec-99c9-5f679c9187c7",
              "timestamp": "2021-10-16T19:08:14Z",
              "description": "British astrophysicist",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell",
                  "revisions": "https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Jocelyn_Bell_Burnell"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Jocelyn_Bell_Burnell",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Jocelyn_Bell_Burnell",
                  "edit": "https://en.m.wikipedia.org/wiki/Jocelyn_Bell_Burnell?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Jocelyn_Bell_Burnell"
                }
              },
              "extract": "Dame Susan Jocelyn Bell Burnell is an astrophysicist from Northern Ireland who, as a postgraduate student, discovered the first radio pulsars in 1967. This discovery eventually earned the Nobel Prize in Physics in 1974; however, she was not one of the recipients of the prize.",
              "extract_html": "<p><b>Dame Susan Jocelyn Bell Burnell</b> is an astrophysicist from Northern Ireland who, as a postgraduate student, discovered the first radio pulsars in 1967. This discovery eventually earned the Nobel Prize in Physics in 1974; however, she was not one of the recipients of the prize.</p>",
              "normalizedtitle": "Jocelyn Bell Burnell"
            },
            {
              "type": "standard",
              "title": "Radio_telescope",
              "displaytitle": "Radio telescope",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q184356",
              "titles": {
                "canonical": "Radio_telescope",
                "normalized": "Radio telescope",
                "display": "Radio telescope"
              },
              "pageid": 46656,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CSIRO_ScienceImage_4350_CSIROs_Parkes_Radio_Telescope_with_moon_in_the_background.jpg/256px-CSIRO_ScienceImage_4350_CSIROs_Parkes_Radio_Telescope_with_moon_in_the_background.jpg",
                "width": 256,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/0/00/CSIRO_ScienceImage_4350_CSIROs_Parkes_Radio_Telescope_with_moon_in_the_background.jpg",
                "width": 2129,
                "height": 2657
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1052819190",
              "tid": "6af455b0-500c-11ec-9d6c-57fa29000fce",
              "timestamp": "2021-10-31T07:59:45Z",
              "description": "Directional radio antenna used in radio astronomy",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Radio_telescope",
                  "revisions": "https://en.wikipedia.org/wiki/Radio_telescope?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Radio_telescope?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Radio_telescope"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Radio_telescope",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Radio_telescope",
                  "edit": "https://en.m.wikipedia.org/wiki/Radio_telescope?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Radio_telescope"
                }
              },
              "extract": "A radio telescope is a specialized antenna and radio receiver used to detect radio waves from astronomical radio sources in the sky. Radio telescopes are the main observing instrument used in radio astronomy, which studies the radio frequency portion of the electromagnetic spectrum emitted by astronomical objects, just as optical telescopes are the main observing instrument used in traditional optical astronomy which studies the light wave portion of the spectrum coming from astronomical objects. Unlike optical telescopes, radio telescopes can be used in the daytime as well as at night.",
              "extract_html": "<p>A <b>radio telescope</b> is a specialized antenna and radio receiver used to detect radio waves from astronomical radio sources in the sky. Radio telescopes are the main observing instrument used in radio astronomy, which studies the radio frequency portion of the electromagnetic spectrum emitted by astronomical objects, just as optical telescopes are the main observing instrument used in traditional optical astronomy which studies the light wave portion of the spectrum coming from astronomical objects. Unlike optical telescopes, radio telescopes can be used in the daytime as well as at night.</p>",
              "normalizedtitle": "Radio telescope"
            },
            {
              "type": "standard",
              "title": "PSR_B1919+21",
              "displaytitle": "PSR B1919+21",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q1319958",
              "titles": {
                "canonical": "PSR_B1919+21",
                "normalized": "PSR B1919+21",
                "display": "PSR B1919+21"
              },
              "pageid": 1000060,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Chart_Showing_Radio_Signal_of_First_Identified_Pulsar.jpg/240px-Chart_Showing_Radio_Signal_of_First_Identified_Pulsar.jpg",
                "width": 240,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/6/65/Chart_Showing_Radio_Signal_of_First_Identified_Pulsar.jpg",
                "width": 3024,
                "height": 4032
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1054427973",
              "tid": "96ea9b70-500c-11ec-9554-1bd6f0f8950f",
              "timestamp": "2021-11-10T00:07:45Z",
              "description": "Pulsar in the constellation Vulpecula",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/PSR_B1919%2B21",
                  "revisions": "https://en.wikipedia.org/wiki/PSR_B1919%2B21?action=history",
                  "edit": "https://en.wikipedia.org/wiki/PSR_B1919%2B21?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:PSR_B1919%2B21"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/PSR_B1919%2B21",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/PSR_B1919%2B21",
                  "edit": "https://en.m.wikipedia.org/wiki/PSR_B1919%2B21?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:PSR_B1919%2B21"
                }
              },
              "extract": "PSR B1919+21 is a pulsar with a period of 1.3373 seconds and a pulse width of 0.04 seconds. Discovered by Jocelyn Bell Burnell on 28 November 1967, it is the first discovered radio pulsar. The power and regularity of the signals were briefly thought to resemble an extraterrestrial beacon, leading the source to be nicknamed LGM, later LGM-1.",
              "extract_html": "<p><b>PSR B1919+21</b> is a pulsar with a period of 1.3373 seconds and a pulse width of 0.04 seconds. Discovered by Jocelyn Bell Burnell on 28 November 1967, it is the first discovered radio pulsar. The power and regularity of the signals were briefly thought to resemble an extraterrestrial beacon, leading the source to be nicknamed <b>LGM</b>, later <b>LGM-1</b>.</p>",
              "normalizedtitle": "PSR B1919+21"
            },
            {
              "type": "standard",
              "title": "Pulsar",
              "displaytitle": "Pulsar",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q4360",
              "titles": {
                "canonical": "Pulsar",
                "normalized": "Pulsar",
                "display": "Pulsar"
              },
              "pageid": 1227284,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PIA18848-PSRB1509-58-ChandraXRay-WiseIR-20141023.jpg/320px-PIA18848-PSRB1509-58-ChandraXRay-WiseIR-20141023.jpg",
                "width": 320,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/a/a6/PIA18848-PSRB1509-58-ChandraXRay-WiseIR-20141023.jpg",
                "width": 3600,
                "height": 3600
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1056533858",
              "tid": "9f011280-500c-11ec-bc13-ebfdb6e42b31",
              "timestamp": "2021-11-22T09:59:05Z",
              "description": "Highly magnetized, rapidly rotating neutron star",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Pulsar",
                  "revisions": "https://en.wikipedia.org/wiki/Pulsar?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Pulsar?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Pulsar"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Pulsar",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Pulsar",
                  "edit": "https://en.m.wikipedia.org/wiki/Pulsar?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Pulsar"
                }
              },
              "extract": "A pulsar is a highly magnetized rotating compact star that emits beams of electromagnetic radiation out of its magnetic poles. This radiation can be observed only when a beam of emission is pointing toward Earth, and is responsible for the pulsed appearance of emission. Neutron stars are very dense and have short, regular rotational periods. This produces a very precise interval between pulses that ranges from milliseconds to seconds for an individual pulsar. Pulsars are one of the candidates for the source of ultra-high-energy cosmic rays.",
              "extract_html": "<p>A <b>pulsar</b> is a highly magnetized rotating compact star that emits beams of electromagnetic radiation out of its magnetic poles. This radiation can be observed only when a beam of emission is pointing toward Earth, and is responsible for the pulsed appearance of emission. Neutron stars are very dense and have short, regular rotational periods. This produces a very precise interval between pulses that ranges from milliseconds to seconds for an individual pulsar. Pulsars are one of the candidates for the source of ultra-high-energy cosmic rays.</p>",
              "normalizedtitle": "Pulsar"
            }
          ],
          "year": 1967
        },
        {
          "text": "Michel Micombero abolished the Burundian monarchy and declared the country a republic with himself as president.",
          "pages": [
            {
              "type": "standard",
              "title": "Michel_Micombero",
              "displaytitle": "Michel Micombero",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q282359",
              "titles": {
                "canonical": "Michel_Micombero",
                "normalized": "Michel Micombero",
                "display": "Michel Micombero"
              },
              "pageid": 328642,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/en/d/dc/Burundi_-_Michel_Micombero_postage_stamp.jpg",
                "width": 111,
                "height": 142
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/en/d/dc/Burundi_-_Michel_Micombero_postage_stamp.jpg",
                "width": 111,
                "height": 142
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1053728483",
              "tid": "9e4b6140-4fc3-11ec-a69f-f55c0eb9cea8",
              "timestamp": "2021-11-05T17:24:32Z",
              "description": "First President of Burundi",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Michel_Micombero",
                  "revisions": "https://en.wikipedia.org/wiki/Michel_Micombero?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Michel_Micombero?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Michel_Micombero"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Michel_Micombero",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Michel_Micombero",
                  "edit": "https://en.m.wikipedia.org/wiki/Michel_Micombero?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Michel_Micombero"
                }
              },
              "extract": "Michel Micombero was a Burundian politician and army officer who ruled the country as its first president and dictator for the decade between 1966 and 1976.",
              "extract_html": "<p><b>Michel Micombero</b> was a Burundian politician and army officer who ruled the country as its first president and dictator for the decade between 1966 and 1976.</p>",
              "normalizedtitle": "Michel Micombero"
            },
            {
              "type": "standard",
              "title": "Kingdom_of_Burundi",
              "displaytitle": "Kingdom of Burundi",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q1192936",
              "titles": {
                "canonical": "Kingdom_of_Burundi",
                "normalized": "Kingdom of Burundi",
                "display": "Kingdom of Burundi"
              },
              "pageid": 1812595,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Burundi_%281962%E2%80%931966%29.svg/320px-Flag_of_Burundi_%281962%E2%80%931966%29.svg.png",
                "width": 320,
                "height": 213
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Burundi_%281962%E2%80%931966%29.svg/900px-Flag_of_Burundi_%281962%E2%80%931966%29.svg.png",
                "width": 900,
                "height": 600
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1056546699",
              "tid": "c0ac63f0-4f1a-11ec-bdab-3127e32f905c",
              "timestamp": "2021-11-22T11:48:45Z",
              "description": "Bantu state in southeast Africa from 1680 to 1966",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Kingdom_of_Burundi",
                  "revisions": "https://en.wikipedia.org/wiki/Kingdom_of_Burundi?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Kingdom_of_Burundi?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Kingdom_of_Burundi"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Kingdom_of_Burundi",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Kingdom_of_Burundi",
                  "edit": "https://en.m.wikipedia.org/wiki/Kingdom_of_Burundi?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Kingdom_of_Burundi"
                }
              },
              "extract": "The Kingdom of Burundi or Kingdom of Urundi was a Bantu kingdom in the modern-day Republic of Burundi. The Ganwa monarchs ruled over both Hutus and Tutsis. Created in the 17th century, the kingdom was preserved under European colonial rule in the late 19th and early 20th century and was an independent state between 1962 and 1966.",
              "extract_html": "<p>The <b>Kingdom of Burundi</b> or <b>Kingdom of Urundi</b> was a Bantu kingdom in the modern-day Republic of Burundi. The Ganwa monarchs ruled over both Hutus and Tutsis. Created in the 17th century, the kingdom was preserved under European colonial rule in the late 19th and early 20th century and was an independent state between 1962 and 1966.</p>",
              "normalizedtitle": "Kingdom of Burundi"
            },
            {
              "type": "standard",
              "title": "President_of_Burundi",
              "displaytitle": "President of Burundi",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q19057827",
              "titles": {
                "canonical": "President_of_Burundi",
                "normalized": "President of Burundi",
                "display": "President of Burundi"
              },
              "pageid": 380669,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Coat_of_arms_of_Burundi.svg/318px-Coat_of_arms_of_Burundi.svg.png",
                "width": 318,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Coat_of_arms_of_Burundi.svg/278px-Coat_of_arms_of_Burundi.svg.png",
                "width": 278,
                "height": 280
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1043708553",
              "tid": "a3205510-4f17-11ec-bc78-71e1e0e39400",
              "timestamp": "2021-09-11T14:58:32Z",
              "description": "Head of state of the Republic of Burundi",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/President_of_Burundi",
                  "revisions": "https://en.wikipedia.org/wiki/President_of_Burundi?action=history",
                  "edit": "https://en.wikipedia.org/wiki/President_of_Burundi?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:President_of_Burundi"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/President_of_Burundi",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/President_of_Burundi",
                  "edit": "https://en.m.wikipedia.org/wiki/President_of_Burundi?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:President_of_Burundi"
                }
              },
              "extract": "The president of Burundi, officially the President of the Republic, is the head of state and head of government of the Republic of Burundi. The president is also commander-in-chief of the National Defence Force. The office of the presidency was established when Michel Micombero declared Burundi a republic on 28 November 1966. The first constitution to specify the powers and duties of the president was the constitution of 1974 adopted in 1976. The constitution, written by Micombero, affirmed Micombero's position as the first president of Burundi. The powers of the president currently derive from the 2005 constitution implemented as a result of the 2000 Arusha Accords after the Burundian Civil War. The current president since 18 June 2020 is Évariste Ndayishimiye.",
              "extract_html": "<p>The <b>president of Burundi</b>, officially the <b>President of the Republic</b>, is the head of state and head of government of the Republic of Burundi. The president is also commander-in-chief of the National Defence Force. The office of the presidency was established when Michel Micombero declared Burundi a republic on 28 November 1966. The first constitution to specify the powers and duties of the president was the constitution of 1974 adopted in 1976. The constitution, written by Micombero, affirmed Micombero's position as the first president of Burundi. The powers of the president currently derive from the 2005 constitution implemented as a result of the 2000 Arusha Accords after the Burundian Civil War. The current president since 18 June 2020 is Évariste Ndayishimiye.</p>",
              "normalizedtitle": "President of Burundi"
            }
          ],
          "year": 1966
        },
        {
          "text": "World War II: U.S. president Franklin D. Roosevelt, British prime minister Winston Churchill, and Soviet premier Joseph Stalin (all three pictured) met at the Tehran Conference to discuss war strategy against the Axis powers.",
          "pages": [
            {
              "type": "standard",
              "title": "World_War_II",
              "displaytitle": "World War II",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q362",
              "titles": {
                "canonical": "World_War_II",
                "normalized": "World War II",
                "display": "World War II"
              },
              "pageid": 32927,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Changde_battle.jpg/320px-Changde_battle.jpg",
                "width": 320,
                "height": 229
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/3/34/Changde_battle.jpg",
                "width": 400,
                "height": 286
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057355408",
              "tid": "0a590cd0-4f32-11ec-bea7-7f9d21441cc2",
              "timestamp": "2021-11-27T03:27:49Z",
              "description": "Global war between the Allies and Axis powers, 1939–1945",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/World_War_II",
                  "revisions": "https://en.wikipedia.org/wiki/World_War_II?action=history",
                  "edit": "https://en.wikipedia.org/wiki/World_War_II?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:World_War_II"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/World_War_II",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/World_War_II",
                  "edit": "https://en.m.wikipedia.org/wiki/World_War_II?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:World_War_II"
                }
              },
              "extract": "World War II or the Second World War, often abbreviated as WWII or WW2, was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries—including all of the great powers—forming two opposing military alliances: the Allies and the Axis powers. In a total war directly involving more than 100 million personnel from more than 30 countries, the major participants threw their entire economic, industrial, and scientific capabilities behind the war effort, blurring the distinction between civilian and military resources. Aircraft played a major role in the conflict, enabling the strategic bombing of population centres and the only two uses of nuclear weapons in war to this day. World War II was by far the deadliest conflict in human history; it resulted in 70 to 85 million fatalities, a majority being civilians. Tens of millions of people died due to genocides, starvation, massacres, and disease. In the wake of the Axis defeat, Germany and Japan were occupied, and war crimes tribunals were conducted against German and Japanese leaders.",
              "extract_html": "<p><b>World War II</b> or the <b>Second World War</b>, often abbreviated as <b>WWII</b> or <b>WW2</b>, was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries—including all of the great powers—forming two opposing military alliances: the Allies and the Axis powers. In a total war directly involving more than 100 million personnel from more than 30 countries, the major participants threw their entire economic, industrial, and scientific capabilities behind the war effort, blurring the distinction between civilian and military resources. Aircraft played a major role in the conflict, enabling the strategic bombing of population centres and the only two uses of nuclear weapons in war to this day. World War II was by far the deadliest conflict in human history; it resulted in 70 to 85 million fatalities, a majority being civilians. Tens of millions of people died due to genocides, starvation, massacres, and disease. In the wake of the Axis defeat, Germany and Japan were occupied, and war crimes tribunals were conducted against German and Japanese leaders.</p>",
              "normalizedtitle": "World War II"
            },
            {
              "type": "standard",
              "title": "Franklin_D._Roosevelt",
              "displaytitle": "Franklin D. Roosevelt",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q8007",
              "titles": {
                "canonical": "Franklin_D._Roosevelt",
                "normalized": "Franklin D. Roosevelt",
                "display": "Franklin D. Roosevelt"
              },
              "pageid": 10979,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/222px-FDR_1944_Color_Portrait.jpg",
                "width": 222,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg",
                "width": 2754,
                "height": 3969
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1056617548",
              "tid": "69fc3a10-500c-11ec-8774-97945a118fb6",
              "timestamp": "2021-11-22T20:25:47Z",
              "description": "32nd president of the United States",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
                  "revisions": "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Franklin_D._Roosevelt"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Franklin_D._Roosevelt",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Franklin_D._Roosevelt",
                  "edit": "https://en.m.wikipedia.org/wiki/Franklin_D._Roosevelt?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Franklin_D._Roosevelt"
                }
              },
              "extract": "Franklin Delano Roosevelt, often referred to by his initials FDR, was an American politician and attorney who served as the 32nd president of the United States from 1933 until his death in 1945. A member of the Democratic Party, he won a record four presidential elections and became a central figure in world events during the first half of the 20th century. Roosevelt directed the federal government during most of the Great Depression, implementing his New Deal domestic agenda in response to the worst economic crisis in U.S. history. As a dominant leader of his party, he built the New Deal Coalition, which defined modern liberalism in the United States throughout the middle third of the 20th century. His third and fourth terms were dominated by the Second World War, which ended shortly after he died in office.",
              "extract_html": "<p><b>Franklin Delano Roosevelt</b>, often referred to by his initials <b>FDR</b>, was an American politician and attorney who served as the 32nd president of the United States from 1933 until his death in 1945. A member of the Democratic Party, he won a record four presidential elections and became a central figure in world events during the first half of the 20th century. Roosevelt directed the federal government during most of the Great Depression, implementing his New Deal domestic agenda in response to the worst economic crisis in U.S. history. As a dominant leader of his party, he built the New Deal Coalition, which defined modern liberalism in the United States throughout the middle third of the 20th century. His third and fourth terms were dominated by the Second World War, which ended shortly after he died in office.</p>",
              "normalizedtitle": "Franklin D. Roosevelt"
            },
            {
              "type": "standard",
              "title": "Winston_Churchill",
              "displaytitle": "Winston Churchill",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q8016",
              "titles": {
                "canonical": "Winston_Churchill",
                "normalized": "Winston Churchill",
                "display": "Winston Churchill"
              },
              "pageid": 33265,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/251px-Sir_Winston_Churchill_-_19086236948.jpg",
                "width": 251,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_-_19086236948.jpg",
                "width": 3052,
                "height": 3884
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057408394",
              "tid": "725119b0-500c-11ec-bd84-c5e17964f625",
              "timestamp": "2021-11-27T13:14:21Z",
              "description": "British statesman (1874–1965)",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Winston_Churchill",
                  "revisions": "https://en.wikipedia.org/wiki/Winston_Churchill?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Winston_Churchill?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Winston_Churchill"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Winston_Churchill",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Winston_Churchill",
                  "edit": "https://en.m.wikipedia.org/wiki/Winston_Churchill?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Winston_Churchill"
                }
              },
              "extract": "Sir Winston Leonard Spencer Churchill, was a British statesman who served as Prime Minister of the United Kingdom from 1940 to 1945, during the Second World War, and again from 1951 to 1955. Best known for his wartime leadership as Prime Minister, Churchill was also a Sandhurst-educated soldier, a Nobel Prize-winning writer and historian, a prolific painter, and one of the longest-serving politicians in British history. Apart from two years between 1922 and 1924, he was a Member of Parliament (MP) from 1900 to 1964 and represented a total of five constituencies. Ideologically an economic liberal and imperialist, he was for most of his career a member of the Conservative Party, which he led from 1940 to 1955, though he was a member of the Liberal Party from 1904 to 1924.",
              "extract_html": "<p><b>Sir Winston Leonard Spencer Churchill</b>, was a British statesman who served as Prime Minister of the United Kingdom from 1940 to 1945, during the Second World War, and again from 1951 to 1955. Best known for his wartime leadership as Prime Minister, Churchill was also a Sandhurst-educated soldier, a Nobel Prize-winning writer and historian, a prolific painter, and one of the longest-serving politicians in British history. Apart from two years between 1922 and 1924, he was a Member of Parliament (MP) from 1900 to 1964 and represented a total of five constituencies. Ideologically an economic liberal and imperialist, he was for most of his career a member of the Conservative Party, which he led from 1940 to 1955, though he was a member of the Liberal Party from 1904 to 1924.</p>",
              "normalizedtitle": "Winston Churchill"
            },
            {
              "type": "standard",
              "title": "Joseph_Stalin",
              "displaytitle": "Joseph Stalin",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q855",
              "titles": {
                "canonical": "Joseph_Stalin",
                "normalized": "Joseph Stalin",
                "display": "Joseph Stalin"
              },
              "pageid": 15641,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stalin_Full_Image.jpg/214px-Stalin_Full_Image.jpg",
                "width": 214,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/43/Stalin_Full_Image.jpg",
                "width": 555,
                "height": 831
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057188180",
              "tid": "6d8d01f0-500c-11ec-912b-25c3af03fe33",
              "timestamp": "2021-11-26T01:14:09Z",
              "description": "Leader of the Soviet Union from 1924 to 1953",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Joseph_Stalin",
                  "revisions": "https://en.wikipedia.org/wiki/Joseph_Stalin?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Joseph_Stalin?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Joseph_Stalin"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Joseph_Stalin",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Joseph_Stalin",
                  "edit": "https://en.m.wikipedia.org/wiki/Joseph_Stalin?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Joseph_Stalin"
                }
              },
              "extract": "Joseph Vissarionovich Stalin was a Georgian revolutionary and Soviet political leader who governed the Soviet Union from 1924 until his death in 1953. He served as both General Secretary of the Communist Party of the Soviet Union (1922–1952) and Chairman of the Council of Ministers of the Soviet Union (1941–1953). Despite initially governing the country as part of a collective leadership, he ultimately consolidated power to become the Soviet Union's dictator by the 1930s. A communist ideologically committed to the Leninist interpretation of Marxism, Stalin formalised these ideas as Marxism–Leninism while his own policies are known as Stalinism.",
              "extract_html": "<p><b>Joseph Vissarionovich Stalin</b> was a Georgian revolutionary and Soviet political leader who governed the Soviet Union from 1924 until his death in 1953. He served as both General Secretary of the Communist Party of the Soviet Union (1922–1952) and Chairman of the Council of Ministers of the Soviet Union (1941–1953). Despite initially governing the country as part of a collective leadership, he ultimately consolidated power to become the Soviet Union's dictator by the 1930s. A communist ideologically committed to the Leninist interpretation of Marxism, Stalin formalised these ideas as Marxism–Leninism while his own policies are known as Stalinism.</p>",
              "normalizedtitle": "Joseph Stalin"
            },
            {
              "type": "standard",
              "title": "Tehran_Conference",
              "displaytitle": "Tehran Conference",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q150974",
              "titles": {
                "canonical": "Tehran_Conference",
                "normalized": "Tehran Conference",
                "display": "Tehran Conference"
              },
              "pageid": 70381,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Tehran_Conference%2C_1943.jpg/320px-Tehran_Conference%2C_1943.jpg",
                "width": 320,
                "height": 260
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Tehran_Conference%2C_1943.jpg",
                "width": 700,
                "height": 569
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057554525",
              "tid": "24015b80-502a-11ec-a4cc-adf04fc3753e",
              "timestamp": "2021-11-28T09:04:02Z",
              "description": "Strategy meeting of the Allied leaders during World War II",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Tehran_Conference",
                  "revisions": "https://en.wikipedia.org/wiki/Tehran_Conference?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Tehran_Conference?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Tehran_Conference"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Tehran_Conference",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Tehran_Conference",
                  "edit": "https://en.m.wikipedia.org/wiki/Tehran_Conference?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Tehran_Conference"
                }
              },
              "extract": "The Tehran Conference was a strategy meeting of Joseph Stalin, Franklin D. Roosevelt, and Winston Churchill from 28 November to 1 December 1943, after the Anglo-Soviet invasion of Iran. It was held in the Soviet Union's embassy in Tehran, Iran (Persia). It was the first of the World War II conferences of the \"Big Three\" Allied leaders. It closely followed the Cairo Conference which had taken place on 22–26 November 1943, and preceded the 1945 Yalta and Potsdam conferences. Although the three leaders arrived with differing objectives, the main outcome of the Tehran Conference was the Western Allies' commitment to open a second front against Nazi Germany. The conference also addressed the 'Big Three' Allies' relations with Turkey and Iran, operations in Yugoslavia and against Japan, and the envisaged post-war settlement. A separate protocol signed at the conference pledged the Big Three to recognize Iran's independence.",
              "extract_html": "<p>The <b>Tehran Conference</b> was a strategy meeting of Joseph Stalin, Franklin D. Roosevelt, and Winston Churchill from 28 November to 1 December 1943, after the Anglo-Soviet invasion of Iran. It was held in the Soviet Union's embassy in Tehran, Iran (Persia). It was the first of the World War II conferences of the \"Big Three\" Allied leaders. It closely followed the Cairo Conference which had taken place on 22–26 November 1943, and preceded the 1945 Yalta and Potsdam conferences. Although the three leaders arrived with differing objectives, the main outcome of the Tehran Conference was the Western Allies' commitment to open a second front against Nazi Germany. The conference also addressed the 'Big Three' Allies' relations with Turkey and Iran, operations in Yugoslavia and against Japan, and the envisaged post-war settlement. A separate protocol signed at the conference pledged the Big Three to recognize Iran's independence.</p>",
              "normalizedtitle": "Tehran Conference"
            },
            {
              "type": "standard",
              "title": "Axis_powers",
              "displaytitle": "Axis powers",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q43056",
              "titles": {
                "canonical": "Axis_powers",
                "normalized": "Axis powers",
                "display": "Axis powers"
              },
              "pageid": 43507,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Map_of_participants_in_World_War_II.png/320px-Map_of_participants_in_World_War_II.png",
                "width": 320,
                "height": 135
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/2/21/Map_of_participants_in_World_War_II.png",
                "width": 1480,
                "height": 625
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057310823",
              "tid": "1f7b7d20-4f99-11ec-a09c-378a592e1c9d",
              "timestamp": "2021-11-26T20:50:05Z",
              "description": "Alliance of countries in World War II",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Axis_powers",
                  "revisions": "https://en.wikipedia.org/wiki/Axis_powers?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Axis_powers?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Axis_powers"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Axis_powers",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Axis_powers",
                  "edit": "https://en.m.wikipedia.org/wiki/Axis_powers?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Axis_powers"
                }
              },
              "extract": "The Axis powers, originally called the Rome–Berlin Axis, was a military coalition that initiated World War II and fought against the Allies. Its principal members were Nazi Germany, the Kingdom of Italy, and the Empire of Japan. The Axis were united in their opposition to the Allies, but otherwise lacked comparable coordination and ideological cohesion.",
              "extract_html": "<p>The <b>Axis powers</b>, originally called the <b>Rome–Berlin Axis</b>, was a military coalition that initiated World War II and fought against the Allies. Its principal members were Nazi Germany, the Kingdom of Italy, and the Empire of Japan. The Axis were united in their opposition to the Allies, but otherwise lacked comparable coordination and ideological cohesion.</p>",
              "normalizedtitle": "Axis powers"
            }
          ],
          "year": 1943
        },
        {
          "text": "A fire in Boston's Cocoanut Grove nightclub killed over 490 people and injured hundreds of others.",
          "pages": [
            {
              "type": "standard",
              "title": "Cocoanut_Grove_fire",
              "displaytitle": "Cocoanut Grove fire",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q897768",
              "titles": {
                "canonical": "Cocoanut_Grove_fire",
                "normalized": "Cocoanut Grove fire",
                "display": "Cocoanut Grove fire"
              },
              "pageid": 186805,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/en/d/dc/Cocoanut_Grove_Night_Club_Fire.jpg",
                "width": 240,
                "height": 180
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/en/d/dc/Cocoanut_Grove_Night_Club_Fire.jpg",
                "width": 240,
                "height": 180
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1054558430",
              "tid": "cc138970-4f16-11ec-9a36-798722f607e9",
              "timestamp": "2021-11-10T19:21:43Z",
              "description": "1942 nightclub fire in Boston, Massachusetts",
              "description_source": "local",
              "coordinates": {
                "lat": 42.35,
                "lon": -71.06833333
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Cocoanut_Grove_fire",
                  "revisions": "https://en.wikipedia.org/wiki/Cocoanut_Grove_fire?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Cocoanut_Grove_fire?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Cocoanut_Grove_fire"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Cocoanut_Grove_fire",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Cocoanut_Grove_fire",
                  "edit": "https://en.m.wikipedia.org/wiki/Cocoanut_Grove_fire?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Cocoanut_Grove_fire"
                }
              },
              "extract": "The Cocoanut Grove fire, which took place in Boston, Massachusetts, United States, on November 28, 1942, was the second-deadliest single-building fire in U.S. history, claiming 492 lives.",
              "extract_html": "<p>The <b>Cocoanut Grove fire</b>, which took place in Boston, Massachusetts, United States, on November 28, 1942, was the second-deadliest single-building fire in U.S. history, claiming 492 lives.</p>",
              "normalizedtitle": "Cocoanut Grove fire"
            }
          ],
          "year": 1942
        },
        {
          "text": "Grand Ole Opry, the longest-running radio broadcast in the United States, first aired on WSM in Nashville, Tennessee.",
          "pages": [
            {
              "type": "standard",
              "title": "Grand_Ole_Opry",
              "displaytitle": "<i>Grand Ole Opry</i>",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q7098695",
              "titles": {
                "canonical": "Grand_Ole_Opry",
                "normalized": "Grand Ole Opry",
                "display": "<i>Grand Ole Opry</i>"
              },
              "pageid": 60589,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Grand_Ole_Opry_logo.svg/320px-Grand_Ole_Opry_logo.svg.png",
                "width": 320,
                "height": 160
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Grand_Ole_Opry_logo.svg/246px-Grand_Ole_Opry_logo.svg.png",
                "width": 246,
                "height": 123
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057256752",
              "tid": "08f3c130-4f16-11ec-9e4d-89fb454498b5",
              "timestamp": "2021-11-26T13:33:32Z",
              "description": "Country music concert in Nashville, Tennessee, US",
              "description_source": "local",
              "coordinates": {
                "lat": 36.20666667,
                "lon": -86.69222222
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Grand_Ole_Opry",
                  "revisions": "https://en.wikipedia.org/wiki/Grand_Ole_Opry?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Grand_Ole_Opry?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Grand_Ole_Opry"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Grand_Ole_Opry",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Grand_Ole_Opry",
                  "edit": "https://en.m.wikipedia.org/wiki/Grand_Ole_Opry?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Grand_Ole_Opry"
                }
              },
              "extract": "The Grand Ole Opry is a weekly American country music stage concert in Nashville, Tennessee, founded on November 28, 1925, by George D. Hay as a one-hour radio \"barn dance\" on WSM. Currently owned and operated by Opry Entertainment, it is the longest-running radio broadcast in US history. Dedicated to honoring country music and its history, the Opry showcases a mix of famous singers and contemporary chart-toppers performing country, bluegrass, Americana, folk, and gospel music as well as comedic performances and skits. It attracts hundreds of thousands of visitors from around the world and millions of radio and internet listeners.",
              "extract_html": "<p>The <i><b>Grand Ole Opry</b></i> is a weekly American country music stage concert in Nashville, Tennessee, founded on November 28, 1925, by George D. Hay as a one-hour radio \"barn dance\" on WSM. Currently owned and operated by Opry Entertainment, it is the longest-running radio broadcast in US history. Dedicated to honoring country music and its history, the Opry showcases a mix of famous singers and contemporary chart-toppers performing country, bluegrass, Americana, folk, and gospel music as well as comedic performances and skits. It attracts hundreds of thousands of visitors from around the world and millions of radio and internet listeners.</p>",
              "normalizedtitle": "Grand Ole Opry"
            },
            {
              "type": "standard",
              "title": "WSM_(AM)",
              "displaytitle": "WSM (AM)",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q7955790",
              "titles": {
                "canonical": "WSM_(AM)",
                "normalized": "WSM (AM)",
                "display": "WSM (AM)"
              },
              "pageid": 862078,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/WSM_Radio_logo.svg/320px-WSM_Radio_logo.svg.png",
                "width": 320,
                "height": 194
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/WSM_Radio_logo.svg/191px-WSM_Radio_logo.svg.png",
                "width": 191,
                "height": 116
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1052241472",
              "tid": "a48baf70-4f18-11ec-a230-d32417d46dce",
              "timestamp": "2021-10-28T03:38:26Z",
              "description": "Country music radio station in Nashville, Tennessee",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/WSM_(AM)",
                  "revisions": "https://en.wikipedia.org/wiki/WSM_(AM)?action=history",
                  "edit": "https://en.wikipedia.org/wiki/WSM_(AM)?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:WSM_(AM)"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/WSM_(AM)",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/WSM_(AM)",
                  "edit": "https://en.m.wikipedia.org/wiki/WSM_(AM)?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:WSM_(AM)"
                }
              },
              "extract": "WSM is a 50,000-watt clear channel station located in Nashville, Tennessee. It broadcasts a full-time country music format at 650 kHz and is known primarily as the home of The Grand Ole Opry, the world's longest running radio program. The station's clear channel signal can reach much of North America and nearby countries, especially late at night. It is one of two clear-channel stations in North America, along with CFZM in Toronto, that still primarily broadcast music; as recently as 2020, the station was live and locally originated during the overnight hours, but the overnight host position was eliminated in February 2020. Nicknamed \"The Air Castle of the South,\" it shares its callsign with WSM-FM, also in Nashville, and formerly with television Channel 4, now WSMV.",
              "extract_html": "<p><b>WSM</b> is a 50,000-watt clear channel station located in Nashville, Tennessee. It broadcasts a full-time country music format at 650 kHz and is known primarily as the home of <i>The Grand Ole Opry</i>, the world's longest running radio program. The station's clear channel signal can reach much of North America and nearby countries, especially late at night. It is one of two clear-channel stations in North America, along with CFZM in Toronto, that still primarily broadcast music; as recently as 2020, the station was live and locally originated during the overnight hours, but the overnight host position was eliminated in February 2020. Nicknamed \"The Air Castle of the South,\" it shares its callsign with WSM-FM, also in Nashville, and formerly with television Channel 4, now WSMV.</p>",
              "normalizedtitle": "WSM (AM)"
            },
            {
              "type": "standard",
              "title": "Nashville,_Tennessee",
              "displaytitle": "Nashville, Tennessee",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q23197",
              "titles": {
                "canonical": "Nashville,_Tennessee",
                "normalized": "Nashville, Tennessee",
                "display": "Nashville, Tennessee"
              },
              "pageid": 22018,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Nashville_collage.png/213px-Nashville_collage.png",
                "width": 213,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/40/Nashville_collage.png",
                "width": 540,
                "height": 810
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057573634",
              "tid": "110dd480-5044-11ec-9bfc-4b1c4acaa744",
              "timestamp": "2021-11-28T12:09:25Z",
              "description": "State capital and consolidated city-county in Tennessee, United States",
              "description_source": "local",
              "coordinates": {
                "lat": 36.16222222,
                "lon": -86.77444444
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Nashville%2C_Tennessee",
                  "revisions": "https://en.wikipedia.org/wiki/Nashville%2C_Tennessee?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Nashville%2C_Tennessee?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Nashville%2C_Tennessee"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Nashville%2C_Tennessee",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Nashville%2C_Tennessee",
                  "edit": "https://en.m.wikipedia.org/wiki/Nashville%2C_Tennessee?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Nashville%2C_Tennessee"
                }
              },
              "extract": "Nashville is the capital and most populous city of the U.S. state of Tennessee. The city is the county seat of Davidson County and is located on the Cumberland River. With a population of 689,447 as of the 2020 United States census, it is the 21st most-populous city in the United States and the third most populous in the Southeastern United States.",
              "extract_html": "<p><b>Nashville</b> is the capital and most populous city of the U.S. state of Tennessee. The city is the county seat of Davidson County and is located on the Cumberland River. With a population of 689,447 as of the 2020 United States census, it is the 21st most-populous city in the United States and the third most populous in the Southeastern United States.</p>",
              "normalizedtitle": "Nashville, Tennessee"
            }
          ],
          "year": 1925
        },
        {
          "text": "Thirty-six local Irish Republican Army volunteers killed seventeen members of the Auxiliary Division of the Royal Irish Constabulary, marking a turning point in the Irish War of Independence.",
          "pages": [
            {
              "type": "standard",
              "title": "Irish_Republican_Army",
              "displaytitle": "Irish Republican Army",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q175284",
              "titles": {
                "canonical": "Irish_Republican_Army",
                "normalized": "Irish Republican Army",
                "display": "Irish Republican Army"
              },
              "pageid": 2261091,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Hogan%27s_Flying_Column.gif/320px-Hogan%27s_Flying_Column.gif",
                "width": 320,
                "height": 176
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/5/58/Hogan%27s_Flying_Column.gif",
                "width": 2057,
                "height": 1133
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1055808394",
              "tid": "4e89d590-4f1b-11ec-98cb-c3e6e2447206",
              "timestamp": "2021-11-17T22:54:44Z",
              "description": "Irish republican revolutionary military organisation",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Irish_Republican_Army",
                  "revisions": "https://en.wikipedia.org/wiki/Irish_Republican_Army?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Irish_Republican_Army?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Irish_Republican_Army"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Irish_Republican_Army",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Irish_Republican_Army",
                  "edit": "https://en.m.wikipedia.org/wiki/Irish_Republican_Army?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Irish_Republican_Army"
                }
              },
              "extract": "The Irish Republican Army (IRA) is a name used by various paramilitary organisations in Ireland throughout the 20th and the 21st centuries. Organisations going by this name have been dedicated to irredentism through Irish republicanism, the belief that all of Ireland should be an independent republic free from British rule.",
              "extract_html": "<p>The <b>Irish Republican Army</b> (<b>IRA</b>) is a name used by various paramilitary organisations in Ireland throughout the 20th and the 21st centuries. Organisations going by this name have been dedicated to irredentism through Irish republicanism, the belief that all of Ireland should be an independent republic free from British rule.</p>",
              "normalizedtitle": "Irish Republican Army"
            },
            {
              "type": "standard",
              "title": "Kilmichael_Ambush",
              "displaytitle": "Kilmichael Ambush",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q6408028",
              "titles": {
                "canonical": "Kilmichael_Ambush",
                "normalized": "Kilmichael Ambush",
                "display": "Kilmichael Ambush"
              },
              "pageid": 5614574,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Iarthair_Chorca%C3%AD_185.jpg/320px-Iarthair_Chorca%C3%AD_185.jpg",
                "width": 320,
                "height": 240
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/9/92/Iarthair_Chorca%C3%AD_185.jpg",
                "width": 2272,
                "height": 1704
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057253930",
              "tid": "21364260-4f1e-11ec-a2c6-99b4d3e5ba64",
              "timestamp": "2021-11-26T13:08:18Z",
              "description": "IRA ambush during the Irish War of Independence, 1920",
              "description_source": "local",
              "coordinates": {
                "lat": 51.8123,
                "lon": -9.0568
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Kilmichael_Ambush",
                  "revisions": "https://en.wikipedia.org/wiki/Kilmichael_Ambush?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Kilmichael_Ambush?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Kilmichael_Ambush"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Kilmichael_Ambush",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Kilmichael_Ambush",
                  "edit": "https://en.m.wikipedia.org/wiki/Kilmichael_Ambush?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Kilmichael_Ambush"
                }
              },
              "extract": "The Kilmichael Ambush was an ambush near the village of Kilmichael in County Cork on 28 November 1920 carried out by the Irish Republican Army (IRA) during the Irish War of Independence. Thirty-six local IRA volunteers commanded by Tom Barry killed sixteen members of the Royal Irish Constabulary's Auxiliary Division. The Kilmichael ambush was politically as well as militarily significant. It occurred one week after Bloody Sunday and marked an escalation in the IRA's campaign.",
              "extract_html": "<p>The <b>Kilmichael Ambush</b> was an ambush near the village of Kilmichael in County Cork on 28 November 1920 carried out by the Irish Republican Army (IRA) during the Irish War of Independence. Thirty-six local IRA volunteers commanded by Tom Barry killed sixteen members of the Royal Irish Constabulary's Auxiliary Division. The Kilmichael ambush was politically as well as militarily significant. It occurred one week after Bloody Sunday and marked an escalation in the IRA's campaign.</p>",
              "normalizedtitle": "Kilmichael Ambush"
            },
            {
              "type": "standard",
              "title": "Auxiliary_Division",
              "displaytitle": "Auxiliary Division",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q789704",
              "titles": {
                "canonical": "Auxiliary_Division",
                "normalized": "Auxiliary Division",
                "display": "Auxiliary Division"
              },
              "pageid": 842560,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Auxiliaries_Cap_badge.png/320px-Auxiliaries_Cap_badge.png",
                "width": 320,
                "height": 318
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/7/73/Auxiliaries_Cap_badge.png",
                "width": 939,
                "height": 933
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1052025050",
              "tid": "02b31ec0-36b0-11ec-ab70-c727ec53869b",
              "timestamp": "2021-10-26T22:56:50Z",
              "description": "Military unit",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Auxiliary_Division",
                  "revisions": "https://en.wikipedia.org/wiki/Auxiliary_Division?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Auxiliary_Division?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Auxiliary_Division"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Auxiliary_Division",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Auxiliary_Division",
                  "edit": "https://en.m.wikipedia.org/wiki/Auxiliary_Division?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Auxiliary_Division"
                }
              },
              "extract": "The Auxiliary Division of the Royal Irish Constabulary (ADRIC), generally known as the Auxiliaries or Auxies, was a paramilitary unit of the Royal Irish Constabulary (RIC) during the Irish War of Independence. It was founded in July 1920 by Major-General Henry Hugh Tudor and made up of former British Army officers, most of whom came from Great Britain and had fought in the First World War. Almost 2,300 served in the unit during the conflict. Its role was to conduct counter-insurgency operations against the Irish Republican Army (IRA), acting mainly as a mobile striking and raiding force. It operated semi-independently of the RIC and was mainly deployed to southern and western regions where fighting was heaviest.",
              "extract_html": "<p>The <b>Auxiliary Division of the Royal Irish Constabulary</b> (<b>ADRIC</b>), generally known as the <b>Auxiliaries</b> or <b>Auxies</b>, was a paramilitary unit of the Royal Irish Constabulary (RIC) during the Irish War of Independence. It was founded in July 1920 by Major-General Henry Hugh Tudor and made up of former British Army officers, most of whom came from Great Britain and had fought in the First World War. Almost 2,300 served in the unit during the conflict. Its role was to conduct counter-insurgency operations against the Irish Republican Army (IRA), acting mainly as a mobile striking and raiding force. It operated semi-independently of the RIC and was mainly deployed to southern and western regions where fighting was heaviest.</p>",
              "normalizedtitle": "Auxiliary Division"
            },
            {
              "type": "standard",
              "title": "Royal_Irish_Constabulary",
              "displaytitle": "Royal Irish Constabulary",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q1549059",
              "titles": {
                "canonical": "Royal_Irish_Constabulary",
                "normalized": "Royal Irish Constabulary",
                "display": "Royal Irish Constabulary"
              },
              "pageid": 212069,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Royal_Irish_Constabulary_Badge.png/183px-Royal_Irish_Constabulary_Badge.png",
                "width": 183,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Royal_Irish_Constabulary_Badge.png",
                "width": 764,
                "height": 1332
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1051810921",
              "tid": "f02c9090-4f16-11ec-a7ae-350c6cbacdbb",
              "timestamp": "2021-10-25T18:47:05Z",
              "description": "Former armed police force of the United Kingdom in Ireland",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Royal_Irish_Constabulary",
                  "revisions": "https://en.wikipedia.org/wiki/Royal_Irish_Constabulary?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Royal_Irish_Constabulary?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Royal_Irish_Constabulary"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Royal_Irish_Constabulary",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Royal_Irish_Constabulary",
                  "edit": "https://en.m.wikipedia.org/wiki/Royal_Irish_Constabulary?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Royal_Irish_Constabulary"
                }
              },
              "extract": "The Royal Irish Constabulary was the police force in Ireland from 1822 until 1922, when the country was part of the United Kingdom. A separate civic police force, the unarmed Dublin Metropolitan Police, patrolled the capital, while the cities of Derry and Belfast, originally with their own police forces, later had special divisions within the RIC. For most of its history, the ethnic and religious makeup of the RIC broadly matched that of the Irish population, although Anglo-Irish Protestants were over-represented among its senior officers.",
              "extract_html": "<p>The <b>Royal Irish Constabulary</b> was the police force in Ireland from 1822 until 1922, when the country was part of the United Kingdom. A separate civic police force, the unarmed Dublin Metropolitan Police, patrolled the capital, while the cities of Derry and Belfast, originally with their own police forces, later had special divisions within the RIC. For most of its history, the ethnic and religious makeup of the RIC broadly matched that of the Irish population, although Anglo-Irish Protestants were over-represented among its senior officers.</p>",
              "normalizedtitle": "Royal Irish Constabulary"
            },
            {
              "type": "standard",
              "title": "Irish_War_of_Independence",
              "displaytitle": "Irish War of Independence",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q208297",
              "titles": {
                "canonical": "Irish_War_of_Independence",
                "normalized": "Irish War of Independence",
                "display": "Irish War of Independence"
              },
              "pageid": 168312,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Hogan%27s_Flying_Column.gif/320px-Hogan%27s_Flying_Column.gif",
                "width": 320,
                "height": 176
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/5/58/Hogan%27s_Flying_Column.gif",
                "width": 2057,
                "height": 1133
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1056798224",
              "tid": "0a66ce90-4fd9-11ec-a773-7905bea1704e",
              "timestamp": "2021-11-23T16:28:19Z",
              "description": "Guerrilla war (1919–1921) between the IRA and British forces, ended by the Anglo-Irish Treaty",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Irish_War_of_Independence",
                  "revisions": "https://en.wikipedia.org/wiki/Irish_War_of_Independence?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Irish_War_of_Independence?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Irish_War_of_Independence"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Irish_War_of_Independence",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Irish_War_of_Independence",
                  "edit": "https://en.m.wikipedia.org/wiki/Irish_War_of_Independence?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Irish_War_of_Independence"
                }
              },
              "extract": "The Irish War of Independence or Anglo-Irish War was a guerrilla war fought in Ireland from 1919 to 1921 between the Irish Republican Army and British forces: the British Army, along with the quasi-military Royal Irish Constabulary (RIC) and its paramilitary forces the Auxiliaries and Ulster Special Constabulary (USC). It was part of the Irish revolutionary period.",
              "extract_html": "<p>The <b>Irish War of Independence</b> or <b>Anglo-Irish War</b> was a guerrilla war fought in Ireland from 1919 to 1921 between the Irish Republican Army and British forces: the British Army, along with the quasi-military Royal Irish Constabulary (RIC) and its paramilitary forces the Auxiliaries and Ulster Special Constabulary (USC). It was part of the Irish revolutionary period.</p>",
              "normalizedtitle": "Irish War of Independence"
            }
          ],
          "year": 1920
        },
        {
          "text": "At the All-Albanian Congress, the Assembly of Vlorë was constituted, which declared the independence of the Albanian Vilayet from the Ottoman Empire.",
          "pages": [
            {
              "type": "standard",
              "title": "All-Albanian_Congress",
              "displaytitle": "All-Albanian Congress",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q4727766",
              "titles": {
                "canonical": "All-Albanian_Congress",
                "normalized": "All-Albanian Congress",
                "display": "All-Albanian Congress"
              },
              "pageid": 30600332,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ismail_Qemali_%28portrait%29.jpg/239px-Ismail_Qemali_%28portrait%29.jpg",
                "width": 239,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Ismail_Qemali_%28portrait%29.jpg",
                "width": 457,
                "height": 611
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1050226606",
              "tid": "020821a0-4f2e-11ec-a25a-e7d6c8bbd50f",
              "timestamp": "2021-10-16T15:25:06Z",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/All-Albanian_Congress",
                  "revisions": "https://en.wikipedia.org/wiki/All-Albanian_Congress?action=history",
                  "edit": "https://en.wikipedia.org/wiki/All-Albanian_Congress?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:All-Albanian_Congress"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/All-Albanian_Congress",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/All-Albanian_Congress",
                  "edit": "https://en.m.wikipedia.org/wiki/All-Albanian_Congress?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:All-Albanian_Congress"
                }
              },
              "extract": "The All-Albanian Congress or Albanian National Congress or Albanian Independence Congress was a held in Vlorë on November 28, 1912. Congress participants constituted the Assembly of Vlorë which established Albanian Provisional Government and elected Ismail Qemali as its president.",
              "extract_html": "<p>The <b>All-Albanian Congress</b> or <b>Albanian National Congress</b> or <b>Albanian Independence Congress</b> was a held in Vlorë on November 28, 1912. Congress participants constituted the Assembly of Vlorë which established Albanian Provisional Government and elected Ismail Qemali as its president.</p>",
              "normalizedtitle": "All-Albanian Congress"
            },
            {
              "type": "standard",
              "title": "Assembly_of_Vlorë",
              "displaytitle": "Assembly of Vlorë",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q4808710",
              "titles": {
                "canonical": "Assembly_of_Vlorë",
                "normalized": "Assembly of Vlorë",
                "display": "Assembly of Vlorë"
              },
              "pageid": 30608573,
              "lang": "en",
              "dir": "ltr",
              "revision": "1030277413",
              "tid": "02c249e0-4f2e-11ec-917c-5b095f34bff9",
              "timestamp": "2021-06-24T23:35:23Z",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Assembly_of_Vlor%C3%AB",
                  "revisions": "https://en.wikipedia.org/wiki/Assembly_of_Vlor%C3%AB?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Assembly_of_Vlor%C3%AB?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Assembly_of_Vlor%C3%AB"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Assembly_of_Vlor%C3%AB",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Assembly_of_Vlor%C3%AB",
                  "edit": "https://en.m.wikipedia.org/wiki/Assembly_of_Vlor%C3%AB?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Assembly_of_Vlor%C3%AB"
                }
              },
              "extract": "The Assembly of Vlorë was an Albanian assembly constituted during the All-Albanian Congress in Vlorë, on November 28, 1912.",
              "extract_html": "<p>The <b>Assembly of Vlorë</b> was an Albanian assembly constituted during the All-Albanian Congress in Vlorë, on November 28, 1912.</p>",
              "normalizedtitle": "Assembly of Vlorë"
            },
            {
              "type": "standard",
              "title": "Albanian_Declaration_of_Independence",
              "displaytitle": "Albanian Declaration of Independence",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q281097",
              "titles": {
                "canonical": "Albanian_Declaration_of_Independence",
                "normalized": "Albanian Declaration of Independence",
                "display": "Albanian Declaration of Independence"
              },
              "pageid": 17993104,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Deklarata_e_Pavar%C3%ABsis%C3%AB_%28dokumenti_origjinal_1912%29.jpg/320px-Deklarata_e_Pavar%C3%ABsis%C3%AB_%28dokumenti_origjinal_1912%29.jpg",
                "width": 320,
                "height": 202
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Deklarata_e_Pavar%C3%ABsis%C3%AB_%28dokumenti_origjinal_1912%29.jpg",
                "width": 2059,
                "height": 1300
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057567009",
              "tid": "ce0ebb80-503a-11ec-ba93-e336b3b002bd",
              "timestamp": "2021-11-28T11:03:19Z",
              "description": "Declaration of independence of Albania from the Ottoman Empire in 1912",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Albanian_Declaration_of_Independence",
                  "revisions": "https://en.wikipedia.org/wiki/Albanian_Declaration_of_Independence?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Albanian_Declaration_of_Independence?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Albanian_Declaration_of_Independence"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Albanian_Declaration_of_Independence",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Albanian_Declaration_of_Independence",
                  "edit": "https://en.m.wikipedia.org/wiki/Albanian_Declaration_of_Independence?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Albanian_Declaration_of_Independence"
                }
              },
              "extract": "The Albanian Declaration of Independence was the declaration of independence of the Albanian Vilayet from the Ottoman Empire. Independent Albania was proclaimed in Vlorë on 28 November 1912. Six days later the Assembly of Vlorë formed the first Government of Albania which was led by Ismail Qemali and the Council of Elders (Pleqnia).",
              "extract_html": "<p>The <b>Albanian Declaration of Independence</b> was the declaration of independence of the Albanian Vilayet from the Ottoman Empire. Independent Albania was proclaimed in Vlorë on 28 November 1912. Six days later the Assembly of Vlorë formed the first Government of Albania which was led by Ismail Qemali and the Council of Elders (Pleqnia).</p>",
              "normalizedtitle": "Albanian Declaration of Independence"
            },
            {
              "type": "standard",
              "title": "Albanian_Vilayet",
              "displaytitle": "Albanian Vilayet",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q4709183",
              "titles": {
                "canonical": "Albanian_Vilayet",
                "normalized": "Albanian Vilayet",
                "display": "Albanian Vilayet"
              },
              "pageid": 30518652,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Albanian_vilayet_as_proposed_by_League_of_Prizren_-_reworked_version.png/218px-Albanian_vilayet_as_proposed_by_League_of_Prizren_-_reworked_version.png",
                "width": 218,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/1/13/Albanian_vilayet_as_proposed_by_League_of_Prizren_-_reworked_version.png",
                "width": 1635,
                "height": 2400
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1055986168",
              "tid": "faf36320-4f2d-11ec-ae16-09664796e850",
              "timestamp": "2021-11-19T01:18:22Z",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Albanian_Vilayet",
                  "revisions": "https://en.wikipedia.org/wiki/Albanian_Vilayet?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Albanian_Vilayet?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Albanian_Vilayet"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Albanian_Vilayet",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Albanian_Vilayet",
                  "edit": "https://en.m.wikipedia.org/wiki/Albanian_Vilayet?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Albanian_Vilayet"
                }
              },
              "extract": "The Albanian Vilayet was a projected vilayet of the Ottoman Empire in the western Balkan Peninsula, which was to include the four Ottoman vilayets with substantial ethnic Albanian populations: Kosovo Vilayet, Scutari Vilayet, Manastir Vilayet, and Janina Vilayet. In some proposals, it included the Salonica Vilayet as well. The creation of the Vilayet was confirmed in September 1912, but negotiations were interrupted a month later in October by the beginning of the First Balkan War. Plans for an Albanian Vilayet were lost with the Partition of Albania.",
              "extract_html": "<p>The <b>Albanian Vilayet</b> was a projected <i>vilayet</i> of the Ottoman Empire in the western Balkan Peninsula, which was to include the four Ottoman vilayets with substantial ethnic Albanian populations: Kosovo Vilayet, Scutari Vilayet, Manastir Vilayet, and Janina Vilayet. In some proposals, it included the Salonica Vilayet as well. The creation of the Vilayet was confirmed in September 1912, but negotiations were interrupted a month later in October by the beginning of the First Balkan War. Plans for an Albanian Vilayet were lost with the Partition of Albania.</p>",
              "normalizedtitle": "Albanian Vilayet"
            },
            {
              "type": "standard",
              "title": "Ottoman_Empire",
              "displaytitle": "Ottoman Empire",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q12560",
              "titles": {
                "canonical": "Ottoman_Empire",
                "normalized": "Ottoman Empire",
                "display": "Ottoman Empire"
              },
              "pageid": 22278,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/320px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png",
                "width": 320,
                "height": 213
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/1200px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png",
                "width": 1200,
                "height": 800
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057532368",
              "tid": "7163ac70-500c-11ec-bcee-e7c1f006dc21",
              "timestamp": "2021-11-28T05:31:05Z",
              "description": "1299–1922 empire centered around modern Turkey",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Ottoman_Empire",
                  "revisions": "https://en.wikipedia.org/wiki/Ottoman_Empire?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Ottoman_Empire?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Ottoman_Empire"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Ottoman_Empire",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Ottoman_Empire",
                  "edit": "https://en.m.wikipedia.org/wiki/Ottoman_Empire?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Ottoman_Empire"
                }
              },
              "extract": "The Ottoman Empire was an empire that controlled much of Southeastern Europe, Western Asia, and Northern Africa between the 14th and early 20th centuries. It was founded at the end of the 13th century in northwestern Anatolia in the town of Söğüt by the Turkoman tribal leader Osman I. After 1354, the Ottomans crossed into Europe and with the conquest of the Balkans, the Ottoman beylik was transformed into a transcontinental empire. The Ottomans ended the Byzantine Empire with the conquest of Constantinople in 1453 by Mehmed the Conqueror.",
              "extract_html": "<p>The <b>Ottoman Empire</b> was an empire that controlled much of Southeastern Europe, Western Asia, and Northern Africa between the 14th and early 20th centuries. It was founded at the end of the 13th century in northwestern Anatolia in the town of Söğüt by the Turkoman tribal leader Osman I. After 1354, the Ottomans crossed into Europe and with the conquest of the Balkans, the Ottoman beylik was transformed into a transcontinental empire. The Ottomans ended the Byzantine Empire with the conquest of Constantinople in 1453 by Mehmed the Conqueror.</p>",
              "normalizedtitle": "Ottoman Empire"
            }
          ],
          "year": 1912
        },
        {
          "text": "SS Petriana struck a reef near Point Nepean, leading to Australia's first major oil spill and a debate over the White Australia policy.",
          "pages": [
            {
              "type": "standard",
              "title": "SS_Petriana",
              "displaytitle": "SS <i>Petriana</i>",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q96404679",
              "titles": {
                "canonical": "SS_Petriana",
                "normalized": "SS Petriana",
                "display": "SS <i>Petriana</i>"
              },
              "pageid": 63377411,
              "lang": "en",
              "dir": "ltr",
              "revision": "1055605953",
              "tid": "6d5594c0-4f3c-11ec-b8d7-a5a12a70e192",
              "timestamp": "2021-11-16T20:28:26Z",
              "coordinates": {
                "lat": -38.31,
                "lon": 144.65
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/SS_Petriana",
                  "revisions": "https://en.wikipedia.org/wiki/SS_Petriana?action=history",
                  "edit": "https://en.wikipedia.org/wiki/SS_Petriana?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:SS_Petriana"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/SS_Petriana",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/SS_Petriana",
                  "edit": "https://en.m.wikipedia.org/wiki/SS_Petriana?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:SS_Petriana"
                }
              },
              "extract": "SS Petriana was an iron screw steamer built in 1879 that was converted into an oil tanker. On 28 November 1903, while transporting 1,300 tonnes of petroleum from Borneo to Australia, it struck a reef near Point Nepean, Victoria, outside of Port Phillip Bay. The vessel was subsequently abandoned, but not before its cargo was released as part of efforts to save the ship, causing Australia's first major oil spill. Under the White Australia policy, the Chinese and Malay sailors crewing the Petriana were refused entry to Australia and forced to stay on a crowded tugboat for several days. Their treatment led to a political controversy in the lead-up to the 1903 federal election.",
              "extract_html": "<p><b>SS <i>Petriana</i></b> was an iron screw steamer built in 1879 that was converted into an oil tanker. On 28 November 1903, while transporting 1,300 tonnes of petroleum from Borneo to Australia, it struck a reef near Point Nepean, Victoria, outside of Port Phillip Bay. The vessel was subsequently abandoned, but not before its cargo was released as part of efforts to save the ship, causing Australia's first major oil spill. Under the White Australia policy, the Chinese and Malay sailors crewing the <i>Petriana</i> were refused entry to Australia and forced to stay on a crowded tugboat for several days. Their treatment led to a political controversy in the lead-up to the 1903 federal election.</p>",
              "normalizedtitle": "SS Petriana"
            },
            {
              "type": "standard",
              "title": "Point_Nepean",
              "displaytitle": "Point Nepean",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q1542568",
              "titles": {
                "canonical": "Point_Nepean",
                "normalized": "Point Nepean",
                "display": "Point Nepean"
              },
              "pageid": 1539326,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Point_Nepean_from_Queenscliff.jpg/320px-Point_Nepean_from_Queenscliff.jpg",
                "width": 320,
                "height": 239
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Point_Nepean_from_Queenscliff.jpg",
                "width": 2288,
                "height": 1712
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1043679623",
              "tid": "f6495240-3a14-11ec-8f11-398e7381acd3",
              "timestamp": "2021-09-11T11:07:15Z",
              "coordinates": {
                "lat": -38.30166667,
                "lon": 144.6525
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Point_Nepean",
                  "revisions": "https://en.wikipedia.org/wiki/Point_Nepean?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Point_Nepean?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Point_Nepean"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Point_Nepean",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Point_Nepean",
                  "edit": "https://en.m.wikipedia.org/wiki/Point_Nepean?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Point_Nepean"
                }
              },
              "extract": "Point Nepean marks the southern point of The Rip and the most westerly point of the Mornington Peninsula, in Victoria, Australia. It was named in 1802 after the British politician and colonial administrator Sir Evan Nepean by John Murray in HMS Lady Nelson. Its coast and adjacent waters are included in the Port Phillip Heads Marine National Park, while its land area is part of the Point Nepean National Park. The point includes Cheviot Beach on its southern side, famous as the site of the disappearance and presumed drowning death of Australia's then-Prime Minister Harold Holt.",
              "extract_html": "<p><b>Point Nepean</b> marks the southern point of The Rip and the most westerly point of the Mornington Peninsula, in Victoria, Australia. It was named in 1802 after the British politician and colonial administrator Sir Evan Nepean by John Murray in <span>HMS <i>Lady Nelson</i></span>. Its coast and adjacent waters are included in the Port Phillip Heads Marine National Park, while its land area is part of the Point Nepean National Park. The point includes Cheviot Beach on its southern side, famous as the site of the disappearance and presumed drowning death of Australia's then-Prime Minister Harold Holt.</p>",
              "normalizedtitle": "Point Nepean"
            },
            {
              "type": "standard",
              "title": "Oil_spill",
              "displaytitle": "Oil spill",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q220187",
              "titles": {
                "canonical": "Oil_spill",
                "normalized": "Oil spill",
                "display": "Oil spill"
              },
              "pageid": 158705,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Oil-spill.jpg",
                "width": 240,
                "height": 240
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Oil-spill.jpg",
                "width": 240,
                "height": 240
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1055076902",
              "tid": "adf656c0-4f16-11ec-a4b8-8ff7cd3b72bc",
              "timestamp": "2021-11-13T18:45:47Z",
              "description": "Release of a liquid petroleum hydrocarbon into the environment, especially marine areas, due to human activity",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Oil_spill",
                  "revisions": "https://en.wikipedia.org/wiki/Oil_spill?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Oil_spill?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Oil_spill"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Oil_spill",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Oil_spill",
                  "edit": "https://en.m.wikipedia.org/wiki/Oil_spill?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Oil_spill"
                }
              },
              "extract": "An oil spill is the release of a liquid petroleum hydrocarbon into the environment, especially the marine ecosystem, due to human activity, and is a form of pollution. The term is usually given to marine oil spills, where oil is released into the ocean or coastal waters, but spills may also occur on land. Oil spills may be due to releases of crude oil from tankers, offshore platforms, drilling rigs and wells, as well as spills of refined petroleum products and their by-products, heavier fuels used by large ships such as bunker fuel, or the spill of any oily refuse or waste oil.",
              "extract_html": "<p>An <b>oil spill</b> is the release of a liquid petroleum hydrocarbon into the environment, especially the marine ecosystem, due to human activity, and is a form of pollution. The term is usually given to marine oil spills, where oil is released into the ocean or coastal waters, but spills may also occur on land. Oil spills may be due to releases of crude oil from tankers, offshore platforms, drilling rigs and wells, as well as spills of refined petroleum products and their by-products, heavier fuels used by large ships such as bunker fuel, or the spill of any oily refuse or waste oil.</p>",
              "normalizedtitle": "Oil spill"
            },
            {
              "type": "standard",
              "title": "White_Australia_policy",
              "displaytitle": "White Australia policy",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q1077496",
              "titles": {
                "canonical": "White_Australia_policy",
                "normalized": "White Australia policy",
                "display": "White Australia policy"
              },
              "pageid": 50806,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/1910_White_Australia_badge.png/253px-1910_White_Australia_badge.png",
                "width": 253,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/1/1b/1910_White_Australia_badge.png",
                "width": 311,
                "height": 393
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057472364",
              "tid": "6f1b5070-4fc7-11ec-9c13-9ffcc1e4fc47",
              "timestamp": "2021-11-27T21:17:25Z",
              "description": "Australian racial policy that forbade non-European people from immigrating to Australia",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/White_Australia_policy",
                  "revisions": "https://en.wikipedia.org/wiki/White_Australia_policy?action=history",
                  "edit": "https://en.wikipedia.org/wiki/White_Australia_policy?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:White_Australia_policy"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/White_Australia_policy",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/White_Australia_policy",
                  "edit": "https://en.m.wikipedia.org/wiki/White_Australia_policy?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:White_Australia_policy"
                }
              },
              "extract": "The White Australia policy is a term encapsulating a set of historical policies that aimed to forbid people of non-European ethnic origin, especially Asians and Pacific Islanders, from immigrating to Australia, starting in 1901. Subsequent governments of Australia progressively dismantled such policies between 1949 and 1973.",
              "extract_html": "<p>The <b>White Australia policy</b> is a term encapsulating a set of historical policies that aimed to forbid people of non-European ethnic origin, especially Asians and Pacific Islanders, from immigrating to Australia, starting in 1901. Subsequent governments of Australia progressively dismantled such policies between 1949 and 1973.</p>",
              "normalizedtitle": "White Australia policy"
            }
          ],
          "year": 1903
        },
        {
          "text": "The Chicago Times-Herald race (winner pictured), the first automobile race in the U.S., was held in Chicago.",
          "pages": [
            {
              "type": "standard",
              "title": "Chicago_Times-Herald_race",
              "displaytitle": "<i>Chicago Times-Herald</i> race",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q5095810",
              "titles": {
                "canonical": "Chicago_Times-Herald_race",
                "normalized": "Chicago Times-Herald race",
                "display": "<i>Chicago Times-Herald</i> race"
              },
              "pageid": 22731138,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/America%27s_First_Car_Race_Map.jpg/215px-America%27s_First_Car_Race_Map.jpg",
                "width": 215,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/en/1/11/America%27s_First_Car_Race_Map.jpg",
                "width": 258,
                "height": 384
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1040482117",
              "tid": "5d3480f0-172a-11ec-bc31-29727738d707",
              "timestamp": "2021-08-24T20:22:24Z",
              "description": "First automobile race in the United States",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Chicago_Times-Herald_race",
                  "revisions": "https://en.wikipedia.org/wiki/Chicago_Times-Herald_race?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Chicago_Times-Herald_race?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Chicago_Times-Herald_race"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Chicago_Times-Herald_race",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Chicago_Times-Herald_race",
                  "edit": "https://en.m.wikipedia.org/wiki/Chicago_Times-Herald_race?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Chicago_Times-Herald_race"
                }
              },
              "extract": "The Chicago Times-Herald race was the first automobile race held in the United States. Sponsored by the Chicago Times-Herald, the race was held in Chicago in 1895 among six motorized vehicles: four cars and two motorcycles. It was won by Frank Duryea's Motorized Wagon. The race created considerable publicity for the motocycle, which had been introduced in the United States only two years earlier.",
              "extract_html": "<p>The <b><i>Chicago Times-Herald</i> race</b> was the first automobile race held in the United States. Sponsored by the <i>Chicago Times-Herald</i>, the race was held in Chicago in 1895 among six motorized vehicles: four cars and two motorcycles. It was won by Frank Duryea's Motorized Wagon. The race created considerable publicity for the motocycle, which had been introduced in the United States only two years earlier.</p>",
              "normalizedtitle": "Chicago Times-Herald race"
            },
            {
              "type": "standard",
              "title": "Auto_racing",
              "displaytitle": "Auto racing",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q5386",
              "titles": {
                "canonical": "Auto_racing",
                "normalized": "Auto racing",
                "display": "Auto racing"
              },
              "pageid": 1022,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Three-wide_multiple_row_back.JPG/320px-Three-wide_multiple_row_back.JPG",
                "width": 320,
                "height": 206
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/2/25/Three-wide_multiple_row_back.JPG",
                "width": 4608,
                "height": 2968
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1055389481",
              "tid": "91aa7e20-4f15-11ec-a4cc-adf04fc3753e",
              "timestamp": "2021-11-15T16:12:49Z",
              "description": "Motorsport involving the racing of cars for competition",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Auto_racing",
                  "revisions": "https://en.wikipedia.org/wiki/Auto_racing?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Auto_racing?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Auto_racing"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Auto_racing",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Auto_racing",
                  "edit": "https://en.m.wikipedia.org/wiki/Auto_racing?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Auto_racing"
                }
              },
              "extract": "Auto racing is a motorsport involving the racing of automobiles for competition.",
              "extract_html": "<p><b>Auto racing</b> is a motorsport involving the racing of automobiles for competition.</p>",
              "normalizedtitle": "Auto racing"
            }
          ],
          "year": 1895
        },
        {
          "text": "At London's Gresham College, Robert Boyle, John Wilkins, Christopher Wren and other leading scientists founded a learned society now known as the Royal Society.",
          "pages": [
            {
              "type": "standard",
              "title": "Gresham_College",
              "displaytitle": "Gresham College",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q788375",
              "titles": {
                "canonical": "Gresham_College",
                "normalized": "Gresham College",
                "display": "Gresham College"
              },
              "pageid": 422947,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Gresham_College_logo.svg/320px-Gresham_College_logo.svg.png",
                "width": 320,
                "height": 138
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Gresham_College_logo.svg/479px-Gresham_College_logo.svg.png",
                "width": 479,
                "height": 207
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057557797",
              "tid": "464c0e70-502e-11ec-b4ad-69b491779cea",
              "timestamp": "2021-11-28T09:33:38Z",
              "description": "Educational institution in London, England",
              "description_source": "local",
              "coordinates": {
                "lat": 51.5175,
                "lon": -0.1098
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Gresham_College",
                  "revisions": "https://en.wikipedia.org/wiki/Gresham_College?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Gresham_College?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Gresham_College"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Gresham_College",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Gresham_College",
                  "edit": "https://en.m.wikipedia.org/wiki/Gresham_College?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Gresham_College"
                }
              },
              "extract": "Gresham College is an institution of higher learning located at Barnard's Inn Hall off Holborn in Central London, England. It does not enroll students or award degrees. It was founded in 1597 under the will of Sir Thomas Gresham, and hosts over 140 free public lectures every year. Since 2001, all lectures have also been made available online.",
              "extract_html": "<p><b>Gresham College</b> is an institution of higher learning located at Barnard's Inn Hall off Holborn in Central London, England. It does not enroll students or award degrees. It was founded in 1597 under the will of Sir Thomas Gresham, and hosts over 140 free public lectures every year. Since 2001, all lectures have also been made available online.</p>",
              "normalizedtitle": "Gresham College"
            },
            {
              "type": "standard",
              "title": "Robert_Boyle",
              "displaytitle": "Robert Boyle",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q43393",
              "titles": {
                "canonical": "Robert_Boyle",
                "normalized": "Robert Boyle",
                "display": "Robert Boyle"
              },
              "pageid": 50237,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Shannon_Portrait_of_the_Hon_Robert_Boyle.jpg/253px-The_Shannon_Portrait_of_the_Hon_Robert_Boyle.jpg",
                "width": 253,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/a/a3/The_Shannon_Portrait_of_the_Hon_Robert_Boyle.jpg",
                "width": 3327,
                "height": 4200
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057576641",
              "tid": "edd48230-5047-11ec-8d02-8d772b0aa29a",
              "timestamp": "2021-11-28T12:37:11Z",
              "description": "Anglo-Irish natural philosopher, chemist, physicist, and inventor",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Robert_Boyle",
                  "revisions": "https://en.wikipedia.org/wiki/Robert_Boyle?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Robert_Boyle?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Robert_Boyle"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Robert_Boyle",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Robert_Boyle",
                  "edit": "https://en.m.wikipedia.org/wiki/Robert_Boyle?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Robert_Boyle"
                }
              },
              "extract": "Robert Boyle was an Anglo-Irish natural philosopher, chemist, physicist, and inventor. Boyle is largely regarded today as the first modern chemist, and therefore one of the founders of modern chemistry, and one of the pioneers of modern experimental scientific method. He is best known for Boyle's law, which describes the inversely proportional relationship between the absolute pressure and volume of a gas, if the temperature is kept constant within a closed system. Among his works, The Sceptical Chymist is seen as a cornerstone book in the field of chemistry. He was a devout and pious Anglican and is noted for his writings in theology.",
              "extract_html": "<p><b>Robert Boyle</b> was an Anglo-Irish natural philosopher, chemist, physicist, and inventor. Boyle is largely regarded today as the first modern chemist, and therefore one of the founders of modern chemistry, and one of the pioneers of modern experimental scientific method. He is best known for Boyle's law, which describes the inversely proportional relationship between the absolute pressure and volume of a gas, if the temperature is kept constant within a closed system. Among his works, <i>The Sceptical Chymist</i> is seen as a cornerstone book in the field of chemistry. He was a devout and pious Anglican and is noted for his writings in theology.</p>",
              "normalizedtitle": "Robert Boyle"
            },
            {
              "type": "standard",
              "title": "John_Wilkins",
              "displaytitle": "John Wilkins",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q381039",
              "titles": {
                "canonical": "John_Wilkins",
                "normalized": "John Wilkins",
                "display": "John Wilkins"
              },
              "pageid": 156996,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Bp_John_Wilkins.jpg/259px-Bp_John_Wilkins.jpg",
                "width": 259,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/7/79/Bp_John_Wilkins.jpg",
                "width": 971,
                "height": 1200
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1048121723",
              "tid": "ab1a8700-4f16-11ec-861a-0f52cf277037",
              "timestamp": "2021-10-04T10:50:16Z",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/John_Wilkins",
                  "revisions": "https://en.wikipedia.org/wiki/John_Wilkins?action=history",
                  "edit": "https://en.wikipedia.org/wiki/John_Wilkins?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:John_Wilkins"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/John_Wilkins",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/John_Wilkins",
                  "edit": "https://en.m.wikipedia.org/wiki/John_Wilkins?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:John_Wilkins"
                }
              },
              "extract": "John Wilkins, was an Anglican clergyman, natural philosopher and author, and was one of the founders of the Royal Society. He was Bishop of Chester from 1668 until his death.",
              "extract_html": "<p><b>John Wilkins</b>, was an Anglican clergyman, natural philosopher and author, and was one of the founders of the Royal Society. He was Bishop of Chester from 1668 until his death.</p>",
              "normalizedtitle": "John Wilkins"
            },
            {
              "type": "standard",
              "title": "Christopher_Wren",
              "displaytitle": "Christopher Wren",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q170373",
              "titles": {
                "canonical": "Christopher_Wren",
                "normalized": "Christopher Wren",
                "display": "Christopher Wren"
              },
              "pageid": 52946,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Christopher_Wren_by_Godfrey_Kneller_1711.jpg/251px-Christopher_Wren_by_Godfrey_Kneller_1711.jpg",
                "width": 251,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Christopher_Wren_by_Godfrey_Kneller_1711.jpg",
                "width": 1206,
                "height": 1536
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057576706",
              "tid": "03211590-5048-11ec-8546-af53fcc90242",
              "timestamp": "2021-11-28T12:37:49Z",
              "description": "English architect (1632–1723)",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Christopher_Wren",
                  "revisions": "https://en.wikipedia.org/wiki/Christopher_Wren?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Christopher_Wren?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Christopher_Wren"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Christopher_Wren",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Christopher_Wren",
                  "edit": "https://en.m.wikipedia.org/wiki/Christopher_Wren?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Christopher_Wren"
                }
              },
              "extract": "Sir Christopher Wren PRS FRS was one of the most highly acclaimed English architects in history, as well as an anatomist, astronomer, geometer, and mathematician-physicist. He was accorded responsibility for rebuilding 52 churches in the City of London after the Great Fire in 1666, including what is regarded as his masterpiece, St Paul's Cathedral, on Ludgate Hill, completed in 1710.",
              "extract_html": "<p><b>Sir Christopher Wren</b> PRS FRS was one of the most highly acclaimed English architects in history, as well as an anatomist, astronomer, geometer, and mathematician-physicist. He was accorded responsibility for rebuilding 52 churches in the City of London after the Great Fire in 1666, including what is regarded as his masterpiece, St Paul's Cathedral, on Ludgate Hill, completed in 1710.</p>",
              "normalizedtitle": "Christopher Wren"
            },
            {
              "type": "standard",
              "title": "Learned_society",
              "displaytitle": "Learned society",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q955824",
              "titles": {
                "canonical": "Learned_society",
                "normalized": "Learned society",
                "display": "Learned society"
              },
              "pageid": 364319,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/200_y_Anniversary_of_Berlin_Academy_1900.jpg/320px-200_y_Anniversary_of_Berlin_Academy_1900.jpg",
                "width": 320,
                "height": 204
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/9/98/200_y_Anniversary_of_Berlin_Academy_1900.jpg",
                "width": 3097,
                "height": 1978
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1036371885",
              "tid": "976ae550-4f17-11ec-949c-13d95f066100",
              "timestamp": "2021-07-31T04:14:20Z",
              "description": "Organization that exists to promote an academic discipline or profession",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Learned_society",
                  "revisions": "https://en.wikipedia.org/wiki/Learned_society?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Learned_society?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Learned_society"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Learned_society",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Learned_society",
                  "edit": "https://en.m.wikipedia.org/wiki/Learned_society?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Learned_society"
                }
              },
              "extract": "A learned society is an organization that exists to promote an academic discipline, profession, or a group of related disciplines such as the arts and science. Membership may be open to all, may require possession of some qualification, or may be an honour conferred by election.",
              "extract_html": "<p>A <b>learned society</b> is an organization that exists to promote an academic discipline, profession, or a group of related disciplines such as the arts and science. Membership may be open to all, may require possession of some qualification, or may be an honour conferred by election.</p>",
              "normalizedtitle": "Learned society"
            },
            {
              "type": "standard",
              "title": "Royal_Society",
              "displaytitle": "Royal Society",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q123885",
              "titles": {
                "canonical": "Royal_Society",
                "normalized": "Royal Society",
                "display": "Royal Society"
              },
              "pageid": 496064,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/The_Royal_Society_Coat_of_Arms.svg/309px-The_Royal_Society_Coat_of_Arms.svg.png",
                "width": 309,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/The_Royal_Society_Coat_of_Arms.svg/302px-The_Royal_Society_Coat_of_Arms.svg.png",
                "width": 302,
                "height": 313
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057550021",
              "tid": "7bd72ee0-5023-11ec-ae58-07d404773b57",
              "timestamp": "2021-11-28T08:16:21Z",
              "description": "National academy of sciences for the UK",
              "description_source": "local",
              "coordinates": {
                "lat": 51.50598056,
                "lon": -0.13246111
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Royal_Society",
                  "revisions": "https://en.wikipedia.org/wiki/Royal_Society?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Royal_Society?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Royal_Society"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Royal_Society",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Royal_Society",
                  "edit": "https://en.m.wikipedia.org/wiki/Royal_Society?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Royal_Society"
                }
              },
              "extract": "The Royal Society, formally The Royal Society of London for Improving Natural Knowledge, is a learned society and the United Kingdom's national academy of sciences. Founded on 28 November 1660, it was granted a royal charter by King Charles II as The Royal Society. It is the oldest national scientific institution in the world. The society fulfils a number of roles: promoting science and its benefits, recognising excellence in science, supporting outstanding science, providing scientific advice for policy, fostering international and global co-operation, education and public engagement.",
              "extract_html": "<p>The <b>Royal Society</b>, formally <b>The Royal Society of London for Improving Natural Knowledge</b>, is a learned society and the United Kingdom's national academy of sciences. Founded on 28 November 1660, it was granted a royal charter by King Charles II as <b>The Royal Society</b>. It is the oldest national scientific institution in the world. The society fulfils a number of roles: promoting science and its benefits, recognising excellence in science, supporting outstanding science, providing scientific advice for policy, fostering international and global co-operation, education and public engagement.</p>",
              "normalizedtitle": "Royal Society"
            }
          ],
          "year": 1660
        },
        {
          "text": "Đại Việt emperor Lê Thánh Tông launched a military expedition against Champa, beginning the Cham–Vietnamese War.",
          "pages": [
            {
              "type": "standard",
              "title": "Đại_Việt",
              "displaytitle": "Đại Việt",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q430309",
              "titles": {
                "canonical": "Đại_Việt",
                "normalized": "Đại Việt",
                "display": "Đại Việt"
              },
              "pageid": 14522639,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cambodge%2C_Laos%2C_Siam_and_Vietnam_at_1760.jpg/285px-Cambodge%2C_Laos%2C_Siam_and_Vietnam_at_1760.jpg",
                "width": 285,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Cambodge%2C_Laos%2C_Siam_and_Vietnam_at_1760.jpg",
                "width": 776,
                "height": 870
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057574905",
              "tid": "644283a0-504c-11ec-8328-b37853e5e1ee",
              "timestamp": "2021-11-28T12:20:55Z",
              "description": "Vietnamese kingdom from the 10th–19th century",
              "description_source": "local",
              "coordinates": {
                "lat": 21.01666667,
                "lon": 105.85
              },
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/%C4%90%E1%BA%A1i_Vi%E1%BB%87t",
                  "revisions": "https://en.wikipedia.org/wiki/%C4%90%E1%BA%A1i_Vi%E1%BB%87t?action=history",
                  "edit": "https://en.wikipedia.org/wiki/%C4%90%E1%BA%A1i_Vi%E1%BB%87t?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:%C4%90%E1%BA%A1i_Vi%E1%BB%87t"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/%C4%90%E1%BA%A1i_Vi%E1%BB%87t",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/%C4%90%E1%BA%A1i_Vi%E1%BB%87t",
                  "edit": "https://en.m.wikipedia.org/wiki/%C4%90%E1%BA%A1i_Vi%E1%BB%87t?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:%C4%90%E1%BA%A1i_Vi%E1%BB%87t"
                }
              },
              "extract": "Đại Việt, often known as Annam, was a Vietnamese kingdom in eastern Mainland Southeast Asia from the 10th century AD to the early 19th century, centred around the region of present-day Hanoi. Its early name, Đại Cồ Việt, was established in 968 by Vietnamese ruler Đinh Bộ Lĩnh after he ended the Anarchy of the 12 Warlords, until the beginning of the reign of Lý Thánh Tông, the third emperor of the Lý dynasty. Đại Việt lasted until the reign of Gia Long, the first emperor of the Nguyễn dynasty, when the name was changed to Việt Nam.",
              "extract_html": "<p><b>Đại Việt</b>, often known as <b>Annam</b>, was a Vietnamese kingdom in eastern Mainland Southeast Asia from the 10th century AD to the early 19th century, centred around the region of present-day Hanoi. Its early name, <b>Đại Cồ Việt</b>, was established in 968 by Vietnamese ruler Đinh Bộ Lĩnh after he ended the Anarchy of the 12 Warlords, until the beginning of the reign of Lý Thánh Tông, the third emperor of the Lý dynasty. Đại Việt lasted until the reign of Gia Long, the first emperor of the Nguyễn dynasty, when the name was changed to Việt Nam.</p>",
              "normalizedtitle": "Đại Việt"
            },
            {
              "type": "standard",
              "title": "Lê_Thánh_Tông",
              "displaytitle": "Lê Thánh Tông",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q1771050",
              "titles": {
                "canonical": "Lê_Thánh_Tông",
                "normalized": "Lê Thánh Tông",
                "display": "Lê Thánh Tông"
              },
              "pageid": 4334618,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/L%C3%AA_Th%C3%A1nh_T%C3%B4ng.jpg/212px-L%C3%AA_Th%C3%A1nh_T%C3%B4ng.jpg",
                "width": 212,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/7/77/L%C3%AA_Th%C3%A1nh_T%C3%B4ng.jpg",
                "width": 1024,
                "height": 1544
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1054384748",
              "tid": "bc8bf040-500c-11ec-b6b8-31c03b12b465",
              "timestamp": "2021-11-09T18:40:25Z",
              "description": "Emperor of Đại Việt (1442-1497) (r. 1460-1497)",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/L%C3%AA_Th%C3%A1nh_T%C3%B4ng",
                  "revisions": "https://en.wikipedia.org/wiki/L%C3%AA_Th%C3%A1nh_T%C3%B4ng?action=history",
                  "edit": "https://en.wikipedia.org/wiki/L%C3%AA_Th%C3%A1nh_T%C3%B4ng?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:L%C3%AA_Th%C3%A1nh_T%C3%B4ng"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/L%C3%AA_Th%C3%A1nh_T%C3%B4ng",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/L%C3%AA_Th%C3%A1nh_T%C3%B4ng",
                  "edit": "https://en.m.wikipedia.org/wiki/L%C3%AA_Th%C3%A1nh_T%C3%B4ng?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:L%C3%AA_Th%C3%A1nh_T%C3%B4ng"
                }
              },
              "extract": "Lê Thánh Tông, personal name Lê Hạo, temple name Thánh Tông, courtesy name Tư Thành, was a emperor of Đại Việt, reigned from 1460 to 1497, the fifth monarch of the House of Lê Duy and is one of the greatest monarchs in Vietnamese history. He came to power through a coup d'état against his second brother Lê Nghi Dân in 1460. His reign is recognized for the extensive administrative, military, education, and fiscal reforms he instituted, and a cultural revolution that replaced the old traditional aristocracy with a generation of literati scholars. His era was eulogized as the Prospered reign of Hồng Đức.",
              "extract_html": "<p><b>Lê Thánh Tông</b>, personal name <b>Lê Hạo</b>, temple name <b>Thánh Tông</b>, courtesy name <b>Tư Thành</b>, was a emperor of Đại Việt, reigned from 1460 to 1497, the fifth monarch of the House of Lê Duy and is one of the greatest monarchs in Vietnamese history. He came to power through a coup d'état against his second brother Lê Nghi Dân in 1460. His reign is recognized for the extensive administrative, military, education, and fiscal reforms he instituted, and a cultural revolution that replaced the old traditional aristocracy with a generation of literati scholars. His era was eulogized as the <i>Prospered reign of Hồng Đức.</i></p>",
              "normalizedtitle": "Lê Thánh Tông"
            },
            {
              "type": "standard",
              "title": "Champa",
              "displaytitle": "Champa",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q216786",
              "titles": {
                "canonical": "Champa",
                "normalized": "Champa",
                "display": "Champa"
              },
              "pageid": 153039,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Map-of-southeast-asia_1000_-_1100_CE.png/227px-Map-of-southeast-asia_1000_-_1100_CE.png",
                "width": 227,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Map-of-southeast-asia_1000_-_1100_CE.png",
                "width": 791,
                "height": 1114
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057282640",
              "tid": "03b584a0-500c-11ec-ab0c-53d214eeb1d6",
              "timestamp": "2021-11-26T17:03:17Z",
              "description": "Series of coastal states in what is now Vietnam from c. 192 to 1832",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Champa",
                  "revisions": "https://en.wikipedia.org/wiki/Champa?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Champa?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Champa"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Champa",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Champa",
                  "edit": "https://en.m.wikipedia.org/wiki/Champa?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Champa"
                }
              },
              "extract": "Champa was a collection of independent Cham polities that extended across the coast of what is today central and southern Vietnam from approximately the 2nd century AD until 1832, when it was annexed by the Vietnamese Empire under Minh Mạng. The kingdom was known variously as Nagaracampa, ꨌꩌꨛꨩ in the Chamic and Châmpa (ចាម្ប៉ា) in the Khmer inscriptions, Chiêm Thành in Sino-Vietnamese vocabulary and Zhànchéng in Chinese records. According to National Geographic, Champa's navy was considered unrivaled.",
              "extract_html": "<p><b>Champa</b> was a collection of independent Cham polities that extended across the coast of what is today central and southern Vietnam from approximately the 2nd century AD until 1832, when it was annexed by the Vietnamese Empire under Minh Mạng. The kingdom was known variously as <i>Nagaracampa</i>, ꨌꩌꨛꨩ in the Chamic and <i>Châmpa</i> (ចាម្ប៉ា) in the Khmer inscriptions, <i>Chiêm Thành</i> in Sino-Vietnamese vocabulary and <i>Zhànchéng</i> in Chinese records. According to National Geographic, Champa's navy was considered unrivaled.</p>",
              "normalizedtitle": "Champa"
            },
            {
              "type": "standard",
              "title": "Cham–Vietnamese_War_(1471)",
              "displaytitle": "Cham–Vietnamese War (1471)",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q3391315",
              "titles": {
                "canonical": "Cham–Vietnamese_War_(1471)",
                "normalized": "Cham–Vietnamese War (1471)",
                "display": "Cham–Vietnamese War (1471)"
              },
              "pageid": 15869004,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Map-of-southeast-asia_1400_CE-es.svg/227px-Map-of-southeast-asia_1400_CE-es.svg.png",
                "width": 227,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Map-of-southeast-asia_1400_CE-es.svg/791px-Map-of-southeast-asia_1400_CE-es.svg.png",
                "width": 791,
                "height": 1114
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1055786451",
              "tid": "eaaf2820-500c-11ec-bd84-c5e17964f625",
              "timestamp": "2021-11-17T20:01:06Z",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Cham%E2%80%93Vietnamese_War_(1471)",
                  "revisions": "https://en.wikipedia.org/wiki/Cham%E2%80%93Vietnamese_War_(1471)?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Cham%E2%80%93Vietnamese_War_(1471)?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Cham%E2%80%93Vietnamese_War_(1471)"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Cham%E2%80%93Vietnamese_War_(1471)",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Cham%E2%80%93Vietnamese_War_(1471)",
                  "edit": "https://en.m.wikipedia.org/wiki/Cham%E2%80%93Vietnamese_War_(1471)?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Cham%E2%80%93Vietnamese_War_(1471)"
                }
              },
              "extract": "The Cham - Đại Việt War of 1471 or  Vietnamese invasion of Champa was a military expedition launched by Emperor Lê Thánh Tông of Đại Việt under the Lê dynasty and is widely regarded as the event that marked the downfall of Champa. In retaliation for Cham raids, Vietnamese forces attacked and sacked the kingdom's largest city-state, Vijaya, and defeated the Cham army, bringing the kingdom of Champa to an end.",
              "extract_html": "<p>The <b>Cham - Đại Việt War of 1471</b> or <b> Vietnamese invasion of Champa </b>was a military expedition launched by Emperor Lê Thánh Tông of Đại Việt under the Lê dynasty and is widely regarded as the event that marked the downfall of Champa. In retaliation for Cham raids, Vietnamese forces attacked and sacked the kingdom's largest city-state, Vijaya, and defeated the Cham army, bringing the kingdom of Champa to an end.</p>",
              "normalizedtitle": "Cham–Vietnamese War (1471)"
            }
          ],
          "year": 1470
        },
        {
          "text": "Having deserted the Ottoman army, Skanderbeg arrived in the Albanian city of Krujë and, using a forged letter from Sultan Murad II to the governor of Krujë, became lord of the city.",
          "pages": [
            {
              "type": "standard",
              "title": "Ottoman_Empire",
              "displaytitle": "Ottoman Empire",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q12560",
              "titles": {
                "canonical": "Ottoman_Empire",
                "normalized": "Ottoman Empire",
                "display": "Ottoman Empire"
              },
              "pageid": 22278,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/320px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png",
                "width": 320,
                "height": 213
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/1200px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png",
                "width": 1200,
                "height": 800
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057532368",
              "tid": "7163ac70-500c-11ec-bcee-e7c1f006dc21",
              "timestamp": "2021-11-28T05:31:05Z",
              "description": "1299–1922 empire centered around modern Turkey",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Ottoman_Empire",
                  "revisions": "https://en.wikipedia.org/wiki/Ottoman_Empire?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Ottoman_Empire?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Ottoman_Empire"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Ottoman_Empire",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Ottoman_Empire",
                  "edit": "https://en.m.wikipedia.org/wiki/Ottoman_Empire?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Ottoman_Empire"
                }
              },
              "extract": "The Ottoman Empire was an empire that controlled much of Southeastern Europe, Western Asia, and Northern Africa between the 14th and early 20th centuries. It was founded at the end of the 13th century in northwestern Anatolia in the town of Söğüt by the Turkoman tribal leader Osman I. After 1354, the Ottomans crossed into Europe and with the conquest of the Balkans, the Ottoman beylik was transformed into a transcontinental empire. The Ottomans ended the Byzantine Empire with the conquest of Constantinople in 1453 by Mehmed the Conqueror.",
              "extract_html": "<p>The <b>Ottoman Empire</b> was an empire that controlled much of Southeastern Europe, Western Asia, and Northern Africa between the 14th and early 20th centuries. It was founded at the end of the 13th century in northwestern Anatolia in the town of Söğüt by the Turkoman tribal leader Osman I. After 1354, the Ottomans crossed into Europe and with the conquest of the Balkans, the Ottoman beylik was transformed into a transcontinental empire. The Ottomans ended the Byzantine Empire with the conquest of Constantinople in 1453 by Mehmed the Conqueror.</p>",
              "normalizedtitle": "Ottoman Empire"
            },
            {
              "type": "standard",
              "title": "Skanderbeg",
              "displaytitle": "Skanderbeg",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q160614",
              "titles": {
                "canonical": "Skanderbeg",
                "normalized": "Skanderbeg",
                "display": "Skanderbeg"
              },
              "pageid": 10780405,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Skanderbeg_by_Antonio_Maria_Crespi.jpg/273px-Skanderbeg_by_Antonio_Maria_Crespi.jpg",
                "width": 273,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/7/77/Skanderbeg_by_Antonio_Maria_Crespi.jpg",
                "width": 800,
                "height": 936
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057403343",
              "tid": "b07a5930-4f7c-11ec-83db-e9aee094c596",
              "timestamp": "2021-11-27T12:22:15Z",
              "description": "Albanian nobleman and military commander (1405-1468)",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Skanderbeg",
                  "revisions": "https://en.wikipedia.org/wiki/Skanderbeg?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Skanderbeg?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Skanderbeg"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Skanderbeg",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Skanderbeg",
                  "edit": "https://en.m.wikipedia.org/wiki/Skanderbeg?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Skanderbeg"
                }
              },
              "extract": "Gjergj Kastrioti Skënderbeu, known as Skanderbeg, was an Albanian feudal lord and military commander who led a rebellion against the Ottoman Empire in what is today Albania, North Macedonia, Greece, Kosovo, Montenegro and Serbia.",
              "extract_html": "<p><b>Gjergj Kastrioti Skënderbeu</b>, known as <b>Skanderbeg</b>, was an Albanian feudal lord and military commander who led a rebellion against the Ottoman Empire in what is today Albania, North Macedonia, Greece, Kosovo, Montenegro and Serbia.</p>",
              "normalizedtitle": "Skanderbeg"
            },
            {
              "type": "standard",
              "title": "Krujë",
              "displaytitle": "Krujë",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q194164",
              "titles": {
                "canonical": "Krujë",
                "normalized": "Krujë",
                "display": "Krujë"
              },
              "pageid": 1077521,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kruj%C3%AB-KrujaAlbania_2016.jpg/320px-Kruj%C3%AB-KrujaAlbania_2016.jpg",
                "width": 320,
                "height": 213
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/43/Kruj%C3%AB-KrujaAlbania_2016.jpg",
                "width": 6000,
                "height": 4000
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1045362270",
              "tid": "767bbc00-4f19-11ec-94fb-67bf06b7f0c3",
              "timestamp": "2021-09-20T05:42:49Z",
              "description": "city in Albania",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Kruj%C3%AB",
                  "revisions": "https://en.wikipedia.org/wiki/Kruj%C3%AB?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Kruj%C3%AB?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Kruj%C3%AB"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Kruj%C3%AB",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Kruj%C3%AB",
                  "edit": "https://en.m.wikipedia.org/wiki/Kruj%C3%AB?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Kruj%C3%AB"
                }
              },
              "extract": "Krujë is a town and a municipality in north central Albania. Located between Mount Krujë and the Ishëm River, the city is only 20 km north from the capital of Albania, Tirana.",
              "extract_html": "<p><b>Krujë</b> is a town and a municipality in north central Albania. Located between Mount Krujë and the Ishëm River, the city is only 20 km north from the capital of Albania, Tirana.</p>",
              "normalizedtitle": "Krujë"
            },
            {
              "type": "standard",
              "title": "Murad_II",
              "displaytitle": "Murad II",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q131394",
              "titles": {
                "canonical": "Murad_II",
                "normalized": "Murad II",
                "display": "Murad II"
              },
              "pageid": 19988,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Paolo_Veronese_%28Nachfolger%29_-_Sultan_Murad_II._-_2237_-_Bavarian_State_Painting_Collections.jpg/246px-Paolo_Veronese_%28Nachfolger%29_-_Sultan_Murad_II._-_2237_-_Bavarian_State_Painting_Collections.jpg",
                "width": 246,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Paolo_Veronese_%28Nachfolger%29_-_Sultan_Murad_II._-_2237_-_Bavarian_State_Painting_Collections.jpg",
                "width": 661,
                "height": 859
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057580554",
              "tid": "8a578c60-504d-11ec-a74c-8558338ee2bd",
              "timestamp": "2021-11-28T13:17:26Z",
              "description": "Sultan of the Ottoman Empire from 1421 to 1451",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Murad_II",
                  "revisions": "https://en.wikipedia.org/wiki/Murad_II?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Murad_II?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Murad_II"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Murad_II",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Murad_II",
                  "edit": "https://en.m.wikipedia.org/wiki/Murad_II?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Murad_II"
                }
              },
              "extract": " Murad II was the sultan of the Ottoman Empire from 1421 to 1444 and again from 1446 to 1451.",
              "extract_html": "<p><b> Murad II</b> was the sultan of the Ottoman Empire from 1421 to 1444 and again from 1446 to 1451.</p>",
              "normalizedtitle": "Murad II"
            }
          ],
          "year": 1443
        },
        {
          "text": "Shi Jingtang was enthroned as the first emperor of the Later Jin by Emperor Taizong of Liao.",
          "pages": [
            {
              "type": "standard",
              "title": "Shi_Jingtang",
              "displaytitle": "Shi Jingtang",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q1189495",
              "titles": {
                "canonical": "Shi_Jingtang",
                "normalized": "Shi Jingtang",
                "display": "Shi Jingtang"
              },
              "pageid": 7606574,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Emperor_Gaozu_of_Later_Jin_Shi_Jingtang.jpg/294px-Emperor_Gaozu_of_Later_Jin_Shi_Jingtang.jpg",
                "width": 294,
                "height": 320
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Emperor_Gaozu_of_Later_Jin_Shi_Jingtang.jpg",
                "width": 300,
                "height": 326
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057576602",
              "tid": "dd8d2e40-5047-11ec-b755-ef5b103341df",
              "timestamp": "2021-11-28T12:36:48Z",
              "description": "Emperor Gaozu of (Later) Jin",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Shi_Jingtang",
                  "revisions": "https://en.wikipedia.org/wiki/Shi_Jingtang?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Shi_Jingtang?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Shi_Jingtang"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Shi_Jingtang",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Shi_Jingtang",
                  "edit": "https://en.m.wikipedia.org/wiki/Shi_Jingtang?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Shi_Jingtang"
                }
              },
              "extract": "Shi Jingtang, also known by his temple name Gaozu (高祖), was the founding emperor of imperial China's short-lived Later Jin during the Five Dynasties and Ten Kingdoms period, reigning from 936 until his death.",
              "extract_html": "<p><b>Shi Jingtang</b>, also known by his temple name <b>Gaozu</b> (高祖), was the founding emperor of imperial China's short-lived Later Jin during the Five Dynasties and Ten Kingdoms period, reigning from 936 until his death.</p>",
              "normalizedtitle": "Shi Jingtang"
            },
            {
              "type": "standard",
              "title": "Later_Jin_(Five_Dynasties)",
              "displaytitle": "Later Jin (Five Dynasties)",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q1154540",
              "titles": {
                "canonical": "Later_Jin_(Five_Dynasties)",
                "normalized": "Later Jin (Five Dynasties)",
                "display": "Later Jin (Five Dynasties)"
              },
              "pageid": 2837237,
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Later_Jin.png/320px-Later_Jin.png",
                "width": 320,
                "height": 227
              },
              "originalimage": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Later_Jin.png",
                "width": 1269,
                "height": 902
              },
              "lang": "en",
              "dir": "ltr",
              "revision": "1057339230",
              "tid": "484a2f70-4f1d-11ec-bbdb-6311611d67e1",
              "timestamp": "2021-11-27T00:59:26Z",
              "description": "Chinese dynasty (936–947)",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Later_Jin_(Five_Dynasties)",
                  "revisions": "https://en.wikipedia.org/wiki/Later_Jin_(Five_Dynasties)?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Later_Jin_(Five_Dynasties)?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Later_Jin_(Five_Dynasties)"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Later_Jin_(Five_Dynasties)",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Later_Jin_(Five_Dynasties)",
                  "edit": "https://en.m.wikipedia.org/wiki/Later_Jin_(Five_Dynasties)?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Later_Jin_(Five_Dynasties)"
                }
              },
              "extract": "The Later Jìn, also called Shi Jin (石晉), was one of the Five Dynasties during the Five Dynasties and Ten Kingdoms period in China. It was founded by Shi Jingtang with aid from the Liao dynasty, which assumed suzerainty over the Later Jin. After Later Jin's second ruler, Shi Chonggui, fell out with the Liao, the Liao invaded in 946 and in 947, annihilated the Later Jin and annexed its former territories.",
              "extract_html": "<p>The <b>Later Jìn</b>, also called <b>Shi Jin</b> (石晉), was one of the Five Dynasties during the Five Dynasties and Ten Kingdoms period in China. It was founded by Shi Jingtang with aid from the Liao dynasty, which assumed suzerainty over the Later Jin. After Later Jin's second ruler, Shi Chonggui, fell out with the Liao, the Liao invaded in 946 and in 947, annihilated the Later Jin and annexed its former territories.</p>",
              "normalizedtitle": "Later Jin (Five Dynasties)"
            },
            {
              "type": "standard",
              "title": "Emperor_Taizong_of_Liao",
              "displaytitle": "Emperor Taizong of Liao",
              "namespace": {
                "id": 0,
                "text": ""
              },
              "wikibase_item": "Q4991",
              "titles": {
                "canonical": "Emperor_Taizong_of_Liao",
                "normalized": "Emperor Taizong of Liao",
                "display": "Emperor Taizong of Liao"
              },
              "pageid": 2530422,
              "lang": "en",
              "dir": "ltr",
              "revision": "1057576616",
              "tid": "e25871f0-5047-11ec-ae82-61f8a2536590",
              "timestamp": "2021-11-28T12:36:57Z",
              "description": "Emperor of the Liao dynasty (902-947) (r.927-947)",
              "description_source": "local",
              "content_urls": {
                "desktop": {
                  "page": "https://en.wikipedia.org/wiki/Emperor_Taizong_of_Liao",
                  "revisions": "https://en.wikipedia.org/wiki/Emperor_Taizong_of_Liao?action=history",
                  "edit": "https://en.wikipedia.org/wiki/Emperor_Taizong_of_Liao?action=edit",
                  "talk": "https://en.wikipedia.org/wiki/Talk:Emperor_Taizong_of_Liao"
                },
                "mobile": {
                  "page": "https://en.m.wikipedia.org/wiki/Emperor_Taizong_of_Liao",
                  "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Emperor_Taizong_of_Liao",
                  "edit": "https://en.m.wikipedia.org/wiki/Emperor_Taizong_of_Liao?action=edit",
                  "talk": "https://en.m.wikipedia.org/wiki/Talk:Emperor_Taizong_of_Liao"
                }
              },
              "extract": "Emperor Taizong of Liao, personal name Yaogu, sinicised name Yelü Deguang, courtesy name Dejin, was the second emperor of the Khitan-led Liao dynasty of China.",
              "extract_html": "<p><b>Emperor Taizong of Liao</b>, personal name <b>Yaogu</b>, sinicised name <b>Yelü Deguang</b>, courtesy name <b>Dejin</b>, was the second emperor of the Khitan-led Liao dynasty of China.</p>",
              "normalizedtitle": "Emperor Taizong of Liao"
            }
          ],
          "year": 936
        }
      ]
    }
  )

}