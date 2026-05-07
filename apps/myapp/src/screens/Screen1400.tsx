import { Pressable, Text, View } from 'react-native';

import { copy1400 } from '../generated/copy/copy1400';
import { layout1400 } from '../generated/layouts/layout1400';
import { palette1400 } from '../generated/palettes/palette1400';

export function Screen1400() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1400.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1400.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1400.detail} / {palette1400.name}
			</Text>
		</View>
	);
}
