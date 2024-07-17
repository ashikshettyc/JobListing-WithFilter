/* eslint-disable react/prop-types */

const TagComponent = ({ tags, removeTag, handleClear }) => {
  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-Light-Grayish-cyan-200 shadow-sm shadow-Breaker-Bay/60 rounded-lg">
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center bg-Dark-Grayish-Cyan/40 text-white rounded-md">
            <span className="px-2 ">{tag}</span>
            <button
              onClick={() => removeTag(tag)}
              className="flex items-center justify-center bg-Breaker-Bay hover:bg-black px-1 hover:text-white h-full focus:outline-none rounded-r-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button onClick={handleClear} className="text-Breaker-Bay hover:text-teal-900 focus:outline-none ml-2">
        Clear
      </button>
    </div>
  );
};

export default TagComponent;
