import h3lios from "../public/assets/project9.webp";
import p2 from "../public/assets/project-2.png";
import p3 from "../public/assets/project-3.png";
import p4 from "../public/assets/project-4.png";
import p5 from "../public/assets/project-5.png";
import p6 from "../public/assets/project-6.png";
import bookswap from "../public/assets/bookswap.png";
import nikhilpn from "../public/assets/nikhilpn-com.png";
import cloudshare from "../public/assets/cloudshare.png";
import newsletter from "../public/assets/newsletter.png";
import spotify from "../public/assets/spotify.png";
import urlShortner from "../public/assets/url.png";
import floating from "../public/assets/floatinghome.png";
import producthouse from "../public/assets/producthouse.png";
import portfolio2023 from "../public/assets/website.png";
import netflix from "../public/assets/netflix.png";
import ecommerce from "../public/assets/ecommerce.png";
import weather from "../public/assets/weather.png";

export const filters = [
  {
    name: "Top",
    id: "top",
  },
  {
    name: "Frontend",
    id: "frontend",
  },
  {
    name: "Backend",
    id: "backend",
  },
  {
    name: "Android",
    id: "android",
  },
  {
    name: "BlockChain",
    id: "blockchain",
  },
];

export const projects = [
  {
    name: "BookSwap | Exchange Your Books",
    image: bookswap,
    tags: ["top", "frontend"],
    link: "https://bookswap-colab.vercel.app",
    github: "https://github.com/nikhil-pn/BookSwap",
  },
  {
    name: "H3lios.in | Ecommerce Website",
    image: h3lios,
    tags: ["top", "frontend"],
    link: "http://h3lios.in",
    github: "https://github.com/nikhil-pn/h3lios.in",
  },
  {
    name: "CloudShare | Node",
    image: cloudshare,
    tags: ["top", "backend"],
    link: "http://cloudshare.onrender.com/",
    github: "https://github.com/nikhil-pn/Cloud-Share",
  },
  {
    name: "NikhilPn.com | Portfolio Website",
    image: nikhilpn,
    tags: ["top", "frontend"],
    link: "http://nikhilpn.com",
    github: "https://github.com/nikhil-pn/NikhilPn.com",
  },
  {
    name: "NewsLetter | Waitlist Website ",
    image: newsletter,
    tags: ["top", "frontend"],
    link: "https://h3lios-newsletter.vercel.app/",
    github: "https://github.com/nikhil-pn/news-letter",
  },
  {
    name: "Spotify | Vanilla JavaScript",
    image: spotify,
    tags: ["top", "frontend"],
    link: "https://spotify-vanila-js.netlify.app/",
    github: "https://github.com/nikhil-pn/Spotify-Clone-JS-Tailwind",
  },
  {
    name: "URL Shortner | Node",
    image: urlShortner,
    tags: ["top", "backend"],
    link: "https://url-shortner-sh3s.onrender.com/",
    github: "https://github.com/nikhil-pn/URL-Shortner-Node",
  },
  {
    name: "Floating Scooter | Android",
    image: floating,
    tags: ["top", "android"],
    github: "https://github.com/nikhil-pn/FloatingScooter",
    link: "https://www.youtube.com/shorts/-6y7DtuBcJ4",
  },
  {
    name: "Product House | Android",
    image: producthouse,
    tags: ["top", "android"],
    github: "https://github.com/nikhil-pn/producthouse",
    link: "https://www.youtube.com/watch?v=p1AHYaB3hQ4&ab_channel=H3liosDesign",
  },
  {
    name: "Single-Page Website | Next.js",
    image: portfolio2023,
    tags: ["frontend"],
    github: "https://github.com/nikhil-pn/portfolio-2023-next.js",
    link: "https://portfolio-2023-next-js.vercel.app/",
  },
  {
    name: "NetFlix | TypeScript",
    image: netflix,
    tags: ["frontend"],
    github: "https://github.com/nikhil-pn/Netflix-Typescript-React-Tailwind",
    link: "https://netflix-autoplay-banner-page.netlify.app/",
  },
  {
    name: "React Ecommerce | Redux",
    image: ecommerce,
    tags: ["frontend"],
    github: "https://github.com/nikhil-pn/E-Commerce-Firebase-Redux-DN",
    link: "https://e-commerce-nikhilpn.netlify.app/",
  },
  {
    name: "Weather App | JavaScript",
    image: weather,
    tags: ["frontend"],
    github: "https://github.com/nikhil-pn/Weather-App-Javascript",
    link: "https://weather-now-nikhil-pn.netlify.app/",
  },
  
  // {
  //   name: "H3lios.in Ecommerce for Fullstack Apps",
  //   image: p1,
  //   tags: ["frontend"],
  //   link: "http://h3lios.in",
  // },
  // {
  //   name: "H3lios.in Ecommerce for Fullstack Apps",
  //   image: p1,
  //   tags: ["top"],
  //   link: "http://h3lios.in",
  // },
];

