import { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import { Video } from '../types'
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi"
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"
import { GoVerified } from "react-icons/go"
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
    post: Video
}

const VideoCard: NextPage<IProps> = ({post}: IProps) => {
    const [isHover, setIsHover] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [isVideoMuted, setIsVideoMuted] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const onVideoPress = () => {
        if(playing) {
            videoRef?.current?.pause()
            setPlaying(false)
        } else {
            videoRef?.current?.play()
            setPlaying(true)
        }
    }

    useEffect(() => {
        if (videoRef?.current) {
            videoRef.current.muted = isVideoMuted
        }
    }, [isVideoMuted])
    
  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
      <div>
        <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
            <div className='md:w-16 md:h-16 w-10 h-10'>
                <Link href={`/profile/${post.postedBy._id}`}>
                    <>
                        <Image
                            width={62}
                            height={62}
                            className="rounded-full object-contain"
                            src={post.postedBy.image}
                            alt="profile photo"
                            layout='responsive'
                        />
                    </>
                </Link>
            </div>
            <div>
                <Link href={`/profile/${post.postedBy._id}`}>
                    <div className='flex items-center gap-2'>
                        <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
                            {post.postedBy.userName}{``}
                            <GoVerified className='text-blue-400 text-md'/>
                        </p>
                        <p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>
                            {post.postedBy.userName}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
      </div>
      <div className='lg:ml-20 flex gap-4 relative w-[80%] bg-black items-center justify-center rounded-2xl'>
        <div 
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)} 
            className='rounded-3xl w-[100%]'
        >
            <Link href={`/detail/${post._id}`}>
                <video
                    loop
                    ref={videoRef}
                    className='w-[100%] h-[350px] rounded-2xl cursor-pointer'
                    src={post.video.asset.url}
                >
                </video>
            </Link>
            {isHover && (
                <div className='absolute bottom-0 rounded-b-2xl bg-gradient-to-t from-[#474646cc] cursor-pointer flex justify-around w-[100%] p-3'>
                    {playing ? (
                        <button onClick={onVideoPress}>
                            <BsFillPauseFill className='text-white text-2xl lg:text-4xl'/>
                        </button>
                    ) : (
                        <button onClick={onVideoPress}>
                            <BsFillPlayFill className='text-white text-2xl lg:text-4xl'/>
                        </button>
                    )}
                    {isVideoMuted ? (
                        <button onClick={() => setIsVideoMuted(false)}>
                            <HiVolumeOff className='text-white text-2xl lg:text-4xl'/>
                        </button>
                    ) : (
                        <button onClick={() => setIsVideoMuted(true)}>
                            <HiVolumeUp className='text-white text-2xl lg:text-4xl'/>
                        </button>
                    )}
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default VideoCard
