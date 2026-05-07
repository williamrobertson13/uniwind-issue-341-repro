import { Pressable, Text, View } from 'react-native';

import { copy469 } from '../generated/copy/copy469';
import { layout469 } from '../generated/layouts/layout469';
import { palette469 } from '../generated/palettes/palette469';

export function Screen469() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout469.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy469.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy469.detail} / {palette469.name}
			</Text>
		</View>
	);
}
