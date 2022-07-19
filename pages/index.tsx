import axios from 'axios'
import NoResults from '../components/NoResults'
import VideoCard from '../components/VideoCard'
import { Video } from '../types'

interface IProps {
  videos: Video[]
}

const Home = ({videos}: IProps) => {
  console.log(videos)
  return (
    <h1 className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id}/>
        ))
      ) : (
        <NoResults text={"No Videos"} />
      )}
    </h1>
  )
}

export const getServerSideProps = async () => {
  const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`)

  return {
    props: {
      videos: data
    }
  }
}

export default Home
