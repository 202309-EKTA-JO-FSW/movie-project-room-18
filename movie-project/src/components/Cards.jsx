import { DraftModeProvider } from "next/dist/server/async-storage/draft-mode-provider"
import { getModifiedCookieValues } from "next/dist/server/web/spec-extension/adapters/request-cookies"
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
                    <div className="card-body">
                        <h5 className="card-title">{actor.name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;

