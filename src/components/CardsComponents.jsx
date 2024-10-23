import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CardsComponents() {
    let [cities, setCities] = useState([])
    const [citiesPerPage, setCitiesPerPage] = useState([6])
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastCities = currentPage * citiesPerPage
    const indexOfFirstCities = indexOfLastCities - citiesPerPage
    const [loading, setLoading] = useState(true)

    // Hacemnos llamado de la API
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/api/cities/all')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // Ordenamos los datos al azar para darle una vista más interesante
                data.data.sort(function () {
                    return Math.random() - 0.5
                })
                console.log(data.data)
                setCities(data.data)

                setLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    const totalCities = cities.length

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="p-2 my-4 flex flex-wrap justify-center gap-4 ">
                    {loading ? (
                        <div className="w-[300px] h-[380px] border shadow p-4 flex justify-center">
                            <div className="animate-pulse">
                                <img
                                    className="w-[200px]"
                                    src="https://icones.pro/wp-content/uploads/2021/02/icono-de-camara-gris.png"
                                    alt=""
                                />
                                <div className="p-2 pt-5">
                                    <div className="h-2 bg-[#B2B5B4] rounded"></div>
                                </div>
                                <div className="p-2">
                                    <div className="h-2 bg-[#B2B5B4] rounded"></div>
                                </div>
                                <div className="p-2">
                                    <div className="h-2 bg-[#B2B5B4] rounded"></div>
                                </div>
                                <div className="p-2">
                                    <p className="text-center text-[18px] text-[#B2B5B4]">
                                        Loading...
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : cities.length > 0 ? (
                        cities
                            .map((city) => (
                                <Cards
                                    key={city._id}
                                    id={city._id}
                                    name={city.name}
                                    image={city.photo}
                                    country={city.country}
                                />
                            ))

                            .slice(indexOfFirstCities, indexOfLastCities)
                    ) : (
                        <div className="flex flex-wrap gap-6 border-gray-300 pb-[50px]">
                            <div className="text-start">
                                <h4 className="text-[20px]">No results found...</h4>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full">
                    <Pagination
                        key={citiesPerPage}
                        citiesPerPage={citiesPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalCities={totalCities}
                    />
                </div>
            </div>
        </>
    )
}

export { CardsComponents }

function Cards({ id, name, image, country }) {
    return (
        <>
            <div className="w-[160px] md:w-[250px] max-w-sm rounded overflow-hidden shadow-lg p-2 bg-white">
                <img className="w-full h-[200px] object-cover" src={image} alt={name} />
                <div className="p-2">
                    <div className="font-bold text-[26px]">{name}</div>
                    <div className="">
                        Country: <strong>{country}</strong>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center text-center">
                        <div className="text-gray-700 text-sm py-4">
                            <Link
                                to={`/MyTineraryJesusVera/cities/city/${name}`}
                                className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Pagination({ citiesPerPage, currentPage, setCurrentPage, totalCities }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCities / citiesPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const OnSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <>
            <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-center">
                    <div className="text-center p-2">
                        <p className="text-sm text-gray-700">
                            Pages <span className="font-medium">{currentPage}</span> to{' '}
                            <span className="font-medium">{pageNumbers.length}</span> of{' '}
                            <span className="font-medium">
                                <strong className="text-[18px]">{totalCities}</strong>
                            </span>{' '}
                            results
                        </p>
                    </div>
                    <div>
                        <nav
                            aria-label="Pagination"
                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        >
                            <a
                                href="#"
                                onClick={onPreviousPage}
                                className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                                    currentPage === 1 ? 'hidden' : ''
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5 8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </a>

                            {pageNumbers.map((noPage) => (
                                <a
                                    key={noPage}
                                    href="#"
                                    onClick={() => OnSpecificPage(noPage)}
                                    className={`${
                                        noPage === currentPage
                                            ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                            : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                                    }`}
                                >
                                    {noPage}
                                </a>
                            ))}

                            <a
                                href="#"
                                onClick={onNextPage}
                                className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                                    currentPage >= pageNumbers.length ? 'hidden' : ''
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
