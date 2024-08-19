// import React from "react";
// import { View, StyleSheet, Button } from "react-native";
// import { Video, ResizeMode } from "expo-av";



// export default function Babylivestream() {
//   const video = React.useRef(null);
//   const [status, setStatus] = React.useState({});
//   return (
//     <View style={styles.container}>
    
//       <Video
//         ref={video}
//         style={styles.video}
//         source={{
//           uri: "https://isgpopen.ezvizlife.com/v3/openlive/BA2447764_1_2.m3u8?expire=1773000631&id=690049543472263168&c=e083c700b2&t=5235482a3db8b2649c6656b66d7371c2b19b9454256c9c3d8c39a1b619314936&ev=100",
//         }}
//         useNativeControls
//         resizeMode={ResizeMode.CONTAIN}
//         isLooping
//         onPlaybackStatusUpdate={(status) => setStatus(() => status)}
//       />
    
//       <View style={styles.buttons}>
//         <Button
//           title={status.isPlaying ? "Pause" : "Play"}
//           onPress={() =>
//             status.isPlaying
//               ? video.current.pauseAsync()
//               : video.current.playAsync()
//           }
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1",
//   },
//   video: {
//     alignSelf:'center',
//     width: '100%',
//     height: 250,
//   },
//   buttons: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
   
    
//   },
// });


import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function Babylivestream() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={[styles.video]}
        source={{
          uri: "https://isgpopen.ezvizlife.com/v3/openlive/BA2447764_1_2.m3u8?expire=1773000631&id=690049543472263168&c=e083c700b2&t=5235482a3db8b2649c6656b66d7371c2b19b9454256c9c3d8c39a1b619314936&ev=100",
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      
      <View style={styles.overlay}>
        <Text style={styles.title}>Live Stream</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <Text style={styles.buttonText}>{status.isPlaying ? "Pause" : "Play"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Light grayish-blue background
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoRotation: {
    transform: [{ rotate: '90deg' }],  // Rotate 90 degrees
  },
  video: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  overlay: {
    position: 'absolute',
    top: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#00796b',
    marginBottom: 10,
    textShadowColor: '#b2dfdb',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  button: {
    backgroundColor: '#ff6347', // Keep this color unchanged
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

