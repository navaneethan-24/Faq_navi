import { Component } from 'react'
import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const { faqDetails } = this.props
    const { answerText } = faqDetails
    const { isActive } = this.state // Corrected this line

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive, // Corrected 'isACtive' to 'isActive'
    }))
  }

  renderActiveImage = () => {
    const { isActive } = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.onToggleActive}> {/* Corrected 'Button' to 'button' */}
        <img src={image} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const { faqDetails } = this.props // Corrected this line
    const { questionText } = faqDetails // Changed to extract questionText from faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem