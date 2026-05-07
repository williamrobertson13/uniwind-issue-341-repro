import { Pressable, Text, View } from 'react-native';

import { copy499 } from '../generated/copy/copy499';
import { layout499 } from '../generated/layouts/layout499';
import { palette499 } from '../generated/palettes/palette499';

export function Screen499() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout499.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy499.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy499.detail} / {palette499.name}
			</Text>
		</View>
	);
}
