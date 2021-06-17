import axios from 'axios'
class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/welcome')
        // console.log('executed service')
    }
    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
        // console.log('executed service')
    }
    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:8080/hello/${name}`)
        // console.log('executed service')
    }
    executeHelloWorldPathVariableService(name) {
        // let username = 'yifan'
        // let password = 'dummy'
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello/${name}`)
        // ,
        //     headers : {
        //         authorization: basicAuthHeader
        //     }
        // })
    }
    
}

export default new HelloWorldService()