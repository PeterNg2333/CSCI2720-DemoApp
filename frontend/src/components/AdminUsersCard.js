import PropTypes from "prop-types";
import AdminEventCard from "./AdminEventCard";
import React, {useState} from "react";
import userIcon from "../pages/Resource/user-icon-white.jpg";

function AdminUsersCard(props) {
    const {userId, username, password, isSelected, setUserIdSelected} = props;
    const [isModifying, setIsModifying] = useState(false)
    return (
        <div className="col-md-6 col-sm-12 mb-4 row align-items-center">
            <div className="col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={isSelected}
                       onClick={() => setUserIdSelected(userId)}/>
            </div>
            <div className="col-11 text-start">
                <div className="border border-dark w-25 ms-5 bg-light-grey">
                    <div className="text-dark">{userId}</div>
                </div>
                <div className="border border-dark w-100">
                    <div className="row align-items-center">
                        <div className="col-4">
                            <img
                                className="img-fluid ms-4"
                                src={userIcon}
                                alt="img"
                                style={{maxWidth: "80%", height: "auto"}}
                            />
                        </div>

                        <div className="col-7">
                            <div className="d-flex flex-row my-1">
                                <div className="one-line w-100">User Name</div>
                                <input className="ms-1 w-100"
                                       type="text"
                                       id="username"
                                       name="username"
                                       value={username}
                                       disabled={!isModifying}
                                       required
                                />
                            </div>
                            <div className="d-flex flex-row my-1">
                                <div className="one-line w-100">Password</div>
                                <input className="ms-1 w-100"
                                       type="password"
                                       id="password"
                                       name="password"
                                       value={password}
                                       disabled={!isModifying}
                                       required
                                />
                            </div>
                        </div>
                    </div>
                    {isModifying ?
                        <div className="row align-items-center justify-content-end mb-2">
                            <div className="col-4 me-3">
                                <button className="row align-items-center bg-transparent btn-outline-transparent"
                                        onClick={() => {
                                            setIsModifying(!isModifying)
                                        }}>

                                    <i className="col-3 fa fa-floppy-disk fa-2x color-green"></i>
                                    <div className="col-9 color-green">Save</div>
                                </button>
                            </div>
                            <div className="col-4 me-3">
                                <button className="row align-items-center bg-transparent btn-outline-transparent"
                                        onClick={() => {
                                            setIsModifying(!isModifying)
                                        }}>
                                    <i className="col-3 fa fa-ban fa-2x color-red"></i>
                                    <div className="col-9 color-red">Cancel</div>
                                </button>
                            </div>
                        </div>
                        :
                        <div className="row align-items-center justify-content-end mb-2">

                            <div className="col-4 me-3">
                                <button className="row align-items-center bg-transparent btn-outline-transparent"
                                        onClick={() => {
                                            setIsModifying(!isModifying)
                                        }}>
                                    <i className="col-3 fa fa-user-pen fa-2x"></i>
                                    <div className="col-9">Modify</div>
                                </button>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

AdminUsersCard.defaultProps = {
    isSelected: false
}

AdminUsersCard.propTypes = {
    userId: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    setUserIdSelected: PropTypes.func,
    isSelected: PropTypes.bool
};

export default AdminUsersCard