<template>
    <v-app>
        <v-container grid-list-lg fluid fill-height>
            <v-row justify="center">
                <h1>{{curDrink.dName}} <v-tooltip right><template v-slot:activator="{ on, attrs }">
                            <v-btn
                            icon
                            color="pink"
                            @click = "favorite"
                            v-on="on"
                            v-bind="attrs"
                            >
                            <v-icon dark id = "favicon">
                                {{curIcon}}
                            </v-icon>
                            </v-btn>
                            </template>
                            <span>Favorite Recipe</span>
                            </v-tooltip>
                            </h1>
            </v-row>
            <v-row justify="center" class="mt-12">
                <v-col cols="4">
                    <v-card>
                        <v-card-title>Ingredients 
                        </v-card-title>
                        <v-list expand>
                            <v-list-item v-for="i in curDrink.dIngredients" :key="i">{{i}}</v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-container>
                            <h1>Instructions</h1>
                            <p>{{curDrink.instructions}}</p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-img :src="curDrink.img"/>
                </v-col>
            </v-row>
            <v-row justify="center" align="end">
                <v-btn @click="backToPopular">Back to Popular</v-btn>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import router from '../router/index'
const axios = require('axios')

function preprocessDrink(drink){
    let ingredients = []
    let j = 1
    do {
        let ingredientString = ""
        if (drink["strMeasure" + j] != null){
            ingredientString = drink["strMeasure" + j] + " " + drink["strIngredient" + j]
        } else {
            ingredientString = drink["strIngredient" + j]
        }
        ingredients.push(ingredientString)
        j++
    }while(drink["strIngredient" + j] != null)
    return {dName: drink["strDrink"],
                        category: drink["strCategory"], 
                        dIngredients: ingredients, 
                        id: drink["idDrink"],
                        img: drink["strDrinkThumb"],
                        instructions: drink["strInstructions"]}
}

export default {
    props:{
        id : String,
    },
    data() {
        return {
        favBoolean: '',
        curIcon: "",
        curDrink: {dName: "",
            category: "", 
            dIngredients: [], 
            id: "",
            img: "",
            instructions: ""},
        useremail: '',
        }
    },
    async created(){
        await axios.get("/api/idsearch", {params: {id: this.id}})
        .then(response => this.curDrink = preprocessDrink(response.data.drinks[0]))

        await axios.get("/api/logininfo")
        .then(response => {
            console.log(response.data);
            if(response.data.email){
                return  this.useremail = response.data.email;
            }
            else
                return this.useremail = "UnknownUser"
        })

        await axios.get("/api/isfavorite/" + this.curDrink.id)
        .then(response => {
            console.log(response.data);
            if(response.data.length > 0){
                this.favBoolean = true;
            }
            else
                this.favBoolean = false;
        })
        return this.curIcon = this.favBoolean ? "mdi-heart" : "mdi-heart-outline";
    },
    methods: {
        backToPopular(){
            router.push({name: 'Popular'})
        },
        favorite(){
            this.favBoolean = !this.favBoolean;
            this.curIcon = this.favBoolean ? "mdi-heart" : "mdi-heart-outline";
            console.log(this.curDrink);
            console.log(this.useremail);
            if(this.favBoolean){
                axios.post("/api/favorite",{
                name: this.curDrink.dName, ingredients: this.curDrink.dIngredients, category: this.curDrink.category, cocktailid: this.curDrink.id, img: this.curDrink.img, instructions: this.curDrink.instructions, useremail: this.useremail
                })
                .then(response =>{
                    console.log(response);
                })
                .catch(err => console.log(err));
            }
            else{
                axios.post("/api/unfavorite",{
                    name: this.curDrink.dName, ingredients: this.curDrink.dIngredients, category: this.curDrink.category, cocktailid: this.curDrink.id, img: this.curDrink.img, instructions: this.curDrink.instructions, useremail: this.useremail
                })
                .then(response =>{
                    console.log(response);
                })
                .catch(err => console.log(err));
            }
        }
    }
}
</script>