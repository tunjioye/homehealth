import './styles/public-footer.scss'

const PublicFooter = () => (
  <footer className="footer">
    <span>
      <span>&copy; 2020</span>
      &nbsp;
      <a href="http://datacrestgroup.com" target="_blank">
        Datacrest Technologies
      </a>
    </span>
    <span>
      <a href="#" className="back-to-top" onClick={(e) => scrollToTop(e)}>
        Back To The Top
      </a>
    </span>
  </footer>
)

function scrollToTop (e) {
  e.preventDefault()

  var intervalId = 0;
  function scrollStep() {
    if (window.pageYOffset === 0) clearInterval(intervalId)
    window.scroll(0, window.pageYOffset - 200)
  }
  function scrollToTop() {
    intervalId = setInterval(scrollStep, 10)
  }

  scrollToTop()
}

export default PublicFooter
