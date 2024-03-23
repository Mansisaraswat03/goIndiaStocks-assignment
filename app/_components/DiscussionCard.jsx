import { HeartIcon, EyeIcon, ChatIcon, ShareIcon, ClockIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const DiscussionCard = ({img,name,description,time}) => {
  return (
    <div className=" mx-10 bg-white rounded-xl overflow-hidden shadow-md mt-6">
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image className="rounded-full" height={20} width={20} src={img} alt="Profile"/>
          <div>
            <h1 className="font-semibold">{name}</h1>
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <ClockIcon className="h-6 w-6 text-gray-400 mr-2" />
          <p className="text-sm text-gray-500">{time} ago</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <button className="text-blue-500 hover:text-blue-700">Follow</button>
        </div>
        <div className="flex space-x-4">
          <HeartIcon className="h-6 w-6 text-gray-400" />
          <EyeIcon className="h-6 w-6 text-gray-400" />
          <ChatIcon className="h-6 w-6 text-gray-400" />
          <ShareIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default DiscussionCard;
