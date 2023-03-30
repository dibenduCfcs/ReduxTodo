import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  useGetPhotosQuery,
  useGetUserByIdQuery,
  useGetUsersQuery,
  useAddNewProductMutation,
} from '../features/Api/apiSlice';

let ApiTest = () => {
  // console.log('ADDNEWPRODUCT', useAddNewProductMutation());
  const {data: userData, isLoading} = useGetUsersQuery();
  const [data, setData] = useState(userData);
  // console.log('NEWPRODUCTDATA', addNewProduct(newProductDetail).unwrap());

  return (
    <SafeAreaView style={style.mainScreen}>
      {isLoading && (
        <ActivityIndicator
          style={style.activityIndicator}
          color={'green'}
          animating={true}
          size={'large'}
        />
      )}
      <TouchableOpacity
        onPress={() => {
          setData(
            userData.filter(val => {
              if (val.userId == 1) return true;
            }),
          );
        }}>
        <Text>FILTER</Text>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <View style={style.listView}>
              <Text style={style.listText}>{item.name}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginTop: 15,
  },
  activityIndicator: {
    marginTop: 360,
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
  },
  listView: {
    width: 350,
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
  listText: {
    paddingVertical: 10,
  },
});
export default ApiTest;
