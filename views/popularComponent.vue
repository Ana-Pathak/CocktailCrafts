<template>
<!--  -->
    <v-app>
    <v-container>
    <v-row
      class="mb-8"
    >
        <v-card
        color = "rgb(15,12,12)"
        id = "homecard"
        width = "100%"
        justify-center
        >
          <div>
            <v-row>
                <h1 style = "font-size:2.0em;">Popular</h1>
            </v-row>
            <v-row>
                <h1>&zwnj;</h1>
            </v-row>
            <v-row>
                <v-col>
                    <h3>Drink</h3>
                </v-col>
                <v-col>
                    <h3>Image</h3>
                </v-col>
                <v-col>
                    <h3>Rating</h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text>Whiskey Sour</v-text>
                </v-col>
                <v-col>
                    <v-img
                        :src="require('../assets/logo.png')"
                        height="40"
                        width="40"
                    />
                </v-col>
                <v-col>
                    <v-text>5/5</v-text>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text>Colorado Bulldog</v-text>
                </v-col>
                <v-col>
                    <v-img
                        :src="require('../assets/logo.png')"
                        height="40"
                        width="40"
                    />
                </v-col>
                <v-col>
                    <v-text>4.3/5</v-text>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text>California Mule</v-text>
                </v-col>
                <v-col>
                    <v-img
                        :src="require('../assets/logo.png')"
                        height="40"
                        width="40"
                    />
                </v-col>
                <v-col>
                    <v-text>4.1/5</v-text>
                </v-col>
            </v-row>
        </div>
        </v-card>
    </v-row>
    </v-container>
    </v-app>
</template>