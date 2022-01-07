import React from 'react'

function TechnicalQuestion({nextQuestionHandler,question,quizEnd,currentIndex,userAnswer,options,disabled,QuestionsData,finishHandler,checkAnswer}) {

    return (
        <div>
            <h2>{question}</h2>
            <span>{`Question${currentIndex + 1}of${QuestionsData.length}`}</span>
            {options.map(option =>
                <p key={option.id} className={`option ${userAnswer === option ? "selected" : null}`}
                    onClick={(() => { checkAnswer(option) })}> {option}</p>
            )}
            {currentIndex < QuestionsData.length - 1 &&
                <button disabled={disabled} onClick={nextQuestionHandler}>Next</button>}

            {currentIndex === QuestionsData.length - 1 &&
                <button onClick={finishHandler} disabled={disabled}>Finish</button>}
        </div>
    )
}
export default TechnicalQuestion

{/* <TechnicalQuestion question={question} options={options} userAnswer={userAnswer} currentIndex={currentIndex} quizEnd={quizEnd} nextQuestionHandler={this.nextQuestionHandler} finishHandler={this.finishHandler} QuestionsData={QuestionsData} checkAnswer={this.checkAnswer()}/> */}
