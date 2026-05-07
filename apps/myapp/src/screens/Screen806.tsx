import { Pressable, Text, View } from 'react-native';

import { copy806 } from '../generated/copy/copy806';
import { layout806 } from '../generated/layouts/layout806';
import { palette806 } from '../generated/palettes/palette806';

export function Screen806() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout806.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy806.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy806.detail} / {palette806.name}
			</Text>
		</View>
	);
}
