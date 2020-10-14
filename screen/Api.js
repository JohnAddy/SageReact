import axios from "axios";

export default class Api {
    uris = {dev: 'http://localhost:8080/rest/services/', main: 'https://sageproject.appspot.com/rest/services/'}
    sandbox;
    access;

    constructor(sandbox = false) {
        this.sandbox = sandbox;
        this.access = axios.create({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            baseURL: (this.sandbox) ? this.uris.dev : this.uris.main
        });

    }

    params(datas={}){

        const params = new URLSearchParams();
        for (const one in datas) {
            if (datas.hasOwnProperty(one)) {
                params.append(one, datas[one]);
            }
        }
        return params;
    }

    async request(path, datas, type){
       const params = this.params(datas)
        if (type==="post") {
            return await this.access.post(path, params)
        }
        return await this.access.get(path, params)
    }

    async get(path, datas){
        return await this.request(path, datas, "get").then((res) => {
            return {result: res.data}
        }).catch((res) => {
            return {result: res.data}
        });

    }

    async post(path, datas){
        return await this.request(path, datas, "post").then((res) => {
            return {result: res.data}
        }).catch((res) => {
            return {result: res.data}
        });

    }

}
