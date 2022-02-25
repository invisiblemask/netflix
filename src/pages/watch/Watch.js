import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video 
            className="video" 
            autoPlay 
            progress 
            controls 
            src="https://player.vimeo.com/external/582033905.sd.mp4?s=09481369f8b2207ea8c5cff622d697e0f18d43d1&profile_id=164&oauth2_token_id=57447761" 
        />
    </div>
  )
}
