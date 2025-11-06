import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignInScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.heroPlaceholder} />
        <Text style={styles.brand}>UICConnect</Text>
        <Text style={styles.title}>Find Your Campus Connection</Text>
        <Text style={styles.lead} numberOfLines={4}>
          UIC Connect helps you meet peers who share your passions. Swipe, match, and chat your way to new friendships and collaborations right here on campus.
        </Text>

        <TouchableOpacity
          style={styles.googleBtn}
          onPress={() => navigation.replace('index')}
          accessibilityRole="button"
        >
          <Text style={styles.googleBtnText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 20, alignItems: 'center' },
  heroPlaceholder: { width: '100%', height: 220, borderRadius: 12, backgroundColor: '#e6e6e6', marginBottom: 18 },
  brand: { fontSize: 12, color: '#666', marginBottom: 6 },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  lead: { fontSize: 14, color: '#444', textAlign: 'center', marginBottom: 20 },
  googleBtn: { backgroundColor: '#b71c1c', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  googleBtnText: { color: '#fff', fontWeight: '600' },
});
