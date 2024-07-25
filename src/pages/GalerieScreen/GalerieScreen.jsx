



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategoryCard from '../../components/Categories/CategoryCard';

export default function CategoryScreen() {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://blog-api/category', {
      method: 'GET',
    })
      .then((resp) => resp.json())
      .then((json) => {
        setCategoryList(json);
      });
  }, []);



  return (
    <section className='m-auto my-28 '>
                <h1 className='text-5xl text-white text-center'>Les categories</h1>

      <div className='md:flex lg:flex-row flex-wrap '>
        {categoryList?.data?.map((category) => (
          <div key={category.Id_category} className='m-auto  basis-1/4 '>
             
            <div
           
            onClick={() =>{
              navigate(`/galerie/${category.Id_category}`); 
            
              }}>

              <CategoryCard title={category.title} img={category.img}  className='' />
            </div>
              
          </div>
        ))}
      </div>
    </section>
  );
}


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import CategoryCard from '../../components/Categories/CategoryCard';

// export default function CategoryScreen() {
//   const [categoryList, setCategoryList] = useState([]);

//   useEffect(() => {
//     fetch('http://blog-api/category', {
//       method: 'GET',
//     })
//       .then((resp) => resp.json())
//       .then((json) => {
//         setCategoryList(json);
//       });
//   }, []);

//   return (
//     <section className='m-auto'>
//       <div className='flex-col justify-center items-center md:flex md:justify-center md:items-center m-auto'>
//         {categoryList?.data?.map((category) => (
//           <div key={category.Id_category} className='m-auto justify-center w-full'>
//             <Link to={`/galerie?=${category?.Id_category}`}>
//               <CategoryCard title={category.title} img={category.img} />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



  // const [articleList,setArticleList]= useState(null);

  

 


  


  // return (
  //   <>
  //   <div className='my-5'>
     
  //   </div>
  //   <div className='lg:flex lg:flex-wrap '>
  //      {articleList?.data.map((item) => {
               
  //              return (
  //                <div className='cardPre rounded basis-2/4 ' key={item.Id_article}>
  //                  <CartePhoto className="rounded"
  //                    title={item.title}
  //                    src={item?.with[0].src}
  //                    content={item.content}
  //                    alt={item?.with[0].alt}
  //                  />
  //                </div>
  //              );
             
  //          })} 
  //   </div>
    // </>
  // )

