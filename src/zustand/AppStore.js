import axios from "axios";
import { create } from "zustand";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzdkYmVjOTdkMzJhOTdkNjFiZDFmOWExM2NmODNmNCIsInN1YiI6IjY1Nzg2ZGFlNGJmYTU0NWNmZjkxMzk1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d7ltvqKEExuzXSCbVaPHHS5AkemmWD_qvLaXSnRxrWM'


const AppStore = create((set) => ({
    bears: 0,
    apiKey : 'dc7dbec97d32a97d61bd1f9a13cf83f4',
    accesToken : token,
    genres:null,
    token : token,
    sidebar:true,
    setSidebar : () => {
      set({sidebar : !AppStore.getState().sidebar})
    },
    getGenres : (url) => {
        axios
      .get(url,{
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => set({genres : res.data}))
      .catch((err) => console.log(err));
    },
    getRequest : (url) => {
      return new Promise((resolve,reject) => {
        axios.get(url,{
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => resolve(res.data.results))
        .catch((err) => reject(err))
      })
    } ,
    getYoutubeId : (url,params) => {
      return new Promise((resolve,rejected) => {
        axios
      .get(url)
      .then((res) => {
        return res.data.videos.results;
      })
      .then((result) => {
        const filter = result.find((vid) => vid.name.includes(params.title));
        if (filter) {
          resolve(filter.key);
        } else {
          resolve(result[0].key);
        }
      })
      .catch((err) => {
        rejected(err);
      });
      })
    }
  }))

  export default AppStore