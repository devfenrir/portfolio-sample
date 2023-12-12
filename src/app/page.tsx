import { Navbar, Footer } from '@/(private)/_components/navigation'
import { Section, Card, Button, IconButton } from '@/(private)/_components/structure'
import { FaCloud, FaTwitch, FaPatreon, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFuraffinity, SiKofi } from "react-icons/si";

import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
    return (
        <main className=''>
            <Navbar />

            <div className="mt-12 flex min-h-screen flex-col items-center justify-between p-8">
                <Section
                    id="gallery"
                    title="Lorem Ipsum"
                >
                    <p className="text-center text-dark-blue">2020 - 2023</p>

                    <div className="text-center p-8 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
                        <Card>
                            <Image
                                src="/1.jpg"
                                alt="image"
                                width={500}
                                height={500}

                                className='w-full h-full object-cover'
                            />
                        </Card>

                        <Card>
                            <Image
                                src="/1.jpg"
                                alt="image"
                                width={500}
                                height={500}

                                className='w-full h-full object-cover'
                            />
                        </Card>

                        <Card>
                             <Image
                                src="/1.jpg"
                                alt="image"
                                width={500}
                                height={500}

                                className='w-full h-full object-cover'
                            />
                        </Card>

                        <Card>
                            <Image
                                src="/1.jpg"
                                alt="image"
                                width={500}
                                height={500}

                                className='w-full h-full object-cover'
                            />
                        </Card>

                        <Card>
                             <Image
                                src="/1.jpg"
                                alt="image"
                                width={500}
                                height={500}

                                className='w-full h-full object-cover'
                            />
                        </Card>

                        <Card>
                            <Image
                                src="/1.jpg"
                                alt="image"
                                width={500}
                                height={500}

                                className='w-full h-full object-cover'
                            />
                        </Card>

                        <Card>
                            <Image
                                src="/1.jpg"
                                alt="image"
                                width={500}
                                height={500}

                                className='w-full h-full object-cover'
                            />
                        </Card>
                        
                        <Card>
                            <Image
                                src="/1.jpg"
                                alt="image"
                                width={500}
                                height={500}

                                className='w-full h-full object-cover'
                            />
                        </Card>
                    </div>

                    <p className="text-center text-dark-blue">see more on my <Link href="#about" passHref className="underline font-bold">social medias</Link></p>

                    <div className="w-full h-[4px] my-7 border-[1px] border-gray-200 bg-light-blue drop-shadow-lg opacity-80"></div>
                </Section>

                <Section
                    id="commissions"
                    title="Lorem Ipsum"
                >
                    <p className="text-center mb-8 mt-2">
                        <a href="#" className="underline font-semibold text-light-red">Terms of Service (ToS)</a>
                    </p>

                    <div className="w-full flex-col items-center text-center">
                        <Image
                            src="/1.jpg"
                            alt=''
                            width={700}
                            height={700}

                            className='border-black border-4'
                        />

                        <Button
                            hrefBtn="#"
                            buttonText="Lorem Ipsum"
                            btnClassName="my-8"
                        />

                        <div className="w-full">
                            <div className="grid grid-rows-1 grid-cols-3 mb-">
                                <p className="text-dark-blue font-bold text-2xl">1</p>
                                <p className="text-dark-blue font-bold text-2xl">2</p>
                                <p className="text-dark-blue font-bold text-2xl">3</p>
                            </div>

                            <Image
                                src="/1.jpg"
                                alt=''
                                width={700}
                                height={700}

                                className="border-black border-4"
                            />

                            <Button
                                hrefBtn='#'
                                buttonText='Contact me'
                                btnClassName='mt-8'
                            />
                        </div>
                    </div>

                    <div className="w-full h-[4px] my-7 border-[1px] border-gray-200 bg-light-blue drop-shadow-lg opacity-80"></div>
                </Section>

                <Section
                    id="about"
                    title="LOREM IPSUM"
                >
                    <div className="w-full h-full sm:flex gap-6 block mt-4">
                        <Image
                            src="/1.jpg"
                            alt=''
                            width={240}
                            height={200}

                            className="border-black border-4"
                        />

                        <div className="max-w-md">
                            <p><br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus, deleniti corrupti necessitatibus quod commodi eum non blanditiis voluptatem sapiente, pariatur at ipsam aliquid ratione nemo repellat expedita! Quia, voluptas!</p>
                            <p><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque laborum ducimus corporis ratione distinctio a hic accusantium quod aut impedit ab, quia repellat illum, magni blanditiis amet deserunt laudantium.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi itaque voluptas.</p>
                        </div>
                    </div>

                    <p className="text-center mt-4"><span className="text-light-red font-semibold">Social Medias</span></p>
                    
                    <div className="w-full mt-4 sm:flex grid grid-cols-3 sm:ml-0 ml-[10%] justify-center gap-8">
                        <IconButton
                            hrefBtn='#'
                        >
                            <FaCloud  
                                className="w-full h-full"
                            />
                        </IconButton>

                        <IconButton
                            hrefBtn='#'
                        >
                            <FaXTwitter
                                className="w-full h-full"
                            />
                        </IconButton>

                        <IconButton
                            hrefBtn='#'
                        >
                            <FaTwitch   
                                className="w-full h-full"
                            />
                        </IconButton>

                        <IconButton
                            hrefBtn='#'
                        >
                            <FaTelegramPlane   
                                className="w-full h-full"
                            />
                        </IconButton>

                        <IconButton
                            hrefBtn='#'
                        >
                            <SiKofi   
                                className="w-full h-full"
                            />
                        </IconButton>

                        <IconButton
                            hrefBtn='#'
                        >
                            <FaPatreon 
                                className="w-full h-full"
                            />
                        </IconButton>
                    </div>
                    
                    <div className="w-full h-[4px] my-7 border-[1px] border-gray-200 bg-light-blue drop-shadow-lg opacity-80"></div>
                </Section>

                <Section
                    id="projects"
                    title="Lorem Ipsum"
                >
                    <div className="w-[80%] sm:w-[50%] mx-auto mt-4">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, pariatur? Iste, tempora, quas minus voluptatum cupiditate inventore repudiandae perspiciatis assumenda cum maxime dolorum laudantium dolorem porro vero! Dolorem, atque tenetur. <br /><br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, facere consequuntur similique at repellendus ipsam non, magni sed nisi voluptatibus modi soluta autem explicabo corporis ratione. Magni culpa itaque harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit aut quos similique qui delectus id? Reiciendis, commodi consequatur. Odio quas distinctio error! Mollitia dolore quisquam reiciendis animi fugit placeat! <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nostrum cumque quidem eligendi eum blanditiis id deleniti atque asperiores velit iste dolorum debitis obcaecati aut doloribus ipsam illo, consequatur aperiam.
                        </p>
                    </div>
                </Section>
            </div>

            <Footer />
        </main>
    )
}
