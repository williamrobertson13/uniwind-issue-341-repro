import { Pressable, Text, View } from 'react-native';

import { copy1136 } from '../generated/copy/copy1136';
import { layout1136 } from '../generated/layouts/layout1136';
import { palette1136 } from '../generated/palettes/palette1136';

export function Screen1136() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1136.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1136.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1136.detail} / {palette1136.name}
			</Text>
		</View>
	);
}
