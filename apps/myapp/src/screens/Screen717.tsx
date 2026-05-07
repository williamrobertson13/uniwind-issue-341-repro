import { Pressable, Text, View } from 'react-native';

import { copy717 } from '../generated/copy/copy717';
import { layout717 } from '../generated/layouts/layout717';
import { palette717 } from '../generated/palettes/palette717';

export function Screen717() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout717.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy717.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy717.detail} / {palette717.name}
			</Text>
		</View>
	);
}
