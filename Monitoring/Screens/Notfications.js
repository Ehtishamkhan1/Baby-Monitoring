// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { firebase } from "../Config"



// export default function Notfications() {
//   const [notifications, setNotifications] = useState([]);

//   function getAllNotifications() {
//       firebase
//       .firestore()
//       .collection('notification')
//       .onSnapshot((snapshot) => {
//         setNotifications(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
//       })
//   }

//   useEffect(() => {
//     getAllNotifications();
//   }, [])

//   return (
//     <View>
//       {notifications?.length > 1 && notifications?.slice(1).map((notification) => (
//   <Text key={notification.id}>{notification.title} {notification.dateSent}</Text>
// ))}
//     </View>
//   )
// }

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { firebase } from "../Config";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  function getAllNotifications() {
    firebase
      .firestore()
      .collection('notification')
      .onSnapshot((snapshot) => {
        setNotifications(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
  }

  useEffect(() => {
    getAllNotifications();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationBody}>{item.body}</Text>
      <Text style={styles.notificationDate}>{item.dateSent}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  list: {
    paddingBottom: 20,
  },
  notificationContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationDate: {
    fontSize: 14,
    color: '#666',
  },
  notificationBody: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});
