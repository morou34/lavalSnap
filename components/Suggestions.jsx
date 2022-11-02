import { NewspaperIcon } from '@heroicons/react/24/outline';
import minifaker from 'minifaker'
import { useEffect, useState } from 'react'
export default function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(()=>{
        const newSuggestions = minifaker.array(5, (i) => (
            {
                username: minifaker.username({locale:"en"}).toLocaleLowerCase(),
                jobTitle: minifaker.jobTitle(),
                id: i,
            }
        ))
        setSuggestions(newSuggestions)
        }, []);

  return (
    <div className="ml-5 mt-4">
        
        <div className="flex justify-between mb-5 text-sm ">
            <h3 className="font-bold text-gray-400">Suggestion for you</h3>

            <button className="text-gray-600 font-semibold">See all</button>
        </div>
        {suggestions.map(suggestion => (
            <div className="flex items-center justify-between mt-3">
                <img className='h-10 rounded-full border p-[2px]' src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="" />
                <div className='flex-1 ml-4'>
                    <h2 className="font-semibold text-sm cursor-pointer">{suggestion.username}</h2>
                    <h3 className="text-sm text-gray-400 truncate w-[230px]">{suggestion.jobTitle}</h3>
                </div>
                <button className="font-semibold text-blue-400 text-sm blue_btn">
            Follow
          </button>
            </div>
        ))}
    </div>
  )
}
