import { Pressable, Text, View } from 'react-native';

import { copy433 } from '../generated/copy/copy433';
import { layout433 } from '../generated/layouts/layout433';
import { palette433 } from '../generated/palettes/palette433';

export function Screen433() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout433.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy433.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy433.detail} / {palette433.name}
			</Text>
		</View>
	);
}
