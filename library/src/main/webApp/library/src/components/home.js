import React from "react";

class home extends React.Component{
    render() {
        return(
            <div align={"center"}>
                <a href={"http://localhost:3000/author"}>Authors</a>
                <br/>
                <a href={"http://localhost:3000/book"}>Books</a>
            </div>
        );
    }
}

export default home;