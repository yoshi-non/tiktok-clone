import axios from 'axios'
import NoResults from '../components/NoResults'
import VideoCard from '../components/VideoCard'
import { Video } from '../types'

interface IProps {
  videos: Video[]
}

const Home = ({videos}: IProps) => {
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

export const getServerSideProps = async ({
  query: { topic }
} : {
  query: { topic: string }
}) => {
  let response = null
  if (topic) {
    response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/discover/${topic}`)
  } else {
    response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`)
  }

  return {
    props: {
      videos: response.data
    }
  }
}

export default Home
