const backendUrl =  (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')?"http://localhost:1337":"http://3.220.186.53:1337";
const googleMapApiKey = "AIzaSyDeOiQKt_K-GDHDZN0W-wBkmoCuYJGHOwc"; // this is Janice's personal API key

export { backendUrl, googleMapApiKey };