export const achievements = [
  {
    id: 1,
    year: 70,
    description: "SUCCESSFULLY<br />COMPLETED<br />ORDERS",
  },
  {
    id: 2,
    year: 5,
    description: "YEARS OF<br /> FREELANCE <br/> EXPERIENCE",
  },
  {
    id: 3,
    year: 50,
    description: "Open <br/>source <br/>Projects",
  },
  {
    id: 4,
    year: 12,
    description: "Thousand <br/>Istagram<br />Followers",
  },
];

export const dataClient = [
  {
    name: "Dancercilla",
    country: "United States",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/37429985/original/Headshot_Priscilla.JPG",
    review:
      "Great designer and goes above and beyond to create the product you want! Very pleased with this seller and communication.",
  },
  {
    name: "oliviakissper",
    country: "Costa Rica",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/41467605/original/13516531_10153772466048041_8975832771536869311_n.jpg",
    review:
      "Amazing delivery! I used this twice already, and this time I didn't explain what I wanted clearly but the seller was very patient and went the extra mile, so thank you! It looks amazing also!",
  },
  {
    name: "dennismero",
    country: "United States",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/f1f9b9df670a9d08ec7d8afa63a1df2d-847216781619449395080/JPEG_20210426_110314_5884109354528585908.jpg",
    review: "fantastic work!",
  },
  {
    name: "darrylkelly687",
    country: "United States",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/246ff6bc5417047cc319f9bb617cc377-1613356203364/c05ee632-8a6e-4e6f-9124-de5d33633948.jpg",
    review: "This is perfect. Thank you so much!",
  },
  {
    name: "sam_young9724",
    country: "United Kingdom",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6139f98c6649736719fa02b6afb2389b-1585835058122/2095f7d1-9413-457f-a560-ce26d1f42dd4.jpg",
    review:
      "Extremely helpful and quick to respond, I had a revision which was dealt with effectively",
  },
  {
    name: "jeanmateo770",
    country: "united states",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6040bd298cbb8b93f70f531c657b0d9e-902053871603934835.734736/C86390BE-F9D8-4751-8663-338D732D7A9F",
    review: "best on fiverr",
  },
  {
    name: "jerzflow2001",
    country: "united states",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/b550dee2e4260413c229d88812b3dc36-693813091586929894.2713509/96190A82-A8FA-4E29-BAA2-E5DF4AD8F787",
    review: "amazing work he really works with you",
  },
  {
    name: "chinadawl187",
    country: "united states",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8bcf8e800b355726df48ce3fd114d163-880244491589039670.078141/77608CE5-AF86-4BD8-BEA0-7BE4DE8D1153",
    review: "Thank you so much- excellent work and communication",
  },
  {
    name: "cedricseancemar",
    country: "kenya",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/fb62fe18ce72e1f089756b1f6e318b2c-1568999380217/aa50d0cb-1f59-4ccb-b256-a88d12b05efe.jpg",
    review: "I love the work. Keep it up :)",
  },
];
