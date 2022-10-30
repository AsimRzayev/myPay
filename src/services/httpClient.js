import axios from "axios";
/* eslint-disable prettier/prettier */

export class HttpClient  {   
    baseURL="http://localhost:4000";
    get = async(url) => {
        let data=null;
        await axios.get(this.baseURL+ url).then(response=>
              response
        
        ).then(x=>data=x.data)
        return data;
    };

    post = async (url, data)=> {
        return await axios.post(this.baseURL+ url, data);
    };

     put = async (url, data) => {
        return await axios.put(this.baseURL+ url, data)
    };
     patch = async(url, data) => {
        return await axios.patch(this.baseURL+ url, data);
    };
}
