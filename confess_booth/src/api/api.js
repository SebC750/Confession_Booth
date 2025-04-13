class API{
    constructor(url){
              this.url = url;
    }

    async testConnection(){
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }

    async getAllConfessions(){
        const response = await fetch(this.url+"/confessions");
        const data = await response.json();
        console.log(data)
        return data;
    }

    async getConfession(confessionId){
        const response = await fetch(this.url+`/confessions/${confessionId}`);
        const data = await response.json();
        console.log(data)
        return data;
    }

    async createConfession(){
        const response = await fetch(this.url+`/confessions/${confessionId}`);
    }

    async deleteConfession(){
        const response = await fetch(this.url+`/confessions/${confessionId}`, {
            method: "DELETE"})
            
    }
}

export default API