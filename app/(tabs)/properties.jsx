import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import PropertyCard from '../../components/ui/properties/PropertyCard';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchProperties } from '../../store/redux/slice/propertiesSlice';

const PropertyListWithContext = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.properties);

    useEffect(() => {
        dispatch(fetchProperties());
    }, []);

    if (loading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  
    if (error) {
      return <Text>Error: {error}</Text>;
    }

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Properties</Text>
            <FlatList
                data={data.slice().reverse()} // Reverse the list here
                renderItem={({ item }) => (
                    <PropertyCard 
                        title={item.name} 
                        price={item.price} 
                        location={item.location} 
                        imageUrl={item.image}
                    />
                )}
                keyExtractor={(item) => item._id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      padding: 10, 
      marginTop: 40,
    },
    centered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: "center",
    },
});

export default PropertyListWithContext;
