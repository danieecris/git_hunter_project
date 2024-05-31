import { UserProps } from "../types/user";
 // Corrigi a declaração de importação
import { MdLocationPin } from 'react-icons/md'; // Assegure-se de importar corretamente o componente do ícone

import classes from './User.module.css';

const User = ({ login, avatar_url, followers, following, location }: UserProps) => {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <p>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div className={classes.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classes.number}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p className={classes.number}>{following}</p>
                </div>
            </div>
            
        </div>
    );
}

export default User;
