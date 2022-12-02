import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


export default function ScoreBoard({username,score}) {
  const [results, setResults] = useState([]);
  

  useEffect(() => {
    //kaydetme
    (async () => {
        const resultsRef = collection(db, "results");
        await addDoc(resultsRef,{
            name : username,
            score
        });
        })();
    // aynı isim varsa güncelle

    //dosyaları getirme
    (async () => {
      const resultsRef = collection(db, "results");
      const resultsDoc = await getDocs(resultsRef);
      setResults(
        resultsDoc.docs.map((element) => {
          return { id: element.id, ...element.data() };
        })
      );
    })();

    

  }, []);

  return (
    <div>
       {results.map((result) => {
        return (
          <>
            <p>{result.name}</p>
            <p>{result.score}</p>
          </>
        );
      })} 
    </div>
  );
}
