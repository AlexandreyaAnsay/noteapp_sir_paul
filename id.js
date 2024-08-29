import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'; // Code example by Dr.Fuentes; May 21, 2023
export default class App extends Component {
render() {
return (
<ScrollView>
<View style={styles.container}>
<Image
source={{ uri: 'https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/441923644_497818289234593_2679717120906635598_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE6XYA0cGUZ4W5LMgp3Bm0Pag6FN5R6Je1qDoU3lHol7WCfZpQujmlC9WJwE2GJMr3Y_uw5wUNlvLgJI6HOdqQi&_nc_ohc=fAkNi_i3KBkQ7kNvgHHk-Yk&_nc_ht=scontent.fmnl25-4.fna&oh=00_AYDYXEsIkxABuZZSxJRhKyfDjmowPp_DteKGhV42HD31zQ&oe=66D48C94' }}
style={{ width: 200, height: 200 }}
/>
<Text style={styles.text}>Alexandrea Mae B. Ansay</Text>
<Text style={styles.text}>BSIT</Text>
<Text style={styles.text}>Year Level-3</Text>
</View>
<View style={styles.container}>
<Image
source={{ uri: 'https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/441923644_497818289234593_2679717120906635598_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE6XYA0cGUZ4W5LMgp3Bm0Pag6FN5R6Je1qDoU3lHol7WCfZpQujmlC9WJwE2GJMr3Y_uw5wUNlvLgJI6HOdqQi&_nc_ohc=fAkNi_i3KBkQ7kNvgHHk-Yk&_nc_ht=scontent.fmnl25-4.fna&oh=00_AYDYXEsIkxABuZZSxJRhKyfDjmowPp_DteKGhV42HD31zQ&oe=66D48C94' }} //look for your own image
style={{ width: 200, height: 200 }}
/>
<Text style={styles.text}>Welcome to my app!</Text>
</View>
</ScrollView>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
marginVertical: 20,
},
text: {
fontSize: 24,
color:'blue',
fontWeight: 'bold',
textAlign: 'center',
marginVertical: 10,
},
});
