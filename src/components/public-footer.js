import './styles/public-footer.scss'

const PublicFooter = () => (
  <footer className="footer">
    <span>
      <span><small>&copy; 2020</small></span>
      &nbsp;
      <a href="http://datacrestgroup.com" target="_blank">
        <small>Datacrest Technologies</small>
      </a>
    </span>
    <span>
      <a href="#">
        <small>Goto The Top</small>
      </a>
      {/* <a href="#" onClick={(e) => scrollToTop(e)}>
        <small>Goto The Top</small>
      </a> */}
    </span>
  </footer>
)

// function scrollToTop (e) {
//   e.preventDefault()

//   var intervalId = 0;
//   function scrollStep() {
//     if (window.pageYOffset === 0) clearInterval(intervalId)
//     window.scroll(0, window.pageYOffset - 200)
//   }
//   function scrollToTop() {
//     intervalId = setInterval(scrollStep, 10)
//   }

//   scrollToTop()
// }

export default PublicFooter
