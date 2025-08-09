import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => { 

  return (
    <div className='expolre-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable list of dishes made with the finest ingredients. From our signature classics to unique creations, our menu caters to every palate. Indulge in a culinary journey that will leave you craving for more.</p>
        <div className="explore-menu-list">
            {
              menu_list.map((item,index) => {
                return <div onClick={() => setCategory(prev => prev===item.menu_name ? 'All' : item.menu_name)} key={index} className='explore-menu-list-item'>

                    <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />

                    <p>{item.menu_name}</p>
                </div>
              })
            }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
