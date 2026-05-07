import { Pressable, Text, View } from 'react-native';

import { copy334 } from '../generated/copy/copy334';
import { layout334 } from '../generated/layouts/layout334';
import { palette334 } from '../generated/palettes/palette334';

export function Screen334() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout334.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy334.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy334.detail} / {palette334.name}
			</Text>
		</View>
	);
}
