/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Data from '../data.json';
import TagComponent from './TagComponent';
const Profile = () => {
  const [details, setDetails] = useState(Data);
  const [tags, setTags] = useState([]);
  const handleRemove = (tag) => {
    setTags(tags.filter(tags => tags !== tag))
  }

  const handleClick = (tag, id) => {
    if (!tags.includes(tag)) {
      setTags((prev) => [...prev, tag]);
    }
  };

  const handleClear = () => {
    setTags([])
  }
  
  const filteredProfiles = details.filter(profile => {
   const newFilter = [
      profile.role,
      profile.level,
      ...profile.languages,
      ...profile.tools,
    ]
    // Return true if any of role, languages, or tools match
    return tags.every(filter => newFilter.includes(filter))
  });

  
  console.log(filteredProfiles);

  return (
    <div className="space-y-4 w-4/5 mx-auto">
      <div className="w-full h-12 mb-6">
        <TagComponent tags={tags} removeTag={handleRemove} handleClear={handleClear} />
      </div>
      {(filteredProfiles).map((profile) => (
        <div
          key={profile.id}
          className={`flex items-center p-4 bg-white rounded-lg shadow-md shadow-Breaker-Bay/4 ${(profile.id === 1 || profile.id === 2)  ? "border-l-2 border-Dark-Grayish-Cyan" : ""} `}
        >{
          console.log(profile.id)}
          <img
            src={profile.logo}
            alt={`${profile.company} logo`}
            className="w-16 h-16 mr-4"
          />
          <div className="flex-grow">
            <div className="flex items-center space-x-2">
              <h2 className="text-md font-bold text-Breaker-Bay">
                {profile.company}
              </h2>
              {profile.new && (
                <span className="text-xs font-semibold text-white bg-Breaker-Bay px-1  rounded-full uppercase">
                  New!
                </span>
              )}
              {profile.featured && (
                <span className="text-xs font-semibold text-white bg-gray-900 px-1 rounded-full uppercase">
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-md text-start font-bold text-gray-800 hover:text-Breaker-Bay cursor-pointer ">
              {profile.position}
            </h3>
            <div className="text-gray-400 text-xs font-semibold text-start flex gap-3">
              <span>{profile.postedAt}</span> <span>•</span>{' '}
              <span>{profile.contract}</span> <span>•</span>
              <span>{profile.location}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            {[
              profile.role,
              profile.level,
              ...profile.languages,
              ...profile.tools,
            ].map((tag, index) => (
              <span
                onClick={() => handleClick(tag, index)}
                key={index}
                className="text-sm font-semibold text-Breaker-Bay bg-teal-100 px-2 py-1 rounded-md cursor-pointer hover:text-white hover:bg-Breaker-Bay"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
