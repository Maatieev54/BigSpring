import React from 'react'
import { Link } from 'react-router'


function Blog() {
  return (
    <>
    
      <section className="bg-white dark:text-gray-800">
        <h1 className='text-center py-9 text-4xl font-sans md:text-6xl'>Latest news</h1>
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white">
			<img src="https://themewagon.github.io/bigspring/images/blog-4.jpg" alt="img-1" className="object-cover w-full h-64 rounded-4xl sm:h-96 lg:col-span-7 :bg-white" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl hover:text-[#09A8A7]">Adversus is a web-based dialer and practical CRM solution</h3>
				<span className="text-xs dark:text-gray-600">May 30, 2026</span>
				<p className='text-[#777777]'>##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## </p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-white" src="https://themewagon.github.io/bigspring/images/blog-4.jpg"  alt='sekil-2'/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:text-[#09A8A7]">How to make toys from old Olarpaper</h3>
					<span className="text-xs dark:text-gray-600">January 21, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://themewagon.github.io/bigspring/images/blog-3.jpg" alt='sekil-3' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:text-[#09A8A7]">How usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-600">January 22, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                    
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://themewagon.github.io/bigspring/images/blog-2.jpg" alt='sekil-4' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:text-[#09A8A7]">What you need to know about Photography</h3>
					<span className="text-xs dark:text-gray-600">January 23, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
           
		</div>
		
	</div>
</section>
{/* ------ */}
 <div className="flex w-full justify-center mx-auto space-x-1 dark:text-gray-800 py-1.5">
	
	<button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600">1</button>
	
    <Link className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" to={'/Blog2'}>2</Link>
	
</div>
    </>
  )
}

export default Blog
