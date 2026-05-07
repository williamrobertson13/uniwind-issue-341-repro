import { Pressable, Text, View } from 'react-native';

import { copy77 } from '../generated/copy/copy77';
import { layout77 } from '../generated/layouts/layout77';
import { palette77 } from '../generated/palettes/palette77';

export function Screen77() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout77.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy77.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy77.detail} / {palette77.name}
			</Text>
		</View>
	);
}
