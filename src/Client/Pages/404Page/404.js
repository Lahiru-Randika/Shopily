import { Link } from 'react-router-dom';
import img1 from '../../assets/images/logo.svg';
import { useEffect} from 'react';

const P404 =()=>{

    useEffect(()=>{
        const fetchData = async()=>{
          const res = await fetch('api/category')
          const data = await res.json()
          console.log(data)
        }
        fetchData()
    },[])

    return(        
        <div class="stars">
            <div class="custom-navbar">
                <div class="brand-logo">
                    <img src={img1} width="80px"/>
                </div>
            </div>
            <div class="central-body">
                <img class="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px"/>
                <Link to="/" class="btn-go-home">GO BACK HOME</Link>
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>

        </div>
    )
}

export default P404;