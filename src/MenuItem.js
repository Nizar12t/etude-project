import "./Menuitem.css"

const MenuItem =(props) => {
    const {namee, subMenus}=props;

    return(
    // <div className="fiche2ba">
    //   <ul className="">
          <li>
            <a className="menu-item ">
                <div className="menu-icon ">
                    <i className="bi bi-newspaper"></i>
                    
                </div>ffggggg
                <span>{namee}</span>
            </a>
            {subMenus && subMenus.lenght>0 ? (
            <ul className="sub-menu">
                {subMenus.map((menu, index)=>(
                 <li key={index}>
                    <a >{menu.namee}</a>
                 </li>
                ))}
                 
            </ul>
        
            ): null}
           

          </li>
    

    );
};
export default MenuItem;