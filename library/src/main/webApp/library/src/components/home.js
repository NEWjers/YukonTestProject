import React from "react";

class home extends React.Component{
    render() {
        return(
            <div align={"center"}>
                <a href={"http://localhost:3000/author"} id="button">Authors</a>
                <br/>
                <a href={"http://localhost:3000/book"} id="button">Books</a>
            </div>
        );
    }
}

export default home;