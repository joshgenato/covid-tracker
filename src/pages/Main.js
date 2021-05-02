import React, { useEffect, useContext, useState, Fragment } from 'react';
import CovidContext from '../context/covidContext';
import Dropdown from '../components/Dropdown';

const Main = () => {
	const covidContext = useContext(CovidContext);

	const { getResults, results } = covidContext;

	const [result, setResults] = useState();
	useEffect(() => {
		if (results === null) {
			getResults();
		} else {
			setResults(results.Global);
		}
	}, [results]);
	// eslint-disable-next-line
	return (
		<div className='relative bg-white overflow-hidden'>
			<div className='max-w-7xl mx-auto'>
				<div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32'>
					<main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
						<div className='text-center'>
							<h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
								<span className='block xl:inline'>Covid-19</span>
								<span className='block text-yellow-300 xl:inline'>Tracker</span>
							</h1>

							<h3 className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-5xl'>
								<span className='block xl:inline'>
									{result?.Country ? result.Country : 'Global'}
								</span>
							</h3>
							{/* card */}

							<div className='lg:flex justify-center'>
								<div className='bg-white shadow-2xl overflow-hidden sm:rounded-lg m-1'>
									<div className='px-4 py-5 sm:px-6'>
										<h3 className='text-lg leading-6 font-extrabold text-red-400 md:text-4xl'>
											New Cases
										</h3>

										{result ? (
											<p className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
												{new Intl.NumberFormat().format(result.NewConfirmed)}
											</p>
										) : (
											<div className='h-16 w-full bg-gray-200 animate-pulse'></div>
										)}

										<h3 className='text-lg leading-6 font-extrabold text-indigo-400 md:text-xl lg:text-2xl'>
											Active Cases
										</h3>
										{result ? (
											<p className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-3xl'>
												{new Intl.NumberFormat().format(result.TotalConfirmed)}
											</p>
										) : (
											<div className='h-8 w-full bg-gray-200 animate-pulse'></div>
										)}
									</div>
								</div>

								<div className='bg-white shadow-2xl overflow-hidden sm:rounded-lg m-1'>
									<div className='px-4 py-5 sm:px-6'>
										<h3 className='text-lg leading-6 font-extrabold text-indigo-400 md:text-4xl'>
											New Recovered
										</h3>
										{result ? (
											<p className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
												{new Intl.NumberFormat().format(result?.NewRecovered)}
											</p>
										) : (
											<div className='h-16 w-full bg-gray-200 animate-pulse'></div>
										)}

										<h3 className='text-lg leading-6 font-extrabold text-indigo-400 md:text-2xl'>
											Total Recovered
										</h3>
										{result ? (
											<p className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-3xl'>
												{new Intl.NumberFormat().format(result?.TotalRecovered)}
											</p>
										) : (
											<div className='h-8 w-full bg-gray-200 animate-pulse'></div>
										)}
									</div>
								</div>

								<div className='bg-white shadow-2xl overflow-hidden sm:rounded-lg m-1'>
									<div className='px-4 py-5 sm:px-6'>
										<h3 className='text-lg leading-6 font-extrabold text-indigo-400 md:text-4xl'>
											New Deaths
										</h3>
										{result ? (
											<p className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
												{new Intl.NumberFormat().format(result?.NewDeaths)}
											</p>
										) : (
											<div className='h-16 w-full bg-gray-200 animate-pulse'></div>
										)}

										<h3 className='text-lg leading-6 font-extrabold text-indigo-400 md:text-2xl'>
											Total Deaths
										</h3>
										{result ? (
											<p className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-3xl'>
												{new Intl.NumberFormat().format(result?.TotalDeaths)}
											</p>
										) : (
											<div className='h-8 w-full bg-gray-200 animate-pulse'></div>
										)}
									</div>
								</div>
							</div>
							{results ? (
								<div className='mt-5 lg:ml-48 lg:mr-48'>
									<div>
										<Dropdown setResults={setResults} results={results} />
									</div>
								</div>
							) : (
								<Fragment />
							)}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Main;
