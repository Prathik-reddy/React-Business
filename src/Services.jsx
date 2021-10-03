import React from "react";
import Card from "./components/Card";

const Services = () => {
  let Sdata=[
    {
      title:"Web Development",
      imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9ny3ut3Q_wi8a2ShGWqDiXWPCAhGUt9yJXQ7EpOoGSGv1WSEfIaLTINij0TswwiDyF4&usqp=CAU",
      desc:" Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network). ... Among Web professionals, Web development usually refers to the main non-design aspects of building Web sites: writing markup and coding."

    },
    {
      title:"Software Development",
      imgSrc:"https://www.spheregen.com/wp-content/uploads/2020/06/112-1127583_software-development-png-transparent-png.png",
      desc:"Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. ... Software can be developed for a variety of purposes."
    },
    {
      title:"App Development",
      imgSrc:"https://titan-dev.net/wp-content/uploads/2020/12/mobile-app-development-guide-scaled.jpg",
      desc:"App Development refers to the creation of computer applications for use on mobile devices such as tablets, smartphones .Mobile applications are designed and built for different operating systems and developers to learn how to build for both the Android operating system."
    },
    {
      title:"Digital Marketing",
      imgSrc:"https://miro.medium.com/max/1400/0*f-YBCfsCVkm9meEK",
      desc:" At a high level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. Using these online media channels, digital marketing is the method by which companies endorse goods, services, and brands."
    },
    {
      title:"Android Development",
      imgSrc:"https://5.imimg.com/data5/FH/UC/MY-9120378/android-app-development-company-500x500.png",
      desc:"Any application developed to be supported by the Android Operating system using the android software development kit (sdk) on android studio is the process of android development. The open-source operating system designed by Google especially for mobiles is Android."
    },
    {
      title:"IOS Development",
      imgSrc:"https://intuz-site.imgix.net/uploads/ios-social-sharing.jpg",
      desc:"Simply put, iOS development is the process of creating applications for Apple’s mobile operating system—the operating system used by the iPhone and iPod Touch. In this most fundamental sense, it has a lot in common with other types of software or app development."
    }

  ]
  return (
      <>
     <div className="my-5 text-center">
        <h1>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
                {
                    Sdata.map((val,index) => {
                      return <Card key={index} imgSrc={val.imgSrc} title={val.title} desc={val.desc}/>;
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
