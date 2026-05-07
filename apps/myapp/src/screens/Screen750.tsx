import { Pressable, Text, View } from 'react-native';

import { copy750 } from '../generated/copy/copy750';
import { layout750 } from '../generated/layouts/layout750';
import { palette750 } from '../generated/palettes/palette750';

export function Screen750() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout750.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy750.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy750.detail} / {palette750.name}
			</Text>
		</View>
	);
}
