import { Pressable, Text, View } from 'react-native';

import { copy365 } from '../generated/copy/copy365';
import { layout365 } from '../generated/layouts/layout365';
import { palette365 } from '../generated/palettes/palette365';

export function Screen365() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout365.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy365.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy365.detail} / {palette365.name}
			</Text>
		</View>
	);
}
