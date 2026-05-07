import { Pressable, Text, View } from 'react-native';

import { copy157 } from '../generated/copy/copy157';
import { layout157 } from '../generated/layouts/layout157';
import { palette157 } from '../generated/palettes/palette157';

export function Screen157() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout157.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy157.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy157.detail} / {palette157.name}
			</Text>
		</View>
	);
}
