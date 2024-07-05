import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import About2 from "@/components/sections/About2"
import About4 from "@/components/sections/About4"
import Achievement1 from "@/components/sections/Achievement1"
import Achievement2 from "@/components/sections/Achievement2"
import Achievement4 from "@/components/sections/Achievement4"
import Brand1 from "@/components/sections/Brand1"
import Brand4 from "@/components/sections/Brand4"
import Cta1 from "@/components/sections/Cta1"
import Faq1 from "@/components/sections/Faq1"
import Faq2 from "@/components/sections/Faq2"
import Hero1 from "@/components/sections/Hero1"
import Hero2 from "@/components/sections/Hero2"
import Hero4 from "@/components/sections/Hero4"
import Marque1 from "@/components/sections/Marque1"
import Marque2 from "@/components/sections/Marque2"
import News1 from "@/components/sections/News1"
import News4 from "@/components/sections/News4"
import Pricing1 from "@/components/sections/Pricing1"
import Project1 from "@/components/sections/Project1"
import Project4 from "@/components/sections/Project4"
import Service1 from "@/components/sections/Service1"
import Service4 from "@/components/sections/Service4"
import StayCompetition from "@/components/sections/StayCompetition"
import Team1 from "@/components/sections/Team1"
import Team4 from "@/components/sections/Team4"
import Testimonial1 from "@/components/sections/Testimonial1"
import Testimonial2 from "@/components/sections/Testimonial2"
import Testimonial4 from "@/components/sections/Testimonial4"
import Faqdetails from "./faq-details/page"
import Category from "@/components/sections/Category"
export default function Home() {

    return (
        <>

<Layout headerStyle={4} footerStyle={4}>
                {/* <Hero4 /> */}
                {/* <Hero1 /> */}
                <Hero2 />
                {/* <Brand4 /> */}
                <Category />
                <Brand1 />
                
                <About2 />
                
                <Service1 />
                {/* <Achievement2 />  */}
                {/* <Service4 /> */}
                {/* <Testimonial2 /> */}
                
                <Testimonial4 />
                <Faqdetails />
                {/* <Project4 /> */}
                {/* <About4 /> */}
                
                {/* <StayCompetition/> */}
                {/* <Team4 />
                <Achievement4 />
                <Faq2 />
                <News4 /> */}
                {/* <Cta1 /> */}
                
            </Layout>        </>
    )
}