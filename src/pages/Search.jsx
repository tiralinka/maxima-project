// import React, {useContext, useEffect, useState} from 'react';
// import {AppContext} from "../App";
// import Card from "../components/Card/Card";
// import '../PageStyles/Search.scss'
//
//
// const Search = () => {
//
//     const {menu} = useContext(AppContext)
//     const [searchMenu, setSearchMenu] = useState(menu)
//     const [value, setValue] = useState('')
//
//
//     useEffect(() => {
//             const res = menu.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
//             setSearchMenu(res)
//         },
//         [value])
//     //
//     return (
//         <div className='search'>
//             <h2 className='search__title'>What food do you want to order?</h2>
//     //         <input
//                 type="text"
//                 placeholder='Search'
//                 value={value} onChange={(e) => setValue(e.target.value)}
//                 style={{
//                     textAlign: 'center',
//                     width: 'fit-content',
//                     border: '1px solid #242424'
//                 }}/>
//             <div className='search__inner'>
//                 {(!searchMenu.length) ?
//                     <h3 className='search__title'>Sorry, food is not found</h3> :
//                     searchMenu.map((menu) => {
//                         return (
//                             <Card key={menu.id} card={menu}/>
//                         )
//                     })}
//             </div>
//         </div>
//     );
// };
//
// export default Search;