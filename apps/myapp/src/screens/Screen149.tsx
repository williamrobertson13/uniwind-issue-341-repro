import { Pressable, Text, View } from 'react-native';

import { copy149 } from '../generated/copy/copy149';
import { layout149 } from '../generated/layouts/layout149';
import { palette149 } from '../generated/palettes/palette149';

export function Screen149() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout149.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy149.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy149.detail} / {palette149.name}
			</Text>
		</View>
	);
}
