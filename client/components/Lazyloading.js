import React, { useEffect, useState } from "react"
import { Style } from "./constant";

const Lazyloading = ({ data }) => {
    const [lazyData, setLazyLoad] = useState([]);
    const [limit, setLimit] = useState(20);
    const [showButton, setShowButton] = useState(true);

    const updateLimit = () => {
        setLimit(prev => prev + 20)
    }

    const handleScroll = (e) => {
        if (e.target.documentElement.scrollTop + window.innerHeight + 1 >= e.target.documentElement.scrollHeight) {
            setShowButton(false)
        } else {
            setShowButton(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setLazyLoad(data.slice(0, limit));
        return () => window.removeEventListener('scroll', handleScroll);
    }, [limit])
    return <>
        <div className="row p-2 m-2" style={Style.Rowcontainer}>
            {lazyData.length && lazyData.map((person, index) => {
                return <div key={index} className='col-md-4 col-sm-6 p-2'>
                    <div className="container m-1">
                        <div className='card p-3 d-flex justify-content-center text-center' style={Style.card}>
                            <h5 className="class-title" style={{color: '#33374c'}}>{person.name}</h5>
                            <h6 className="text-secondary" style={{fontSize: '1.3vw'}}>{person.email}</h6>
                            <div>{person.address}</div>
                            <div className="text-success">{person.phone}</div>
                        </div>
                    </div>
                </div>

            })}
        </div>
        <button disabled={showButton} style={showButton ? Style.disabledButton : Style.Button} onClick={updateLimit} >Load More</button>
    </>
}
export default React.memo(Lazyloading)