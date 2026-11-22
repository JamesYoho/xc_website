export type TeamDivision = "women" | "men";

export interface Stat {
  label: string;
  value: string;
}

export interface Finalist {
  id: string;
  name: string;
  classYear: string;
  photoUrl: string;
  bio?: string;
  stats: Stat[];
  highlights?: string[];
}

export interface Award {
  slug: string;
  title: string;
  description: string;
  accentColor: string;
  bgImage?: string;
  finalists: Record<TeamDivision, Finalist[]>;
}

export const AWARDS: Award[] = [
  {
    slug: "wolverine",
    title: "Wolverine Award",
    description:
      "Honoring athletes who exemplify character, faith, leadership, and selfless dedication to the team.",
    accentColor: "#C8102E",
    bgImage: "/images/Wolverine.jpg",
    finalists: {
      women: [
        {
          id: "wolverine-w-erikaabigail",
          name: "Erika and Abigail",
          classYear: "Sophomore/Junior",
          photoUrl: "/images/ErikaAbigail.webp",
          bio: "Nominated as a pair, Abigail and Erika continually stepped up throughout the season to finish as the final scorers for the team, leading the team to succes through the regular and post season. They’ve worked hard and have been a positiveinfluence on the rest of the women with their positive personalities and desire to compete at a high level.",
          stats: [
          ]

        },
        {
          id: "wolverine-w-alayna",
          name: "Alayna Bishop",
          classYear: "Senior",
          photoUrl: "/images/Alayna.webp",
          bio: "A supportive and caring leader who has continually worked to ensure every woman on the team feels like they have a purpose and belong. She's also helped the team focus on serving the community as the primary organizer of the team's involvement in the campus serve day and her own church's serve day.",
          stats: [
            { label: "6K PR", value: "24:46.1" },
            { label: "5K PR", value: "20:02.7" },
            { label: "PACs", value: "46th" },
          ],
        },
        {
          id: "wolverine-w-grace",
          name: "Grace Fredricks",
          classYear: "Freshman",
          photoUrl: "/images/Grace.webp",
          bio: "Kind and supportive, Grace has been a believer in her team's potential from the start and has approached each workout and run with joy. She's also been consistently pursuing the Lord and truly uses the sport as a way to explore and deepen her faith.",
          stats: [
            { label: "6K PR", value: "28:18.4" },
            { label: "PACs", value: "84th" },
          ],
        },
        {
          id: "wolverine-w-stella",
          name: "Stella Rapp",
          classYear: "Freshman",
          photoUrl: "/images/Stella.webp",
          bio: "Despite many health struggles throughout the season, she has been consistently positive in her outlook and supportive of her teammates. Her hard work through the summer translating early in the season was integral to the women's success as a team, as she was a major part of the team seeing for themselves the full extent of their potential and beginning to fully believe in how good they could be. She also may be the only athlete I've seen that can actually mentally push herself beyond the limits of her own body just for the love of competing.",
          stats: [{ label: "6K PR", value: "24:47.9" }],
          highlights: ["PAC Sportsmanship Team"],
        },
      ],
      men: [
        {
          id: "wolverine-m-josh",
          name: "Josh Haley",
          classYear: "Junior",
          photoUrl: "/images/Josh.webp",
          bio: "Passionate about the sport and does everything he's asked and more to continue to improve. He doesn't skip any of the small details and truly believes in his own ability and the team's ability to be able to perform at a high level. This belief and attention to detail has not only led to consistent improvement individually but has been an example to the team of how to be a student of the sport and give full attention to doing what's required to compete at the highest level.",
          stats: [
            { label: "8K PR", value: "27:58.2" },
            { label: "5K PR", value: "16:14.5" },
            { label: "PACs", value: "25th" },
          ],
        },
        {
          id: "wolverine-m-carter",
          name: "Carter Williams",
          classYear: "Freshman",
          photoUrl: "/images/Carter.webp",
          bio: "As a freshman, he has already demonstrated a strong desire to continue to grow deeper in his faith as well as the work ethic needed to be the best version of himself as an athlete. He's seen consistent improvement and taken risks in workouts and races to push himself to a higher level.",
          stats: [
            { label: "8K PR", value: "26:58.8" },
            { label: "5K PR", value: "15:58.7" },
            { label: "PACs", value: "34th" },
          ],
          highlights: ["PAC Sportsmanship Team"],
        },
        {
          id: "wolverine-m-james",
          name: "James Yoho",
          classYear: "Senior",
          photoUrl: "/images/James.webp",
          bio: "One of the most respected members of the men's team by his teammates for all four years he's been a member of the program for his character and faith. In turn, he is very loyal to his teammates and friends. His leadership as chaplain and now captain has been integral in establishing a culture and expectation of greater excellence on the men's team. He's also the lone member of the senior class to have been a varsity runner all 4 years of his career.",
          stats: [
            { label: "8K PR", value: "27:10.1" },
            { label: "PACs", value: "16th" },
            { label: "Region", value: "88th" },
          ],
          highlights: ["4-Year Varsity Runner", "Team Captain & Former Chaplain"],
        },
      ],
    },
  },
  {
    slug: "most-improved",
    title: "Most Improved",
    description:
      "Recognizing the athletes who made the biggest leaps in times and championship finishes.",
    accentColor: "#059669",
    finalists: {
      women: [
        {
          id: "mi-w-rebekah-burger",
          name: "Rebekah Burger",
          classYear: "Junior",
          photoUrl: "/images/Rebekah.webp",
          stats: [
            { label: "6K", value: "24:17.8 → 22:20.1" },
            { label: "5K", value: "18:59.3 → 17:57.4" },
            { label: "PACs", value: "20th → 3rd" },
            { label: "Region", value: "67th → 24th" },
          ],
        },
        {
          id: "mi-w-emily-king",
          name: "Emily King",
          classYear: "Sophomore",
          photoUrl: "/images/Emily.webp",
          stats: [{ label: "5K", value: "23:51.6 → 21:15.5" }],
          highlights: ["First year competing"],
        },
        {
          id: "mi-w-lily-lawson",
          name: "Lily Lawson",
          classYear: "Junior",
          photoUrl: "/images/Lawson.webp",
          stats: [
            { label: "6K", value: "28:20.2 → 25:09.0" },
            { label: "PACs", value: "68th → 65th" },
          ],
        },
      ],
      men: [
        {
          id: "mi-m-jacob-call",
          name: "Jacob Call",
          classYear: "Senior",
          photoUrl: "/images/Call.webp",
          stats: [
            { label: "8K", value: "31:08.0 → 27:55.3" },
            { label: "5K", value: "16:56.2 → 16:26.3" },
            { label: "PACs", value: "39th" },
          ],
        },
        {
          id: "mi-m-sam-elston",
          name: "Sam Elston",
          classYear: "Sophomore",
          photoUrl: "/images/Sam.webp",
          stats: [
            { label: "8K", value: "29:01.1 → 26:45.4" },
            { label: "5K", value: "16:28.6 → 15:55.4" },
            { label: "PACs", value: "24th → 18th" },
          ],
        },
        {
          id: "mi-m-isaiah-weindelmayer",
          name: "Isaiah Weindelmayer",
          classYear: "Senior",
          photoUrl: "/images/Isaiah.webp",
          stats: [
            { label: "8K", value: "30:31.8 → 28:47.9" },
            { label: "5K", value: "17:40.3 → 17:12.4" },
            { label: "PACs", value: "64th → 53rd" },
          ],
        },
      ],
    },
  },
  {
    slug: "freshman-of-the-year",
    title: "Freshman of the Year",
    description:
      "Celebrating the standout first-year contributors making an immediate impact on the program.",
    accentColor: "#3B82F6",
    finalists: {
      women: [
        {
          id: "foy-w-ruth-brownlee",
          name: "Ruth Brownlee",
          classYear: "Freshman",
          photoUrl: "/images/Ruth.webp",
          stats: [
            { label: "6K", value: "25:45.7" },
            { label: "5K", value: "19:57.0" },
            { label: "PACs", value: "45th" },
          ],
          highlights: ["Regional Alternate"],
        },
        {
          id: "foy-w-lily-harrington",
          name: "Lily Harrington",
          classYear: "Freshman",
          photoUrl: "/images/Harrington.webp",
          stats: [
            { label: "6K", value: "24:41.5" },
            { label: "5K", value: "19:51.0" },
            { label: "PACs", value: "48th" },
            { label: "Region", value: "111th" },
          ],
        },
        {
          id: "foy-w-josie-jones",
          name: "Josie Jones",
          classYear: "Freshman",
          photoUrl: "/images/Josie.webp",
          stats: [
            { label: "6K", value: "22:09.2" },
            { label: "5K", value: "17:53.2" },
          ],
          highlights: [
            "10th in Grove City History (6K)",
            "First Team All-PAC",
            "All-Region",
            "PAC Newcomer of the Year",
          ],
        },
      ],
      men: [
        {
          id: "foy-m-isaac-burtt",
          name: "Isaac Burtt",
          classYear: "Freshman",
          photoUrl: "/images/Burtt.webp",
          stats: [
            { label: "8K", value: "26:25.3" },
            { label: "5K", value: "15:34.3" },
            { label: "PACs", value: "8th" },
            { label: "Region", value: "49th" },
          ],
          highlights: ["16th in Grove City History (8K)", "Team #2"],
        },
        {
          id: "foy-m-isaac-esh",
          name: "Isaac Esh",
          classYear: "Freshman",
          photoUrl: "/images/Esh.webp",
          stats: [{ label: "8K", value: "26:48.3" }],
          highlights: ["Regional Alternate"],
        },
        {
          id: "foy-m-carson-wilt",
          name: "Carson Wilt",
          classYear: "Freshman",
          photoUrl: "/images/Carson.webp",
          stats: [
            { label: "8K", value: "26:39.1" },
            { label: "Region", value: "70th" },
          ],
          highlights: [
            "24th in Grove City History (8K)",
            "Honorable Mention All-PAC",
          ],
        },
      ],
    },
  },
  {
    slug: "mvp",
    title: "Most Valuable Runner",
    description:
      "Awarded to the top competitive performers leading the Wolverines through championship season.",
    accentColor: "#D3AF37",
    finalists: {
      women: [
        {
          id: "mvp-w-rebekah-burger",
          name: "Rebekah Burger",
          classYear: "Junior",
          photoUrl: "/images/Rebekah.webp",
          stats: [
            { label: "6K", value: "22:20.1" },
            { label: "PACs", value: "3rd" },
            { label: "Region", value: "24th" },
          ],
          highlights: ["15th in Grove City History (6K)"],
        },
        {
          id: "mvp-w-josie-jones",
          name: "Josie Jones",
          classYear: "Freshman",
          photoUrl: "/images/Josie2.webp",
          stats: [
            { label: "6K", value: "22:09.2" },
            { label: "PACs", value: "4th" },
            { label: "Region", value: "20th" },
          ],
          highlights: [
            "10th in Grove City History (6K)",
            "PAC Freshman of the Year",
            "Top Runner in 1 Meet",
          ],
        },
        {
          id: "mvp-w-cayla-lawrence",
          name: "Cayla Lawrence",
          classYear: "Senior",
          photoUrl: "/images/Cayla.webp",
          stats: [
            { label: "6K", value: "21:55.4" },
            { label: "PACs", value: "2nd" },
            { label: "Region", value: "32nd" },
          ],
          highlights: [
            "8th in Grove City History (6K)",
            "Top Runner in 4 Meets",
          ],
        },
      ],
      men: [
        {
          id: "mvp-m-isaac-burtt",
          name: "Isaac Burtt",
          classYear: "Freshman",
          photoUrl: "/images/Burtt2.webp",
          stats: [
            { label: "8K", value: "26:25.3" },
            { label: "PACs", value: "8th" },
            { label: "Region", value: "49th" },
          ],
          highlights: [
            "16th in Grove City History (8K)",
            "Team #2 at PACs & Regionals",
          ],
        },
        {
          id: "mvp-m-colsen-frank",
          name: "Colsen Frank",
          classYear: "Sophomore",
          photoUrl: "/images/Colsen.webp",
          stats: [
            { label: "8K", value: "25:24.0" },
            { label: "PACs", value: "4th" },
            { label: "Region", value: "34th" },
          ],
          highlights: [
            "4th in Grove City History (8K)",
            "Top Runner in Every Meet",
          ],
        },
        {
          id: "mvp-m-kaiden-williams",
          name: "Kaiden Williams",
          classYear: "Sophomore",
          photoUrl: "/images/Kaiden.webp",
          stats: [
            { label: "8K", value: "26:31.3" },
            { label: "PACs", value: "14th" },
            { label: "Region", value: "67th" },
          ],
          highlights: ["21st in Grove City History (8K)"],
        },
      ],
    },
  },
];