import { getDocs, collection } from "firebase/firestore";
import { dc } from '../service/firebase'

export const getDataFirebase = async () => {

    const getDataCollections = await getDocs(collection(dc, 'dataCaronte'));


  return getDataCollections.docs.map((data) => ({
    id:data.id,
    ...data.data()
  }))
}


