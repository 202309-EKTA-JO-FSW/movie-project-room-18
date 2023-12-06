import Link from "next/link";

function Card({ actor }) {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w235_and_h235_face';

    if (!actor || !actor.profile_path) {
        return null;
    }

    return (
        <div className='flex-row flex-wrap'>
            <Link className="text-decoration-none" href={`/actors/actorspage/${actor.id}`}>
                <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: '15rem'}} >
                    <img src={IMAGE_BASE_URL + actor.profile_path} alt="" className="card-img-top"/>
                    <div className="card-body" style={{ height: '75px' }}>
                        <h5 className="card-title text-center  mt-3">{actor.name}</h5>
                        <div className="bg-light rounded p-2  mt-2 " style={{height: "35px"}}>
                        <p className="card-text overflow-y-auto mb-0 text-center" style={{height: "150px"}}>Known for : {actor.known_for_department}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
