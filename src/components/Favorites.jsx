import React from "react";
import { connect } from "react-redux";
import Card from './Card';
import styles from './Cards.module.css'

const Favorites = ({myFavorites}) => {
    console.log(myFavorites)
    return (
        <div className={styles.rick}>
            { myFavorites.map(char => <Card 
                        key={char.name}
                        name= {char.name} 
                        gender= {char.gender}
                        species= {char.species}
                        status= {char.status}
                        image= {char.image}
                    />
                )
                }
        </div> 
        )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);