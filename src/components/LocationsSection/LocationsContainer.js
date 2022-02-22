import LocationCard from './LocationCard';

const LocationsContainer = ({ searchedResults, totalResults, searchNotFound }) => {
    return (
        <div className='container__cards'>
            {!searchNotFound &&
                <div className='row'>
                    <h3 className='total-results'>Results:</h3>
                    <div className="cantidad-resultados">{totalResults} Locations</div>
                </div>
            }
            {searchedResults.map((result) => (
                <LocationCard
                    key={result.id}
                    title={result.name}
                    type={result.type}
                    dimension={result.dimension}
                />
            ))}
        </div>
    )
}

export default LocationsContainer;