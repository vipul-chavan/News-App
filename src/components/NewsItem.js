import React from 'react'

const NewsItem = (props) => {

    let {title,description,imageUrl,newsUrl,author,date} = props
    return (
      <div>
<div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-105 ">
    <a href={newsUrl} target='_blank' rel="noopener noreferrer">
        <img className="rounded-t-lg" src={! imageUrl ? "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : imageUrl} alt="" />
    </a>
    <div className="p-5">
        <a href={newsUrl} target='_blank' rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}...</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}...</p>
            <p className="mb-3 font-light text-sm text-gray-700 dark:text-gray-400">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</p>
        </a>
        <a target='_blank' rel="noopener noreferrer" href={newsUrl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
      </div>
    )
  
}

export default NewsItem
