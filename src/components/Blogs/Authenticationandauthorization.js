
const Authenticationandauthorization = () => {
    const data=[
        {
            id:1,
            details:"Authentication workes through passwords, biometrics, one-time pins, or apps and Authorization works through settings maintained by security teams"
        },
        {
            id:2,
            details:"Authentication is visible to and partially changeable by the user and Authorization isn’t visible to or changeable by the user"
        },
        {
            id:3,
            details:"Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user and Authorization works through settings that are implemented and maintained by the organization"
        },
        {
            id:4,
            details:"Authentication verifies who the user is and Authorization determines what resources a user can access."
        },
        {
            id:5,
            details:"Usually done before authorization and Usually done after successful authentication"
        }
    ];
    return (
        <div>
            <h2 className="text-center text-decoration-underline">Authentication Vs Authorization</h2>
            <ol>
                {
                    data.map(sData=><li key={sData.id}>{sData.details}</li>)
                }
            </ol>
        </div>
    );
};

export default Authenticationandauthorization;