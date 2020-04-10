import ModalVideo from 'react-modal-video'
import '@src/scss/vendor/modal-video.scss'
import './styles/videos-content.scss'

class VideosContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({isModalOpen: true})
  }

  closeModal () {
    this.setState({isModalOpen: false})
  }

  render () {
    const {videoId} = this.props
    const {isModalOpen} = this.state

    return (
      <div className="videos-content" style={{backgroundImage: `url('https://img.youtube.com/vi/${videoId}/0.jpg')`}}>
        <div className="video-wrapper" onClick={this.openModal}>
          <div className="video-play-button">▸</div>
        </div>
        <ModalVideo channel='youtube' isOpen={isModalOpen} videoId={videoId} onClose={this.closeModal} />
      </div>
    )
  }
}

export default VideosContent
