//Links
import Link from "next/link";

// icons
import { RiYoutubeLine, RiInstagramLine , RiFacebookBoxLine, RiDiscordLine, RiBehanceLine, RiPinterestLine, RiTwitchLine, RiRedditLine, RiGithubLine, RiMailAddLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri';

const Socials = () => {
  return <div className="flex items-center gap-x-7 text-xl">
    <Link href={'https://github.com/KenanGain/KenanGain'} className="hover:text-accent hover:animate-bounce transition-all duration-300"><RiGithubLine/></Link>
    <Link href={'https://www.youtube.com/channel/UCJmBG8lD1-aj1HQr4PFT-XQ'} className="hover:text-accent hover:animate-bounce transition-all duration-300"><RiYoutubeLine/></Link>
    <Link href={'https://www.instagram.com/knightgamer87/?hl=en'} className="hover:text-accent hover:animate-bounce transition-all duration-300"><RiInstagramLine/></Link>
    <Link href={'https://www.facebook.com/kenan.gain'} className="hover:text-accent hover:animate-bounce transition-all duration-300"><RiFacebookBoxLine/></Link>
    <Link href={'https://www.linkedin.com/in/kenan-gain-33048518a/'} className="hover:text-accent hover:animate-bounce transition-all duration-300"><RiLinkedinLine/></Link>
    <Link href={'https://twitter.com/gain_kenan'} className="hover:text-accent transition-all hover:animate-bounce duration-300"><RiTwitterLine/></Link>
    <Link href={'https://discord.com/invite/7uSszWu'} className="hover:text-accent hover:animate-bounce transition-all duration-300"><RiDiscordLine/></Link>
    <Link href={'https://www.behance.net/kenangain'} className="hover:text-accent hover:animate-bounce transition-all duration-300"><RiBehanceLine/></Link>
    <Link href={'https://www.pinterest.ca/automatedartistry2910/'} className="hover:text-accent hover:animate-bounce transition-all duration-300"><RiPinterestLine/></Link>
    <Link href={'https://www.twitch.tv/knightgamer2910'} className="hover:text-accent transition-all hover:animate-bounce duration-300"><RiTwitchLine/></Link>
    <Link href={'https://www.reddit.com/user/Automated_Artistry'} className="hover:text-accent hover:animate-bounce transition-all duration-300"><RiRedditLine/></Link>
    <Link href={'mailto:kenangain2910@gmail.com'} className="hover:text-accent transition-all hover:animate-bounce duration-300"><RiMailAddLine/></Link>
  </div>;
};

export default Socials;
