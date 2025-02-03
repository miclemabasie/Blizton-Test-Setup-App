import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UserProfile = () => {
  const user = {
    name: "Miclem Abasie",
    email: "miclem@example.com",
    phone: "+237 671 234 567",
    profileImage: "https://source.unsplash.com/200x200/?person",
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.profileImage }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* User Info */}
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={20} color="#555" />
          <Text style={styles.infoText}>{user.phone}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color="#555" />
          <Text style={styles.infoText}>Bamenda, Cameroon</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    paddingTop: 50,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#777",
  },
  infoSection: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    elevation: 3,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#444",
  },
  buttonContainer: {
    marginTop: 20,
    width: "90%",
  },
  button: {
    backgroundColor: "#227a8d",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#ff4757",
  },
  logoutText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default UserProfile;
