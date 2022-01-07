import React from 'react'
import QuestionsData from './Question'
import { StoreProvider } from '../Store'

class Technical extends React.Component {
    constructor() {
        super()
        this.state = {
            userAnswer: null,
            currentIndex: 0,
            options: [],
            quizEnd: false,
            score: 0,
            disabled: true
        }
    }

    loadQuiz = () => {
        const { currentIndex } = this.state;
        this.setState(() => {
            return {
                question: QuestionsData[currentIndex].question,
                options: QuestionsData[currentIndex].options,
                answer: QuestionsData[currentIndex].answer
            }
        })
    }

    nextQuestionHandler = () => {
        const { userAnswer, answer, score } = this.state
        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null
        })
    }

    componentDidMount() {
        this.loadQuiz();
    }

    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    finishHandler = () => {
        if (this.state.currentIndex === QuestionsData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state
        if (this.state.currentIndex !== prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: QuestionsData[currentIndex].question,
                    options: QuestionsData[currentIndex].options,
                    answer: QuestionsData[currentIndex].answer
                }
            })
        }
    }


    render() {
        const { question, options, userAnswer, currentIndex, quizEnd } = this.state
        if (quizEnd) {
            return (
                <StoreProvider TechnicalResult={this.state.score}>
                    
                </StoreProvider>
            )
        }
        return (
            <div >
                <h1 className='text-center fixed-top bg-success p-2'>Online Assessment</h1><br /><br /><br /><br />
                <div className='card ms-5'>
                    <span className='text-end p-2'>{`Question${currentIndex + 1}of${QuestionsData.length}`}</span>
                    <img width={700} height={500} src={`./assets/${question}`} alt='Question'></img>
                </div>
                <div className='btn-group-vertical p-3 m-2'>
                    {options.map(option =>
                        <button key={option.id} className={`option ${userAnswer === option ? "selected" : null} ` && `${'btn btn-info m-3'}`}
                            onClick={(() => { this.checkAnswer(option) })}> {option}</button>
                    )}
                </div>
                <div className='d-md-flex justify-content-md-end'>
                    {currentIndex < QuestionsData.length - 1 &&
                        <button className="btn btn-primary me-5" disabled={this.state.disabled} onClick={this.nextQuestionHandler}>Next</button>}
                    {currentIndex === QuestionsData.length - 1 &&
                        <button className="btn btn-primary me-5" disabled={this.state.disabled} onClick={this.finishHandler} >Finish</button>
                    }
                </div>

            </div>
        )
    }
}

export default Technical