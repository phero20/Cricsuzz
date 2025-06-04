import { createSlice } from "@reduxjs/toolkit";
import dc from "../../../assets/DC.png";
import gt from "../../../assets/GT.png";
const initialState = {
  images: {
    status: "success",
    response: [
      {
        id: "542",
        title: "Peru",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172593/peru.jpg",
      },
      {
        id: "554",
        title: "Israel",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172606/israel.jpg",
      },
      {
        id: "555",
        title: "Bhutan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172607/bhutan.jpg",
      },
      {
        id: "556",
        title: "Finland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172608/finland.jpg",
      },
      {
        id: "557",
        title: "Isle of Man",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172609/isle-of-man.jpg",
      },
      {
        id: "558",
        title: "Bulgaria",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172610/bulgaria.jpg",
      },
      {
        id: "559",
        title: "Sierra Leone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172611/sierra-leone.jpg",
      },
      {
        id: "560",
        title: "Brazil",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172612/brazil.jpg",
      },
      {
        id: "561",
        title: "Czech Republic",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172613/czech-republic.jpg",
      },
      {
        id: "562",
        title: "Saint Helena",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172614/saint-helena.jpg",
      },
      {
        id: "553",
        title: "Malawi",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172605/malawi.jpg",
      },
      {
        id: "552",
        title: "Chile",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172604/chile.jpg",
      },
      {
        id: "543",
        title: "Bahrain",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172594/bahrain.jpg",
      },
      {
        id: "544",
        title: "Mexico",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172595/mexico.jpg",
      },
      {
        id: "545",
        title: "Samoa",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172596/samoa.jpg",
      },
      {
        id: "546",
        title: "Panama",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172597/panama.jpg",
      },
      {
        id: "547",
        title: "Japan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248418/japan.jpg",
      },
      {
        id: "548",
        title: "Costa Rica",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172600/costa-rica.jpg",
      },
      {
        id: "549",
        title: "Argentina",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172601/argentina.jpg",
      },
      {
        id: "550",
        title: "Hungary",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172602/hungary.jpg",
      },
      {
        id: "551",
        title: "Mozambique",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172603/mozambique.jpg",
      },
      {
        id: "563",
        title: "Maldives",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172615/maldives.jpg",
      },
      {
        id: "564",
        title: "Gibraltar",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172616/gibraltar.jpg",
      },
      {
        id: "582",
        title: "SoBo SuperSonics",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172628/sobo-supersonics.jpg",
      },
      {
        id: "583",
        title: "Shivaji Park Lions",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172629/shivaji-park-lions.jpg",
      },
      {
        id: "584",
        title: "NaMo Bandra Blasters",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172630/namo-bandra-blasters.jpg",
      },
      {
        id: "585",
        title: "ARCS Andheri",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172631/arcs-andheri.jpg",
      },
      {
        id: "586",
        title: "Sorath Lions",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172632/sorath-lions.jpg",
      },
      {
        id: "587",
        title: "Gohilwad Gladiators",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172633/gohilwad-gladiators.jpg",
      },
      {
        id: "588",
        title: "Halar Heroes",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172634/halar-heroes.jpg",
      },
      {
        id: "589",
        title: "Zalawad Royals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172635/zalawad-royals.jpg",
      },
      {
        id: "590",
        title: "Kutch Warriors",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172636/kutch-warriors.jpg",
      },
      {
        id: "581",
        title: "North Mumbai Panthers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172627/north-mumbai-panthers.jpg",
      },
      {
        id: "580",
        title: "Eagle Thane Strikers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172626/eagle-thane-strikers.jpg",
      },
      {
        id: "565",
        title: "Myanmar",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172617/myanmar.jpg",
      },
      {
        id: "566",
        title: "Indonesia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172618/indonesia.jpg",
      },
      {
        id: "567",
        title: "Gambia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172619/gambia.jpg",
      },
      {
        id: "568",
        title: "Swaziland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172620/swaziland.jpg",
      },
      {
        id: "569",
        title: "Rwanda",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172621/rwanda.jpg",
      },
      {
        id: "570",
        title: "Lesotho",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172622/lesotho.jpg",
      },
      {
        id: "571",
        title: "Saudi Arabia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172623/saudi-arabia.jpg",
      },
      {
        id: "578",
        title: "Aakash Tigers MWS",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172624/aakash-tigers-mws.jpg",
      },
      {
        id: "579",
        title: "Triumphs Knights MNE",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172625/triumphs-knights-mne.jpg",
      },
      {
        id: "591",
        title: "Brampton Wolves",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248398/brampton-wolves.jpg",
      },
      {
        id: "435",
        title: "Ireland A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172485/ireland-a.jpg",
      },
      {
        id: "456",
        title: "CWI B Team",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172504/cwi-b-team.jpg",
      },
      {
        id: "460",
        title: "Bihar",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172508/bihar.jpg",
      },
      {
        id: "461",
        title: "Manipur",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172509/manipur.jpg",
      },
      {
        id: "462",
        title: "Meghalaya",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172510/meghalaya.jpg",
      },
      {
        id: "463",
        title: "Mizoram",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172511/mizoram.jpg",
      },
      {
        id: "464",
        title: "Nagaland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172512/nagaland.jpg",
      },
      {
        id: "465",
        title: "Puducherry",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172513/puducherry.jpg",
      },
      {
        id: "466",
        title: "Sikkim",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172514/sikkim.jpg",
      },
      {
        id: "467",
        title: "Uttarakhand",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172515/uttarakhand.jpg",
      },
      {
        id: "454",
        title: "Winnipeg Hawks",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172502/winnipeg-hawks.jpg",
      },
      {
        id: "453",
        title: "Vancouver Knights",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172501/vancouver-knights.jpg",
      },
      {
        id: "436",
        title: "Western Australia XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172486/western-australia-xi.jpg",
      },
      {
        id: "438",
        title: "Hong Kong Island United",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248414/hong-kong-island-united.jpg",
      },
      {
        id: "441",
        title: "Colombo",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172489/colombo.jpg",
      },
      {
        id: "442",
        title: "Kandy",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172490/kandy.jpg",
      },
      {
        id: "443",
        title: "Galle",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172491/galle.jpg",
      },
      {
        id: "444",
        title: "Dambulla",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172492/dambulla.jpg",
      },
      {
        id: "450",
        title: "Toronto Nationals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172498/toronto-nationals.jpg",
      },
      {
        id: "451",
        title: "Montreal Tigers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172499/montreal-tigers.jpg",
      },
      {
        id: "452",
        title: "Edmonton Royals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172500/edmonton-royals.jpg",
      },
      {
        id: "468",
        title: "Arunachal Pradesh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172516/arunachal-pradesh.jpg",
      },
      {
        id: "469",
        title: "Hong Kong U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172517/hong-kong-u19.jpg",
      },
      {
        id: "531",
        title: "Ghana",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172581/ghana.jpg",
      },
      {
        id: "532",
        title: "Austria",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172583/austria.jpg",
      },
      {
        id: "533",
        title: "Guernsey",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172584/guernsey.jpg",
      },
      {
        id: "534",
        title: "Sweden",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248454/sweden.jpg",
      },
      {
        id: "535",
        title: "Tanzania",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172586/tanzania.jpg",
      },
      {
        id: "536",
        title: "Nigeria",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248436/nigeria.jpg",
      },
      {
        id: "537",
        title: "Luxembourg",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172588/luxembourg.jpg",
      },
      {
        id: "538",
        title: "Philippines",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172589/philippines.jpg",
      },
      {
        id: "539",
        title: "France",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172590/france.jpg",
      },
      {
        id: "528",
        title: "Zimbabwe Chairmans XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/zimbabwe-chairmans-xi.jpg",
      },
      {
        id: "526",
        title: "Estonia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172576/estonia.jpg",
      },
      {
        id: "481",
        title: "India C",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c544438/india-c.jpg",
      },
      {
        id: "518",
        title: "Afghanistan U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172568/afghanistan-u23.jpg",
      },
      {
        id: "519",
        title: "India U19 A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172569/india-u19-a.jpg",
      },
      {
        id: "520",
        title: "India U19 B",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172570/india-u19-b.jpg",
      },
      {
        id: "521",
        title: "Estonia XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172571/estonia-xi.jpg",
      },
      {
        id: "522",
        title: "Malta",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172572/malta.jpg",
      },
      {
        id: "523",
        title: "Spain",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248450/spain.jpg",
      },
      {
        id: "524",
        title: "China",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172574/china.jpg",
      },
      {
        id: "525",
        title: "Qatar",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172575/qatar.jpg",
      },
      {
        id: "540",
        title: "Belize",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172591/belize.jpg",
      },
      {
        id: "593",
        title: "Kuwait U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248425/kuwait-u19.jpg",
      },
      {
        id: "1062",
        title: "Switzerland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247207/switzerland.jpg",
      },
      {
        id: "1172",
        title: "New Zealand Legends",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242502/new-zealand-legends.jpg",
      },
      {
        id: "1179",
        title: "Cameroon",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247194/cameroon.jpg",
      },
      {
        id: "1209",
        title: "Isle of Man Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248416/isle-of-man-women.jpg",
      },
      {
        id: "1265",
        title: "Mali",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248522/mali.jpg",
      },
      {
        id: "1272",
        title: "St Helena",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248526/st-helena.jpg",
      },
      {
        id: "1277",
        title: "Seychelles",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248523/seychelles.jpg",
      },
      {
        id: "1284",
        title: "Eswatini",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248525/eswatini.jpg",
      },
      {
        id: "1447",
        title: "Cambodia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254834/cambodia.jpg",
      },
      {
        id: "1545",
        title: "Mauritius",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333483/mauritius.jpg",
      },
      {
        id: "1165",
        title: "Gujarat Giant",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242501/gujarat-giant.jpg",
      },
      {
        id: "1158",
        title: "India Capitals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242500/india-capitals.jpg",
      },
      {
        id: "1067",
        title: "Serbia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247205/serbia.jpg",
      },
      {
        id: "1069",
        title: "Slovenia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247206/slovenia.jpg",
      },
      {
        id: "1076",
        title: "Croatia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247197/croatia.jpg",
      },
      {
        id: "1081",
        title: "Greece",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247199/greece.jpg",
      },
      {
        id: "1111",
        title: "Cyprus",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247198/cyprus.jpg",
      },
      {
        id: "1132",
        title: "Cook Islands",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c341077/cook-islands.jpg",
      },
      {
        id: "1146",
        title: "North East Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242496/north-east-zone.jpg",
      },
      {
        id: "1151",
        title: "Bhilwara Kings",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242497/bhilwara-kings.jpg",
      },
      {
        id: "1153",
        title: "Manipal Tigers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242498/manipal-tigers.jpg",
      },
      {
        id: "1615",
        title: "Q1",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/q1.jpg",
      },
      {
        id: "1622",
        title: "Q2",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/q2.jpg",
      },
      {
        id: "1965",
        title: "Hong Kong A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/hong-kong-a.jpg",
      },
      {
        id: "1974",
        title: "University Sport South Africa",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/university-sport-south-africa.jpg",
      },
      {
        id: "2001",
        title: "Zambia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c506188/zambia.jpg",
      },
      {
        id: "2050",
        title: "First Class Counties XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c510054/first-class-counties-xi.jpg",
      },
      {
        id: "2187",
        title: "Colombia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c563228/colombia.jpg",
      },
      {
        id: "2193",
        title: "Uruguay",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c563227/uruguay.jpg",
      },
      {
        id: "2277",
        title: "West Indies Select XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c577433/west-indies-select-xi.jpg",
      },
      {
        id: "2285",
        title: "Suriname",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c582333/suriname.jpg",
      },
      {
        id: "2377",
        title: "Falkland Islands",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c624542/falkland-islands.jpg",
      },
      {
        id: "1846",
        title: "Southern Super Stars",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c356644/southern-super-stars.jpg",
      },
      {
        id: "1843",
        title: "Urbanrisers Hyderabad",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c356645/urbanrisers-hyderabad.jpg",
      },
      {
        id: "1657",
        title: "United Arab Emirates A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334735/united-arab-emirates-a.jpg",
      },
      {
        id: "1664",
        title: "Oman A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334737/oman-a.jpg",
      },
      {
        id: "1759",
        title: "Boland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349610/boland.jpg",
      },
      {
        id: "1766",
        title: "KwaZulu-Natal Inland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349611/kwazulu-natal-inland.jpg",
      },
      {
        id: "1768",
        title: "South Western Districts",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349609/south-western-districts.jpg",
      },
      {
        id: "1775",
        title: "Border",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349602/border.jpg",
      },
      {
        id: "1782",
        title: "South Africa Emerging Players",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349593/south-africa-emerging-players.jpg",
      },
      {
        id: "1804",
        title: "Mongolia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349598/mongolia.jpg",
      },
      {
        id: "1815",
        title: "United States of America U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349589/united-states-of-america-u19.jpg",
      },
      {
        id: "2387",
        title: "Turks and Caicos Island",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c663369/turks-and-caicos-island.jpg",
      },
      {
        id: "595",
        title: "Chandigarh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c244269/chandigarh.jpg",
      },
      {
        id: "754",
        title: "Team Green",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-green.jpg",
      },
      {
        id: "758",
        title: "Team Morgan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-morgan.jpg",
      },
      {
        id: "759",
        title: "Team Moeen",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-moeen.jpg",
      },
      {
        id: "763",
        title: "Team Rausa",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-rausa.jpg",
      },
      {
        id: "768",
        title: "Team Caulfield",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-caulfield.jpg",
      },
      {
        id: "770",
        title: "Team Vince",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-vince.jpg",
      },
      {
        id: "779",
        title: "Finch XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/finch-xi.jpg",
      },
      {
        id: "784",
        title: "Cummins XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/cummins-xi.jpg",
      },
      {
        id: "832",
        title: "Team Root",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-root.jpg",
      },
      {
        id: "749",
        title: "Team White",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-white.jpg",
      },
      {
        id: "748",
        title: "Team Buttler",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-buttler.jpg",
      },
      {
        id: "596",
        title: "Portugal",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248442/portugal.jpg",
      },
      {
        id: "603",
        title: "Japan U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248420/japan-u19.jpg",
      },
      {
        id: "604",
        title: "Nigeria U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248435/nigeria-u19.jpg",
      },
      {
        id: "657",
        title: "Ponting XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/ponting-xi.jpg",
      },
      {
        id: "666",
        title: "Gilchrist XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/gilchrist-xi.jpg",
      },
      {
        id: "729",
        title: "Sri Lanka Cricket XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/sri-lanka-cricket-xi.jpg",
      },
      {
        id: "733",
        title: "WI Holder XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/wi-holder-xi.jpg",
      },
      {
        id: "738",
        title: "WI Brathwaite XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/wi-brathwaite-xi.jpg",
      },
      {
        id: "743",
        title: "Team Stokes",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-stokes.jpg",
      },
      {
        id: "843",
        title: "Bangladesh Emerging Team",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202804/bangladesh-emerging-team.jpg",
      },
      {
        id: "872",
        title: "Team Latham",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-latham.jpg",
      },
      {
        id: "922",
        title: "North West",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248439/north-west.jpg",
      },
      {
        id: "923",
        title: "Northern Cape",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248438/northern-cape.jpg",
      },
      {
        id: "927",
        title: "Eastern Cape",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248405/eastern-cape.jpg",
      },
      {
        id: "928",
        title: "Rocks",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248446/rocks.jpg",
      },
      {
        id: "933",
        title: "Eastern Storm",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248407/eastern-storm.jpg",
      },
      {
        id: "956",
        title: "Uganda U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248458/uganda-u19.jpg",
      },
      {
        id: "1018",
        title: "Bahamas",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248394/bahamas.jpg",
      },
      {
        id: "1020",
        title: "Cayman Islands",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248399/cayman-islands.jpg",
      },
      {
        id: "1027",
        title: "Norway",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247201/norway.jpg",
      },
      {
        id: "918",
        title: "Garden Route Badgers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247396/garden-route-badgers.jpg",
      },
      {
        id: "917",
        title: "Western Province",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248460/western-province.jpg",
      },
      {
        id: "876",
        title: "Team Williamson",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-williamson.jpg",
      },
      {
        id: "881",
        title: "Zimbabwe Select XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248461/zimbabwe-select-xi.jpg",
      },
      {
        id: "886",
        title: "Professional County Club Select XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/professional-county-club-selec.jpg",
      },
      {
        id: "887",
        title: "A1",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/a1.jpg",
      },
      {
        id: "892",
        title: "A2",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/a2.jpg",
      },
      {
        id: "897",
        title: "Turkey",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247208/turkey.jpg",
      },
      {
        id: "903",
        title: "Mpumalanga Rhinos",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248434/mpumalanga-rhinos.jpg",
      },
      {
        id: "908",
        title: "Tuskers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248457/tuskers.jpg",
      },
      {
        id: "912",
        title: "Limpopo",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248430/limpopo.jpg",
      },
      {
        id: "1041",
        title: "Romania",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247204/romania.jpg",
      },
      {
        id: "425",
        title: "World XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172475/world-xi.jpg",
      },
      {
        id: "154",
        title: "Sri Lanka Cricket Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172221/sri-lanka-cricket-presidents-x.jpg",
      },
      {
        id: "172",
        title: "Sri Lanka U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172240/sri-lanka-u19.jpg",
      },
      {
        id: "173",
        title: "England U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172241/england-u19.jpg",
      },
      {
        id: "186",
        title: "Auckland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172246/auckland.jpg",
      },
      {
        id: "187",
        title: "Ruhunu",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172247/ruhunu.jpg",
      },
      {
        id: "191",
        title: "Cricket Australia Chairmans XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172251/cricket-australia-chairmans-xi.jpg",
      },
      {
        id: "200",
        title: "Haryana",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172260/haryana.jpg",
      },
      {
        id: "207",
        title: "West Indies A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172267/west-indies-a.jpg",
      },
      {
        id: "208",
        title: "Basnahira Cricket Dundee",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172268/basnahira-cricket-dundee.jpg",
      },
      {
        id: "209",
        title: "Kandurata Warriors",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172269/kandurata-warriors.jpg",
      },
      {
        id: "171",
        title: "Rajasthan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172239/rajasthan.jpg",
      },
      {
        id: "170",
        title: "Baroda",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172238/baroda.jpg",
      },
      {
        id: "158",
        title: "South Australia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172225/south-australia.jpg",
      },
      {
        id: "160",
        title: "East Africa",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172228/east-africa.jpg",
      },
      {
        id: "162",
        title: "Assam",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172230/assam.jpg",
      },
      {
        id: "163",
        title: "Gujarat",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172232/gujarat.jpg",
      },
      {
        id: "164",
        title: "Queensland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172233/queensland.jpg",
      },
      {
        id: "165",
        title: "England Cricket Board XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172234/england-cricket-board-xi.jpg",
      },
      {
        id: "166",
        title: "Tasmania",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172235/tasmania.jpg",
      },
      {
        id: "167",
        title: "Madhya Pradesh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172236/madhya-pradesh.jpg",
      },
      {
        id: "168",
        title: "Nondescripts Cricket Club",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248437/nondescripts-cricket-club.jpg",
      },
      {
        id: "210",
        title: "Nagenahira Nagas",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172270/nagenahira-nagas.jpg",
      },
      {
        id: "211",
        title: "Ruhuna Royals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172271/ruhuna-royals.jpg",
      },
      {
        id: "230",
        title: "Namibia U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172283/namibia-u19.jpg",
      },
      {
        id: "231",
        title: "India B",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c544437/india-b.jpg",
      },
      {
        id: "232",
        title: "Bengal",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172285/bengal.jpg",
      },
      {
        id: "233",
        title: "North Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172286/north-zone.jpg",
      },
      {
        id: "234",
        title: "West Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172287/west-zone.jpg",
      },
      {
        id: "235",
        title: "East Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172288/east-zone.jpg",
      },
      {
        id: "236",
        title: "South Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172289/south-zone.jpg",
      },
      {
        id: "237",
        title: "Central Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172290/central-zone.jpg",
      },
      {
        id: "238",
        title: "Pakistan All Star XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172291/pakistan-all-star-xi.jpg",
      },
      {
        id: "229",
        title: "Nepal U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172282/nepal-u19.jpg",
      },
      {
        id: "228",
        title: "Scotland U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172281/scotland-u19.jpg",
      },
      {
        id: "212",
        title: "Uthura Rudras",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172272/uthura-rudras.jpg",
      },
      {
        id: "213",
        title: "Wayamba United",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172273/wayamba-united.jpg",
      },
      {
        id: "214",
        title: "Uva Next",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172274/uva-next.jpg",
      },
      {
        id: "220",
        title: "West Indies U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172275/west-indies-u19.jpg",
      },
      {
        id: "221",
        title: "Zimbabwe U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172276/zimbabwe-u19.jpg",
      },
      {
        id: "222",
        title: "Papua New Guinea U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172277/papua-new-guinea-u19.jpg",
      },
      {
        id: "223",
        title: "Afghanistan U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172278/afghanistan-u19.jpg",
      },
      {
        id: "224",
        title: "Bangladesh U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172279/bangladesh-u19.jpg",
      },
      {
        id: "226",
        title: "Ireland U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172280/ireland-u19.jpg",
      },
      {
        id: "239",
        title: "International World XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172292/international-world-xi.jpg",
      },
      {
        id: "18",
        title: "India Senior",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172136/india-senior.jpg",
      },
      {
        id: "57",
        title: "South Africa U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172159/south-africa-u19.jpg",
      },
      {
        id: "74",
        title: "Middlesex",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172170/middlesex.jpg",
      },
      {
        id: "78",
        title: "India A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c562024/india-a.jpg",
      },
      {
        id: "79",
        title: "Australia A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172173/australia-a.jpg",
      },
      {
        id: "80",
        title: "New Zealand A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172174/new-zealand-a.jpg",
      },
      {
        id: "81",
        title: "Delhi",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172175/delhi.jpg",
      },
      {
        id: "82",
        title: "Rest of India",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172176/rest-of-india.jpg",
      },
      {
        id: "86",
        title: "Board Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172179/board-presidents-xi.jpg",
      },
      {
        id: "87",
        title: "Western Australia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172180/western-australia.jpg",
      },
      {
        id: "56",
        title: "Pakistan U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172158/pakistan-u19.jpg",
      },
      {
        id: "55",
        title: "New Zealand U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172157/new-zealand-u19.jpg",
      },
      {
        id: "20",
        title: "India Green",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172134/india-green.jpg",
      },
      {
        id: "21",
        title: "India Red",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172135/india-red.jpg",
      },
      {
        id: "36",
        title: "India Blue",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172143/india-blue.jpg",
      },
      {
        id: "41",
        title: "Sussex",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172148/sussex.jpg",
      },
      {
        id: "42",
        title: "England Lions",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172149/england-lions.jpg",
      },
      {
        id: "43",
        title: "Sri Lanka A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172150/sri-lanka-a.jpg",
      },
      {
        id: "52",
        title: "Victoria",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172153/victoria.jpg",
      },
      {
        id: "53",
        title: "ACT Invitational XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172154/act-invitational-xi.jpg",
      },
      {
        id: "54",
        title: "India U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172155/india-u19.jpg",
      },
      {
        id: "92",
        title: "Tamil Nadu",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172184/tamil-nadu.jpg",
      },
      {
        id: "93",
        title: "Uttar Pradesh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172185/uttar-pradesh.jpg",
      },
      {
        id: "144",
        title: "Derbyshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172211/derbyshire.jpg",
      },
      {
        id: "145",
        title: "Leicestershire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172212/leicestershire.jpg",
      },
      {
        id: "146",
        title: "Yorkshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172213/yorkshire.jpg",
      },
      {
        id: "147",
        title: "Worcestershire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172214/worcestershire.jpg",
      },
      {
        id: "148",
        title: "Surrey",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172215/surrey.jpg",
      },
      {
        id: "149",
        title: "Glamorgan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172216/glamorgan.jpg",
      },
      {
        id: "150",
        title: "Kent",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172217/kent.jpg",
      },
      {
        id: "151",
        title: "Gloucestershire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172218/gloucestershire.jpg",
      },
      {
        id: "152",
        title: "Essex",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172219/essex.jpg",
      },
      {
        id: "143",
        title: "Lancashire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172210/lancashire.jpg",
      },
      {
        id: "142",
        title: "Northamptonshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172209/northamptonshire.jpg",
      },
      {
        id: "94",
        title: "Saurashtra",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172186/saurashtra.jpg",
      },
      {
        id: "95",
        title: "Mumbai",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172187/mumbai.jpg",
      },
      {
        id: "119",
        title: "Somerset",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172199/somerset.jpg",
      },
      {
        id: "128",
        title: "Karnataka",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172203/karnataka.jpg",
      },
      {
        id: "129",
        title: "Australia U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172204/australia-u19.jpg",
      },
      {
        id: "130",
        title: "Windward Islands",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172205/windward-islands.jpg",
      },
      {
        id: "139",
        title: "Nottinghamshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172206/nottinghamshire.jpg",
      },
      {
        id: "140",
        title: "Warwickshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172207/warwickshire.jpg",
      },
      {
        id: "141",
        title: "Durham",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172208/durham.jpg",
      },
      {
        id: "153",
        title: "Hampshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172220/hampshire.jpg",
      },
      {
        id: "240",
        title: "Mumbai A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172293/mumbai-a.jpg",
      },
      {
        id: "305",
        title: "Indian Board Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172354/indian-board-presidents-xi.jpg",
      },
      {
        id: "341",
        title: "Afghanistan A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172389/afghanistan-a.jpg",
      },
      {
        id: "342",
        title: "Zimbabwe A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172390/zimbabwe-a.jpg",
      },
      {
        id: "347",
        title: "Himachal Pradesh Cricket Association XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172395/himachal-pradesh-cricket-assoc.jpg",
      },
      {
        id: "348",
        title: "Tamil Nadu Cricket Association Under 17",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172396/tamil-nadu-cricket-association.jpg",
      },
      {
        id: "349",
        title: "Mumbai Cricket Association XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172397/mumbai-cricket-association-xi.jpg",
      },
      {
        id: "350",
        title: "West Indies Cricket Board President XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172398/west-indies-cricket-board-pres.jpg",
      },
      {
        id: "352",
        title: "Island Warriors",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248415/island-warriors.jpg",
      },
      {
        id: "353",
        title: "Kowloon Cantons",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172400/kowloon-cantons.jpg",
      },
      {
        id: "354",
        title: "Lantau Galaxy Riders",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248429/lantau-galaxy-riders.jpg",
      },
      {
        id: "326",
        title: "Fiji U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172376/fiji-u19.jpg",
      },
      {
        id: "325",
        title: "Pakistan A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172375/pakistan-a.jpg",
      },
      {
        id: "306",
        title: "Cricket Australia XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172355/cricket-australia-xi.jpg",
      },
      {
        id: "312",
        title: "Canterbury",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172362/canterbury.jpg",
      },
      {
        id: "313",
        title: "Central Districts",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172363/central-districts.jpg",
      },
      {
        id: "314",
        title: "Wellington",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172364/wellington.jpg",
      },
      {
        id: "315",
        title: "India AT20",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172365/india-at20.jpg",
      },
      {
        id: "316",
        title: "Sachin Blasters",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172366/sachin-blasters.jpg",
      },
      {
        id: "317",
        title: "Warne Warriors",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172367/warne-warriors.jpg",
      },
      {
        id: "323",
        title: "Bangladesh Cricket Board XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172373/bangladesh-cricket-board-xi.jpg",
      },
      {
        id: "324",
        title: "New Zealand Board Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172374/new-zealand-board-presidents-x.jpg",
      },
      {
        id: "363",
        title: "Mohun Bagan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172416/mohun-bagan.jpg",
      },
      {
        id: "364",
        title: "Bhowanipore",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172417/bhowanipore.jpg",
      },
      {
        id: "391",
        title: "Cape cobras",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172444/cape-cobras.jpg",
      },
      {
        id: "398",
        title: "UWI Vice Chancellors XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172451/uwi-vice-chancellors-xi.jpg",
      },
      {
        id: "402",
        title: "North",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172454/north.jpg",
      },
      {
        id: "403",
        title: "South",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172455/south.jpg",
      },
      {
        id: "404",
        title: "MCC World XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248431/mcc-world-xi.jpg",
      },
      {
        id: "405",
        title: "India U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172456/india-u23.jpg",
      },
      {
        id: "406",
        title: "Pakistan U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252360/pakistan-u23.jpg",
      },
      {
        id: "407",
        title: "Sri Lanka U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172458/sri-lanka-u23.jpg",
      },
      {
        id: "408",
        title: "Bangladesh U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252355/bangladesh-u23.jpg",
      },
      {
        id: "387",
        title: "Singapore U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172440/singapore-u19.jpg",
      },
      {
        id: "386",
        title: "Malaysia U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172439/malaysia-u19.jpg",
      },
      {
        id: "365",
        title: "Sri Lanka XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172418/sri-lanka-xi.jpg",
      },
      {
        id: "374",
        title: "Pakistan Cricket Board Patrons XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172427/pakistan-cricket-board-patrons.jpg",
      },
      {
        id: "375",
        title: "Chhattisgarh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172428/chhattisgarh.jpg",
      },
      {
        id: "376",
        title: "Emirates Cricket Board XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172429/emirates-cricket-board-xi.jpg",
      },
      {
        id: "377",
        title: "BCB Select XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172430/bcb-select-xi.jpg",
      },
      {
        id: "380",
        title: "South Australia XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172433/south-australia-xi.jpg",
      },
      {
        id: "381",
        title: "Victoria XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172434/victoria-xi.jpg",
      },
      {
        id: "384",
        title: "Thailand",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172437/thailand.jpg",
      },
      {
        id: "385",
        title: "Birmingham Bears",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172438/birmingham-bears.jpg",
      },
      {
        id: "424",
        title: "Kenya U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172474/kenya-u19.jpg",
      },
      {
        id: "241",
        title: "Andhra",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172294/andhra.jpg",
      },
      {
        id: "253",
        title: "Goa",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172306/goa.jpg",
      },
      {
        id: "254",
        title: "Maharashtra",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172307/maharashtra.jpg",
      },
      {
        id: "261",
        title: "Unicorns",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172314/unicorns.jpg",
      },
      {
        id: "266",
        title: "Australians",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172319/australians.jpg",
      },
      {
        id: "267",
        title: "South African Invitation XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172320/south-african-invitation-xi.jpg",
      },
      {
        id: "268",
        title: "South Africa A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172321/south-africa-a.jpg",
      },
      {
        id: "269",
        title: "Zimbabwe XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172322/zimbabwe-xi.jpg",
      },
      {
        id: "272",
        title: "Basnahira Greens",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/basnahira-greens.jpg",
      },
      {
        id: "273",
        title: "Uthura Yellows",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248459/uthura-yellows.jpg",
      },
      {
        id: "252",
        title: "Jammu and Kashmir",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172305/jammu-and-kashmir.jpg",
      },
      {
        id: "251",
        title: "Himachal Pradesh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172304/himachal-pradesh.jpg",
      },
      {
        id: "242",
        title: "Hyderabad",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172295/hyderabad.jpg",
      },
      {
        id: "243",
        title: "Jharkhand",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172296/jharkhand.jpg",
      },
      {
        id: "244",
        title: "Kerala",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172297/kerala.jpg",
      },
      {
        id: "245",
        title: "Punjab",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172298/punjab.jpg",
      },
      {
        id: "246",
        title: "Railways",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172299/railways.jpg",
      },
      {
        id: "247",
        title: "Tripura",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172300/tripura.jpg",
      },
      {
        id: "248",
        title: "Vidarbha",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172301/vidarbha.jpg",
      },
      {
        id: "249",
        title: "Odisha",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172302/odisha.jpg",
      },
      {
        id: "250",
        title: "Services",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172303/services.jpg",
      },
      {
        id: "274",
        title: "Kandurata Maroons",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172326/kandurata-maroons.jpg",
      },
      {
        id: "275",
        title: "Ruhuna Reds",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248447/ruhuna-reds.jpg",
      },
      {
        id: "290",
        title: "Marylebone Cricket Club",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172339/marylebone-cricket-club.jpg",
      },
      {
        id: "291",
        title: "National Performance Squad",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172340/national-performance-squad.jpg",
      },
      {
        id: "292",
        title: "Southern Express",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172341/southern-express.jpg",
      },
      {
        id: "293",
        title: "Lahore Lions",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172342/lahore-lions.jpg",
      },
      {
        id: "294",
        title: "Northern Knights",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172343/northern-knights.jpg",
      },
      {
        id: "295",
        title: "WICB",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172344/wicb.jpg",
      },
      {
        id: "296",
        title: "Mumbai Board Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172345/mumbai-board-presidents-xi.jpg",
      },
      {
        id: "297",
        title: "West Indians",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172346/west-indians.jpg",
      },
      {
        id: "299",
        title: "South Korea",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172348/south-korea.jpg",
      },
      {
        id: "289",
        title: "Rest of the World XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172338/rest-of-the-world-xi.jpg",
      },
      {
        id: "288",
        title: "Bangladesh A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172337/bangladesh-a.jpg",
      },
      {
        id: "276",
        title: "Indians",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172327/indians.jpg",
      },
      {
        id: "277",
        title: "Western Australia Chairmans XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172328/western-australia-chairmans-xi.jpg",
      },
      {
        id: "278",
        title: "Cricket Australia Invitational XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172329/cricket-australia-invitational.jpg",
      },
      {
        id: "279",
        title: "Prime Ministers XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172330/prime-ministers-xi.jpg",
      },
      {
        id: "281",
        title: "Knights",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172331/knights.jpg",
      },
      {
        id: "282",
        title: "Canada U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172332/canada-u19.jpg",
      },
      {
        id: "283",
        title: "United Arab Emirates U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172333/united-arab-emirates-u19.jpg",
      },
      {
        id: "285",
        title: "Morocco",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172334/morocco.jpg",
      },
      {
        id: "286",
        title: "New Zealand XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172335/new-zealand-xi.jpg",
      },
      {
        id: "301",
        title: "Australian Legends XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172350/australian-legends-xi.jpg",
      },
      {
        id: "1444",
        title: "Maldives Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254832/maldives-women.jpg",
      },
      {
        id: "1363",
        title: "Pakistan Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252359/pakistan-women-u19.jpg",
      },
      {
        id: "1361",
        title: "Sri Lanka Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252353/sri-lanka-women-u19.jpg",
      },
      {
        id: "1356",
        title: "India Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252371/india-women-u19.jpg",
      },
      {
        id: "1354",
        title: "South Africa Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252370/south-africa-women-u19.jpg",
      },
      {
        id: "1347",
        title: "United Arab Emirates Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252368/united-arab-emirates-women-u19.jpg",
      },
      {
        id: "1342",
        title: "Scotland Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252367/scotland-women-u19.jpg",
      },
      {
        id: "1335",
        title: "Bangladesh Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252354/bangladesh-women-u19.jpg",
      },
      {
        id: "1328",
        title: "Australia Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252350/australia-women-u19.jpg",
      },
      {
        id: "1368",
        title: "Rwanda Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252361/rwanda-women-u19.jpg",
      },
      {
        id: "1375",
        title: "Ireland Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252365/ireland-women-u19.jpg",
      },
      {
        id: "1431",
        title: "Mexico Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254833/mexico-women.jpg",
      },
      {
        id: "1426",
        title: "Canada Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c253473/canada-women.jpg",
      },
      {
        id: "1405",
        title: "United States of America Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252352/united-states-of-america-women.jpg",
      },
      {
        id: "1403",
        title: "Zimbabwe Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252356/zimbabwe-women-u19.jpg",
      },
      {
        id: "1398",
        title: "England Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252357/england-women-u19.jpg",
      },
      {
        id: "1391",
        title: "New Zealand Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252363/new-zealand-women-u19.jpg",
      },
      {
        id: "1384",
        title: "Indonesia Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252362/indonesia-women-u19.jpg",
      },
      {
        id: "1382",
        title: "West Indies Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252364/west-indies-women-u19.jpg",
      },
      {
        id: "1207",
        title: "Young England Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/young-england-women.jpg",
      },
      {
        id: "1200",
        title: "Jamaica Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/jamaica-women.jpg",
      },
      {
        id: "1195",
        title: "Trinidad & Tobago Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248456/trinidad-tobago-women.jpg",
      },
      {
        id: "1055",
        title: "Norway Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247202/norway-women.jpg",
      },
      {
        id: "1048",
        title: "Sweden Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248453/sweden-women.jpg",
      },
      {
        id: "1034",
        title: "Spain Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248449/spain-women.jpg",
      },
      {
        id: "1032",
        title: "Jersey Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248421/jersey-women.jpg",
      },
      {
        id: "1011",
        title: "Barbados Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c239937/barbados-women.jpg",
      },
      {
        id: "961",
        title: "India D Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248605/india-d-women.jpg",
      },
      {
        id: "902",
        title: "Turkey Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247209/turkey-women.jpg",
      },
      {
        id: "838",
        title: "New Zealand XI Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/new-zealand-xi-women.jpg",
      },
      {
        id: "1083",
        title: "Bahrain Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248395/bahrain-women.jpg",
      },
      {
        id: "1090",
        title: "Bhutan Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248397/bhutan-women.jpg",
      },
      {
        id: "1188",
        title: "International XI Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/international-xi-women.jpg",
      },
      {
        id: "1181",
        title: "Fiji Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248411/fiji-women.jpg",
      },
      {
        id: "1144",
        title: "Guyana Amazon Warriors Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c241607/guyana-amazon-warriors-women.jpg",
      },
      {
        id: "1139",
        title: "Trinbago Knight Riders Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c241610/trinbago-knight-riders-women.jpg",
      },
      {
        id: "1137",
        title: "Barbados Royals Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c241608/barbados-royals-women.jpg",
      },
      {
        id: "1125",
        title: "Italy Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248417/italy-women.jpg",
      },
      {
        id: "1104",
        title: "Guernsey Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c539690/guernsey-women.jpg",
      },
      {
        id: "1097",
        title: "Kuwait Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248426/kuwait-women.jpg",
      },
      {
        id: "775",
        title: "Austria Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c274436/austria-women.jpg",
      },
      {
        id: "2390",
        title: "Switzerland Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c692942/switzerland-women.jpg",
      },
      {
        id: "1987",
        title: "Czech Republic Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c501075/czech-republic-women.jpg",
      },
      {
        id: "1985",
        title: "Zimbabwe A Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/zimbabwe-a-women.jpg",
      },
      {
        id: "1796",
        title: "Mongolia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349599/mongolia-women.jpg",
      },
      {
        id: "1794",
        title: "Luxembourg Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349590/luxembourg-women.jpg",
      },
      {
        id: "1789",
        title: "Serbia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349600/serbia-women.jpg",
      },
      {
        id: "1754",
        title: "Cook Islands Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c341074/cook-islands-women.jpg",
      },
      {
        id: "1675",
        title: "Romania Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338249/romania-women.jpg",
      },
      {
        id: "1668",
        title: "Greece Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338104/greece-women.jpg",
      },
      {
        id: "1992",
        title: "Cyprus Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c502582/cyprus-women.jpg",
      },
      {
        id: "1994",
        title: "Croatia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c501076/croatia-women.jpg",
      },
      {
        id: "2380",
        title: "Portugal Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c625937/portugal-women.jpg",
      },
      {
        id: "2286",
        title: "Nigeria Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c601867/nigeria-women-u19.jpg",
      },
      {
        id: "2201",
        title: "Bulgaria Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c692936/bulgaria-women.jpg",
      },
      {
        id: "2179",
        title: "Cayman Islands Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c551465/cayman-islands-women.jpg",
      },
      {
        id: "2146",
        title: "Samoa Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c551467/samoa-women-u19.jpg",
      },
      {
        id: "2138",
        title: "Malaysia Women U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c551466/malaysia-women-u19.jpg",
      },
      {
        id: "2071",
        title: "Australian Capital Territory Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c538208/australian-capital-territory-w.jpg",
      },
      {
        id: "2062",
        title: "Finland Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c539543/finland-women.jpg",
      },
      {
        id: "1563",
        title: "Mali Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333457/mali-women.jpg",
      },
      {
        id: "1556",
        title: "Sri Lanka A Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333456/sri-lanka-a-women.jpg",
      },
      {
        id: "1552",
        title: "Pakistan A Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333455/pakistan-a-women.jpg",
      },
      {
        id: "1493",
        title: "Cameroon Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c273974/cameroon-women.jpg",
      },
      {
        id: "1489",
        title: "Ghana Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c273958/ghana-women.jpg",
      },
      {
        id: "1482",
        title: "Nigeria Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c273957/nigeria-women.jpg",
      },
      {
        id: "1479",
        title: "Gujarat Giants Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254722/gujarat-giants-women.jpg",
      },
      {
        id: "1472",
        title: "UP Warriorz Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254738/up-warriorz-women.jpg",
      },
      {
        id: "1468",
        title: "Mumbai Indians Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254724/mumbai-indians-women.jpg",
      },
      {
        id: "1465",
        title: "Royal Challengers Bengaluru Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254725/royal-challengers-bengaluru-wo.jpg",
      },
      {
        id: "1461",
        title: "Delhi Capitals Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254726/delhi-capitals-women.jpg",
      },
      {
        id: "1500",
        title: "Malta Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c297979/malta-women.jpg",
      },
      {
        id: "1507",
        title: "Gibraltar Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c297980/gibraltar-women.jpg",
      },
      {
        id: "1549",
        title: "Bangladesh A Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333453/bangladesh-a-women.jpg",
      },
      {
        id: "1542",
        title: "Thailand A Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c329024/thailand-a-women.jpg",
      },
      {
        id: "1535",
        title: "Eswatini Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c329003/eswatini-women.jpg",
      },
      {
        id: "1531",
        title: "Costa Rica Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c329002/costa-rica-women.jpg",
      },
      {
        id: "1528",
        title: "Belize Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c329001/belize-women.jpg",
      },
      {
        id: "1521",
        title: "Estonia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c315349/estonia-women.jpg",
      },
      {
        id: "1517",
        title: "Myanmar Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c307474/myanmar-women.jpg",
      },
      {
        id: "1514",
        title: "Philippines Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c307469/philippines-women.jpg",
      },
      {
        id: "1454",
        title: "Cambodia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254835/cambodia-women.jpg",
      },
      {
        id: "482",
        title: "Samoa Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172530/samoa-women.jpg",
      },
      {
        id: "422",
        title: "Surrey Stars",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172472/surrey-stars.jpg",
      },
      {
        id: "421",
        title: "Loughborough Lightning",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172471/loughborough-lightning.jpg",
      },
      {
        id: "420",
        title: "Lancashire Thunder",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172470/lancashire-thunder.jpg",
      },
      {
        id: "419",
        title: "Yorkshire Diamonds",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172469/yorkshire-diamonds.jpg",
      },
      {
        id: "418",
        title: "Western Storm",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172468/western-storm.jpg",
      },
      {
        id: "417",
        title: "Southern Vipers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172467/southern-vipers.jpg",
      },
      {
        id: "390",
        title: "Papua New Guinea Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172443/papua-new-guinea-women.jpg",
      },
      {
        id: "389",
        title: "Scotland Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252366/scotland-women.jpg",
      },
      {
        id: "439",
        title: "South Africa Emerging Players Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349592/south-africa-emerging-players.jpg",
      },
      {
        id: "440",
        title: "India A Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333769/india-a-women.jpg",
      },
      {
        id: "459",
        title: "India Women Green",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172507/india-women-green.jpg",
      },
      {
        id: "458",
        title: "India Women Blue",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172506/india-women-blue.jpg",
      },
      {
        id: "457",
        title: "India Women Red",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172505/india-women-red.jpg",
      },
      {
        id: "449",
        title: "United Arab Emirates Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252369/united-arab-emirates-women.jpg",
      },
      {
        id: "448",
        title: "Uganda Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172496/uganda-women.jpg",
      },
      {
        id: "447",
        title: "Supernovas",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c234642/supernovas.jpg",
      },
      {
        id: "446",
        title: "Trailblazers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c234641/trailblazers.jpg",
      },
      {
        id: "445",
        title: "Malaysia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172493/malaysia-women.jpg",
      },
      {
        id: "388",
        title: "Zimbabwe Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172441/zimbabwe-women.jpg",
      },
      {
        id: "383",
        title: "Nepal Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172436/nepal-women.jpg",
      },
      {
        id: "382",
        title: "Thailand Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172435/thailand-women.jpg",
      },
      {
        id: "259",
        title: "Pakistan Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172312/pakistan-women.jpg",
      },
      {
        id: "258",
        title: "Sri Lanka Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172311/sri-lanka-women.jpg",
      },
      {
        id: "257",
        title: "West Indies Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172310/west-indies-women.jpg",
      },
      {
        id: "189",
        title: "Ireland Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172249/ireland-women.jpg",
      },
      {
        id: "188",
        title: "Netherlands Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172248/netherlands-women.jpg",
      },
      {
        id: "100",
        title: "Australia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172192/australia-women.jpg",
      },
      {
        id: "99",
        title: "England Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172191/england-women.jpg",
      },
      {
        id: "98",
        title: "New Zealand Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172190/new-zealand-women.jpg",
      },
      {
        id: "260",
        title: "South Africa Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172313/south-africa-women.jpg",
      },
      {
        id: "329",
        title: "Bangladesh Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172377/bangladesh-women.jpg",
      },
      {
        id: "362",
        title: "Sydney Thunder Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172408/sydney-thunder-women.jpg",
      },
      {
        id: "361",
        title: "Sydney Sixers Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172407/sydney-sixers-women.jpg",
      },
      {
        id: "360",
        title: "Perth Scorchers Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172406/perth-scorchers-women.jpg",
      },
      {
        id: "359",
        title: "Melbourne Stars Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172405/melbourne-stars-women.jpg",
      },
      {
        id: "358",
        title: "Melbourne Renegades Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172404/melbourne-renegades-women.jpg",
      },
      {
        id: "357",
        title: "Hobart Hurricanes Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172403/hobart-hurricanes-women.jpg",
      },
      {
        id: "356",
        title: "Brisbane Heat Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172402/brisbane-heat-women.jpg",
      },
      {
        id: "355",
        title: "Adelaide Strikers Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172401/adelaide-strikers-women.jpg",
      },
      {
        id: "97",
        title: "India Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172189/india-women.jpg",
      },
      {
        id: "720",
        title: "Rwanda Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248448/rwanda-women.jpg",
      },
      {
        id: "594",
        title: "India Women Board President XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/india-women-board-president-xi.jpg",
      },
      {
        id: "592",
        title: "United States of America Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c241611/united-states-of-america-women.jpg",
      },
      {
        id: "530",
        title: "Velocity",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c234643/velocity.jpg",
      },
      {
        id: "509",
        title: "Singapore Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c591999/singapore-women.jpg",
      },
      {
        id: "508",
        title: "Denmark Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172557/denmark-women.jpg",
      },
      {
        id: "507",
        title: "South Korea Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172556/south-korea-women.jpg",
      },
      {
        id: "506",
        title: "Vanuatu Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172555/vanuatu-women.jpg",
      },
      {
        id: "505",
        title: "Oman Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172554/oman-women.jpg",
      },
      {
        id: "613",
        title: "Oval Invincibles Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202714/oval-invincibles-women.jpg",
      },
      {
        id: "614",
        title: "Welsh Fire Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202715/welsh-fire-women.jpg",
      },
      {
        id: "648",
        title: "India B Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248603/india-b-women.jpg",
      },
      {
        id: "639",
        title: "India C Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248604/india-c-women.jpg",
      },
      {
        id: "620",
        title: "Southern Brave Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202721/southern-brave-women.jpg",
      },
      {
        id: "619",
        title: "Northern Superchargers Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202720/northern-superchargers-women.jpg",
      },
      {
        id: "618",
        title: "Trent Rockets Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202719/trent-rockets-women.jpg",
      },
      {
        id: "617",
        title: "Manchester Originals Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202718/manchester-originals-women.jpg",
      },
      {
        id: "616",
        title: "London Spirit Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202717/london-spirit-women.jpg",
      },
      {
        id: "615",
        title: "Birmingham Phoenix Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202716/birmingham-phoenix-women.jpg",
      },
      {
        id: "504",
        title: "Germany Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172553/germany-women.jpg",
      },
      {
        id: "503",
        title: "Namibia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172552/namibia-women.jpg",
      },
      {
        id: "502",
        title: "Hong Kong Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172551/hong-kong-women.jpg",
      },
      {
        id: "491",
        title: "Brazil Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172539/brazil-women.jpg",
      },
      {
        id: "490",
        title: "Sierra Leone Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172538/sierra-leone-women.jpg",
      },
      {
        id: "489",
        title: "Argentina Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172537/argentina-women.jpg",
      },
      {
        id: "488",
        title: "Botswana Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172536/botswana-women.jpg",
      },
      {
        id: "487",
        title: "Japan Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248419/japan-women.jpg",
      },
      {
        id: "486",
        title: "China Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172534/china-women.jpg",
      },
      {
        id: "485",
        title: "Qatar Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172533/qatar-women.jpg",
      },
      {
        id: "484",
        title: "Indonesia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172532/indonesia-women.jpg",
      },
      {
        id: "492",
        title: "France Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172540/france-women.jpg",
      },
      {
        id: "493",
        title: "Mozambique Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172541/mozambique-women.jpg",
      },
      {
        id: "501",
        title: "Kenya Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172550/kenya-women.jpg",
      },
      {
        id: "500",
        title: "Swaziland Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172549/swaziland-women.jpg",
      },
      {
        id: "499",
        title: "Lesotho Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172548/lesotho-women.jpg",
      },
      {
        id: "498",
        title: "Peru Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172547/peru-women.jpg",
      },
      {
        id: "497",
        title: "Chile Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172546/chile-women.jpg",
      },
      {
        id: "496",
        title: "Belgium Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172544/belgium-women.jpg",
      },
      {
        id: "495",
        title: "Malawi Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172543/malawi-women.jpg",
      },
      {
        id: "494",
        title: "Zambia Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172542/zambia-women.jpg",
      },
      {
        id: "483",
        title: "Tanzania Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172531/tanzania-women.jpg",
      },

      {
        id: "2",
        title: "India",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172115/india.jpg",
      },
      {
        id: "96",
        title: "Afghanistan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172188/afghanistan.jpg",
      },
      {
        id: "27",
        title: "Ireland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c495001/ireland.jpg",
      },
      {
        id: "3",
        title: "Pakistan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c591986/pakistan.jpg",
      },
      {
        id: "4",
        title: "Australia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172117/australia.jpg",
      },
      {
        id: "5",
        title: "Sri Lanka",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172119/sri-lanka.jpg",
      },
      {
        id: "6",
        title: "Bangladesh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172120/bangladesh.jpg",
      },
      {
        id: "9",
        title: "England",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172123/england.jpg",
      },
      {
        id: "10",
        title: "West Indies",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172124/west-indies.jpg",
      },
      {
        id: "11",
        title: "South Africa",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172126/south-africa.jpg",
      },
      {
        id: "12",
        title: "Zimbabwe",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172127/zimbabwe.jpg",
      },
      {
        id: "13",
        title: "New Zealand",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172128/new-zealand.jpg",
      },
      {
        id: "71",
        title: "Malaysia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172168/malaysia.jpg",
      },
      {
        id: "72",
        title: "Nepal",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172169/nepal.jpg",
      },
      {
        id: "77",
        title: "Germany",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172171/germany.jpg",
      },
      {
        id: "161",
        title: "Namibia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172229/namibia.jpg",
      },
      {
        id: "185",
        title: "Denmark",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172245/denmark.jpg",
      },
      {
        id: "190",
        title: "Singapore",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172250/singapore.jpg",
      },
      {
        id: "287",
        title: "Papua New Guinea",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172336/papua-new-guinea.jpg",
      },
      {
        id: "298",
        title: "Kuwait",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248427/kuwait.jpg",
      },
      {
        id: "300",
        title: "Vanuatu",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172349/vanuatu.jpg",
      },
      {
        id: "303",
        title: "Jersey",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172352/jersey.jpg",
      },
      {
        id: "304",
        title: "Oman",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172353/oman.jpg",
      },
      {
        id: "343",
        title: "Fiji",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172391/fiji.jpg",
      },
      {
        id: "527",
        title: "Italy",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172577/italy.jpg",
      },
      {
        id: "529",
        title: "Botswana",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172579/botswana.jpg",
      },
      {
        id: "541",
        title: "Belgium",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172592/belgium.jpg",
      },
      {
        id: "44",
        title: "Uganda",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c495000/uganda.jpg",
      },
      {
        id: "26",
        title: "Canada",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172140/canada.jpg",
      },
      {
        id: "7",
        title: "United Arab Emirates",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172121/united-arab-emirates.jpg",
      },
      {
        id: "8",
        title: "Hong Kong",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172122/hong-kong.jpg",
      },
      {
        id: "14",
        title: "Kenya",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172129/kenya.jpg",
      },
      {
        id: "15",
        title: "United States of America",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172130/united-states-of-america.jpg",
      },
      {
        id: "23",
        title: "Scotland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172137/scotland.jpg",
      },
      {
        id: "24",
        title: "Netherlands",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172138/netherlands.jpg",
      },
      {
        id: "25",
        title: "Bermuda",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172139/bermuda.jpg",
      },
      {
        id: "675",
        title: "Iran",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c188163/iran.jpg",
      },
    ],
  },
  winners: [
    {
      year: 2008,
      team: "Rajasthan Royals",
      rival: "Chennai Super Kings",
      image_url: "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png",
    },
    {
      year: 2009,
      team: "Deccan Chargers",
      rival: "Royal Challengers Bangalore",
      image_url: dc,
    },
    {
      year: 2010,
      team: "Chennai Super Kings",
      rival: "Mumbai Indians",
      image_url: "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
    },
    {
      year: 2011,
      team: "Chennai Super Kings",
      rival: "Royal Challengers Bangalore",
      image_url: "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
    },
    {
      year: 2012,
      team: "Kolkata Knight Riders",
      rival: "Chennai Super Kings",
      image_url: "https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png",
    },
    {
      year: 2013,
      team: "Mumbai Indians",
      rival: "Chennai Super Kings",
      image_url: "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
    },
    {
      year: 2014,
      team: "Kolkata Knight Riders",
      rival: "Kings XI Punjab",
      image_url: "https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png",
    },
    {
      year: 2015,
      team: "Mumbai Indians",
      rival: "Chennai Super Kings",
      image_url: "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
    },
    {
      year: 2016,
      team: "Sunrisers Hyderabad",
      rival: "Royal Challengers Bangalore",
      image_url: "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png",
    },
    {
      year: 2017,
      team: "Mumbai Indians",
      rival: "Rising Pune Supergiant",
      image_url: "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
    },
    {
      year: 2018,
      team: "Chennai Super Kings",
      rival: "Sunrisers Hyderabad",
      image_url: "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
    },
    {
      year: 2019,
      team: "Mumbai Indians",
      rival: "Chennai Super Kings",
      image_url: "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
    },
    {
      year: 2020,
      team: "Mumbai Indians",
      rival: "Delhi Capitals",
      image_url: "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
    },
    {
      year: 2021,
      team: "Chennai Super Kings",
      rival: "Kolkata Knight Riders",
      image_url: "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
    },
    {
      year: 2022,
      team: "Gujarat Titans",
      rival: "Rajasthan Royals",
      image_url: gt,
    },
    {
      year: 2023,
      team: "Chennai Super Kings",
      rival: "Gujarat Titans",
      image_url: "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
    },
    {
      year: 2024,
      team: "Kolkata Knight Riders",
      rival: "Sunrisers Hyderabad",
      image_url: "https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png",
    },
     {
      year: 2025,
      team: "Royal Challengers Bangalore",
      rival: "Punjab Kings",
      image_url: "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
    },
  ],
  domestic: {
    status: "success",
    response: [
      {
        id: "542",
        title: "Peru",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172593/peru.jpg",
      },
      {
        id: "554",
        title: "Israel",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172606/israel.jpg",
      },
      {
        id: "555",
        title: "Bhutan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172607/bhutan.jpg",
      },
      {
        id: "556",
        title: "Finland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172608/finland.jpg",
      },
      {
        id: "557",
        title: "Isle of Man",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172609/isle-of-man.jpg",
      },
      {
        id: "558",
        title: "Bulgaria",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172610/bulgaria.jpg",
      },
      {
        id: "559",
        title: "Sierra Leone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172611/sierra-leone.jpg",
      },
      {
        id: "560",
        title: "Brazil",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172612/brazil.jpg",
      },
      {
        id: "561",
        title: "Czech Republic",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172613/czech-republic.jpg",
      },
      {
        id: "562",
        title: "Saint Helena",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172614/saint-helena.jpg",
      },
      {
        id: "553",
        title: "Malawi",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172605/malawi.jpg",
      },
      {
        id: "552",
        title: "Chile",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172604/chile.jpg",
      },
      {
        id: "543",
        title: "Bahrain",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172594/bahrain.jpg",
      },
      {
        id: "544",
        title: "Mexico",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172595/mexico.jpg",
      },
      {
        id: "545",
        title: "Samoa",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172596/samoa.jpg",
      },
      {
        id: "546",
        title: "Panama",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172597/panama.jpg",
      },
      {
        id: "547",
        title: "Japan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248418/japan.jpg",
      },
      {
        id: "548",
        title: "Costa Rica",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172600/costa-rica.jpg",
      },
      {
        id: "549",
        title: "Argentina",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172601/argentina.jpg",
      },
      {
        id: "550",
        title: "Hungary",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172602/hungary.jpg",
      },
      {
        id: "551",
        title: "Mozambique",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172603/mozambique.jpg",
      },
      {
        id: "563",
        title: "Maldives",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172615/maldives.jpg",
      },
      {
        id: "564",
        title: "Gibraltar",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172616/gibraltar.jpg",
      },
      {
        id: "582",
        title: "SoBo SuperSonics",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172628/sobo-supersonics.jpg",
      },
      {
        id: "583",
        title: "Shivaji Park Lions",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172629/shivaji-park-lions.jpg",
      },
      {
        id: "584",
        title: "NaMo Bandra Blasters",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172630/namo-bandra-blasters.jpg",
      },
      {
        id: "585",
        title: "ARCS Andheri",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172631/arcs-andheri.jpg",
      },
      {
        id: "586",
        title: "Sorath Lions",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172632/sorath-lions.jpg",
      },
      {
        id: "587",
        title: "Gohilwad Gladiators",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172633/gohilwad-gladiators.jpg",
      },
      {
        id: "588",
        title: "Halar Heroes",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172634/halar-heroes.jpg",
      },
      {
        id: "589",
        title: "Zalawad Royals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172635/zalawad-royals.jpg",
      },
      {
        id: "590",
        title: "Kutch Warriors",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172636/kutch-warriors.jpg",
      },
      {
        id: "581",
        title: "North Mumbai Panthers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172627/north-mumbai-panthers.jpg",
      },
      {
        id: "580",
        title: "Eagle Thane Strikers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172626/eagle-thane-strikers.jpg",
      },
      {
        id: "565",
        title: "Myanmar",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172617/myanmar.jpg",
      },
      {
        id: "566",
        title: "Indonesia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172618/indonesia.jpg",
      },
      {
        id: "567",
        title: "Gambia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172619/gambia.jpg",
      },
      {
        id: "568",
        title: "Swaziland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172620/swaziland.jpg",
      },
      {
        id: "569",
        title: "Rwanda",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172621/rwanda.jpg",
      },
      {
        id: "570",
        title: "Lesotho",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172622/lesotho.jpg",
      },
      {
        id: "571",
        title: "Saudi Arabia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172623/saudi-arabia.jpg",
      },
      {
        id: "578",
        title: "Aakash Tigers MWS",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172624/aakash-tigers-mws.jpg",
      },
      {
        id: "579",
        title: "Triumphs Knights MNE",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172625/triumphs-knights-mne.jpg",
      },
      {
        id: "591",
        title: "Brampton Wolves",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248398/brampton-wolves.jpg",
      },
      {
        id: "435",
        title: "Ireland A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172485/ireland-a.jpg",
      },
      {
        id: "456",
        title: "CWI B Team",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172504/cwi-b-team.jpg",
      },
      {
        id: "460",
        title: "Bihar",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172508/bihar.jpg",
      },
      {
        id: "461",
        title: "Manipur",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172509/manipur.jpg",
      },
      {
        id: "462",
        title: "Meghalaya",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172510/meghalaya.jpg",
      },
      {
        id: "463",
        title: "Mizoram",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172511/mizoram.jpg",
      },
      {
        id: "464",
        title: "Nagaland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172512/nagaland.jpg",
      },
      {
        id: "465",
        title: "Puducherry",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172513/puducherry.jpg",
      },
      {
        id: "466",
        title: "Sikkim",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172514/sikkim.jpg",
      },
      {
        id: "467",
        title: "Uttarakhand",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172515/uttarakhand.jpg",
      },
      {
        id: "454",
        title: "Winnipeg Hawks",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172502/winnipeg-hawks.jpg",
      },
      {
        id: "453",
        title: "Vancouver Knights",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172501/vancouver-knights.jpg",
      },
      {
        id: "436",
        title: "Western Australia XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172486/western-australia-xi.jpg",
      },
      {
        id: "438",
        title: "Hong Kong Island United",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248414/hong-kong-island-united.jpg",
      },
      {
        id: "441",
        title: "Colombo",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172489/colombo.jpg",
      },
      {
        id: "442",
        title: "Kandy",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172490/kandy.jpg",
      },
      {
        id: "443",
        title: "Galle",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172491/galle.jpg",
      },
      {
        id: "444",
        title: "Dambulla",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172492/dambulla.jpg",
      },
      {
        id: "450",
        title: "Toronto Nationals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172498/toronto-nationals.jpg",
      },
      {
        id: "451",
        title: "Montreal Tigers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172499/montreal-tigers.jpg",
      },
      {
        id: "452",
        title: "Edmonton Royals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172500/edmonton-royals.jpg",
      },
      {
        id: "468",
        title: "Arunachal Pradesh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172516/arunachal-pradesh.jpg",
      },
      {
        id: "469",
        title: "Hong Kong U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172517/hong-kong-u19.jpg",
      },
      {
        id: "531",
        title: "Ghana",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172581/ghana.jpg",
      },
      {
        id: "532",
        title: "Austria",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172583/austria.jpg",
      },
      {
        id: "533",
        title: "Guernsey",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172584/guernsey.jpg",
      },
      {
        id: "534",
        title: "Sweden",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248454/sweden.jpg",
      },
      {
        id: "535",
        title: "Tanzania",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172586/tanzania.jpg",
      },
      {
        id: "536",
        title: "Nigeria",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248436/nigeria.jpg",
      },
      {
        id: "537",
        title: "Luxembourg",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172588/luxembourg.jpg",
      },
      {
        id: "538",
        title: "Philippines",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172589/philippines.jpg",
      },
      {
        id: "539",
        title: "France",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172590/france.jpg",
      },
      {
        id: "528",
        title: "Zimbabwe Chairmans XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/zimbabwe-chairmans-xi.jpg",
      },
      {
        id: "526",
        title: "Estonia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172576/estonia.jpg",
      },
      {
        id: "481",
        title: "India C",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c544438/india-c.jpg",
      },
      {
        id: "518",
        title: "Afghanistan U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172568/afghanistan-u23.jpg",
      },
      {
        id: "519",
        title: "India U19 A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172569/india-u19-a.jpg",
      },
      {
        id: "520",
        title: "India U19 B",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172570/india-u19-b.jpg",
      },
      {
        id: "521",
        title: "Estonia XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172571/estonia-xi.jpg",
      },
      {
        id: "522",
        title: "Malta",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172572/malta.jpg",
      },
      {
        id: "523",
        title: "Spain",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248450/spain.jpg",
      },
      {
        id: "524",
        title: "China",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172574/china.jpg",
      },
      {
        id: "525",
        title: "Qatar",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172575/qatar.jpg",
      },
      {
        id: "540",
        title: "Belize",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172591/belize.jpg",
      },
      {
        id: "593",
        title: "Kuwait U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248425/kuwait-u19.jpg",
      },
      {
        id: "1062",
        title: "Switzerland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247207/switzerland.jpg",
      },
      {
        id: "1172",
        title: "New Zealand Legends",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242502/new-zealand-legends.jpg",
      },
      {
        id: "1179",
        title: "Cameroon",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247194/cameroon.jpg",
      },
      {
        id: "1209",
        title: "Isle of Man Women",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248416/isle-of-man-women.jpg",
      },
      {
        id: "1265",
        title: "Mali",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248522/mali.jpg",
      },
      {
        id: "1272",
        title: "St Helena",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248526/st-helena.jpg",
      },
      {
        id: "1277",
        title: "Seychelles",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248523/seychelles.jpg",
      },
      {
        id: "1284",
        title: "Eswatini",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248525/eswatini.jpg",
      },
      {
        id: "1447",
        title: "Cambodia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254834/cambodia.jpg",
      },
      {
        id: "1545",
        title: "Mauritius",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333483/mauritius.jpg",
      },
      {
        id: "1165",
        title: "Gujarat Giant",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242501/gujarat-giant.jpg",
      },
      {
        id: "1158",
        title: "India Capitals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242500/india-capitals.jpg",
      },
      {
        id: "1067",
        title: "Serbia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247205/serbia.jpg",
      },
      {
        id: "1069",
        title: "Slovenia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247206/slovenia.jpg",
      },
      {
        id: "1076",
        title: "Croatia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247197/croatia.jpg",
      },
      {
        id: "1081",
        title: "Greece",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247199/greece.jpg",
      },
      {
        id: "1111",
        title: "Cyprus",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247198/cyprus.jpg",
      },
      {
        id: "1132",
        title: "Cook Islands",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c341077/cook-islands.jpg",
      },
      {
        id: "1146",
        title: "North East Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242496/north-east-zone.jpg",
      },
      {
        id: "1151",
        title: "Bhilwara Kings",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242497/bhilwara-kings.jpg",
      },
      {
        id: "1153",
        title: "Manipal Tigers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242498/manipal-tigers.jpg",
      },
      {
        id: "1615",
        title: "Q1",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/q1.jpg",
      },
      {
        id: "1622",
        title: "Q2",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/q2.jpg",
      },
      {
        id: "1965",
        title: "Hong Kong A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/hong-kong-a.jpg",
      },
      {
        id: "1974",
        title: "University Sport South Africa",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/university-sport-south-africa.jpg",
      },
      {
        id: "2001",
        title: "Zambia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c506188/zambia.jpg",
      },
      {
        id: "2050",
        title: "First Class Counties XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c510054/first-class-counties-xi.jpg",
      },
      {
        id: "2187",
        title: "Colombia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c563228/colombia.jpg",
      },
      {
        id: "2193",
        title: "Uruguay",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c563227/uruguay.jpg",
      },
      {
        id: "2277",
        title: "West Indies Select XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c577433/west-indies-select-xi.jpg",
      },
      {
        id: "2285",
        title: "Suriname",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c582333/suriname.jpg",
      },
      {
        id: "2377",
        title: "Falkland Islands",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c624542/falkland-islands.jpg",
      },
      {
        id: "1846",
        title: "Southern Super Stars",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c356644/southern-super-stars.jpg",
      },
      {
        id: "1843",
        title: "Urbanrisers Hyderabad",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c356645/urbanrisers-hyderabad.jpg",
      },
      {
        id: "1657",
        title: "United Arab Emirates A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334735/united-arab-emirates-a.jpg",
      },
      {
        id: "1664",
        title: "Oman A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334737/oman-a.jpg",
      },
      {
        id: "1759",
        title: "Boland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349610/boland.jpg",
      },
      {
        id: "1766",
        title: "KwaZulu-Natal Inland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349611/kwazulu-natal-inland.jpg",
      },
      {
        id: "1768",
        title: "South Western Districts",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349609/south-western-districts.jpg",
      },
      {
        id: "1775",
        title: "Border",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349602/border.jpg",
      },
      {
        id: "1782",
        title: "South Africa Emerging Players",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349593/south-africa-emerging-players.jpg",
      },
      {
        id: "1804",
        title: "Mongolia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349598/mongolia.jpg",
      },
      {
        id: "1815",
        title: "United States of America U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349589/united-states-of-america-u19.jpg",
      },
      {
        id: "2387",
        title: "Turks and Caicos Island",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c663369/turks-and-caicos-island.jpg",
      },
      {
        id: "595",
        title: "Chandigarh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c244269/chandigarh.jpg",
      },
      {
        id: "754",
        title: "Team Green",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-green.jpg",
      },
      {
        id: "758",
        title: "Team Morgan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-morgan.jpg",
      },
      {
        id: "759",
        title: "Team Moeen",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-moeen.jpg",
      },
      {
        id: "763",
        title: "Team Rausa",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-rausa.jpg",
      },
      {
        id: "768",
        title: "Team Caulfield",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-caulfield.jpg",
      },
      {
        id: "770",
        title: "Team Vince",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-vince.jpg",
      },
      {
        id: "779",
        title: "Finch XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/finch-xi.jpg",
      },
      {
        id: "784",
        title: "Cummins XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/cummins-xi.jpg",
      },
      {
        id: "832",
        title: "Team Root",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-root.jpg",
      },
      {
        id: "749",
        title: "Team White",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-white.jpg",
      },
      {
        id: "748",
        title: "Team Buttler",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-buttler.jpg",
      },
      {
        id: "596",
        title: "Portugal",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248442/portugal.jpg",
      },
      {
        id: "603",
        title: "Japan U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248420/japan-u19.jpg",
      },
      {
        id: "604",
        title: "Nigeria U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248435/nigeria-u19.jpg",
      },
      {
        id: "657",
        title: "Ponting XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/ponting-xi.jpg",
      },
      {
        id: "666",
        title: "Gilchrist XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/gilchrist-xi.jpg",
      },
      {
        id: "729",
        title: "Sri Lanka Cricket XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/sri-lanka-cricket-xi.jpg",
      },
      {
        id: "733",
        title: "WI Holder XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/wi-holder-xi.jpg",
      },
      {
        id: "738",
        title: "WI Brathwaite XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/wi-brathwaite-xi.jpg",
      },
      {
        id: "743",
        title: "Team Stokes",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-stokes.jpg",
      },
      {
        id: "843",
        title: "Bangladesh Emerging Team",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202804/bangladesh-emerging-team.jpg",
      },
      {
        id: "872",
        title: "Team Latham",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-latham.jpg",
      },
      {
        id: "922",
        title: "North West",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248439/north-west.jpg",
      },
      {
        id: "923",
        title: "Northern Cape",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248438/northern-cape.jpg",
      },
      {
        id: "927",
        title: "Eastern Cape",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248405/eastern-cape.jpg",
      },
      {
        id: "928",
        title: "Rocks",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248446/rocks.jpg",
      },
      {
        id: "933",
        title: "Eastern Storm",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248407/eastern-storm.jpg",
      },
      {
        id: "956",
        title: "Uganda U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248458/uganda-u19.jpg",
      },
      {
        id: "1018",
        title: "Bahamas",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248394/bahamas.jpg",
      },
      {
        id: "1020",
        title: "Cayman Islands",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248399/cayman-islands.jpg",
      },
      {
        id: "1027",
        title: "Norway",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247201/norway.jpg",
      },
      {
        id: "918",
        title: "Garden Route Badgers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247396/garden-route-badgers.jpg",
      },
      {
        id: "917",
        title: "Western Province",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248460/western-province.jpg",
      },
      {
        id: "876",
        title: "Team Williamson",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/team-williamson.jpg",
      },
      {
        id: "881",
        title: "Zimbabwe Select XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248461/zimbabwe-select-xi.jpg",
      },
      {
        id: "886",
        title: "Professional County Club Select XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/professional-county-club-selec.jpg",
      },
      {
        id: "887",
        title: "A1",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/a1.jpg",
      },
      {
        id: "892",
        title: "A2",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/a2.jpg",
      },
      {
        id: "897",
        title: "Turkey",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247208/turkey.jpg",
      },
      {
        id: "903",
        title: "Mpumalanga Rhinos",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248434/mpumalanga-rhinos.jpg",
      },
      {
        id: "908",
        title: "Tuskers",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248457/tuskers.jpg",
      },
      {
        id: "912",
        title: "Limpopo",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248430/limpopo.jpg",
      },
      {
        id: "1041",
        title: "Romania",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247204/romania.jpg",
      },
      {
        id: "425",
        title: "World XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172475/world-xi.jpg",
      },
      {
        id: "154",
        title: "Sri Lanka Cricket Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172221/sri-lanka-cricket-presidents-x.jpg",
      },
      {
        id: "172",
        title: "Sri Lanka U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172240/sri-lanka-u19.jpg",
      },
      {
        id: "173",
        title: "England U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172241/england-u19.jpg",
      },
      {
        id: "186",
        title: "Auckland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172246/auckland.jpg",
      },
      {
        id: "187",
        title: "Ruhunu",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172247/ruhunu.jpg",
      },
      {
        id: "191",
        title: "Cricket Australia Chairmans XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172251/cricket-australia-chairmans-xi.jpg",
      },
      {
        id: "200",
        title: "Haryana",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172260/haryana.jpg",
      },
      {
        id: "207",
        title: "West Indies A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172267/west-indies-a.jpg",
      },
      {
        id: "208",
        title: "Basnahira Cricket Dundee",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172268/basnahira-cricket-dundee.jpg",
      },
      {
        id: "209",
        title: "Kandurata Warriors",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172269/kandurata-warriors.jpg",
      },
      {
        id: "171",
        title: "Rajasthan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172239/rajasthan.jpg",
      },
      {
        id: "170",
        title: "Baroda",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172238/baroda.jpg",
      },
      {
        id: "158",
        title: "South Australia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172225/south-australia.jpg",
      },
      {
        id: "160",
        title: "East Africa",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172228/east-africa.jpg",
      },
      {
        id: "162",
        title: "Assam",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172230/assam.jpg",
      },
      {
        id: "163",
        title: "Gujarat",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172232/gujarat.jpg",
      },
      {
        id: "164",
        title: "Queensland",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172233/queensland.jpg",
      },
      {
        id: "165",
        title: "England Cricket Board XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172234/england-cricket-board-xi.jpg",
      },
      {
        id: "166",
        title: "Tasmania",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172235/tasmania.jpg",
      },
      {
        id: "167",
        title: "Madhya Pradesh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172236/madhya-pradesh.jpg",
      },
      {
        id: "168",
        title: "Nondescripts Cricket Club",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248437/nondescripts-cricket-club.jpg",
      },
      {
        id: "210",
        title: "Nagenahira Nagas",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172270/nagenahira-nagas.jpg",
      },
      {
        id: "211",
        title: "Ruhuna Royals",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172271/ruhuna-royals.jpg",
      },
      {
        id: "230",
        title: "Namibia U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172283/namibia-u19.jpg",
      },
      {
        id: "231",
        title: "India B",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c544437/india-b.jpg",
      },
      {
        id: "232",
        title: "Bengal",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172285/bengal.jpg",
      },
      {
        id: "233",
        title: "North Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172286/north-zone.jpg",
      },
      {
        id: "234",
        title: "West Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172287/west-zone.jpg",
      },
      {
        id: "235",
        title: "East Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172288/east-zone.jpg",
      },
      {
        id: "236",
        title: "South Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172289/south-zone.jpg",
      },
      {
        id: "237",
        title: "Central Zone",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172290/central-zone.jpg",
      },
      {
        id: "238",
        title: "Pakistan All Star XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172291/pakistan-all-star-xi.jpg",
      },
      {
        id: "229",
        title: "Nepal U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172282/nepal-u19.jpg",
      },
      {
        id: "228",
        title: "Scotland U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172281/scotland-u19.jpg",
      },
      {
        id: "212",
        title: "Uthura Rudras",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172272/uthura-rudras.jpg",
      },
      {
        id: "213",
        title: "Wayamba United",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172273/wayamba-united.jpg",
      },
      {
        id: "214",
        title: "Uva Next",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172274/uva-next.jpg",
      },
      {
        id: "220",
        title: "West Indies U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172275/west-indies-u19.jpg",
      },
      {
        id: "221",
        title: "Zimbabwe U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172276/zimbabwe-u19.jpg",
      },
      {
        id: "222",
        title: "Papua New Guinea U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172277/papua-new-guinea-u19.jpg",
      },
      {
        id: "223",
        title: "Afghanistan U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172278/afghanistan-u19.jpg",
      },
      {
        id: "224",
        title: "Bangladesh U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172279/bangladesh-u19.jpg",
      },
      {
        id: "226",
        title: "Ireland U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172280/ireland-u19.jpg",
      },
      {
        id: "239",
        title: "International World XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172292/international-world-xi.jpg",
      },
      {
        id: "18",
        title: "India Senior",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172136/india-senior.jpg",
      },
      {
        id: "57",
        title: "South Africa U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172159/south-africa-u19.jpg",
      },
      {
        id: "74",
        title: "Middlesex",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172170/middlesex.jpg",
      },
      {
        id: "78",
        title: "India A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c562024/india-a.jpg",
      },
      {
        id: "79",
        title: "Australia A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172173/australia-a.jpg",
      },
      {
        id: "80",
        title: "New Zealand A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172174/new-zealand-a.jpg",
      },
      {
        id: "81",
        title: "Delhi",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172175/delhi.jpg",
      },
      {
        id: "82",
        title: "Rest of India",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172176/rest-of-india.jpg",
      },
      {
        id: "86",
        title: "Board Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172179/board-presidents-xi.jpg",
      },
      {
        id: "87",
        title: "Western Australia",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172180/western-australia.jpg",
      },
      {
        id: "56",
        title: "Pakistan U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172158/pakistan-u19.jpg",
      },
      {
        id: "55",
        title: "New Zealand U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172157/new-zealand-u19.jpg",
      },
      {
        id: "20",
        title: "India Green",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172134/india-green.jpg",
      },
      {
        id: "21",
        title: "India Red",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172135/india-red.jpg",
      },
      {
        id: "36",
        title: "India Blue",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172143/india-blue.jpg",
      },
      {
        id: "41",
        title: "Sussex",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172148/sussex.jpg",
      },
      {
        id: "42",
        title: "England Lions",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172149/england-lions.jpg",
      },
      {
        id: "43",
        title: "Sri Lanka A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172150/sri-lanka-a.jpg",
      },
      {
        id: "52",
        title: "Victoria",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172153/victoria.jpg",
      },
      {
        id: "53",
        title: "ACT Invitational XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172154/act-invitational-xi.jpg",
      },
      {
        id: "54",
        title: "India U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172155/india-u19.jpg",
      },
      {
        id: "92",
        title: "Tamil Nadu",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172184/tamil-nadu.jpg",
      },
      {
        id: "93",
        title: "Uttar Pradesh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172185/uttar-pradesh.jpg",
      },
      {
        id: "144",
        title: "Derbyshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172211/derbyshire.jpg",
      },
      {
        id: "145",
        title: "Leicestershire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172212/leicestershire.jpg",
      },
      {
        id: "146",
        title: "Yorkshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172213/yorkshire.jpg",
      },
      {
        id: "147",
        title: "Worcestershire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172214/worcestershire.jpg",
      },
      {
        id: "148",
        title: "Surrey",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172215/surrey.jpg",
      },
      {
        id: "149",
        title: "Glamorgan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172216/glamorgan.jpg",
      },
      {
        id: "150",
        title: "Kent",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172217/kent.jpg",
      },
      {
        id: "151",
        title: "Gloucestershire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172218/gloucestershire.jpg",
      },
      {
        id: "152",
        title: "Essex",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172219/essex.jpg",
      },
      {
        id: "143",
        title: "Lancashire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172210/lancashire.jpg",
      },
      {
        id: "142",
        title: "Northamptonshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172209/northamptonshire.jpg",
      },
      {
        id: "94",
        title: "Saurashtra",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172186/saurashtra.jpg",
      },
      {
        id: "95",
        title: "Mumbai",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172187/mumbai.jpg",
      },
      {
        id: "119",
        title: "Somerset",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172199/somerset.jpg",
      },
      {
        id: "128",
        title: "Karnataka",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172203/karnataka.jpg",
      },
      {
        id: "129",
        title: "Australia U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172204/australia-u19.jpg",
      },
      {
        id: "130",
        title: "Windward Islands",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172205/windward-islands.jpg",
      },
      {
        id: "139",
        title: "Nottinghamshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172206/nottinghamshire.jpg",
      },
      {
        id: "140",
        title: "Warwickshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172207/warwickshire.jpg",
      },
      {
        id: "141",
        title: "Durham",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172208/durham.jpg",
      },
      {
        id: "153",
        title: "Hampshire",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172220/hampshire.jpg",
      },
      {
        id: "240",
        title: "Mumbai A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172293/mumbai-a.jpg",
      },
      {
        id: "305",
        title: "Indian Board Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172354/indian-board-presidents-xi.jpg",
      },
      {
        id: "341",
        title: "Afghanistan A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172389/afghanistan-a.jpg",
      },
      {
        id: "342",
        title: "Zimbabwe A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172390/zimbabwe-a.jpg",
      },
      {
        id: "347",
        title: "Himachal Pradesh Cricket Association XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172395/himachal-pradesh-cricket-assoc.jpg",
      },
      {
        id: "348",
        title: "Tamil Nadu Cricket Association Under 17",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172396/tamil-nadu-cricket-association.jpg",
      },
      {
        id: "349",
        title: "Mumbai Cricket Association XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172397/mumbai-cricket-association-xi.jpg",
      },
      {
        id: "350",
        title: "West Indies Cricket Board President XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172398/west-indies-cricket-board-pres.jpg",
      },
      {
        id: "352",
        title: "Island Warriors",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248415/island-warriors.jpg",
      },
      {
        id: "353",
        title: "Kowloon Cantons",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172400/kowloon-cantons.jpg",
      },
      {
        id: "354",
        title: "Lantau Galaxy Riders",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248429/lantau-galaxy-riders.jpg",
      },
      {
        id: "326",
        title: "Fiji U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172376/fiji-u19.jpg",
      },
      {
        id: "325",
        title: "Pakistan A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172375/pakistan-a.jpg",
      },
      {
        id: "306",
        title: "Cricket Australia XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172355/cricket-australia-xi.jpg",
      },
      {
        id: "312",
        title: "Canterbury",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172362/canterbury.jpg",
      },
      {
        id: "313",
        title: "Central Districts",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172363/central-districts.jpg",
      },
      {
        id: "314",
        title: "Wellington",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172364/wellington.jpg",
      },
      {
        id: "315",
        title: "India AT20",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172365/india-at20.jpg",
      },
      {
        id: "316",
        title: "Sachin Blasters",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172366/sachin-blasters.jpg",
      },
      {
        id: "317",
        title: "Warne Warriors",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172367/warne-warriors.jpg",
      },
      {
        id: "323",
        title: "Bangladesh Cricket Board XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172373/bangladesh-cricket-board-xi.jpg",
      },
      {
        id: "324",
        title: "New Zealand Board Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172374/new-zealand-board-presidents-x.jpg",
      },
      {
        id: "363",
        title: "Mohun Bagan",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172416/mohun-bagan.jpg",
      },
      {
        id: "364",
        title: "Bhowanipore",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172417/bhowanipore.jpg",
      },
      {
        id: "391",
        title: "Cape cobras",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172444/cape-cobras.jpg",
      },
      {
        id: "398",
        title: "UWI Vice Chancellors XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172451/uwi-vice-chancellors-xi.jpg",
      },
      {
        id: "402",
        title: "North",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172454/north.jpg",
      },
      {
        id: "403",
        title: "South",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172455/south.jpg",
      },
      {
        id: "404",
        title: "MCC World XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248431/mcc-world-xi.jpg",
      },
      {
        id: "405",
        title: "India U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172456/india-u23.jpg",
      },
      {
        id: "406",
        title: "Pakistan U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252360/pakistan-u23.jpg",
      },
      {
        id: "407",
        title: "Sri Lanka U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172458/sri-lanka-u23.jpg",
      },
      {
        id: "408",
        title: "Bangladesh U23",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252355/bangladesh-u23.jpg",
      },
      {
        id: "387",
        title: "Singapore U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172440/singapore-u19.jpg",
      },
      {
        id: "386",
        title: "Malaysia U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172439/malaysia-u19.jpg",
      },
      {
        id: "365",
        title: "Sri Lanka XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172418/sri-lanka-xi.jpg",
      },
      {
        id: "374",
        title: "Pakistan Cricket Board Patrons XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172427/pakistan-cricket-board-patrons.jpg",
      },
      {
        id: "375",
        title: "Chhattisgarh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172428/chhattisgarh.jpg",
      },
      {
        id: "376",
        title: "Emirates Cricket Board XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172429/emirates-cricket-board-xi.jpg",
      },
      {
        id: "377",
        title: "BCB Select XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172430/bcb-select-xi.jpg",
      },
      {
        id: "380",
        title: "South Australia XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172433/south-australia-xi.jpg",
      },
      {
        id: "381",
        title: "Victoria XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172434/victoria-xi.jpg",
      },
      {
        id: "384",
        title: "Thailand",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172437/thailand.jpg",
      },
      {
        id: "385",
        title: "Birmingham Bears",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172438/birmingham-bears.jpg",
      },
      {
        id: "424",
        title: "Kenya U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172474/kenya-u19.jpg",
      },
      {
        id: "241",
        title: "Andhra",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172294/andhra.jpg",
      },
      {
        id: "253",
        title: "Goa",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172306/goa.jpg",
      },
      {
        id: "254",
        title: "Maharashtra",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172307/maharashtra.jpg",
      },
      {
        id: "261",
        title: "Unicorns",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172314/unicorns.jpg",
      },
      {
        id: "266",
        title: "Australians",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172319/australians.jpg",
      },
      {
        id: "267",
        title: "South African Invitation XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172320/south-african-invitation-xi.jpg",
      },
      {
        id: "268",
        title: "South Africa A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172321/south-africa-a.jpg",
      },
      {
        id: "269",
        title: "Zimbabwe XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172322/zimbabwe-xi.jpg",
      },
      {
        id: "272",
        title: "Basnahira Greens",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/basnahira-greens.jpg",
      },
      {
        id: "273",
        title: "Uthura Yellows",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248459/uthura-yellows.jpg",
      },
      {
        id: "252",
        title: "Jammu and Kashmir",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172305/jammu-and-kashmir.jpg",
      },
      {
        id: "251",
        title: "Himachal Pradesh",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172304/himachal-pradesh.jpg",
      },
      {
        id: "242",
        title: "Hyderabad",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172295/hyderabad.jpg",
      },
      {
        id: "243",
        title: "Jharkhand",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172296/jharkhand.jpg",
      },
      {
        id: "244",
        title: "Kerala",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172297/kerala.jpg",
      },
      {
        id: "245",
        title: "Punjab",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172298/punjab.jpg",
      },
      {
        id: "246",
        title: "Railways",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172299/railways.jpg",
      },
      {
        id: "247",
        title: "Tripura",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172300/tripura.jpg",
      },
      {
        id: "248",
        title: "Vidarbha",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172301/vidarbha.jpg",
      },
      {
        id: "249",
        title: "Odisha",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172302/odisha.jpg",
      },
      {
        id: "250",
        title: "Services",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172303/services.jpg",
      },
      {
        id: "274",
        title: "Kandurata Maroons",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172326/kandurata-maroons.jpg",
      },
      {
        id: "275",
        title: "Ruhuna Reds",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248447/ruhuna-reds.jpg",
      },
      {
        id: "290",
        title: "Marylebone Cricket Club",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172339/marylebone-cricket-club.jpg",
      },
      {
        id: "291",
        title: "National Performance Squad",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172340/national-performance-squad.jpg",
      },
      {
        id: "292",
        title: "Southern Express",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172341/southern-express.jpg",
      },
      {
        id: "293",
        title: "Lahore Lions",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172342/lahore-lions.jpg",
      },
      {
        id: "294",
        title: "Northern Knights",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172343/northern-knights.jpg",
      },
      {
        id: "295",
        title: "WICB",
        image: "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172344/wicb.jpg",
      },
      {
        id: "296",
        title: "Mumbai Board Presidents XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172345/mumbai-board-presidents-xi.jpg",
      },
      {
        id: "297",
        title: "West Indians",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172346/west-indians.jpg",
      },
      {
        id: "299",
        title: "South Korea",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172348/south-korea.jpg",
      },
      {
        id: "289",
        title: "Rest of the World XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172338/rest-of-the-world-xi.jpg",
      },
      {
        id: "288",
        title: "Bangladesh A",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172337/bangladesh-a.jpg",
      },
      {
        id: "276",
        title: "Indians",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172327/indians.jpg",
      },
      {
        id: "277",
        title: "Western Australia Chairmans XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172328/western-australia-chairmans-xi.jpg",
      },
      {
        id: "278",
        title: "Cricket Australia Invitational XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172329/cricket-australia-invitational.jpg",
      },
      {
        id: "279",
        title: "Prime Ministers XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172330/prime-ministers-xi.jpg",
      },
      {
        id: "281",
        title: "Knights",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172331/knights.jpg",
      },
      {
        id: "282",
        title: "Canada U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172332/canada-u19.jpg",
      },
      {
        id: "283",
        title: "United Arab Emirates U19",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172333/united-arab-emirates-u19.jpg",
      },
      {
        id: "285",
        title: "Morocco",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172334/morocco.jpg",
      },
      {
        id: "286",
        title: "New Zealand XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172335/new-zealand-xi.jpg",
      },
      {
        id: "301",
        title: "Australian Legends XI",
        image:
          "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172350/australian-legends-xi.jpg",
      },
    ],
  },
  women:{
  "status": "success",
  "response": [
    {
      "id": "1444",
      "title": "Maldives Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254832/maldives-women.jpg"
    },
    {
      "id": "1363",
      "title": "Pakistan Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252359/pakistan-women-u19.jpg"
    },
    {
      "id": "1361",
      "title": "Sri Lanka Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252353/sri-lanka-women-u19.jpg"
    },
    {
      "id": "1356",
      "title": "India Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252371/india-women-u19.jpg"
    },
    {
      "id": "1354",
      "title": "South Africa Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252370/south-africa-women-u19.jpg"
    },
    {
      "id": "1347",
      "title": "United Arab Emirates Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252368/united-arab-emirates-women-u19.jpg"
    },
    {
      "id": "1342",
      "title": "Scotland Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252367/scotland-women-u19.jpg"
    },
    {
      "id": "1335",
      "title": "Bangladesh Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252354/bangladesh-women-u19.jpg"
    },
    {
      "id": "1328",
      "title": "Australia Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252350/australia-women-u19.jpg"
    },
    {
      "id": "1368",
      "title": "Rwanda Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252361/rwanda-women-u19.jpg"
    },
    {
      "id": "1375",
      "title": "Ireland Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252365/ireland-women-u19.jpg"
    },
    {
      "id": "1431",
      "title": "Mexico Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254833/mexico-women.jpg"
    },
    {
      "id": "1426",
      "title": "Canada Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c253473/canada-women.jpg"
    },
    {
      "id": "1405",
      "title": "United States of America Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252352/united-states-of-america-women.jpg"
    },
    {
      "id": "1403",
      "title": "Zimbabwe Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252356/zimbabwe-women-u19.jpg"
    },
    {
      "id": "1398",
      "title": "England Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252357/england-women-u19.jpg"
    },
    {
      "id": "1391",
      "title": "New Zealand Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252363/new-zealand-women-u19.jpg"
    },
    {
      "id": "1384",
      "title": "Indonesia Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252362/indonesia-women-u19.jpg"
    },
    {
      "id": "1382",
      "title": "West Indies Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252364/west-indies-women-u19.jpg"
    },
    {
      "id": "1207",
      "title": "Young England Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/young-england-women.jpg"
    },
    {
      "id": "1200",
      "title": "Jamaica Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/jamaica-women.jpg"
    },
    {
      "id": "1195",
      "title": "Trinidad & Tobago Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248456/trinidad-tobago-women.jpg"
    },
    {
      "id": "1055",
      "title": "Norway Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247202/norway-women.jpg"
    },
    {
      "id": "1048",
      "title": "Sweden Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248453/sweden-women.jpg"
    },
    {
      "id": "1034",
      "title": "Spain Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248449/spain-women.jpg"
    },
    {
      "id": "1032",
      "title": "Jersey Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248421/jersey-women.jpg"
    },
    {
      "id": "1011",
      "title": "Barbados Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c239937/barbados-women.jpg"
    },
    {
      "id": "961",
      "title": "India D Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248605/india-d-women.jpg"
    },
    {
      "id": "902",
      "title": "Turkey Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247209/turkey-women.jpg"
    },
    {
      "id": "838",
      "title": "New Zealand XI Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/new-zealand-xi-women.jpg"
    },
    {
      "id": "1083",
      "title": "Bahrain Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248395/bahrain-women.jpg"
    },
    {
      "id": "1090",
      "title": "Bhutan Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248397/bhutan-women.jpg"
    },
    {
      "id": "1188",
      "title": "International XI Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/international-xi-women.jpg"
    },
    {
      "id": "1181",
      "title": "Fiji Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248411/fiji-women.jpg"
    },
    {
      "id": "1144",
      "title": "Guyana Amazon Warriors Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c241607/guyana-amazon-warriors-women.jpg"
    },
    {
      "id": "1139",
      "title": "Trinbago Knight Riders Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c241610/trinbago-knight-riders-women.jpg"
    },
    {
      "id": "1137",
      "title": "Barbados Royals Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c241608/barbados-royals-women.jpg"
    },
    {
      "id": "1125",
      "title": "Italy Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248417/italy-women.jpg"
    },
    {
      "id": "1104",
      "title": "Guernsey Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c539690/guernsey-women.jpg"
    },
    {
      "id": "1097",
      "title": "Kuwait Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248426/kuwait-women.jpg"
    },
    {
      "id": "775",
      "title": "Austria Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c274436/austria-women.jpg"
    },
    {
      "id": "2390",
      "title": "Switzerland Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c692942/switzerland-women.jpg"
    },
    {
      "id": "1987",
      "title": "Czech Republic Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c501075/czech-republic-women.jpg"
    },
    {
      "id": "1985",
      "title": "Zimbabwe A Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/zimbabwe-a-women.jpg"
    },
    {
      "id": "1796",
      "title": "Mongolia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349599/mongolia-women.jpg"
    },
    {
      "id": "1794",
      "title": "Luxembourg Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349590/luxembourg-women.jpg"
    },
    {
      "id": "1789",
      "title": "Serbia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349600/serbia-women.jpg"
    },
    {
      "id": "1754",
      "title": "Cook Islands Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c341074/cook-islands-women.jpg"
    },
    {
      "id": "1675",
      "title": "Romania Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338249/romania-women.jpg"
    },
    {
      "id": "1668",
      "title": "Greece Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338104/greece-women.jpg"
    },
    {
      "id": "1992",
      "title": "Cyprus Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c502582/cyprus-women.jpg"
    },
    {
      "id": "1994",
      "title": "Croatia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c501076/croatia-women.jpg"
    },
    {
      "id": "2380",
      "title": "Portugal Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c625937/portugal-women.jpg"
    },
    {
      "id": "2286",
      "title": "Nigeria Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c601867/nigeria-women-u19.jpg"
    },
    {
      "id": "2201",
      "title": "Bulgaria Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c692936/bulgaria-women.jpg"
    },
    {
      "id": "2179",
      "title": "Cayman Islands Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c551465/cayman-islands-women.jpg"
    },
    {
      "id": "2146",
      "title": "Samoa Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c551467/samoa-women-u19.jpg"
    },
    {
      "id": "2138",
      "title": "Malaysia Women U19",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c551466/malaysia-women-u19.jpg"
    },
    {
      "id": "2071",
      "title": "Australian Capital Territory Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c538208/australian-capital-territory-w.jpg"
    },
    {
      "id": "2062",
      "title": "Finland Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c539543/finland-women.jpg"
    },
    {
      "id": "1563",
      "title": "Mali Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333457/mali-women.jpg"
    },
    {
      "id": "1556",
      "title": "Sri Lanka A Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333456/sri-lanka-a-women.jpg"
    },
    {
      "id": "1552",
      "title": "Pakistan A Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333455/pakistan-a-women.jpg"
    },
    {
      "id": "1493",
      "title": "Cameroon Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c273974/cameroon-women.jpg"
    },
    {
      "id": "1489",
      "title": "Ghana Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c273958/ghana-women.jpg"
    },
    {
      "id": "1482",
      "title": "Nigeria Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c273957/nigeria-women.jpg"
    },
    {
      "id": "1479",
      "title": "Gujarat Giants Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254722/gujarat-giants-women.jpg"
    },
    {
      "id": "1472",
      "title": "UP Warriorz Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254738/up-warriorz-women.jpg"
    },
    {
      "id": "1468",
      "title": "Mumbai Indians Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254724/mumbai-indians-women.jpg"
    },
    {
      "id": "1465",
      "title": "Royal Challengers Bengaluru Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254725/royal-challengers-bengaluru-wo.jpg"
    },
    {
      "id": "1461",
      "title": "Delhi Capitals Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254726/delhi-capitals-women.jpg"
    },
    {
      "id": "1500",
      "title": "Malta Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c297979/malta-women.jpg"
    },
    {
      "id": "1507",
      "title": "Gibraltar Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c297980/gibraltar-women.jpg"
    },
    {
      "id": "1549",
      "title": "Bangladesh A Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333453/bangladesh-a-women.jpg"
    },
    {
      "id": "1542",
      "title": "Thailand A Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c329024/thailand-a-women.jpg"
    },
    {
      "id": "1535",
      "title": "Eswatini Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c329003/eswatini-women.jpg"
    },
    {
      "id": "1531",
      "title": "Costa Rica Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c329002/costa-rica-women.jpg"
    },
    {
      "id": "1528",
      "title": "Belize Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c329001/belize-women.jpg"
    },
    {
      "id": "1521",
      "title": "Estonia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c315349/estonia-women.jpg"
    },
    {
      "id": "1517",
      "title": "Myanmar Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c307474/myanmar-women.jpg"
    },
    {
      "id": "1514",
      "title": "Philippines Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c307469/philippines-women.jpg"
    },
    {
      "id": "1454",
      "title": "Cambodia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254835/cambodia-women.jpg"
    },
    {
      "id": "482",
      "title": "Samoa Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172530/samoa-women.jpg"
    },
    {
      "id": "422",
      "title": "Surrey Stars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172472/surrey-stars.jpg"
    },
    {
      "id": "421",
      "title": "Loughborough Lightning",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172471/loughborough-lightning.jpg"
    },
    {
      "id": "420",
      "title": "Lancashire Thunder",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172470/lancashire-thunder.jpg"
    },
    {
      "id": "419",
      "title": "Yorkshire Diamonds",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172469/yorkshire-diamonds.jpg"
    },
    {
      "id": "418",
      "title": "Western Storm",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172468/western-storm.jpg"
    },
    {
      "id": "417",
      "title": "Southern Vipers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172467/southern-vipers.jpg"
    },
    {
      "id": "390",
      "title": "Papua New Guinea Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172443/papua-new-guinea-women.jpg"
    },
    {
      "id": "389",
      "title": "Scotland Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252366/scotland-women.jpg"
    },
    {
      "id": "439",
      "title": "South Africa Emerging Players Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c349592/south-africa-emerging-players.jpg"
    },
    {
      "id": "440",
      "title": "India A Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333769/india-a-women.jpg"
    },
    {
      "id": "459",
      "title": "India Women Green",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172507/india-women-green.jpg"
    },
    {
      "id": "458",
      "title": "India Women Blue",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172506/india-women-blue.jpg"
    },
    {
      "id": "457",
      "title": "India Women Red",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172505/india-women-red.jpg"
    },
    {
      "id": "449",
      "title": "United Arab Emirates Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c252369/united-arab-emirates-women.jpg"
    },
    {
      "id": "448",
      "title": "Uganda Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172496/uganda-women.jpg"
    },
    {
      "id": "447",
      "title": "Supernovas",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c234642/supernovas.jpg"
    },
    {
      "id": "446",
      "title": "Trailblazers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c234641/trailblazers.jpg"
    },
    {
      "id": "445",
      "title": "Malaysia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172493/malaysia-women.jpg"
    },
    {
      "id": "388",
      "title": "Zimbabwe Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172441/zimbabwe-women.jpg"
    },
    {
      "id": "383",
      "title": "Nepal Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172436/nepal-women.jpg"
    },
    {
      "id": "382",
      "title": "Thailand Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172435/thailand-women.jpg"
    },
    {
      "id": "259",
      "title": "Pakistan Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172312/pakistan-women.jpg"
    },
    {
      "id": "258",
      "title": "Sri Lanka Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172311/sri-lanka-women.jpg"
    },
    {
      "id": "257",
      "title": "West Indies Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172310/west-indies-women.jpg"
    },
    {
      "id": "189",
      "title": "Ireland Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172249/ireland-women.jpg"
    },
    {
      "id": "188",
      "title": "Netherlands Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172248/netherlands-women.jpg"
    },
    {
      "id": "100",
      "title": "Australia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172192/australia-women.jpg"
    },
    {
      "id": "99",
      "title": "England Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172191/england-women.jpg"
    },
    {
      "id": "98",
      "title": "New Zealand Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172190/new-zealand-women.jpg"
    },
    {
      "id": "260",
      "title": "South Africa Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172313/south-africa-women.jpg"
    },
    {
      "id": "329",
      "title": "Bangladesh Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172377/bangladesh-women.jpg"
    },
    {
      "id": "362",
      "title": "Sydney Thunder Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172408/sydney-thunder-women.jpg"
    },
    {
      "id": "361",
      "title": "Sydney Sixers Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172407/sydney-sixers-women.jpg"
    },
    {
      "id": "360",
      "title": "Perth Scorchers Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172406/perth-scorchers-women.jpg"
    },
    {
      "id": "359",
      "title": "Melbourne Stars Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172405/melbourne-stars-women.jpg"
    },
    {
      "id": "358",
      "title": "Melbourne Renegades Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172404/melbourne-renegades-women.jpg"
    },
    {
      "id": "357",
      "title": "Hobart Hurricanes Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172403/hobart-hurricanes-women.jpg"
    },
    {
      "id": "356",
      "title": "Brisbane Heat Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172402/brisbane-heat-women.jpg"
    },
    {
      "id": "355",
      "title": "Adelaide Strikers Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172401/adelaide-strikers-women.jpg"
    },
    {
      "id": "97",
      "title": "India Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172189/india-women.jpg"
    },
    {
      "id": "720",
      "title": "Rwanda Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248448/rwanda-women.jpg"
    },
    {
      "id": "594",
      "title": "India Women Board President XI",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/india-women-board-president-xi.jpg"
    },
    {
      "id": "592",
      "title": "United States of America Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c241611/united-states-of-america-women.jpg"
    },
    {
      "id": "530",
      "title": "Velocity",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c234643/velocity.jpg"
    },
    {
      "id": "509",
      "title": "Singapore Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c591999/singapore-women.jpg"
    },
    {
      "id": "508",
      "title": "Denmark Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172557/denmark-women.jpg"
    },
    {
      "id": "507",
      "title": "South Korea Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172556/south-korea-women.jpg"
    },
    {
      "id": "506",
      "title": "Vanuatu Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172555/vanuatu-women.jpg"
    },
    {
      "id": "505",
      "title": "Oman Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172554/oman-women.jpg"
    },
    {
      "id": "613",
      "title": "Oval Invincibles Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202714/oval-invincibles-women.jpg"
    },
    {
      "id": "614",
      "title": "Welsh Fire Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202715/welsh-fire-women.jpg"
    },
    {
      "id": "648",
      "title": "India B Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248603/india-b-women.jpg"
    },
    {
      "id": "639",
      "title": "India C Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248604/india-c-women.jpg"
    },
    {
      "id": "620",
      "title": "Southern Brave Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202721/southern-brave-women.jpg"
    },
    {
      "id": "619",
      "title": "Northern Superchargers Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202720/northern-superchargers-women.jpg"
    },
    {
      "id": "618",
      "title": "Trent Rockets Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202719/trent-rockets-women.jpg"
    },
    {
      "id": "617",
      "title": "Manchester Originals Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202718/manchester-originals-women.jpg"
    },
    {
      "id": "616",
      "title": "London Spirit Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202717/london-spirit-women.jpg"
    },
    {
      "id": "615",
      "title": "Birmingham Phoenix Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202716/birmingham-phoenix-women.jpg"
    },
    {
      "id": "504",
      "title": "Germany Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172553/germany-women.jpg"
    },
    {
      "id": "503",
      "title": "Namibia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172552/namibia-women.jpg"
    },
    {
      "id": "502",
      "title": "Hong Kong Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172551/hong-kong-women.jpg"
    },
    {
      "id": "491",
      "title": "Brazil Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172539/brazil-women.jpg"
    },
    {
      "id": "490",
      "title": "Sierra Leone Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172538/sierra-leone-women.jpg"
    },
    {
      "id": "489",
      "title": "Argentina Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172537/argentina-women.jpg"
    },
    {
      "id": "488",
      "title": "Botswana Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172536/botswana-women.jpg"
    },
    {
      "id": "487",
      "title": "Japan Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248419/japan-women.jpg"
    },
    {
      "id": "486",
      "title": "China Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172534/china-women.jpg"
    },
    {
      "id": "485",
      "title": "Qatar Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172533/qatar-women.jpg"
    },
    {
      "id": "484",
      "title": "Indonesia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172532/indonesia-women.jpg"
    },
    {
      "id": "492",
      "title": "France Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172540/france-women.jpg"
    },
    {
      "id": "493",
      "title": "Mozambique Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172541/mozambique-women.jpg"
    },
    {
      "id": "501",
      "title": "Kenya Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172550/kenya-women.jpg"
    },
    {
      "id": "500",
      "title": "Swaziland Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172549/swaziland-women.jpg"
    },
    {
      "id": "499",
      "title": "Lesotho Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172548/lesotho-women.jpg"
    },
    {
      "id": "498",
      "title": "Peru Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172547/peru-women.jpg"
    },
    {
      "id": "497",
      "title": "Chile Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172546/chile-women.jpg"
    },
    {
      "id": "496",
      "title": "Belgium Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172544/belgium-women.jpg"
    },
    {
      "id": "495",
      "title": "Malawi Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172543/malawi-women.jpg"
    },
    {
      "id": "494",
      "title": "Zambia Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172542/zambia-women.jpg"
    },
    {
      "id": "483",
      "title": "Tanzania Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172531/tanzania-women.jpg"
    }
  ]
  },
  league:{
  "status": "success",
  "response": [
    {
      "id": "58",
      "title": "Chennai Super Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c225641/chennai-super-kings.jpg"
    },
    {
      "id": "61",
      "title": "Delhi Capitals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c225644/delhi-capitals.jpg"
    },
    {
      "id": "65",
      "title": "Punjab Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c225648/punjab-kings.jpg"
    },
    {
      "id": "63",
      "title": "Kolkata Knight Riders",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c225646/kolkata-knight-riders.jpg"
    },
    {
      "id": "62",
      "title": "Mumbai Indians",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c225645/mumbai-indians.jpg"
    },
    {
      "id": "64",
      "title": "Rajasthan Royals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c225647/rajasthan-royals.jpg"
    },
    {
      "id": "59",
      "title": "Royal Challengers Bengaluru",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c225643/royal-challengers-bengaluru.jpg"
    },
    {
      "id": "255",
      "title": "Sunrisers Hyderabad",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c225649/sunrisers-hyderabad.jpg"
    },
    {
      "id": "971",
      "title": "Gujarat Titans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c235085/gujarat-titans.jpg"
    },
    {
      "id": "976",
      "title": "Minister Group Dhaka",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248433/minister-group-dhaka.jpg"
    },
    {
      "id": "981",
      "title": "Sylhet Sunrisers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248452/sylhet-sunrisers.jpg"
    },
    {
      "id": "986",
      "title": "India Maharajas",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242518/india-maharajas.jpg"
    },
    {
      "id": "991",
      "title": "Asia Lions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248393/asia-lions.jpg"
    },
    {
      "id": "996",
      "title": "World Giants",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c242522/world-giants.jpg"
    },
    {
      "id": "1116",
      "title": "Kandy Falcons",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248423/kandy-falcons.jpg"
    },
    {
      "id": "966",
      "title": "Lucknow Super Giants",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c389444/lucknow-super-giants.jpg"
    },
    {
      "id": "953",
      "title": "Kandy Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c219032/kandy-warriors.jpg"
    },
    {
      "id": "948",
      "title": "Jaffna Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c219029/jaffna-kings.jpg"
    },
    {
      "id": "946",
      "title": "Dambulla Sixers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c502581/dambulla-sixers.jpg"
    },
    {
      "id": "943",
      "title": "Colombo Strikers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333883/colombo-strikers.jpg"
    },
    {
      "id": "941",
      "title": "Chennai Brave Jaguars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c219043/chennai-brave-jaguars.jpg"
    },
    {
      "id": "867",
      "title": "Salem Spartans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c206918/salem-spartans.jpg"
    },
    {
      "id": "866",
      "title": "Nellai Royal Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c206917/nellai-royal-kings.jpg"
    },
    {
      "id": "861",
      "title": "IDream Tiruppur Tamizhans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c206916/idream-tiruppur-tamizhans.jpg"
    },
    {
      "id": "1123",
      "title": "Gulbarga Mystics",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338072/gulbarga-mystics.jpg"
    },
    {
      "id": "1216",
      "title": "Morrisville Samp Army",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247200/morrisville-samp-army.jpg"
    },
    {
      "id": "1419",
      "title": "Dhaka Dominators",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c253024/dhaka-dominators.jpg"
    },
    {
      "id": "1412",
      "title": "Sylhet Strikers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c253023/sylhet-strikers.jpg"
    },
    {
      "id": "1326",
      "title": "Desert Vipers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c249199/desert-vipers.jpg"
    },
    {
      "id": "1319",
      "title": "Gulf Giants",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c249198/gulf-giants.jpg"
    },
    {
      "id": "1312",
      "title": "Sharjah Warriorz",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c249197/sharjah-warriorz.jpg"
    },
    {
      "id": "1307",
      "title": "MI Emirates",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c249196/mi-emirates.jpg"
    },
    {
      "id": "1300",
      "title": "Abu Dhabi Knight Riders",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c249195/abu-dhabi-knight-riders.jpg"
    },
    {
      "id": "1298",
      "title": "Dubai Capitals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c249194/dubai-capitals.jpg"
    },
    {
      "id": "1291",
      "title": "NSW/ACT",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248524/nswact.jpg"
    },
    {
      "id": "1263",
      "title": "Pretoria Capitals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248443/pretoria-capitals.jpg"
    },
    {
      "id": "1256",
      "title": "Sunrisers Eastern Cape",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248451/sunrisers-eastern-cape.jpg"
    },
    {
      "id": "1249",
      "title": "Joburg Super Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248422/joburg-super-kings.jpg"
    },
    {
      "id": "1242",
      "title": "Durban Super Giants",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248403/durban-super-giants.jpg"
    },
    {
      "id": "1235",
      "title": "Paarl Royals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248440/paarl-royals.jpg"
    },
    {
      "id": "1228",
      "title": "MI Cape Town",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248432/mi-cape-town.jpg"
    },
    {
      "id": "1223",
      "title": "New York Strikers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c247203/new-york-strikers.jpg"
    },
    {
      "id": "1461",
      "title": "Delhi Capitals Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254726/delhi-capitals-women.jpg"
    },
    {
      "id": "853",
      "title": "England Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202782/england-legends.jpg"
    },
    {
      "id": "848",
      "title": "Bangladesh Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202783/bangladesh-legends.jpg"
    },
    {
      "id": "630",
      "title": "Desert Riders",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248402/desert-riders.jpg"
    },
    {
      "id": "629",
      "title": "Flying Oryx",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/flying-oryx.jpg"
    },
    {
      "id": "628",
      "title": "Falcon Hunters",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248409/falcon-hunters.jpg"
    },
    {
      "id": "627",
      "title": "Khulna Tigers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248424/khulna-tigers.jpg"
    },
    {
      "id": "626",
      "title": "Rajshahi Royals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248444/rajshahi-royals.jpg"
    },
    {
      "id": "625",
      "title": "Dhaka Platoon",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/dhaka-platoon.jpg"
    },
    {
      "id": "624",
      "title": "Rangpur Rangers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248445/rangpur-rangers.jpg"
    },
    {
      "id": "623",
      "title": "Cumilla Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248401/cumilla-warriors.jpg"
    },
    {
      "id": "622",
      "title": "Chattogram Challengers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248400/chattogram-challengers.jpg"
    },
    {
      "id": "621",
      "title": "Sylhet Thunder",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248455/sylhet-thunder.jpg"
    },
    {
      "id": "612",
      "title": "Trent Rockets",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202713/trent-rockets.jpg"
    },
    {
      "id": "611",
      "title": "Southern Brave",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202712/southern-brave.jpg"
    },
    {
      "id": "610",
      "title": "Northern Superchargers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202711/northern-superchargers.jpg"
    },
    {
      "id": "609",
      "title": "Manchester Originals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202710/manchester-originals.jpg"
    },
    {
      "id": "608",
      "title": "London Spirit",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202696/london-spirit.jpg"
    },
    {
      "id": "631",
      "title": "Pearl Gladiators",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248441/pearl-gladiators.jpg"
    },
    {
      "id": "632",
      "title": "Heat Stormers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/heat-stormers.jpg"
    },
    {
      "id": "633",
      "title": "Swift Gallopers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/swift-gallopers.jpg"
    },
    {
      "id": "827",
      "title": "Beximco Dhaka",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c198252/beximco-dhaka.jpg"
    },
    {
      "id": "822",
      "title": "Gazi Group Chattogram",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c198250/gazi-group-chattogram.jpg"
    },
    {
      "id": "817",
      "title": "Minister Group Rajshahi",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c198243/minister-group-rajshahi.jpg"
    },
    {
      "id": "812",
      "title": "Gemcon Khulna",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c198242/gemcon-khulna.jpg"
    },
    {
      "id": "807",
      "title": "Fortune Barishal",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c198246/fortune-barishal.jpg"
    },
    {
      "id": "805",
      "title": "Kandy Tuskers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c196087/kandy-tuskers.jpg"
    },
    {
      "id": "800",
      "title": "Jaffna Stallions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c196091/jaffna-stallions.jpg"
    },
    {
      "id": "799",
      "title": "Galle Gladiators",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c219028/galle-gladiators.jpg"
    },
    {
      "id": "794",
      "title": "Dambulla Viiking",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c196090/dambulla-viiking.jpg"
    },
    {
      "id": "789",
      "title": "Colombo Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c196089/colombo-kings.jpg"
    },
    {
      "id": "718",
      "title": "South Africa Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202802/south-africa-legends.jpg"
    },
    {
      "id": "709",
      "title": "Sri Lanka Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202787/sri-lanka-legends.jpg"
    },
    {
      "id": "700",
      "title": "Australia Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202786/australia-legends.jpg"
    },
    {
      "id": "691",
      "title": "West Indies Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202785/west-indies-legends.jpg"
    },
    {
      "id": "682",
      "title": "India Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202784/india-legends.jpg"
    },
    {
      "id": "607",
      "title": "Birmingham Phoenix",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202709/birmingham-phoenix.jpg"
    },
    {
      "id": "1465",
      "title": "Royal Challengers Bengaluru Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254725/royal-challengers-bengaluru-wo.jpg"
    },
    {
      "id": "2368",
      "title": "Asian Stars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c625578/asian-stars.jpg"
    },
    {
      "id": "2148",
      "title": "Nys Lagos",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c549917/nys-lagos.jpg"
    },
    {
      "id": "2071",
      "title": "Australian Capital Territory Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c538208/australian-capital-territory-w.jpg"
    },
    {
      "id": "2046",
      "title": "Pakistan Champions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c510034/pakistan-champions.jpg"
    },
    {
      "id": "2039",
      "title": "Australia Champions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c510033/australia-champions.jpg"
    },
    {
      "id": "2030",
      "title": "England Champions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c510032/england-champions.jpg"
    },
    {
      "id": "2021",
      "title": "West Indies Champions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c510031/west-indies-champions.jpg"
    },
    {
      "id": "2014",
      "title": "South Africa Champions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c510030/south-africa-champions.jpg"
    },
    {
      "id": "2005",
      "title": "India Champions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c510027/india-champions.jpg"
    },
    {
      "id": "1978",
      "title": "Antigua and Barbuda Falcons",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c507236/antigua-and-barbuda-falcons.jpg"
    },
    {
      "id": "1962",
      "title": "Pakistan Stars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384029/pakistan-stars.jpg"
    },
    {
      "id": "1955",
      "title": "Sri Lankan Lions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384025/sri-lankan-lions.jpg"
    },
    {
      "id": "1953",
      "title": "Indian Royals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384024/indian-royals.jpg"
    },
    {
      "id": "1948",
      "title": "Bangladesh Tigers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384022/bangladesh-tigers.jpg"
    },
    {
      "id": "1941",
      "title": "Afghanistan Pathans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384023/afghanistan-pathans.jpg"
    },
    {
      "id": "1934",
      "title": "New York Superstar Strikers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384012/new-york-superstar-strikers.jpg"
    },
    {
      "id": "2156",
      "title": "Konark Suryas Odisha",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c549916/konark-suryas-odisha.jpg"
    },
    {
      "id": "2161",
      "title": "Toyam Hyderabad",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c549913/toyam-hyderabad.jpg"
    },
    {
      "id": "2169",
      "title": "Gujarat Greats",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c549912/gujarat-greats.jpg"
    },
    {
      "id": "2362",
      "title": "South Africa Masters",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c616374/south-africa-masters.jpg"
    },
    {
      "id": "2359",
      "title": "England Masters",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c616375/england-masters.jpg"
    },
    {
      "id": "2353",
      "title": "West Indies Masters",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c616376/west-indies-masters.jpg"
    },
    {
      "id": "2344",
      "title": "Australia Masters",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c616377/australia-masters.jpg"
    },
    {
      "id": "2335",
      "title": "Sri Lanka Masters",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c616378/sri-lanka-masters.jpg"
    },
    {
      "id": "2326",
      "title": "India Masters",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c616379/india-masters.jpg"
    },
    {
      "id": "2269",
      "title": "Colombo Jaguars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c577412/colombo-jaguars.jpg"
    },
    {
      "id": "2261",
      "title": "Hambantota Bangla Tigers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c577413/hambantota-bangla-tigers.jpg"
    },
    {
      "id": "2253",
      "title": "Nuwara Eliya Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c577430/nuwara-eliya-kings.jpg"
    },
    {
      "id": "2249",
      "title": "Kandy Bolts",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c577414/kandy-bolts.jpg"
    },
    {
      "id": "2241",
      "title": "Jaffna Titans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c577415/jaffna-titans.jpg"
    },
    {
      "id": "2237",
      "title": "Dhaka Capitals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c592538/dhaka-capitals.jpg"
    },
    {
      "id": "2233",
      "title": "Durbar Rajshahi",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c592543/durbar-rajshahi.jpg"
    },
    {
      "id": "2223",
      "title": "UP Nawabs",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c567954/up-nawabs.jpg"
    },
    {
      "id": "2216",
      "title": "Ajman Bolts",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c567952/ajman-bolts.jpg"
    },
    {
      "id": "1927",
      "title": "Kandy Samp Army",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384011/kandy-samp-army.jpg"
    },
    {
      "id": "1920",
      "title": "Delhi Devils",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384008/delhi-devils.jpg"
    },
    {
      "id": "1916",
      "title": "Colombo Lions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384005/colombo-lions.jpg"
    },
    {
      "id": "1647",
      "title": "Cape Town Samp Army",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334693/cape-town-samp-army.jpg"
    },
    {
      "id": "1640",
      "title": "Joburg Bangla Tigers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334696/joburg-bangla-tigers.jpg"
    },
    {
      "id": "1636",
      "title": "Bulawayo Brave Jaguars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334697/bulawayo-brave-jaguars.jpg"
    },
    {
      "id": "1633",
      "title": "Surrey Jaguars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334523/surrey-jaguars.jpg"
    },
    {
      "id": "1629",
      "title": "Bangla Tigers Mississauga",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334524/bangla-tigers-mississauga.jpg"
    },
    {
      "id": "1608",
      "title": "Kandy Falcons",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333881/kandy-falcons.jpg"
    },
    {
      "id": "1601",
      "title": "Galle Marvels",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c577416/galle-marvels.jpg"
    },
    {
      "id": "1594",
      "title": "Seattle Orcas",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333489/seattle-orcas.jpg"
    },
    {
      "id": "1591",
      "title": "Washington Freedom",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333488/washington-freedom.jpg"
    },
    {
      "id": "1584",
      "title": "San Francisco Unicorns",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333487/san-francisco-unicorns.jpg"
    },
    {
      "id": "1577",
      "title": "Texas Super Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333486/texas-super-kings.jpg"
    },
    {
      "id": "1573",
      "title": "MI New York",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334729/mi-new-york.jpg"
    },
    {
      "id": "1570",
      "title": "Los Angeles Knight Riders",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c333484/los-angeles-knight-riders.jpg"
    },
    {
      "id": "1479",
      "title": "Gujarat Giants Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254722/gujarat-giants-women.jpg"
    },
    {
      "id": "1472",
      "title": "UP Warriorz Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254738/up-warriorz-women.jpg"
    },
    {
      "id": "1650",
      "title": "Harare Bolts",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334690/harare-bolts.jpg"
    },
    {
      "id": "1682",
      "title": "Atlanta Riders",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338363/atlanta-riders.jpg"
    },
    {
      "id": "1685",
      "title": "California Knights",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338365/california-knights.jpg"
    },
    {
      "id": "1911",
      "title": "Punjab Royals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384004/punjab-royals.jpg"
    },
    {
      "id": "1904",
      "title": "Rajasthan Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384003/rajasthan-kings.jpg"
    },
    {
      "id": "1902",
      "title": "Dubai Giants",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c384002/dubai-giants.jpg"
    },
    {
      "id": "1895",
      "title": "Durdanto Dhaka",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c373877/durdanto-dhaka.jpg"
    },
    {
      "id": "1811",
      "title": "Pakistan Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/pakistan-legends.jpg"
    },
    {
      "id": "1752",
      "title": "Jodhpur Sunrisers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c340213/jodhpur-sunrisers.jpg"
    },
    {
      "id": "1747",
      "title": "Shekhawati Soldiers Sikar",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c340209/shekhawati-soldiers-sikar.jpg"
    },
    {
      "id": "1740",
      "title": "Udaipur Lakecity Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c340204/udaipur-lakecity-warriors.jpg"
    },
    {
      "id": "1733",
      "title": "Jaanbaaz Kota Challengers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c340202/jaanbaaz-kota-challengers.jpg"
    },
    {
      "id": "1731",
      "title": "Bhilwara Bulls",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c340201/bhilwara-bulls.jpg"
    },
    {
      "id": "1724",
      "title": "Jaipur Indians",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c340200/jaipur-indians.jpg"
    },
    {
      "id": "1713",
      "title": "Morrisville Unity",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338369/morrisville-unity.jpg"
    },
    {
      "id": "1706",
      "title": "New Jersey Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338368/new-jersey-legends.jpg"
    },
    {
      "id": "1699",
      "title": "Texas Chargers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338367/texas-chargers.jpg"
    },
    {
      "id": "1692",
      "title": "New York Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338366/new-york-warriors.jpg"
    },
    {
      "id": "1468",
      "title": "Mumbai Indians Women",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c254724/mumbai-indians-women.jpg"
    },
    {
      "id": "606",
      "title": "Welsh Fire",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202708/welsh-fire.jpg"
    },
    {
      "id": "373",
      "title": "Karaikudi Kaalai",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172426/karaikudi-kaalai.jpg"
    },
    {
      "id": "331",
      "title": "Quetta Gladiators",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172379/quetta-gladiators.jpg"
    },
    {
      "id": "330",
      "title": "Islamabad United",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172378/islamabad-united.jpg"
    },
    {
      "id": "322",
      "title": "Barisal Bulls",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172372/barisal-bulls.jpg"
    },
    {
      "id": "321",
      "title": "Chittagong Vikings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172371/chittagong-vikings.jpg"
    },
    {
      "id": "320",
      "title": "Sylhet Super Stars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172370/sylhet-super-stars.jpg"
    },
    {
      "id": "319",
      "title": "Comilla Victorians",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172369/comilla-victorians.jpg"
    },
    {
      "id": "318",
      "title": "Dhaka Dynamites",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172368/dhaka-dynamites.jpg"
    },
    {
      "id": "311",
      "title": "Rock Stars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172360/rock-stars.jpg"
    },
    {
      "id": "310",
      "title": "Hubli Tigers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172359/hubli-tigers.jpg"
    },
    {
      "id": "309",
      "title": "Shivamogga Lions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338074/shivamogga-lions.jpg"
    },
    {
      "id": "308",
      "title": "Bellary Tuskers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172357/bellary-tuskers.jpg"
    },
    {
      "id": "307",
      "title": "Mysore Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172356/mysore-warriors.jpg"
    },
    {
      "id": "302",
      "title": "St Kitts and Nevis Patriots",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172351/st-kitts-and-nevis-patriots.jpg"
    },
    {
      "id": "271",
      "title": "Trinbago Knight Riders",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172325/trinbago-knight-riders.jpg"
    },
    {
      "id": "270",
      "title": "Faisalabad Wolves",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172324/faisalabad-wolves.jpg"
    },
    {
      "id": "332",
      "title": "Karachi Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172380/karachi-kings.jpg"
    },
    {
      "id": "333",
      "title": "Lahore Qalandars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172381/lahore-qalandars.jpg"
    },
    {
      "id": "334",
      "title": "Peshawar Zalmi",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172382/peshawar-zalmi.jpg"
    },
    {
      "id": "372",
      "title": "VB Thiruvallur Veerans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172425/vb-thiruvallur-veerans.jpg"
    },
    {
      "id": "371",
      "title": "Dindigul Dragons",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172424/dindigul-dragons.jpg"
    },
    {
      "id": "370",
      "title": "Ruby Kanchi Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172423/ruby-kanchi-warriors.jpg"
    },
    {
      "id": "369",
      "title": "Siechem Madurai Panthers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172422/siechem-madurai-panthers.jpg"
    },
    {
      "id": "368",
      "title": "Lyca Kovai Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172421/lyca-kovai-kings.jpg"
    },
    {
      "id": "367",
      "title": "Chepauk Super Gillies",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172420/chepauk-super-gillies.jpg"
    },
    {
      "id": "366",
      "title": "TUTI Patriots",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172419/tuti-patriots.jpg"
    },
    {
      "id": "351",
      "title": "Hung Hom JD Jaguars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172399/hung-hom-jd-jaguars.jpg"
    },
    {
      "id": "344",
      "title": "Sagittarius Strikers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172392/sagittarius-strikers.jpg"
    },
    {
      "id": "340",
      "title": "Leo Lions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172388/leo-lions.jpg"
    },
    {
      "id": "339",
      "title": "Capricorn Commanders",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172387/capricorn-commanders.jpg"
    },
    {
      "id": "338",
      "title": "Virgo Super Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172386/virgo-super-kings.jpg"
    },
    {
      "id": "337",
      "title": "Sagittarius Soldiers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172385/sagittarius-soldiers.jpg"
    },
    {
      "id": "336",
      "title": "Gemini Arabians",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172384/gemini-arabians.jpg"
    },
    {
      "id": "335",
      "title": "Libra Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172383/libra-legends.jpg"
    },
    {
      "id": "265",
      "title": "Antigua Hawksbills",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172318/antigua-hawksbills.jpg"
    },
    {
      "id": "264",
      "title": "Jamaica Tallawahs",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172317/jamaica-tallawahs.jpg"
    },
    {
      "id": "183",
      "title": "Pune Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172242/pune-warriors.jpg"
    },
    {
      "id": "159",
      "title": "Guyana Amazon Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172227/guyana-amazon-warriors.jpg"
    },
    {
      "id": "157",
      "title": "Lions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172224/lions.jpg"
    },
    {
      "id": "156",
      "title": "Central Stags",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172223/central-stags.jpg"
    },
    {
      "id": "155",
      "title": "Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172222/warriors.jpg"
    },
    {
      "id": "125",
      "title": "Bijapur Bulls",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172202/bijapur-bulls.jpg"
    },
    {
      "id": "123",
      "title": "Belagavi Panthers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172201/belagavi-panthers.jpg"
    },
    {
      "id": "122",
      "title": "Mangalore Dragons",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c338073/mangalore-dragons.jpg"
    },
    {
      "id": "105",
      "title": "Otago",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172197/otago.jpg"
    },
    {
      "id": "104",
      "title": "New South Wales",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172196/new-south-wales.jpg"
    },
    {
      "id": "103",
      "title": "Wayamba Elevens",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172195/wayamba-elevens.jpg"
    },
    {
      "id": "101",
      "title": "Cape Cobras",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172193/cape-cobras.jpg"
    },
    {
      "id": "90",
      "title": "Dolphins",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172183/dolphins.jpg"
    },
    {
      "id": "89",
      "title": "Titans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172182/titans.jpg"
    },
    {
      "id": "88",
      "title": "Sialkot Stallions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172181/sialkot-stallions.jpg"
    },
    {
      "id": "184",
      "title": "Kochi Tuskers Kerala",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172243/kochi-tuskers-kerala.jpg"
    },
    {
      "id": "192",
      "title": "Sydney Thunder",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172252/sydney-thunder.jpg"
    },
    {
      "id": "193",
      "title": "Brisbane Heat",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172253/brisbane-heat.jpg"
    },
    {
      "id": "263",
      "title": "Saint Lucia Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172316/saint-lucia-kings.jpg"
    },
    {
      "id": "262",
      "title": "Barbados Royals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c210485/barbados-royals.jpg"
    },
    {
      "id": "256",
      "title": "Rangpur Riders",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172309/rangpur-riders.jpg"
    },
    {
      "id": "206",
      "title": "Sylhet Royals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172266/sylhet-royals.jpg"
    },
    {
      "id": "205",
      "title": "Khulna Royal Bengals",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172265/khulna-royal-bengals.jpg"
    },
    {
      "id": "204",
      "title": "Duronto Rajshahi",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172264/duronto-rajshahi.jpg"
    },
    {
      "id": "203",
      "title": "Dhaka Gladiators",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172263/dhaka-gladiators.jpg"
    },
    {
      "id": "202",
      "title": "Chittagong Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172262/chittagong-kings.jpg"
    },
    {
      "id": "201",
      "title": "Barisal Burners",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172261/barisal-burners.jpg"
    },
    {
      "id": "199",
      "title": "Adelaide Strikers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172259/adelaide-strikers.jpg"
    },
    {
      "id": "198",
      "title": "Sydney Sixers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172258/sydney-sixers.jpg"
    },
    {
      "id": "197",
      "title": "Perth Scorchers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172257/perth-scorchers.jpg"
    },
    {
      "id": "196",
      "title": "Melbourne Stars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172256/melbourne-stars.jpg"
    },
    {
      "id": "195",
      "title": "Melbourne Renegades",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172255/melbourne-renegades.jpg"
    },
    {
      "id": "194",
      "title": "Hobart Hurricanes",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172254/hobart-hurricanes.jpg"
    },
    {
      "id": "84",
      "title": "Trinidad and Tobago",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172178/trinidad-and-tobago.jpg"
    },
    {
      "id": "378",
      "title": "Khulna Titans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172431/khulna-titans.jpg"
    },
    {
      "id": "605",
      "title": "Oval Invincibles",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c202707/oval-invincibles.jpg"
    },
    {
      "id": "511",
      "title": "Kerala Knights",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172560/kerala-knights.jpg"
    },
    {
      "id": "510",
      "title": "Bengal Tigers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172559/bengal-tigers.jpg"
    },
    {
      "id": "480",
      "title": "Tshwane Spartans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172528/tshwane-spartans.jpg"
    },
    {
      "id": "479",
      "title": "Paarl Rocks",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172527/paarl-rocks.jpg"
    },
    {
      "id": "478",
      "title": "Nelson Mandela Bay Giants",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172526/nelson-mandela-bay-giants.jpg"
    },
    {
      "id": "477",
      "title": "Jozi Stars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172525/jozi-stars.jpg"
    },
    {
      "id": "476",
      "title": "Durban Heat",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172524/durban-heat.jpg"
    },
    {
      "id": "475",
      "title": "Cape Town Blitz",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172523/cape-town-blitz.jpg"
    },
    {
      "id": "474",
      "title": "Balkh Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172522/balkh-legends.jpg"
    },
    {
      "id": "473",
      "title": "Nangarhar Leopards",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172521/nangarhar-leopards.jpg"
    },
    {
      "id": "472",
      "title": "Kandahar Knights",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172520/kandahar-knights.jpg"
    },
    {
      "id": "471",
      "title": "Paktia Panthers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172519/paktia-panthers.jpg"
    },
    {
      "id": "470",
      "title": "Kabul Zwanan",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172518/kabul-zwanan.jpg"
    },
    {
      "id": "459",
      "title": "India Women Green",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172507/india-women-green.jpg"
    },
    {
      "id": "458",
      "title": "India Women Blue",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172506/india-women-blue.jpg"
    },
    {
      "id": "457",
      "title": "India Women Red",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172505/india-women-red.jpg"
    },
    {
      "id": "512",
      "title": "Maratha Arabians",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c201347/maratha-arabians.jpg"
    },
    {
      "id": "513",
      "title": "Northern Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c201349/northern-warriors.jpg"
    },
    {
      "id": "602",
      "title": "Pune Devils",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c201350/pune-devils.jpg"
    },
    {
      "id": "601",
      "title": "Team Abu Dhabi",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c201355/team-abu-dhabi.jpg"
    },
    {
      "id": "600",
      "title": "Bangla Tigers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c201353/bangla-tigers.jpg"
    },
    {
      "id": "599",
      "title": "Qalandars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c201354/qalandars.jpg"
    },
    {
      "id": "598",
      "title": "Delhi Bulls",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c201352/delhi-bulls.jpg"
    },
    {
      "id": "597",
      "title": "Deccan Gladiators",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c201351/deccan-gladiators.jpg"
    },
    {
      "id": "577",
      "title": "Belfast Titans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248396/belfast-titans.jpg"
    },
    {
      "id": "576",
      "title": "Dublin Chiefs",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/dublin-chiefs.jpg"
    },
    {
      "id": "575",
      "title": "Glasgow Giants",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/glasgow-giants.jpg"
    },
    {
      "id": "574",
      "title": "Edinburgh Rocks",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c248408/edinburgh-rocks.jpg"
    },
    {
      "id": "573",
      "title": "Rotterdam Rhinos",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/rotterdam-rhinos.jpg"
    },
    {
      "id": "572",
      "title": "Amsterdam Knights",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/amsterdam-knights.jpg"
    },
    {
      "id": "517",
      "title": "Sindhis",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172567/sindhis.jpg"
    },
    {
      "id": "516",
      "title": "Rajputs",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172566/rajputs.jpg"
    },
    {
      "id": "515",
      "title": "Punjabi Legends",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172565/punjabi-legends.jpg"
    },
    {
      "id": "514",
      "title": "Pakhtoons",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172563/pakhtoons.jpg"
    },
    {
      "id": "455",
      "title": "VB Kanchi Veerans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172503/vb-kanchi-veerans.jpg"
    },
    {
      "id": "437",
      "title": "Multan Sultans",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172487/multan-sultans.jpg"
    },
    {
      "id": "414",
      "title": "Jodhpur Lions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172464/jodhpur-lions.jpg"
    },
    {
      "id": "413",
      "title": "Jaipur Tigers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172463/jaipur-tigers.jpg"
    },
    {
      "id": "412",
      "title": "Udaipur Eagles",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172462/udaipur-eagles.jpg"
    },
    {
      "id": "411",
      "title": "Sikar Bulls",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172461/sikar-bulls.jpg"
    },
    {
      "id": "410",
      "title": "Trichy Grand Cholas",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172460/trichy-grand-cholas.jpg"
    },
    {
      "id": "401",
      "title": "Galaxy Gladiators Lantau",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172453/galaxy-gladiators-lantau.jpg"
    },
    {
      "id": "416",
      "title": "Ajmer Panthers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172466/ajmer-panthers.jpg"
    },
    {
      "id": "400",
      "title": "HKI United",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c174284/hki-united.jpg"
    },
    {
      "id": "399",
      "title": "City Kaitak",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172452/city-kaitak.jpg"
    },
    {
      "id": "397",
      "title": "Gurugram Gladiators",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172450/gurugram-gladiators.jpg"
    },
    {
      "id": "396",
      "title": "Rohtak Blasters",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172449/rohtak-blasters.jpg"
    },
    {
      "id": "395",
      "title": "Hisar Bulls",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172448/hisar-bulls.jpg"
    },
    {
      "id": "394",
      "title": "Kurukshetra Tigers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172447/kurukshetra-tigers.jpg"
    },
    {
      "id": "393",
      "title": "Sirsa Warriors",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172446/sirsa-warriors.jpg"
    },
    {
      "id": "392",
      "title": "Panchkula Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172445/panchkula-kings.jpg"
    },
    {
      "id": "415",
      "title": "Bhilwara Wolves",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172465/bhilwara-wolves.jpg"
    },
    {
      "id": "379",
      "title": "Rajshahi Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172432/rajshahi-kings.jpg"
    },
    {
      "id": "434",
      "title": "Sylhet Sixers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172484/sylhet-sixers.jpg"
    },
    {
      "id": "433",
      "title": "Stellenbosch Kings",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172483/stellenbosch-kings.jpg"
    },
    {
      "id": "432",
      "title": "Pretoria Mavericks",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172482/pretoria-mavericks.jpg"
    },
    {
      "id": "431",
      "title": "Nelson Mandela Bay Stars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172481/nelson-mandela-bay-stars.jpg"
    },
    {
      "id": "430",
      "title": "Joburg Giants",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172480/joburg-giants.jpg"
    },
    {
      "id": "429",
      "title": "Durban Wolves",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c334700/durban-wolves.jpg"
    },
    {
      "id": "428",
      "title": "Cape Town Knight Riders",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172478/cape-town-knight-riders.jpg"
    },
    {
      "id": "427",
      "title": "Bloem City Blazers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172477/bloem-city-blazers.jpg"
    },
    {
      "id": "426",
      "title": "Benoni Zalmi",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172476/benoni-zalmi.jpg"
    },
    {
      "id": "423",
      "title": "Bengaluru Blasters",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172473/bengaluru-blasters.jpg"
    },
    {
      "id": "422",
      "title": "Surrey Stars",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172472/surrey-stars.jpg"
    },
    {
      "id": "421",
      "title": "Loughborough Lightning",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172471/loughborough-lightning.jpg"
    },
    {
      "id": "420",
      "title": "Lancashire Thunder",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172470/lancashire-thunder.jpg"
    },
    {
      "id": "419",
      "title": "Yorkshire Diamonds",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172469/yorkshire-diamonds.jpg"
    },
    {
      "id": "418",
      "title": "Western Storm",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172468/western-storm.jpg"
    },
    {
      "id": "417",
      "title": "Southern Vipers",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c172467/southern-vipers.jpg"
    },
    {
      "id": "345",
      "title": "Gujarat Lions",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c226174/gujarat-lions.jpg"
    },
    {
      "id": "346",
      "title": "Rising Pune Supergiant",
      "image": "https://static.cricbuzz.com/a/img/v1/72x54/i1/c226175/rising-pune-supergiant.jpg"
    }
  ]
}
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
});

export default imagesSlice.reducer;
