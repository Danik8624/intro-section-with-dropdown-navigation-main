import client_audiophile from './client-audiophile.svg'
import client_databiz from './client-databiz.svg'
import client_maker from './client-maker.svg'
import client_meet from './client-meet.svg'

export const Logo = () => {
    return (
        <div className="logos">
            <img src={client_databiz} alt="logo"></img>
            <img src={client_audiophile} alt="logo"></img>
            <img src={client_meet} alt="logo"></img>
            <img src={client_maker} alt="logo"></img>
        </div>
    )
}