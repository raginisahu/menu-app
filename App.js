/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const def = 'English-en'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    url : [{
      "title": "English-en",
      "id": "600baee61817ad676eafe9b2",
      "url":"acm.pdf"
    },
    {
      "title": "Hindi-Hi",
      "url":"acm.pdf",
      "id": "600baeef1817ad676eafe9b3",
    }]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    url : [{
      "title": "English-en",
      "id": "600baee61817ad676eafe9b2",
      "url":"acm.pdf"
    },
    {
      "title": "Hindi-Hi",
      "url":"acm.pdf",
      "id": "600baeef1817ad676eafe9b3",
    }]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    url : [{
      "title": "English-en",
      "id": "600baee61817ad676eafe9b2",
      "url":"acm.pdf"
    },
    {
      "title": "Hindi-Hi",
      "url":"acm.pdf",
      "id": "600baeef1817ad676eafe9b3",
    }]
  },
];

const lang = [{
  "title": "English-en",
  "status": "active",
  "id": "600baee61817ad676eafe9b2",
  "index": 0,
  "updatedAt": "2021-02-25T04:29:15.016Z"
},
{
  "title": "Hindi-Hi",
  "status": "active",
  "id": "600baeef1817ad676eafe9b3",
  "index": 5
}]

const filterLag=(aa) => {
  var filteredArray = aa.filter(function( obj ) {
    return obj.value === def;
  });
  return filteredArray.length>0 ? filteredArray[0].title : def
}


const Item = ({ title,url }) => (
  <View style={styles.item}>
    <View>
     <Text style={styles.title}>{title}</Text>
    </View>
    <TouchableOpacity  onPress={} style={{width:'30%',alignContent:'center','alignItems':'center',padding:10}}>
    <Text>{filterLag(url)} </Text>
    </TouchableOpacity>
  </View>
);  
const App: () => React$Node = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} url={item.url} />
  );
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
           <Text>Hello this is ragini</Text>
           <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


const modelView = () =>{

}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
