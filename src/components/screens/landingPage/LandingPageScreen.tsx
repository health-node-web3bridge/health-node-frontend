"use client"
import { CirclePlus } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import { Slide } from 'react-awesome-reveal';
import { FaRegClock } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function LandingPageScreen() {
  const Cards = [
    {
      id: 1,
      title: "General",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      icon: <img src='/scope.svg' height={175} width={230} alt='scope' />
    },
    {
      id: 2, 
      title: "Pediatrics",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      icon: <img src='gloves.svg' height={250} width={295} alt='pedi' />
    },
    {
      id:3,
      title: "Nutritional",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      icon: <img src='/dna.svg' height={200} width={400} alt='dna' />
    },
    {
      id: 4,
      title: "Nutritional",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      icon: <img src='/hearts.svg' height={200} width={285} alt='DNA' />
    },
    {
      id:5,
      title: "Nutritional",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      icon: <img src='/man.svg' height={200} width={282} alt='anatomy' />
    },
    {
      id:6,
      title: "Nutritional",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      icon: <img src='van.svg' height={200} width={285} alt='van' />
    }
  ]
  const Perk = [
    {
      id: 1,
      name: "Sammy White",
      descriptio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      image: <img  />
    },
    {
      id:2,
      name: "Sammy White",
      descriptio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      image: <img  />
    },
    {
      id:3,
      name: "Sammy White",
      descriptio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      image: <img  />
    },
    {
      id:4,
      name: "Sammy White",
      descriptio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      image: <img  />
    }
  ]
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2  justify-center bg-[rgba(242,247,255,1)] h-[650px]">
        <div className='flex justify-center w-11/12 m-auto items-center'>
          <div className='md:justify-start w-11/12 m-auto '>
            <h1 className=" font-bold bg-[rgba(0,191,165,1)] flex justify-center md:justify-start bg-clip-text text-transparent">Dr. Matthew Anderson</h1>
            <h1 className='bg-[rgba(3,20,50,1)] bg-clip-text md:flex md:justify-center text-transparent flex  text-3xl md:text-[48px] font-extrabold leading-tight'>A dedicated doctor <br /> you can trust</h1>
            <p className='my-10 flex items-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ilicit depotifo amre</p>

            <div className='flex justify-center md:justify-start '>
              <button className="bg-custom-gradient-button flex gap-3 text-white font-bold md:py-4 md:px-6 py-1 px-3 rounded-full shadow-md hover:opacity-90 transition-opacity">
                <Image
                  src='/Vec.svg'
                  height={20}
                  width={20}
                  alt='vec'
                  className='mt-1'
                />
                Book an appointment</button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src='Doc.svg'
            height={517}
            width={678.45}
            alt='hero'
          />
        </div>
      </section>
      <section className='grid grid-cols-1 w-3/4 items-center lg:grid-cols-3 m-auto gap-5 -mt-10'>

        <div className='flex bg-[rgb(143,62,151)] col-span-1 bg-opacity-100 p-3 rounded-lg space-y-2 items-center'>
          <div className='mr-3'>
            <FaRegClock className='text-white h-[38px] w-[38px]' />
          </div>
          <div>
            <h1 className='text-white font-bold text-[18px]'>24 hours Service</h1>
            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className='flex bg-[rgb(143,62,151)] col-span-1 bg-opacity-100 p-3 rounded-lg space-y-2 items-center'>
          <div className='mr-3'>
            <IoMdCheckmarkCircleOutline className='text-white h-[38px] w-[38px]' />       
             </div>
          <div>
            <h1>24 hours Service</h1>
            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className='flex bg-[rgb(143,62,151)] col-span-1 bg-opacity-100 p-3 rounded-lg space-y-2 items-center '>
          <div className='mr-3'>
            
            <CirclePlus className='h-[38px] w-[38px] text-white'/>
          </div>
          <div>
            <h1>24 hours Service</h1>
            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

      </section>
      <section className='flex-col-1 md:flex md:w-4/5 md:mx-auto space-x-20 mt-20 h-[650px]'>
        <div><img src='/lady.svg' height={405} width={486} alt='lady'/></div>
        <div className='md:flex w-96 justify-center'>
          <div className=''>
          <h1 className='font-bold bg-[rgba(0,191,165,1)] flex justify-center md:justify-start bg-clip-text text-transparent h-[25px] text-xl mb-5'>About me</h1>
          <p className='text-3xl font-bold bg-[rgba(3,20,50,1)] bg-clip-text text-transparent '>A dedicated doctor with the core mission to help</p>
          <p className='mt-5 text-gray-700'>Our doctors are ready to provide the highest level of care, dedicated to your well-being. With years of expertise and a passion for healing, we ensure that every patient receives the attention they deserve. No matter your health needs, our skilled physicians are here to guide you through. </p>
          <button className="bg-custom-gradient-button flex gap-3 text-white font-bold md:py-4 md:px-6 py-1 px-3 rounded-full shadow-md hover:opacity-90 transition-opacity mt-5">
                <Image
                  src='/Vec.svg'
                  height={20}
                  width={20}
                  alt='vec'
                  className='mt-1'
                />
                Book an appointment</button>
          </div> 

        </div>
      </section>
      <section className='flex-col-1 md:flex md:justify-center p-5 mx-auto space-x-20 mt-20 h-[650px] bg-[rgba(242,247,255,1)] w-full'>
      
        <div className='md:flex w-96 justify-center'>
          <div className=''>
          <h1 className='font-bold bg-[rgba(0,191,165,1)] flex justify-center md:justify-start bg-clip-text text-transparent h-[25px] text-xl mb-5'>Services</h1>
          <p className='text-3xl font-bold bg-[rgba(3,20,50,1)] bg-clip-text text-transparent '>Experienced in multiple medical practices</p>
          <p className='mt-5 text-gray-700'>Our hospital provides expert care across multiple medical practices. With advanced technology and experienced professionals, we ensure comprehensive treatment and personalized care. From routine check-ups to specialized procedures, our team is dedicated to your health. We prioritize patient well-being, delivering quality services in a compassionate environment. Trust our hospital for skilled healthcare solutions, always focusing on the best outcomes for every patient, making your health our top priority.</p>
          <button className="bg-custom-gradient-button flex gap-3 text-white font-bold md:py-4 md:px-6 py-1 px-3 rounded-full shadow-md hover:opacity-90 transition-opacity mt-5">
                <Image
                  src='/Vec.svg'
                  height={20}
                  width={20}
                  alt='vec'
                  className='mt-1'
                />
                Book an appointment</button>
          </div> 

        </div>
        <div>
      <div className='z-10'><img src='/anatomy.svg' height={405} width={486} alt='Human_anatomy' /></div>
        <div className='lg:-mt-[498px]'><img src='/medic.svg' height={405} width={486} alt='lady'/></div>
        </div>
      </section>
      <section className='bg-[rgba(242,247,255,1)] -mt-5'>
      <Slide direction="up" damping={0.3} triggerOnce cascade>
        <div className='grid grid-cols-1md:grid md:grid-cols-3 p-10 mt-5 w-4/5 mx-auto'>
          {Cards.map((card)=> (
            <div key={card.id} className='mt-10 bg-white mx-5 p-5 rounded-xl shadow-xl'>
              <div className=''>
                {card.icon}
              </div>
              <h1 className='font-bold text-xl'>
                {card.title}
              </h1>
              <p className='text-gray-700'>{card.description}</p>
              <button className="bg-custom-gradient-button flex gap-3 text-white font-bold md:py-4 md:px-6 py- px-3 rounded-full shadow-md hover:opacity-90 transition-opacity mt-5">
                <Image
                  src='/Vec.svg'
                  height={20}
                  width={20}
                  alt='vec'
                  className='mt-1'
                />
                Book an appointment</button>

            </div>
          ))}
        </div>  
        </Slide>
      </section>
      <section>
      <h1 className=" font-bold bg-[rgba(0,191,165,1)] md:flex md:justify-center p-5 bg-clip-text text-transparent">Book an appointment today</h1>   
        <div className='w-4/5 mx-auto bg-[rgb(143,62,151)] rounded-2xl'>
        <div className='p-10 items-center w-4/5 mx-auto'>
          <h1 className='flex justify-center text-3xl font-bold text-white'>Schedule a virtual or presential appointment today</h1>
          <p className='txt-sm text-white flex justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas viverra <br/> turpis habitant eu sociis fermentum felis.</p>
          <div className='flex justify-center'>
          <button className="bg-white flex gap-3 text-[rgb(143,62,151)] font-bold md:py-4 md:px-6 py- px-3 rounded-full shadow-md hover:opacity-90 transition-opacity mt-5 justify-center">
               
                Book an appointment</button>
                </div>
                </div>
        </div>
      </section>
      <section className='w-4/5 mx-auto'>
      <h1 className=" font-bold bg-[rgba(0,191,165,1)] md:flex md:justify-center mt-10 bg-clip-text text-transparent">Why Doctor Michael Anderson?</h1> 
        <div className='mt-10'>
          <div>
          <div className='flex justify-center'>
            <img src='/docs.jpg' height={567} width={800} alt='Doctor' className='rounded-lg' />
          </div>
          <div>
          <h1 className='bg-[rgba(3,20,50,1)] bg-clip-text md:flex md:justify-center text-transparent flex  text-2xl font-semibold mt-5'>A dedicated TEAM with the core mission to help</h1> 
          <p className='w-2/3 mx-auto mt-5'>orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.
            </p>
          </div>
          </div>
        </div>
        <section className='grid grid-cols-1 w-3/4 items-center lg:grid-cols-3 m-auto gap-5'>

        <div className='flex bg-[rgb(143,62,151)] col-span-1 bg-opacity-100 p-3 rounded-lg space-y-2 items-center'>
          <div className='mr-3'>
            <FaRegClock className='text-white h-[38px] w-[38px]' />
          </div>
          <div>
            <h1 className='text-white font-bold text-[18px]'>24 hours Service</h1>
            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className='flex bg-[rgb(143,62,151)] col-span-1 bg-opacity-100 p-3 rounded-lg space-y-2 items-center'>
          <div className='mr-3'>
            <IoMdCheckmarkCircleOutline className='text-white h-[38px] w-[38px]' />       
             </div>
          <div>
            <h1>24 hours Service</h1>
            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className='flex bg-[rgb(143,62,151)] col-span-1 bg-opacity-100 p-3 rounded-lg space-y-2 items-center '>
          <div className='mr-3'>
            
            <CirclePlus className='h-[38px] w-[38px] text-white'/>
          </div>
          <div>
            <h1>24 hours Service</h1>
            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

      </section>
      </section>
      <section>
        <div>
        <h1 className='bg-[rgba(3,20,50,1)] bg-clip-text md:flex md:justify-center text-transparent flex  text-2xl font-semibold mt-5'>What our great customers say about Dr. Matthew Anderson</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p> 
        </div>
      </section>
      <div>
        {
          Perk.map((perk) => (
            <div key={perk.id}>
              <div>
                <h1>{perk.descriptio}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default LandingPageScreen
