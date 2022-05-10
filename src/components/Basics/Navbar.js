import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>

            <nav className="navbar">
                <div className="btn-group">
                    {menuList.map((category) => {
                        return (
                            <button className="btn-group__item" onClick={() => filterItem(category)} >
                                {category}
                            </button>
                        )
                    })
                  
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar

                // <button className="btn-group__item active"onClick={() => setMenuData(Menu)}>All</button>
                // <button className="btn-group__item"
                //     onClick={() => filterItem("lunch")}
                // >Lunch</button>

                // <button className="btn-group__item"
                //     onClick={() => filterItem("evening")}
                // >Evening</button>

                // <button className="btn-group__item"
                //     onClick={() => filterItem("Dinner")}
                // >Dinner</button>