import BrandSlider2 from "../slider/BrandSlider2"


export default function Brand4() {
    return (
        <>
            <div className="brand-section-2 fix section-padding">
                <div className="container brand4paddingnew">
                    <h2 className="brand4new">A legacy of trust & excellence woven into every interaction</h2>
                </div>
                <div className="container-fluid">
                    <div className="brand-wrapper-2">
                        <BrandSlider2 />
                    </div>
                </div>
                {/* <div className="container brans4one" >
                    <h2 style={{
    fontWeight: "600",
    lineHeight: "120%",
    color: "#091E42", 
    margin:" 0"}} >Delivering outstanding experiences by leveraging exceptional expertise and deep customer insights.</h2>
                    <p style={{    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "140%",
    color: "#505F79",
    margin: "16px 0 0 0"}}>With a legacy and reputation carved out as a leading SAP player, we are evolving to become a global player, emphasizing AI and core technologies, SAP, Salesforce and ServiceNow.</p>
                </div> */}
            </div>
        </>
    )
}
