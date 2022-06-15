import Card from "../Card/Card";

const Services = () => {
    const packages = [
        {
            id:1,
            title:"Basic Plan",
            description:[
                {
                    title: "Only Biography",
                    status: true
                },
                {
                    title: "Father Biography",
                    status: true
                },
                {
                    title: "Mother Biography",
                    status: true
                },
                {
                    title: "14 gushtir Biography",
                    status: false
                }
            ],
            price: 150           
        },
        {
            id:2,
            title:"Intermediate Plan",
            description:[
                {
                    title: "Only Biography",
                    status: true
                },
                {
                    title: "Father Biography",
                    status: true
                },
                {
                    title: "Mother Biography",
                    status: true
                },
                {
                    title: "14 gushtir Biography",
                    status: true
                }
            ],
            price: 300            
        },
        {
            id:3,
            title:"Super Plan",
            description:[
                {
                    title: "Only Biography",
                    status: true
                },
                {
                    title: "Father Biography",
                    status: false
                },
                {
                    title: "Mother Biography",
                    status: false
                },
                {
                    title: "14 gushtir Biography",
                    status: false
                }
            ],
            price: 500           
        }
    ];
    return (
        <div>
            <h1 className="text-center text-success text-decoration-underline">Service Packages</h1>
            <div className="d-flex justify-content-center">
                {
                    packages.map(pkage=><Card key={pkage.id} cardItem={pkage}/>)
                }
            </div>
        </div>
    );
};

export default Services;