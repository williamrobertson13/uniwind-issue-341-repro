import { Pressable, Text, View } from 'react-native';

import { copy1008 } from '../generated/copy/copy1008';
import { layout1008 } from '../generated/layouts/layout1008';
import { palette1008 } from '../generated/palettes/palette1008';

export function Screen1008() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1008.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1008.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1008.detail} / {palette1008.name}
			</Text>
		</View>
	);
}
