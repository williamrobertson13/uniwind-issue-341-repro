import '@repro/layered-css/layered-styles.css';
import '../styles.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
	return <Stack screenOptions={{ headerShown: false }} />;
}
