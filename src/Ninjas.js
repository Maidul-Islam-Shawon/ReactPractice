import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) =>{
      // const {ninjas} = props;
      // const ninjasList = ninjas.map(nj => {
        //    if(nj.age > 20){
        //     return(
        //         <div className="ninjas" key={nj.id}>
        //             <div><b>Name: {nj.name}</b></div>
        //             <div>Age: {nj.age}</div>
        //             <div>Belt: {nj.belt}</div>
        //             <br/>
        //         </div>
        //        )
        //    }
        //    else{
        //        return null;
        //    }

        const ninjasList = ninjas.map(nj=>{
        return nj.age > 20 ? (
        <div className="ninjas" key={nj.id}>
            <div><b>Name: {nj.name}</b></div>
            <div>Age: {nj.age}</div>
            <div>Belt: {nj.belt}</div>
            <button onClick={() => {deleteNinja(nj.id)}}>Delete</button>
            <br/>
        </div>
        ) : null;

       })
        return(
            <div>
                <h2>Ninjas Component</h2>
                {ninjasList}
            </div>
        )

}

export default Ninjas;