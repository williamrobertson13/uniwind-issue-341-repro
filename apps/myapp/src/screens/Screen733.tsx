import { Pressable, Text, View } from 'react-native';

import { copy733 } from '../generated/copy/copy733';
import { layout733 } from '../generated/layouts/layout733';
import { palette733 } from '../generated/palettes/palette733';

export function Screen733() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout733.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy733.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy733.detail} / {palette733.name}
			</Text>
		</View>
	);
}
