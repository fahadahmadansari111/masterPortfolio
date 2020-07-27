/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Fahad Ahmad Ansari",
  logo_name: "FahadAhmadAnsari",
  nickname: "Fahad",
  subTitle:
    "A DevOps Engineer passionate about uisng technologies to help deploy more and efficient code more freqently with no downtime. Worked on various cloud platforms like AWS, Azure. Profiient in DevOps technologies like Jenkins, Docker, Kubernetes, Linux and learning more on the go. ",
  resumeLink:
    "https://drive.google.com/file/d/1go6YmEO2ITuMHOFQSQ7PW5vEU5BYWxaN/view?usp=drivesdk",
  portfolio_repository: "https://github.com/fahadahmadansari111/",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/fahadahmadansari111",
  linkedin: "https://www.linkedin.com/in/fahad-ansari-29a7b7102/",
  gmail: "fahadahmadansari@gmail.com",
  gitlab: "https://gitlab.com/fahad-everwell",
  facebook: "https://www.facebook.com/faansari/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/chaichahiye/",
};

const skills = {
  data: [
    {
      title: "Continous Integration and Coninuous Deployment",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Using Jenkins to do continous integration and continous deployment of code automatically",
        "⚡ Experience of working with Java, Maven, Apache Tomcat, Docker, Kubernetes",
        "⚡ Used Ansible playbooks alongwith Jenkins to deploy directly on Kubernetes clusters using kubectl commands",
      ],
      softwareSkills: [
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos-jenkins",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos-kubernetes",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "ion-logo-linux",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "ion-logo-ansible",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Kubernetes Administration",
      fileName: "FullStackImg",
      skills: [
        "⚡ Installed Kubernetes clusters on Jio's Private Cloud(Jio Advanced Web Services-JAWS)",
        "⚡ Installed Kubernetes clusters on AWS using kops and EKS",
        "⚡ Installed Kubernetes clusters on Azure using kubeadm on virtual machines and using AKS",
        "⚡ Deployed various dockerised applications on the Kubernetes cluster manually and automated the deployments using Jenkins and Ansible",
        "⚡ Managed the installed Kuberentes clusters on various cloud platforms",
      ],
      softwareSkills: [
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying various services on Azure Cloud",
        "⚡ Worked on migration of resources from one Azure subscription to another",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "VIT University, Vellore",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "vit_logo.png",
      alt_name: "VIT Vellore",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://vit.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    // 	title: "Machine Learning",
    // 	subtitle: "- Andrew Ng",
    // 	logo_path: "stanford_logo.png",
    // 	certificate_link:
    // 		"https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    // 	alt_name: "Stanford University",
    // 	color_code: "#8C151599"
    // },
    // {
    // 	title: "Deep Learning",
    // 	subtitle: "- Andrew Ng",
    // 	logo_path: "deeplearning_ai_logo.png",
    // 	certificate_link:
    // 		"https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    // 	alt_name: "deeplearning.ai",
    // 	color_code: "#00000099"
    // },
    // {
    // 	title: "ML on GCP",
    // 	subtitle: "- GCP Training",
    // 	logo_path: "google_logo.png",
    // 	certificate_link:
    // 		"https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    // 	alt_name: "Google",
    // 	color_code: "#0C9D5899"
    // },
    // {
    // 	title: "Data Science",
    // 	subtitle: "- Alex Aklson",
    // 	logo_path: "ibm_logo.png",
    // 	certificate_link:
    // 		"https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    // 	alt_name: "IBM",
    // 	color_code: "#1F70C199"
    // },
    // {
    // 	title: "Big Data",
    // 	subtitle: "- Kim Akers",
    // 	logo_path: "microsoft_logo.png",
    // 	certificate_link:
    // 		"https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    // 	alt_name: "Microsoft",
    // 	color_code: "#D83B0199"
    // },
    // {
    // 	title: "Advanced Data Science",
    // 	subtitle: "- Romeo Kienzler",
    // 	logo_path: "ibm_logo.png",
    // 	certificate_link:
    // 		"https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    // 	alt_name: "IBM",
    // 	color_code: "#1F70C199"
    // },
    // {
    // 	title: "Advanced ML on GCP",
    // 	subtitle: "- GCP Training",
    // 	logo_path: "google_logo.png",
    // 	certificate_link:
    // 		"https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    // 	alt_name: "Google",
    // 	color_code: "#0C9D5899"
    // },
    // {
    // 	title: "DL on Tensorflow",
    // 	subtitle: "- Laurence Moroney",
    // 	logo_path: "deeplearning_ai_logo.png",
    // 	certificate_link:
    // 		"https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    // 	alt_name: "deeplearning.ai",
    // 	color_code: "#00000099"
    // },
    // {
    // 	title: "Fullstack Development",
    // 	subtitle: "- Jogesh Muppala",
    // 	logo_path: "coursera_logo.png",
    // 	certificate_link:
    // 		"https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    // 	alt_name: "Coursera",
    // 	color_code: "#2A73CC"
    // },
    // {
    // 	title: "Kuberenetes on GCP",
    // 	subtitle: "- Qwiklabs",
    // 	logo_path: "gcp_logo.png",
    // 	certificate_link:
    // 		"https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    // 	alt_name: "GCP",
    // 	color_code: "#4285F499"
    // },
    // {
    // 	title: "Cryptography",
    // 	subtitle: "- Saurabh Mukhopadhyay",
    // 	logo_path: "nptel_logo.png",
    // 	certificate_link:
    // 		"https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    // 	alt_name: "NPTEL",
    // 	color_code: "#FFBB0099"
    // },
    // {
    // 	title: "Cloud Architecture",
    // 	subtitle: "- Qwiklabs",
    // 	logo_path: "gcp_logo.png",
    // 	certificate_link:
    // 		"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    // 	alt_name: "GCP",
    // 	color_code: "#4285F499"
    // }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked in telecom and health sectors as a DevOps Engineer. I have worked with India's top telecom company Reliance Jio where my role was to work on tools to continuously deploy code.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "DevOps Engineer",
          company: "Reliance Jio Infocom Pvt Ltd",
          company_url: "https://jio.com/",
          logo_path: "legato_logo.png",
          duration: "October 2016 - April 2020",
          location: "Mumbai, Maharashtra",
          description:
            "Implemented full CI/CD of Java applications deployed on Apache Tomcat and Kubernetes using Jenkins, Created Dockerfile for various docker projects, Deployed Kubernetes clusters using kubeadm, Deployed dockerised appications on Kubernetes cluster manually and automatically using Jenkins and Ansible",

          color: "#0879bf",
        },
        {
          title: "DevOps Engineer",
          company: "Everwell Health Solutions",
          company_url: "https://www.everwell.org/",
          logo_path: "muffito_logo.png",
          duration: "July 2020 - Present",
          location: "Bengaluru, Karnataka",
          description:
            "Worked on company's Cloud Infrastructre - Azure, Successfully migrated all Azure resources from one subscription to another, Implemented CI/CD pipeline for the Java product.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "System Administrator",
          company: "Reliance Jio Infocomm Pvt. Ltd.",
          company_url: "https://www.jio.com/",
          logo_path: "delhivery_logo.png",
          duration: "June 2015 - July 2015",
          location: "Mumbai, Maharashtra",
          description:
            "Worked on various Linux servers and gained knowlege of Linux.",
          color: "#ee3c26",
        },
      ],
    },
    // {
    // 	title: "Volunteerships",
    // 	experiences: [
    // 		{
    // 			title: "Google Explore ML Facilitator",
    // 			company: "Google",
    // 			company_url: "https://about.google/",
    // 			logo_path: "google_logo.png",
    // 			duration: "June 2019 - April 2020",
    // 			location: "Hyderabad, Telangana",
    // 			description:
    // 				"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    // 			color: "#4285F4",
    // 		},
    // 		{
    // 			title: "Microsoft Student Partner",
    // 			company: "Microsoft",
    // 			company_url: "https://www.microsoft.com/",
    // 			logo_path: "microsoft_logo.png",
    // 			duration: "Aug 2019 - May 2020",
    // 			location: "Hyderabad, Telangana",
    // 			description:
    // 				"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    // 			color: "#D83B01",
    // 		},
    // 		{
    // 			title: "Mozilla Campus Captain",
    // 			company: "Mozilla",
    // 			company_url: "https://www.mozilla.org/",
    // 			logo_path: "mozilla_logo.png",
    // 			duration: "Oct 2019 - May 2020",
    // 			location: "Kurnool, Andhra Pradesh",
    // 			description:
    // 				"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    // 			color: "#000000",
    // 		},
    // 		{
    // 			title: "Developer Students Club Member",
    // 			company: "DSC IIITDM Kurnool",
    // 			company_url:
    // 				"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    // 			logo_path: "dsc_logo.png",
    // 			duration: "Jan 2018 - May 2020",
    // 			location: "Kurnool, Andhra Pradesh",
    // 			description:
    // 				"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    // 			color: "#0C9D58",
    // 		},
    // 		{
    // 			title: "Developer Program Member",
    // 			company: "Github",
    // 			company_url: "https://github.com/",
    // 			logo_path: "github_logo.png",
    // 			duration: "July 2019 - PRESENT",
    // 			location: "Work From Home",
    // 			description:
    // 				"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
    // 			color: "#181717",
    // 		},
    // 	],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is working on automation tools like Jenkins, Terraform",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Fahad.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with DevOps technologies like Jenkins, Linux, Ansible, Docker, Kubernetes and Cloud.",
  },
  blogSection: {
    title: "Android lover",
    subtitle:
      "I am a big Android lover. As soon as the new version releases, I download it on my device even if its an unstable build.",
    link: "https://instagram.com/chaichahiye/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "701, Triumph Tower, Omaxe Heights, Vibhuti Khand, Gomti Nagar, Lucknow - 226010",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/oVZ89Zmt1mpbHfFD9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9082961239/9597440846",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
