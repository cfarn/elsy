import React from 'react'

class Box extends React.Component {
   render() {
      
      return (
         <div className='box col-sm-3 col-6'>
            <span className={this.props.icon === "favorite" ? "material-icons scale" : "material-icons"} style={{fontSize:100, color:this.props.color}}>
               {this.props.icon}
            </span>
            <p>{this.props.value} {this.props.unit}</p>
            <>
            {/* afficher un input range sur toutes les cases sauf water */}
            {/* ajouter un step: 1000 à l'input range si c'est le box steps. Valeur min de step: 1 */}
            {this.props.icon !== "local_drink" && <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange} step={this.props.icon === "directions_walk" ? 1000 : 1}/>}
            </>
         </div>
      )
   }
}
export default Box