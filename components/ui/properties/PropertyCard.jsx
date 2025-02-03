import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PropertyCard = ({title, location, price, imageUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      {/* Property Image */}
      <Image source={{uri: imageUrl}} style={styles.image} />

      {/* Favorite Icon (Heart) */}
      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={() => setIsFavorite(!isFavorite)}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? "red" : "white"}
        />
      </TouchableOpacity>

      <Text style={styles.createdAt}>34 minutes ago</Text>
      </View>
      <View style={styles.propertyInfo}>
        {/* Name of the property */}
        <Text style={styles.propertyTitle}>{title}</Text>
        <Text style={styles.propertyExtraInfo}>{location}</Text>
        <Text style={styles.propertyExtraInfo}>{price}</Text>
      </View>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({

  container: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingBottom: 10,
    elevation: 4,
  },

  propertyInfo: {
    paddingHorizontal: 5
  },
  propertyTitle: {
    fontSize: 23,
    fontFamily: "nato-sans",
    fontWeight: "bold",
    marginTop: 10,
    color: "#0D141C",
    lineHeight: 23,
  },

  propertyExtraInfo: {
    fontSize: 16,
    fontFamily: "nato-sans",
    color: "#4F7096",
    lineHeight: 16,
    paddingVertical: 10,
  },
  imageContainer: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
    height: 201,
  },
  image: {
    width: "100%",
    height: "100%",
    view: "cover",
    borderRadius: 10,
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
  },

  createdAt: {
    position: "absolute",
    top: 10,
    left: 10,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 4,
    borderRadius: 50,
  },
});


