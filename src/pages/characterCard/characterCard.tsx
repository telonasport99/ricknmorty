import s from './characterCard.module.scss'

type Props = {
    data: {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: {
            name: string;
            url: string;
        };
        location: {
            name: string;
            url: string;
        }
        image: string;
        episode: string[];
        url: string;
        created: string;
    }
}
const CharacterCard = (props: Props) => {
    const data = props.data
    return (
        <div className={s.card}>
            <header>{data.name}</header>
            <img className={s.img} alt={''} src={data.image}/>
            <div className={s.cardInfo}>
                <span>{data.status}-{data.species}</span>
                <p>Last known location:<br/>{data.location.name}</p>
                <p>First seen in :<br/>{data.origin.name}</p>
            </div>
        </div>
    );
};

export default CharacterCard;