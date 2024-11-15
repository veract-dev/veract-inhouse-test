import React from 'react'

export default function PrivacyPolicy() {
	return (
		<section className="mx-3">
				<h1 className="text-2xl font-bold text-center my-5">Intellikast CRM - Privacy Policy</h1>
			<section className='px-3'>
				<div className="">
					<div>
						<h4 className="text-lg mb-4">Learn more about Privacy in Intellikast CRM, we have outlined how we use the data that we collect from you.</h4>
						<ul>
							<li className='list-disc mb-3'>In order for Intellikast CRM to provide you the most accurate and best experience, Intellikast CRM will collect and use your location information in the following ways.</li>
							<ul className='text-sm pl-4 list-decimal mb-4 space-y-2'>
								<li>We collect your GPS location for providing various functionality in the application</li>
								<li >To provide you accurate and timely information about your daily trips to customer locations.</li>
								<li >To calculate information about the route, distance and time taken for travel to customer locations to calculate fuel allowances.</li>
							</ul>
							<li className='list-disc'>For analytics purposes we use Google Analytics, which may collect information to provide usage statistics about Intellikast CRM, real time usage details and location information about the users. Google might use this data to improve your experience on other google products.</li>
							<br />
							<p className='mb-4'>The Android Advertising ID that we collect is only for analytics, we never use this information to show advertisements or promote our other products. Feel free to reach us at <a href="" className='text-blue-600'>info@veract.io</a> for any further information that you might require regarding the data collection and usage.</p>
						</ul>
					</div>
				</div>
			</section>
		</section>
	)
}