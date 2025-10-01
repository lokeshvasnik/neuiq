import React from 'react'
import { advisoryData } from '../../../Utils/data'
import ServiceCard from '../ServiceCard'

const OurServices = () => {
  return (
    <section className=''>
        <div className='max-w-full mx-auto lg:px-10 md:py-8 px-2 py-2'>
            <div>
                <h1 className="sm:text-4xl text-2xl font-bold capitalize lg:pb-8 mb-4">Our Services</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  w-full">
                    {
                        advisoryData.data.map((item, index)=>{
                            return (
                                <ServiceCard key={index} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices