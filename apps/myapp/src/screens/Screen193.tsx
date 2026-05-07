import { Pressable, Text, View } from 'react-native';

import { copy193 } from '../generated/copy/copy193';
import { layout193 } from '../generated/layouts/layout193';
import { palette193 } from '../generated/palettes/palette193';

export function Screen193() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout193.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy193.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy193.detail} / {palette193.name}
			</Text>
		</View>
	);
}
