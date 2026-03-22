import { useLoaderData } from 'react-router'
import './Home.css'
import Facts from './components/Facts/Facts'
import HeroBanner from './components/HeroBanner/HeroBanner'
import TopRatedApps from './components/Pages/TopRatedApps/TopRatedApps';

function Home() {
  const data = useLoaderData();
  return (
    <>
      <HeroBanner></HeroBanner>
      <Facts></Facts>
      <TopRatedApps key={data.id} data={data}></TopRatedApps>
    </>
  )
}

export default Home
