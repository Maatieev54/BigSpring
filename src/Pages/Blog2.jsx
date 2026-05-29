import React from 'react'
import { Link } from 'react-router'

function Blog2() {
  return (
    <>
     <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-white">
			<img src="https://themewagon.github.io/bigspring/images/blog-4.jpg" alt="img-1" className="object-cover w-full h-64 rounded-4xl sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl hover:text-[#09A8A7]">Adversus is a web-based dialer and practical CRM solution</h3>
				<span className="text-xs dark:text-gray-600">May 30, 2026</span>
				<p className='text-[#777777]'>##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## </p>
			</div>
		</a>
		
		
	</div>
    {/* ------ pagination ------ */}
    <div className="flex w-full justify-center mx-auto space-x-1 dark:text-gray-800 py-1.5">
	
	<Link to={'/Blog'} className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100">1</Link>

	<button type="button" title="Page 2" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600">2</button>
	
</div>
    
    </>
  )
}

export default Blog2
