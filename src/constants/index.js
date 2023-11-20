import {
  insta_logo,
  fb_logo,
  x_logo,
  linkedin_logo,
  youtube_logo,
  photo8,
  photo9,
  photo10,
  profile_icon,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "certificates",
    title: "Our Certificates",
  },
  {
    id: "recognition",
    title: "Our Recognition",
  },
  {
    id: "donate",
    title: "Donate",
  },
];

export const socials = [
  {
    id: 1,
    name: "Facebook",
    icon: fb_logo,
    link: "https://www.facebook.com/nayepankhfoundation/",
  },
  {
    id: 2,
    name: "Twitter",
    icon: x_logo,
    link: "https://twitter.com/nayepankh?lang=en",
  },
  {
    id: 3,
    name: "Instagram",
    icon: insta_logo,
    link: "https://www.instagram.com/nayepankhfoundation/",
  },
  {
    id: 4,
    name: "Youtube",
    icon: youtube_logo,
    link: "https://www.youtube.com/@nayepankhfoundation",
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: linkedin_logo,
    link: "https://www.linkedin.com/company/nayepankh/",
  },
];

export const successStories = [
  {
    id: 1,
    title: "Spreading Smiles on Friendship Day",
    description:
      "Celebrating the magic of friendship with a heartwarming twist! At Nayepankh Foundation, we come together to share joy with underprivileged roadside children, lighting up their lives one smile at a time.",
    imageUrl: photo8,
  },
  {
    id: 2,
    title: "Knowledge is Power",
    description:
      "Through our dedicated team of educators and volunteers, we work tirelessly to create safe and nurturing learning environments, where every child feels valued and empowered to reach their full potential. Together, we are rewriting the narratives and giving wings to their dreams.",
    imageUrl: photo9,
  },
  {
    id: 3,
    title: "Feeding the Needy",
    description:
      "We firmly believe that no one should be deprived of a basic necessity like food. Through our feeding programs, we aim to break the cycle of poverty, nourish bodies, and inspire minds. We strive to create a world where everyone has equal access to nutritious meals and the opportunity to thrive.",
    imageUrl: photo10,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Volunteer",
    quote:
      "The experience of volunteering with Nayepankh has been incredibly rewarding. I've seen the impact of our work firsthand.",
    profile: profile_icon,
  },
  {
    id: 2,
    name: "Anonymous",
    role: "Beneficiary",
    quote:
      "I am grateful for the support I received from Nayepankh. Their help during the covid time really means a lot to a lot of people like me.",
    profile: profile_icon,
  },
  {
    id: 3,
    name: "Jane Doe",
    role: "Volunteer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et est erat. Morbi facilisis ultricies urna malesuada faucibus.",
    profile: profile_icon,
  },
];

export const events = [
  {
    id: 1,
    title: "Food Donation",
    date: "November 25, 2023",
    location: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et est erat.",
  },
  {
    id: 2,
    title: "Shelter Home Visit at Hyderabad",
    date: "December 10, 2023",
    location: "Lorem ipsum dolor sit",
    description:
      "Morbi facilisis ultricies urna malesuada faucibus. Proin pharetra, sapien ac elementum volutpat, nunc ligula rhoncus ante, quis congue dui mauris vel enim.",
  },
];
