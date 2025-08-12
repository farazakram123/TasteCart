import './AppDownload.css'
import {assets} from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id = 'app-download'>
      <p> Experience Better with our <br /> TasteCart App </p>
      <div className="app-download-img">
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </div>
  )
}

export default AppDownload
