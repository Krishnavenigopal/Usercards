import './ProfilePhoto.css'
export default function ProfilePhoto({data}) {
    return (
        <div className='image'>
            <img src={data.medium}/>
        </div>
    )
}
