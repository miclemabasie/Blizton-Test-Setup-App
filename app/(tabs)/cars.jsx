import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import PropertyCard from "../../components/ui/properties/PropertyCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../store/redux/slice/carsSlice";


const CarScreen = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  if (loading) {
    return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ActivityIndicator size="large" color="#0000ff" />
      </View>
 
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  
  return (


    <View style={styles.container}>

      <Text style={styles.title}>Auto</Text>
        <FlatList

            data={data.slice().reverse()}
            renderItem={({ item }) => (
                <PropertyCard title={item.name} price={item.price} location={item.location} imageUrl={item.image}/>
            )}
            keyExtractor={(item) => item._id.toString()}
            showsVerticalScrollIndicator={false}
        />
    </View>
);
};

export default CarScreen;


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10, 
    marginTop: 40,
  },
  card: { 
    padding: 10, 
    backgroundColor: '#fff', 
    marginBottom: 10, 
    width: "100%",
    backgroundColor: '#227a8d',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: "center",
    height: "30%",
    borderRadius: 10,
  },
  image: { width: '100%', height: 150, borderRadius: 8 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center",
  },
});
