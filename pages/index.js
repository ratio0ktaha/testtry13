import Head from 'next/head'
import Cards from '../components/Cards';
import Feature from "../components/Feature";
import Hero from "../components/homelander";
import LaunchOption from '../components/LaunchOption';
import Navbar from "../components/Navbar";
import PlatformFeatures from '../components/PlatformFeatures';
import Topics from '../components/Topics';
import Users from '../components/user';
import background from '../public/image/bg2.png';


export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
        <Navbar />
        <Hero/>
        <Feature />
        <Users />
        <Topics />
        <LaunchOption />
        <Cards />
        <PlatformFeatures />
    </div>
  )
}