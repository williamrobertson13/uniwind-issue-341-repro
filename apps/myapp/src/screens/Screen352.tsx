import { Pressable, Text, View } from 'react-native';

import { copy352 } from '../generated/copy/copy352';
import { layout352 } from '../generated/layouts/layout352';
import { palette352 } from '../generated/palettes/palette352';

export function Screen352() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout352.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy352.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy352.detail} / {palette352.name}
			</Text>
		</View>
	);
}
