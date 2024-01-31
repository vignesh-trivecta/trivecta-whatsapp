import React from 'react'
import { PrivacyPolicies } from '../constants/PrivacyPolicies'
import { Link } from 'react-router-dom'

const Section = ({datas}) => {
  return (
    <div className='mt-4 space-y-2'>
      {
        datas.map((data) => (
          <div>
            <span className='font-semibold text-lg'>{data.title}</span>: <span>{data.content}</span>
          </div>
        ))
      }
    </div>
  )
}

const Subtitle = ({datas}) => {
  return (
    <div className='mt-2'>
      <p className='font-semibold text-xl underline'>{datas.title}:</p>
      <p>{datas.content}</p>
    </div>
  )
}

const Policies = () => {
  return (
    <>
        {
          PrivacyPolicies.map((policy, index) => (
            <div key={index} className=''>
              <div className='mb-4'>
                <p className='font-bold text-3xl'>{policy.title1}</p>
                <p className='font-bold text-3xl'>{policy.title2}</p>
              </div>
              <p className='font-semibold text-base mb-2'>{policy.status}</p>
              <p className='mb-2'>{policy.intro}</p>
              <p className=''>{policy.content}</p>
              <Section datas={PrivacyPolicies[0].section[1]} />
              <Subtitle datas={PrivacyPolicies[0].subtitle[1]} />
              <Section datas={PrivacyPolicies[0].section[2]} />
              <Subtitle datas={PrivacyPolicies[0].subtitle[2]} />
              <Subtitle datas={PrivacyPolicies[0].subtitle[3]} />
              <Section datas={PrivacyPolicies[0].section[3]} />
              <Subtitle datas={PrivacyPolicies[0].subtitle[4]} />
              <Section datas={PrivacyPolicies[0].section[4]} />
              <p className='font-semibold text-xl underline mt-4'>{policy.title3}:</p>
              <Section datas={PrivacyPolicies[0].section[5]} />
              <div>
                <p className='font-semibold text-lg mt-4'>Complete Price Picture:</p>
                <p>
                  {"To ensure full transparency, we encourage you to familiarize yourself with Meta's pricing structure before finalizing your project. You can find detailed information on their website here: "} 
                  <Link to={"https://developers.facebook.com/docs/whatsapp/pricing"} target='_blank' className='underline text-blue-500'>https://developers.facebook.com/docs/whatsapp/pricing</Link>
                </p>
                <p className='font-semibold text-lg mt-4'>Contact Us: <Link to={"https://www.trivectadigital.com/contact"} target='_blank' className='underline font-normal text-base text-blue-500'>Click Here</Link></p>
              </div>
            </div>
          ))
        }
    </>
  )
}

export default Policies