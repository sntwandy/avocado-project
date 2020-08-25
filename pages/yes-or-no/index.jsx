import React, { useState } from 'react'
import Layout from '@components/Layout/Layout'

// Components
import Loading from '@components/Loading/Loading'

const YesOrNo = () => {
  const [yesorno, setYesorno] = useState({
    yesorno: false,
    loading: false,
  })

  const randomNumber = () => {
    let number = Math.floor(Math.random() * 100)
    let res = number >= 50 ? true : false

    setYesorno({
      loading: true,
    })
    setTimeout(() => {
      setYesorno({ yesorno: res, loading: false })
      console.log(yesorno.yesorno)
    }, 2000)
  }

  return (
    <Layout>
      {yesorno.loading === true ? (
        <div className="loading-container">
          <Loading />
          <span>Processing your answer...</span>
        </div>
      ) : yesorno.yesorno === true ? (
        <div className="response-container">
          <span>YES</span>
        </div>
      ) : (
        <div className="response-container">
          <span>NO</span>
        </div>
      )}
      <div className="button-container">
        <button onClick={() => randomNumber()}>Press me</button>
      </div>
      <style jsx>{`
        .response-container {
          text-align: center;
          font-size: 40px;
        }

        .button-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button-container button {
          border: none;
          width: 150px;
          height: 40px;
          font-size: 20px;
        }

        .loading-container {
          text-align: center;
          font-size: 25px;
          margin-bottom: 20px;
        }
      `}</style>
    </Layout>
  )
}

export default YesOrNo
