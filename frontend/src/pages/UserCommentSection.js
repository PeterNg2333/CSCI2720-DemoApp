import React from 'react';

function UserCommentSection(props){
    return (
        <div className='row'> 
            <div className="col-7 mt-2" style={{ margin: "-10px", height: "200px", overflowY: "auto"}}>
                <UserComment/>
                <UserComment/>
                <UserComment/>
                <UserComment/>
            </div>
        </div>
    )
}

function UserCommentInput(props){
    return(
        <form class="mb-3"><div>
            <textarea rows="2" id="commentInput" className="form-control" placeholder='Add a comment...'></textarea>
            <button type="button" className="btn btn-dark me-2 block" >Post</button>
        </div></form>
        

    )
}

function UserComment(){
    return (
        <div class="d-flex mt-2" ><div class="flex-shrink-0">
            <svg height = "60" width="60" ><g>
                    <circle cx="35" cy="35" r="25" fill="#d4d6dbd7"/> 
                    <text x="28" y="45" font-family="Verdana" font-size="30" fill="Black">P</text>
            </g></svg></div>

            <div height = "100" class="flex-grow-1">
                <h5 class="mt-2 ms-2 mb-0"><b>Peter </b></h5 >
                <p class="mt-1 ms-3 mb-0"> Hi, testing! testing!testing!testing! testing!testing!testing! testing!testing!testing! testing!testing! Testing! testing! </p>
                <hr className='p-0 m-1'/>
            </div>
        </div>
    );
}

export {UserCommentSection, UserCommentInput};