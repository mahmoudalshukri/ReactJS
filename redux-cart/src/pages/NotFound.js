function NotFound (props) {
    return( 
        <div>
            <h1>404 | Not Found</h1>
            <p>There is no page for {window.location.pathname}</p>
        </div>
    )
}
export default NotFound;