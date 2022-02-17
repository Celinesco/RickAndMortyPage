import './DetailsSection.scss';
import { BsXLg } from 'react-icons/bs';
import { useState, useEffect } from 'react';


const CharacterDetails = ({ img, handleCloseDetails, characterId }) => {
    const [characterInfo, setCharacterInfo] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacterInfo(data)
                console.log(data)
            })

    }, [characterId])

    return (
        <article className='container__details-section'>
            <div className='container__modal-info'>
                <div className='container__info-upperpart'>
                    <button onClick={handleCloseDetails} className='button__close'><BsXLg /></button>
                    <div className='container__details-img'>
                        <img src={characterInfo.image}></img>
                    </div>
                    <h2>{characterInfo.name}</h2>
                </div>
                <div className='container__info-bottompart'>
                    <div className='column'>
                        <section>
                            <h3 className='h3__info-character'>Status</h3>
                            <p>{characterInfo.status}</p>
                        </section>
                        {characterInfo && characterInfo.location && characterInfo.location.name && <section>
                            <h3 className='h3__info-character'>Location</h3>
                            <p>{characterInfo.location.name}</p>
                        </section>}
                        <section>
                            <h3 className='h3__info-character'>Specie</h3>
                            <p>{characterInfo.species}</p>
                        </section>
                        <section>
                            <h3 className='h3__info-character'>Gender</h3>
                            <p>{characterInfo.gender}</p>
                        </section>
                    </div>
                    <div className='column'>
                        <section className='column__episodes'>
                            <h3 className='h3__column-episodes'>Seen in episodes:</h3>
                            <div className='container__episodes'>
                                {characterInfo?.episode &&
                                    <p>
                                        {characterInfo.episode.map((episodio) => {
                                            const textoAimprimir = episodio.replace('https://rickandmortyapi.com/api/episode/', " ")
                                            return textoAimprimir
                                        })}
                                    </p>}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    )
}


export default CharacterDetails;

