import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div
        className="flex justify-center items-center h-auto sm:h-[700] 
       lg:h-[700] flex-col  sm-flex-row lg:flex-row sm:w-[500] lg:w-[500] w-[400] "
      >
        <div className="w-[500] h-[300] gap-4"></div>

        <div className=" h-[134]  pt-[189px] p-6 ">
          <h1 className="text-6xl">Learn new skills online with ease</h1>
          <p>
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="gap-2 flex ">
            <button className="bg-black text-white ">Start Learning now</button>

            <button className=" border-2 border-black">Explore Curses</button>
          </div>
        </div>

        <div>
          <Image
            src={"/image1.png"}
            alt={"lerning"}
            width={800}
            height={400}
          ></Image>
        </div>
      </div>
      {/* section 1 */}
      <div>
        <div className="h-[228]  bg-[#F7F7F7] flex justify-center items-center p-20   ">
          <h1 className="">Trusted by 2000+ companies worldwide.</h1>

          <div className="flex justify-center items-center sm:flex-row lg:flex-row flex-col mb-4 sm-mb-0 lg:mb-0">
            <Image src={"/simple4.png"} alt="#" width={130} height={44}></Image>
            <Image src={"/simple1.png"} alt="#" width={130} height={44}></Image>
            <Image
              src={"/simple 5.png"}
              alt="#"
              width={130}
              height={44}
            ></Image>
            <Image src={"/simpel3.png"} alt="#" width={130} height={44}></Image>
            <Image src={"/simpel3.png"} alt="#" width={130} height={44}></Image>
            <Image
              src={"/Airbnb Logo.png"}
              alt="#"
              width={130}
              height={44}
            ></Image>
            <Image src={"/simple2.png"} alt="#" width={130} height={44}></Image>
          </div>
        </div>
        {/* section2 */}

        <div className=" h-1049 bg-[#FFFFFF] g">
          <div className=" grid justify-center items-center p-20">
            <h1 className="text-3xl font-extrabold pl-20">
              Explore Courses By Category
            </h1>
            <p>
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>

          <div className=" flex justify-center items-center gap-6 sm:flex-row md:flex-row lg:flex-row flex-col">
            <Image src={"/Card1.png"} alt="#" width={300} height={54}></Image>
            <Image src={"/card2.png"} alt="#" width={300} height={44}></Image>
            <Image src={"/card3.png"} alt="#" width={300} height={44}></Image>
          </div>
          <div className="h-[132px] flex justify-center items-center gap-6 sm:flex-row md:flex-row lg:flex-row flex-col ">
            <Image src={"/card4.png"} alt="#" width={300} height={54}></Image>
            <Image src={"/card5.png"} alt="#" width={300} height={44}></Image>
            <Image src={"/card6.png"} alt="#" width={300} height={44}></Image>
          </div>
          <div className="h-[132px] flex justify-center items-center gap-6 sm:flex-row md:flex-row lg:flex-row flex-col">
            <Image src={"/card 8.png"} alt="#" width={300} height={54}></Image>
            <Image src={"/card7.png"} alt="#" width={300} height={44}></Image>
            <Image src={"/card9.png"} alt="#" width={300} height={44}></Image>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center pt-24">
            <button className="border-2 border-black">View All Channel</button>
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-extrabold pt-16 flex justify-center ">
              Our Achivements
            </h1>
            <p className=" flex justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornar eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div >
              <div className="flex  gap-3 sm:gap-64 lg:gap-64 lg:pl-16 sm:pl-16 pl-3 font-extrabold text-2xl pt-10">
                <h1>+200</h1>
                <h1>50k</h1>
                <h1>370k</h1>
                <h1>100+</h1>
              </div>
              <div className="flex gap-3 sm:gap-64 lg:gap-64 lg:pl-16 sm:pl-16 pl-3">
                <p>Courses</p>
                <p>mentor</p>
                <p>studends</p>
                <p>Recognition</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-extrabold pt-16 flex justify-center ">
            Our Achivements
          </h1>
          <p className=" flex justify-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>

          <div className=" flex gap-3 sm:gap-64 lg:gap-64 lg:pl-16 sm:pl-16 pl-3 font-extrabold text-2xl pt-10 ">
            <h1>+200</h1>
            <h1>50k</h1>
            <h1>370k</h1>
            <h1>100+</h1>
          </div>
          <div className=" flex gap-3 sm:gap-64 lg:gap-64 lg:pl-16 sm:pl-16 pl-3  ">
            <p>Courses</p>
            <p>mentor</p>
            <p>studends</p>
            <p>Recognition</p>
          </div>
        </div>
        {/* section 3 */}
        <div className="h-[7678] bg-[#FFFFFF]">
          <h1 className=" flex justify-center item-center text-2xl font-extrabold">
            Course
          </h1>
          <p className=" flex justify-center item-center">
            Your Ultimate Guide to learning
          </p>
        </div>
        <div className=" pt-9 flex justify-center gap-6">
          <button>popular</button>
          <button>Recommended</button>
          <button>Best price</button>
        </div>
        <div className="">
          <div className=" flex justify-between gap-6 sm:flex-row lg-flex-row flex-col mb-4  p-4 sm:p-0  lg:p-0">
            <div className="w-[416] h-[534] bg-[#F7F7F7]">
              <Image
                src={"/image2.png"}
                alt={"#"}
                width={416}
                height={300}
              ></Image>
              <h1>Design</h1>
              <h1 className="font-bold text-2xl">UX/UI Design 201</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Suspendisse varius enim in eros.
              </p>
              <button className="border-2 border-black">Enroll Now</button>
            </div>
            <div className="w-[416] h-[534] bg-[#F7F7F7]">
              <Image
                src={"/image3.png"}
                alt={"#"}
                width={416}
                height={300}
              ></Image>
              <h1>programing</h1>
              <h1 className="font-bold text-2xl">Introduction to phyton</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Suspendisse varius enim in eros.
              </p>
              <button className="border-2 border-black">Enroll Now</button>
            </div>
            <div className="w-[416] h-[534] bg-[#F7F7F7]">
              <Image
                src={"/image 4.png"}
                alt={"#"}
                width={416}
                height={300}
              ></Image>
              <h1>Bussines</h1>
              <h1 className="font-bold text-2xl">Data analysis for beginner</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Suspendisse varius enim in eros.
              </p>
              <button className="border-2 border-black">Enroll Now</button>
            </div>
          </div>
          <div className=" flex justify-between  sm:flex-row lg-flex-row flex-col mb-4 p-4  sm:p-0  lg:p-0">
            <div className="w-[416] h-[534] bg-[#F7F7F7]">
              <Image
                src={"/image 7.png"}
                alt={"#"}
                width={416}
                height={300}
              ></Image>
              <h1>Art</h1>
              <h1 className="font-bold text-2xl">Art Specialization</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Suspendisse varius enim in eros.
              </p>
              <button className="border-2 border-black">Enroll Now</button>
            </div>
            <div className="w-[416] h-[534] bg-[#F7F7F7]">
              <Image
                src={"/image5.png"}
                alt={"#"}
                width={416}
                height={300}
              ></Image>
              <h1>Law</h1>
              <h1 className="font-bold text-2xl">Rule of Law</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Suspendisse varius enim in eros.
              </p>
              <button className="border-2 border-black">Enroll Now</button>
            </div>
            <div className="w-[416] h-[534] bg-[#F7F7F7]">
              <Image
                src={"/image6.png"}
                alt={"#"}
                width={416}
                height={300}
              ></Image>
              <h1>Tech</h1>
              <h1 className="font-bold text-2xl">Introduction to webflow</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Suspendisse varius enim in eros.
              </p>
              <button className="border-2 border-black">Enroll Now</button>
            </div>
          </div>
          <div className="flex justify-center pt-16 ">
            <button className="border-2 border-black pl-3 pr-3">
              view all
            </button>
          </div>
        </div>
        <div className=" sm:h-[895] lg:h-[895] h-[1075] sm:w-[full] lg:w-[full] w-[428] bg-[#F7F7F7] ">
          <div className="pt-10 sm:flex-row lg-flex-row flex-col mb-4  p-4 sm:p-0  lg:p-0 ">
            <h1 className="text-3xl font-extrabold pt-5  ">Our team</h1>
            <p className="flex justify-center items-baseline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex justify-center items-center sm:gap-72  lg:gap-72 gap-12 pt-7 sm:flex-row lg:flex-row flex-col mb-4  p-4 sm:p-0  lg:p-0 ">
            <div className="w-[394.67] h-[273]">
              <div className="flex justify-center ">
                <Image src={"/1.png"} alt={"#"} width={80} height={80}></Image>
              </div>
              <h1 className="flex justify-center">james Nakudu</h1>
              <p className="flex justify-center">Marketing coordinator</p>
              <div className="flex  gap-5 pt-9 ">
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-dribbble"></i>
              </div>
            </div>

            <div className="w-[394.67] h-[273] ">
              <div className="flex justify-center">
                <Image src={"/2.png"} alt={"#"} width={80} height={80}></Image>
              </div>
              <h1 className="flex justify-center">Joseph Munyambu</h1>
              <p className="flex justify-center">Nursing Assistant</p>
              <div className="flex justify-center gap-5 pt-9">
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-dribbble"></i>
              </div>
            </div>

            <div className=" w-[394.67]   h-[273] ">
              <div className="flex justify-center ">
                <Image src={"/3.png"} alt={"#"} width={80} height={80}></Image>
              </div>
              <h1 className="flex justify-center">Joseph Ngumbau</h1>
              <p className="flex justify-center">Medical Assistant</p>
              <div className="flex justify-center gap-5 pt-9">
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-dribbble"></i>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center sm:gap-72  lg:gap-72 gap-12 sm:flex-row lg:flex-row flex-col mb-4  p-4 sm:p-0  lg:p-0 ">
            <div className="w-[394.67] h-[273]">
              <div className="flex justify-center">
                <Image src={"/5.png"} alt={"#"} width={80} height={80}></Image>
              </div>
              <h1 className="flex justify-center">james Nakudu</h1>
              <p className="flex justify-center">Marketing coordinator</p>
            </div>

            <div className="w-[394.67] h-[273]">
              <div className="flex justify-center">
                <Image src={"/4.png"} alt={"#"} width={80} height={80}></Image>
              </div>
              <h1 className="flex justify-center">Joseph Munyambu</h1>
              <p className="flex justify-center">Nursing Assistant</p>
            </div>

            <div className="w-[394.67] h-[273]">
              <div className="flex justify-center">
                <Image src={"/6.png"} alt={"#"} width={80} height={80}></Image>
              </div>
              <h1 className="flex justify-center">Joseph Ngumbau</h1>
              <p className="flex justify-center">Medical Assistant</p>
            </div>
          </div>
          {/* section 4 */}
          <div className="h-[830] bg-[#F7F7F7] pt-44 ">
            <h1 className="text-3xl font-bold flex justify-center">Customer testimonials</h1>
            <p className="flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className=" flex justify-between ">
            <div className="flex justify-center  pt-6  sm:flex-row lg:flex-row flex-col pl-6 sm:pl-0 lg:pl-44">
              <div className="p-6">
                <div className=" h-[300px] w-[300px] border-solid border-2 border-black ">
                  <p className="p-8">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </p>

                  <div className="flex gap-2 p-4">
                    <Image
                      src={"/3.png"}
                      alt={"#"}
                      width={56}
                      height={56}
                    ></Image>
                    <h1>
                      James Nduku <br />
                      Software Develope
                    </h1>
                  </div>
                </div>
              </div>
              <div className="p-6 ">
                <div className=" h-[300px] w-[300px] border-solid border-2 border-black">
                  <p className="p-8">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </p>
                  <div className="flex gap-2 p-4 ">
                    <Image
                      src={"/1.png"}
                      alt={"#"}
                      width={56}
                      height={56}
                    ></Image>
                    <h1>
                      James Nduku <br />
                      Software Developer
                    </h1>
                  </div>
                </div>
              </div>
              <div className="p-6 ">
                <div className=" h-[300px] w-[300px] border-solid border-2 border-black ">
                  <p className="p-8">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </p>
                  <div className="flex gap-2 p-4">
                    <Image
                      src={"/6.png"}
                      alt={"#"}
                      width={56}
                      height={56}
                    ></Image>
                    <h1>
                      James Nduku <br />
                      Software Developer
                    </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Hero;
