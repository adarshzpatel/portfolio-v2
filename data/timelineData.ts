export interface TimelineItem {
  from: string;
  to: string;
  title: string;
  tags: string[];
  description: string;
  additionalInfo?: string[];
  href?: string;
}

export const timelineData: TimelineItem[] = [
  {
    from: "2022 August - Now",
    to: "",
    title: "Joined Web3Bharat",
    tags: ["Community Leader","Mentor"],
    description:
      "Started my journey as a community leader for Web3Bharat BuidlHub in my college.",

    href: "https://github.com/adarshzpatel/tezmint",
  },
  {
    from: "2022 August",
    to: "",
    title: "TezAsia Hackathon 2022",
    tags: ["Frontend Engineer"],
    description:
      "Built TezMint , a nft minting platform where users can upload their image and mint it as NFT on Tezos blockchain ",
    additionalInfo: [
      "Selected among Top 10 projects",
    ],
    href: "https://github.com/adarshzpatel/tezmint",
  },
  {
    from: "2022 June",
    to: "Now",
    title: "PRNTS",
    tags: ["Frontend Engineer"],
    description:
      "A collaborative web3 social platform for music fans to connect with their favorite artists, and invest into their future revenues ",
    additionalInfo: [
      "Built whole frontend from scratch using React / Typescript / TailwindCss",
      "Developed component library for internal use",
    ],
    href: "https://prnts.vercel.app",
  },
  {
    from: "2022 March",
    to: "2022 April",
    title: "ETHhernals Hackathon by ETHIndia",
    tags: ["Fullstack Web3 Dev",],
    description: "Built Superstream a fully decentralized video nft sharing and livestreaming platform , and won the following bounty ",
    additionalInfo: ["Best Video NFT Platform made using Livepeer "],
    href:'https://devfolio.co/projects/superstream-b9e8'
  },
  {
    from: "2022 February",
    to: "",
    title: "Road to Web3 Hackathon by ETHGlobal",
    tags: ["Frontend Developer"],
    description: "Built a DeFi dapp where DAOs, users can lend and borrow loans in form of streams ( paid per second ) using Superfluid protocol and won the following bounties -",
    additionalInfo: ["Best Use of Chainlink","Best Overall project built on Superfluid"],
    href:'https://showcase.ethglobal.com/roadtoweb3/the-loan-stream'
  },
  {
    from: "2021 Nov",
    to: "2022 Jan",
    title: "DIGI-K-LABS",
    tags: ["Software Engineer Intern"],
    description: "Contributed to Lightvue component library which is used in many of their sass products",
    href:''
  },
];

