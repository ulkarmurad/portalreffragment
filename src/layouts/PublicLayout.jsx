



export default function PublicLayout({ children }) {
    return (
        <Fragment>
            <p style={{margin: "50px"}}>Rendering On Public</p>
            <br />
            <br />
            {children}
        </Fragment>
    )
}