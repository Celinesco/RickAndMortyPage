import LocationCard from './LocationCard';

const LocationsContainer = ({ searchedResults }) => {
    return (
        <div className='container__cards'>
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