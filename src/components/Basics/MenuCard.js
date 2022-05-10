import React from 'react'


const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className="main-container">
            {menuData.map((curElem) => {
                    const { id, category, name, description, image } = curElem;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle">{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">
                                            {description}
                                        </span>
                                        <div className="read">read</div>
                                    </div>
                                    <img src={image} alt="" className="card-media" />
                                    <button className="card-tag subtle">Order Now</button>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </section>

        </>
    )
}

export default MenuCard;
