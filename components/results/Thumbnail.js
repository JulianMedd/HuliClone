import Image from 'next/image';

const Thumbnail = ({result}) => {
    const BASE_PATH = "https://image.tmdb.org/t/p/original/"
    return (
        <div>
            <Image
                layout='responsive'
                src={
                    `${BASE_PATH}${result.backdrop_path || result.poster_path}` ||
                    `${result.poster_path}`
                }
                height={1080}
                width={1920}
            />
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
            </div>
        </div>
    )
}

export default Thumbnail